const axios   = require('axios');
const mammoth = require('mammoth');
 
// ─────────────────────────────────────────────────────────────
// EXTRACT DOC ID — handles all Google Doc URL formats
// ─────────────────────────────────────────────────────────────
function extractDocId(url) {
  if (!url) return null;
  const m1 = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
  if (m1) return m1[1];
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2) return m2[1];
  return null;
}
 
// ─────────────────────────────────────────────────────────────
// PARSE RAW TEXT INTO SECTIONS
// ─────────────────────────────────────────────────────────────
function parseTextIntoSections(rawText) {
  const lines    = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const sections = [];
  let current    = null;
 
  for (const line of lines) {
    const isHeading =
      (/^[A-Z][A-Z\s\-\/]{2,}:?$/.test(line)    && line.length < 40) ||
      (/^[A-Z][a-zA-Z\s]{2,30}:$/.test(line)     && line.length < 40) ||
      (/^[A-Z][a-zA-Z\s\-]{2,30}:$/.test(line)   && line.length < 40) ||
      (/^\[.+\]$/.test(line)                      && line.length < 60) ||
      (/^#{1,3}\s.+/.test(line));
 
    if (isHeading) {
      if (current) sections.push(current);
      current = {
        name:    line.replace(/^#+\s/, '').replace(/^\[|\]$/g, '').replace(/:$/, '').trim().toUpperCase(),
        content: []
      };
    } else if (current) {
      current.content.push(line);
    } else {
      current = { name: 'INTRO', content: [line] };
    }
  }
 
  if (current) sections.push(current);
 
  // If nothing parsed into sections, treat whole text as one block
  if (sections.length === 0) {
    sections.push({ name: 'CONTENT', content: lines });
  }
 
  return {
    sectionCount: sections.length,
    sectionNames: sections.map(s => s.name),
    sections:     sections.map(s => ({ name: s.name, content: s.content.join('\n') })),
    rawText
  };
}
 
// ─────────────────────────────────────────────────────────────
// PARSE GOOGLE DOC
// ─────────────────────────────────────────────────────────────
async function parseGoogleDoc(docURL) {
  // Step 1 — extract ID
  const docId = extractDocId(docURL);
  if (!docId) {
    throw new Error(
      'Could not find a document ID in this URL.\n' +
      'Expected format: https://docs.google.com/document/d/YOUR_ID/edit'
    );
  }
 
  const exportURL = `https://docs.google.com/document/d/${docId}/export?format=txt`;
  console.log('[docParser] Doc ID:', docId);
  console.log('[docParser] Export URL:', exportURL);
 
  // Step 2 — fetch
  let res;
  try {
    res = await axios.get(exportURL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      },
      timeout: 15000,
      responseType: 'text',
      maxRedirects: 10,
      // Tell axios NOT to throw on non-2xx — we'll handle it ourselves
      validateStatus: () => true
    });
  } catch (networkErr) {
    throw new Error(`Network error: ${networkErr.message}. Check your internet connection.`);
  }
 
  console.log('[docParser] HTTP status:', res.status);
  console.log('[docParser] Content-Type:', res.headers['content-type']);
 
  // Step 3 — detect login redirect (Google returns 200 + HTML when doc is private)
  const contentType = (res.headers['content-type'] || '').toLowerCase();
  const body        = res.data || '';
 
  const isHTMLResponse =
    contentType.includes('text/html') ||
    (typeof body === 'string' && (
      body.trimStart().startsWith('<!DOCTYPE') ||
      body.trimStart().startsWith('<html')     ||
      body.includes('accounts.google.com')     ||
      body.includes('ServiceLogin')
    ));
 
  if (isHTMLResponse) {
    throw new Error(
      'Google returned a login page instead of the document.\n\n' +
      'To fix this:\n' +
      '1. Open your Google Doc\n' +
      '2. Click "Share" (top right)\n' +
      '3. Under "General access" → change to "Anyone with the link"\n' +
      '4. Make sure the role is set to "Viewer"\n' +
      '5. Copy the link again and paste it here'
    );
  }
 
  // Step 4 — explicit HTTP errors
  if (res.status === 403) {
    throw new Error('Access denied (403) — set the doc to "Anyone with the link can view".');
  }
  if (res.status === 404) {
    throw new Error('Document not found (404) — check the URL is correct and the doc still exists.');
  }
  if (res.status !== 200) {
    throw new Error(`Unexpected response from Google: HTTP ${res.status}`);
  }
 
  // Step 5 — empty doc check
  if (!body || body.trim().length < 10) {
    throw new Error('The document appears to be empty. Add some content and try again.');
  }
 
  console.log('[docParser] Fetched', body.length, 'characters');
 
  return parseTextIntoSections(body);
}
 
// ─────────────────────────────────────────────────────────────
// PARSE WORD DOC (.docx)
// ─────────────────────────────────────────────────────────────
async function parseWordDoc(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  if (!result.value || result.value.trim().length < 10) {
    throw new Error('Word document is empty or could not be read.');
  }
  console.log('[docParser] Word doc:', result.value.length, 'characters');
  return parseTextIntoSections(result.value);
}
 
module.exports = { parseGoogleDoc, parseWordDoc, extractDocId };
 








