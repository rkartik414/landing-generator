// modules/brandEngine.js
const axios   = require('axios');
const cheerio = require('cheerio');
const path    = require('path');
const fs      = require('fs');
const OpenAI  = require('openai');
 
const DEFAULT_THEME = {
  themeName: 'Default Theme',
  primaryColor: '#111111',
  accentColor: '#ff6b00',
  backgroundColor: '#ffffff',
  secondaryBackground: '#f5f5f5',
  textPrimary: '#111111',
  textSecondary: '#666666',
  headingFont: 'Inter',
  bodyFont: 'Inter',
  borderRadius: '8px',
  heroStyle: 'dark-fullbleed',
  animationStyle: 'minimal',
  ctaStyle: 'solid',
  reasoning: 'Default theme used as fallback'
};

// Replace this with dynamic logic
async function generateDynamicTheme(productCategory, brandColors) {
  let theme = {};
  try {
    // AI-based design suggestion based on product category and brand colors
    const response = await openAI.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a senior UX designer and product branding expert."
        },
        {
          role: "user",
          content: `Suggest a color scheme and layout for a landing page in the ${productCategory} category using the following brand colors: ${brandColors}`
        }
      ]
    });
    theme = response?.choices?.[0]?.message?.content || defaultTheme;
  } catch (error) {
    console.error('Error generating dynamic theme:', error);
    theme = defaultTheme; // Fallback
  }

  return theme;
}
 
