const OpenAI = require('openai');
require('dotenv').config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function callJSON(system, user, maxTokens = 2200) {
  const res = await client.chat.completions.create({
    model: 'gpt-4o',
    max_completion_tokens: maxTokens,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ]
  });

  const text = res?.choices?.[0]?.message?.content || '';
  const s = text.indexOf('{');
  const e = text.lastIndexOf('}');

  if (s === -1 || e === -1) {
    throw new Error('designDirector: invalid JSON response');
  }

  return JSON.parse(text.substring(s, e + 1));
}

async function buildDesignDirection({ contentMap, referenceMap, brandTheme, productName }) {
  return callJSON(
    `You are a senior landing page design director.
You think like a product designer, conversion designer, and art director together.
You do not write code.
You decide composition, section rhythm, contrast, emphasis, interaction style, and where each section should get visual priority.
Return ONLY valid JSON.`,

    `Create a design direction for this landing page.

PRODUCT NAME:
${productName || contentMap?.productName || ''}

CONTENT MAP:
${JSON.stringify(contentMap || {}, null, 2).substring(0, 7000)}

REFERENCE MAP:
${JSON.stringify(referenceMap || {}, null, 2).substring(0, 4000)}

BRAND THEME:
${JSON.stringify(brandTheme || {}, null, 2).substring(0, 2000)}

Rules:
- Think like a designer, not a coder.
- Avoid generic repeated sections.
- Choose where to create contrast and emphasis.
- If product visuals are strong, use split hero or layered hero.
- If feature count is high, prefer tabs / accordion / spotlight-plus-grid over flat card dumps.
- If testimonial count is high, prefer slider/carousel.
- If trust signals are many, prefer strip/marquee.
- Use a premium conversion-led structure.
- Make the page feel intentional, not auto-generated.

Return:
{
  "pageArchetype": "",
  "heroDecision": {
    "layout": "split-left-text-right-media | split-right-text-left-media | centered | background-overlay | css-visual-only",
    "reason": "",
    "visualPriority": "high | medium | low"
  },
  "sectionOrder": [],
  "sectionStyles": {
    "hero": "",
    "trust": "",
    "features": "",
    "pricing": "",
    "testimonials": "",
    "form": ""
  },
  "contrastPlan": [],
  "interactionPlan": {
    "features": "tabs | accordion | spotlight-grid | icon-grid | stacked-strips | split-panel-list",
    "testimonials": "grid | slider | spotlight",
    "trust": "static | marquee | horizontal-scroll"
  },
  "emphasisPlan": {
    "primarySection": "",
    "secondarySection": "",
    "ctaMoments": []
  },
  "visualRhythm": "",
  "designerNotes": []
}`
  );
}

module.exports = {
  buildDesignDirection
};