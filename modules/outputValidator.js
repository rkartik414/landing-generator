'use strict';

const babel = require('@babel/core');

function stripCodeFences(code = '') {
  return String(code)
    .replace(/```jsx|```javascript|```js|```/g, '')
    .trim();
}

function normalizeReactCode(code = '') {
  let cleaned = stripCodeFences(code);

  cleaned = cleaned
    .replace(/<!DOCTYPE html>/gi, '')
    .replace(/<html[^>]*>/gi, '')
    .replace(/<\/html>/gi, '')
    .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
    .replace(/<body[^>]*>/gi, '')
    .replace(/<\/body>/gi, '');

  cleaned = cleaned.replace(/export\s+default\s+\w+\s*;?\s*$/gm, '');

  if (!/function\s+LandingPage|const\s+LandingPage/.test(cleaned)) {
    throw new Error('Missing LandingPage component.');
  }

  cleaned = cleaned.trimEnd() + '\n\nexport default LandingPage;\n';

  return cleaned;
}

function compileReactOrThrow(code, filename = 'LandingPage.jsx') {
  try {
    babel.transformSync(code, {
      presets: ['@babel/preset-react'],
      filename
    });
    return true;
  } catch (e) {
    throw new Error('JSX compile failed: ' + e.message);
  }
}

function assertRequiredStructure(code) {
  const missing = [];

  if (!/function\s+LandingPage|const\s+LandingPage/.test(code)) {
    missing.push('LandingPage component');
  }

  if (!/export\s+default\s+LandingPage/.test(code)) {
    missing.push('export default LandingPage');
  }

  if (!/return\s*\(/.test(code)) {
    missing.push('return statement');
  }

  if (!/Techjockey|techjockey\.com|support@techjockey\.com/i.test(code)) {
    missing.push('Techjockey branding');
  }

  if (missing.length) {
    throw new Error('Missing required structure: ' + missing.join(', '));
  }
}

function validateFinalJsx(rawCode, filename = 'LandingPage.jsx') {
  const cleaned = normalizeReactCode(rawCode);
  assertRequiredStructure(cleaned);
  compileReactOrThrow(cleaned, filename);
  return cleaned;
}

module.exports = {
  validateFinalJsx,
  normalizeReactCode,
  compileReactOrThrow
};