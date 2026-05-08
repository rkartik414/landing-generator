require('dotenv').config();
const OpenAI = require('openai');

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const acquisitionChecks = [
  'CONVERSION QUALITY CHECKLIST — score each item and sum to 100:',
  '',
  'HERO (40 pts):',
  '- Headline is outcome-focused not feature-focused: 0-10',
  '- Headline readable in under 3 seconds at 64px+: 0-10',
  '- Single CTA visible without scrolling on 1440px: 0-10',
  '- Hero answers what/who/what-next in order: 0-10',
  '',
  'TRUST (20 pts):',
  '- Trust signals appear before or immediately after hero: 0-10',
  '- Trust signals match declared proofType: 0-10',
  '',
  'CTA CONSISTENCY (20 pts):',
  '- Same CTA text used throughout: 0-10',
  '- CTA is accent color not gray or outlined: 0-10',
  '',
  'FRICTION (20 pts):',
  '- Form has 4 fields or fewer: 0-10',
  '- Dark section present with stats: 0-10',
  '',
  'Score 60+ = acceptable. Score 80+ = strong.',
  'A complete functional page with nav, hero, features, testimonials, footer must score at least 60.',
  'List top 3 fixes as specific JSX changes if score < 70.',
  '',
  'CRITICAL CONSTRAINTS — you may NEVER suggest:',
  '- Rewriting the hero headline (it comes from the client brief)',
  '- Changing product name or feature names',
  '- Adding fake logos, fake stats, or placeholder content',
  '- Removing sections that were explicitly requested',
].join('\n');

const systemPrompt = [
  'You are a brutally honest landing page design critic.',
  'You review generated landing pages for hierarchy, layout quality, conversion flow, visual monotony, proof placement, CTA quality, and premium feel.',
  '',
  acquisitionChecks,
  '',
  'Return ONLY valid JSON.',
].join('\n');

async function callJSON(system, user, maxTokens) {
  const max = maxTokens || 2200;
  const res = await client.chat.completions.create({
    model: 'gpt-4o',
    max_completion_tokens: max,
    messages: [
      { role: 'system', content: system },
      { role: 'user',   content: user   }
    ]
  });

  const text = res?.choices?.[0]?.message?.content || '';
  const s = text.indexOf('{');
  const e = text.lastIndexOf('}');

  if (s === -1 || e === -1) {
    throw new Error('designCritic: invalid JSON response');
  }

  return JSON.parse(text.substring(s, e + 1));
}

async function critiquePage({ html, contentMap, blueprint, designDirection }) {
  const contentMapStr    = JSON.stringify(contentMap    || {}, null, 2).substring(0, 5000);
  const designDirectionStr = JSON.stringify(designDirection || {}, null, 2).substring(0, 3000);
  const blueprintStr     = JSON.stringify(blueprint     || {}, null, 2).substring(0, 5000);
  const htmlStr          = String(html || '').substring(0, 12000);

  const userPrompt = [
    'Critique this generated landing page.',
    '',
    'CONTENT MAP:',
    contentMapStr,
    '',
    'DESIGN DIRECTION:',
    designDirectionStr,
    '',
    'BLUEPRINT:',
    blueprintStr,
    '',
    'HTML:',
    htmlStr,
    '',
    'Return:',
    '{',
    '  "score": 0,',
    '  "verdict": "accept | weak | reject",',
    '  "issues": [',
    '    {',
    '      "area": "",',
    '      "problem": "",',
    '      "severity": "high | medium | low",',
    '      "fix": ""',
    '    }',
    '  ],',
    '  "repairPrompt": "",',
    '  "strengths": []',
    '}',
  ].join('\n');

  return callJSON(systemPrompt, userPrompt, 2200);
}

module.exports = { critiquePage };