// ─── 1. Extract colors from logo ──────────────────────────────────────────────
async function extractLogoColors(logoInput) {
  if (!logoInput) return null;
  if (logoInput.startsWith('data:')) return null;
 
  try {
    var Vibrant   = require('node-vibrant/node').Vibrant;
    var imagePath = logoInput;
 
    if (logoInput.startsWith('http')) {
      var res = await axios.get(logoInput, {
        responseType: 'arraybuffer',
        timeout: 10000,
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      imagePath = path.join(__dirname, '../uploads', 'logo-temp-' + Date.now() + '.png');
      fs.writeFileSync(imagePath, res.data);
    }
 
    var palette = await Vibrant.from(imagePath).getPalette();
    var colors = {
      vibrant:      palette.Vibrant      ? palette.Vibrant.hex      : null,
      darkVibrant:  palette.DarkVibrant  ? palette.DarkVibrant.hex  : null,
      muted:        palette.Muted        ? palette.Muted.hex        : null,
      darkMuted:    palette.DarkMuted    ? palette.DarkMuted.hex    : null,
      lightVibrant: palette.LightVibrant ? palette.LightVibrant.hex : null,
      lightMuted:   palette.LightMuted   ? palette.LightMuted.hex   : null
    };
 
    if (logoInput.startsWith('http') && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
 
    console.log('[brandEngine] Logo colors:', colors);
    return colors;
 
  } catch(e) {
    console.warn('[brandEngine] Logo color extraction failed:', e.message);
    return null;
  }
}
 
// ─── 2. Scrape brand page ─────────────────────────────────────────────────────
async function scrapeBrandPage(brandURL) {
  if (!brandURL) return null;
 
  try {
    var res = await axios.get(brandURL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36' },
      timeout: 12000
    });
 
    var $ = cheerio.load(res.data);
 
    var signals = {
      url:          brandURL,
      logoURL:      null,
      logoColors:   null,
      fonts:        [],
      colors:       [],
      cssVariables: {},
      metaTheme:    null,
      ogImage:      null,
      buttonStyles: [],
      headingText:  [],
    assets: {
  logos: [],
  screenshots: [],
  photos: [],
  illustrations: [],
  icons: [],
  backgrounds: [],
  videos: []
},};
    
 
    // Find logo
    var logoURL =
      $('link[rel="apple-touch-icon"][href]').attr('href') ||
      $('link[rel="icon"][type="image/png"][href]').attr('href') ||
      $('link[rel="shortcut icon"][href]').attr('href') ||
      $('img[class*="logo" i][src]').first().attr('src') ||
      $('img[alt*="logo" i][src]').first().attr('src') ||
      $('header img[src]').first().attr('src') ||
      $('nav img[src]').first().attr('src') ||
      null;
 
    if (logoURL && !logoURL.startsWith('http')) {
      try { logoURL = new URL(logoURL, brandURL).href; } catch(e) { logoURL = null; }
    }
    if (logoURL && logoURL.startsWith('data:')) { logoURL = null; }
 
    signals.logoURL = logoURL;
    console.log('[brandEngine] Logo found:', logoURL || 'none');
 
    if (logoURL) {
      signals.logoColors = await extractLogoColors(logoURL);
    }
 
    signals.metaTheme = $('meta[name="theme-color"]').attr('content') || null;
    signals.ogImage   = $('meta[property="og:image"]').attr('content') || null;
 
    // Google Fonts
    $('link[href*="fonts.googleapis.com"]').each(function(i, el) {
      var href = $(el).attr('href') || '';
      var matches = href.match(/family=([^&:]+)/g);
      if (matches) {
        matches.forEach(function(m) {
          signals.fonts.push(decodeURIComponent(m.replace('family=', '').replace(/\+/g, ' ').split(':')[0]));
        });
      }
    });
 
    // CSS colors
    $('style').each(function(i, el) {
      var css = $(el).html() || '';
      var hexMatches = css.match(/#[0-9a-fA-F]{3,6}/g) || [];
      signals.colors.push.apply(signals.colors, hexMatches);
    });
 
    // Headings
    $('h1, h2').slice(0, 5).each(function(i, el) {
      var text = $(el).text().trim();
      if (text && text.length > 3 && text.length < 120) signals.headingText.push(text);
    });
    // Collect image assets
$('img[src]').each(function(i, el) {
  var src = $(el).attr('src');
  var alt = ($(el).attr('alt') || '').toLowerCase();
  var cls = ($(el).attr('class') || '').toLowerCase();

  if (!src) return;

  try {
    if (!src.startsWith('http')) src = new URL(src, brandURL).href;
  } catch(e) {
    return;
  }

  var asset = { url: src, alt: alt, className: cls, source: 'brand' };

  if (alt.includes('logo') || cls.includes('logo')) {
    signals.assets.logos.push(asset);
  } else if (
    alt.includes('dashboard') ||
    alt.includes('screen') ||
    alt.includes('app') ||
    cls.includes('screenshot') ||
    cls.includes('dashboard') ||
    cls.includes('product')
  ) {
    signals.assets.screenshots.push(asset);
  } else if (
    alt.includes('icon') ||
    cls.includes('icon')
  ) {
    signals.assets.icons.push(asset);
  } else {
    signals.assets.photos.push(asset);
  }
});

// Collect video assets
$('video source[src], video[src], iframe[src]').each(function(i, el) {
  var src = $(el).attr('src');
  if (!src) return;

  try {
    if (!src.startsWith('http')) src = new URL(src, brandURL).href;
  } catch(e) {
    return;
  }

  signals.assets.videos.push({ url: src, source: 'brand' });
});
 
    signals.colors = signals.colors.filter(function(v, i, a) { return a.indexOf(v) === i; }).slice(0, 15);
    signals.fonts  = signals.fonts.filter(function(v, i, a)  { return a.indexOf(v) === i; }).slice(0, 4);
 
    // Try og:image if no colors found
    if (signals.colors.length === 0 && signals.ogImage) {
      try {
        var ogColors = await extractLogoColors(signals.ogImage);
        if (ogColors) signals.logoColors = ogColors;
      } catch(e) {}
    }
 
    // Check manual brand override
    var overridePath = path.join(__dirname, '../training-data/brand-overrides.json');
    if (fs.existsSync(overridePath)) {
      try {
        var overrides = JSON.parse(fs.readFileSync(overridePath, 'utf8'));
        var domain    = new URL(brandURL).hostname.replace('www.', '');
        if (overrides[domain]) {
          console.log('[brandEngine] Using brand override for:', domain);
          Object.assign(signals, overrides[domain]);
        }
      } catch(e) {}
    }
 
    console.log('[brandEngine] Brand page scraped:', {
      logoFound: !!signals.logoURL,
      colors:    signals.colors.length,
      fonts:     signals.fonts,
      metaTheme: signals.metaTheme
    });
 
    return signals;
 
  } catch(e) {
    console.warn('[brandEngine] Brand page scrape failed:', e.message);
    return null;
  }
}
 
// ─── 3. Generate theme ────────────────────────────────────────────────────────
async function generateBrandTheme(brandData, pageType, contentSummary) {
  try {
    var apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error('OPENAI_API_KEY is not set in .env');
var client = new OpenAI({ apiKey: apiKey });
 
    var isMultiple = Array.isArray(brandData);
    var prompt     = isMultiple
      ? buildMultiProductPrompt(brandData, pageType, contentSummary)
      : buildSingleProductPrompt(brandData, pageType, contentSummary);
 
    var res = await client.chat.completions.create({
      model:      'gpt-4o',
      max_completion_tokens: 800,
      messages: [
        { role: 'system', content: 'Return ONLY a valid JSON object. No explanation. No markdown fences.' },
        { role: 'user',   content: prompt }
      ]
    });
 
    var text  = res.choices[0].message.content || '';
    var start = text.indexOf('{');
    var end   = text.lastIndexOf('}');
 
    if (start === -1 || end === -1) throw new Error('No JSON in theme response');
 
    var theme = JSON.parse(text.substring(start, end + 1));
    console.log('[brandEngine] Theme generated:', theme.themeName, '|', theme.primaryColor);
    return theme;
 
  } catch(e) {
    console.log('[brandEngine] Theme generation failed, using default:', e.message);
    return DEFAULT_THEME;
  }
}
 
function buildSingleProductPrompt(brandData, pageType, contentSummary) {
  var bp = brandData.brandPage || {};
  return [
    'BRAND SIGNALS:',
    'Logo colors: ' + JSON.stringify(brandData.logoColors),
    'Meta theme color: ' + (bp.metaTheme || 'not found'),
    'Google Fonts: ' + JSON.stringify(bp.fonts),
    'CSS Colors: ' + JSON.stringify((bp.colors || []).slice(0, 10)),
    'Headings: ' + JSON.stringify(bp.headingText),
    'Page type: ' + pageType,
    'Content: ' + contentSummary,
    '',
    'Generate a theme matching this brand. Return JSON:',
    '{"themeName":"name","primaryColor":"#hex","accentColor":"#hex","backgroundColor":"#hex","secondaryBackground":"#hex","textPrimary":"#hex","textSecondary":"#hex","headingFont":"Google Font","bodyFont":"Google Font","borderRadius":"8px","heroStyle":"dark-fullbleed","animationStyle":"minimal","ctaStyle":"solid","reasoning":"why"}'
  ].join('\n');
}
 
function buildMultiProductPrompt(brandDataArray, pageType, contentSummary) {
  var lines = brandDataArray.map(function(b, i) {
    var bp = b.brandPage || {};
    return 'Product ' + (i+1) + ': ' + b.name + ' | metaTheme: ' + (bp.metaTheme || 'none') + ' | fonts: ' + JSON.stringify(bp.fonts);
  }).join('\n');
 
  return [
    'Multiple products (' + pageType + '):',
    lines,
    'Content: ' + contentSummary,
    '',
    'Generate a unified theme. Return JSON:',
    '{"themeName":"name","primaryColor":"#hex","accentColor":"#hex","backgroundColor":"#hex","secondaryBackground":"#hex","textPrimary":"#hex","textSecondary":"#hex","headingFont":"Google Font","bodyFont":"Google Font","borderRadius":"8px","heroStyle":"dark-fullbleed","animationStyle":"minimal","ctaStyle":"solid","reasoning":"why"}'
  ].join('\n');
}
 
// ─── 4. Main pipeline ─────────────────────────────────────────────────────────
async function analyzeBrand(opts) {
  var products       = opts.products       || [];
  var pageType       = opts.pageType       || 'single';
  var contentSummary = opts.contentSummary || '';
 
  console.log('[brandEngine] Starting brand analysis...');
  console.log('[brandEngine] Products:', products.map(function(p) { return p.name; }));
 
  var brandData;
 
  if (products.length === 1) {
    var p         = products[0];
    var brandPage = p.brandURL ? await scrapeBrandPage(p.brandURL) : null;
    brandData = {
      name:       p.name,
      logoURL:    brandPage ? brandPage.logoURL    : null,
      logoColors: brandPage ? brandPage.logoColors : null,
      brandPage:  brandPage
    };
  } else {
    brandData = await Promise.all(products.map(async function(p) {
      var brandPage = p.brandURL ? await scrapeBrandPage(p.brandURL) : null;
      return {
        name:       p.name,
        logoURL:    brandPage ? brandPage.logoURL    : null,
        logoColors: brandPage ? brandPage.logoColors : null,
        brandPage:  brandPage
      };
    }));
  }
 
  var theme = await generateBrandTheme(brandData, pageType, contentSummary);
  return { brandData: null, theme: theme };
}
 
module.exports = { analyzeBrand, scrapeBrandPage, extractLogoColors };
 


























































































