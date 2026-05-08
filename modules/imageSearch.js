const axios = require('axios');

// ── Search Unsplash for relevant images ───────────────────────────────────────
async function searchUnsplash(query, count = 6) {
  if (!process.env.UNSPLASH_ACCESS_KEY) return [];
  try {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        per_page: count,
        orientation: 'landscape'
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      },
      timeout: 8000
    });

    return (res.data.results || []).map(img => ({
      url:         img.urls.regular,
      thumb:       img.urls.thumb,
      alt:         img.alt_description || query,
      source:      'unsplash',
      role:        'hero-or-photo',
      brandScore:  60,
      width:       img.width,
      height:      img.height
    }));
  } catch(e) {
    console.warn('[imageSearch] Unsplash failed:', e.message);
    return [];
  }
}

// ── Search Pexels for relevant images ─────────────────────────────────────────
async function searchPexels(query, count = 6) {
  if (!process.env.PEXELS_API_KEY) return [];
  try {
    const res = await axios.get('https://api.pexels.com/v1/search', {
      params: { query, per_page: count, orientation: 'landscape' },
      headers: { Authorization: process.env.PEXELS_API_KEY },
      timeout: 8000
    });

    return (res.data.photos || []).map(img => ({
      url:        img.src.large,
      thumb:      img.src.medium,
      alt:        img.alt || query,
      source:     'pexels',
      role:       'hero-or-photo',
      brandScore: 55
    }));
  } catch(e) {
    console.warn('[imageSearch] Pexels failed:', e.message);
    return [];
  }
}

// ── Category → search queries mapping ────────────────────────────────────────
function getCategoryQueries(productCategory, productName) {
  const cat = (productCategory || '').toLowerCase();

  const queryMap = {
    'ai':              ['artificial intelligence visualization', 'neural network abstract', 'machine learning data'],
    'generative ai':   ['AI generated art cosmic', 'futuristic digital creation', 'creative AI workflow'],
    'video generation':['video production studio', 'cinematic film frames', 'motion graphics abstract'],
    'image generation':['digital art creation', 'AI artwork gallery', 'creative visual generation'],
    'cybersecurity':   ['network security dark', 'cybersecurity shield', 'digital firewall protection'],
    'firewall':        ['network protection abstract', 'digital security grid', 'cyber defense visualization'],
    'healthcare':      ['medical technology clean', 'healthcare digital innovation', 'medical data analytics'],
    'fintech':         ['financial technology abstract', 'digital banking modern', 'fintech dashboard'],
    'hr':              ['team collaboration modern', 'workplace productivity', 'people management tech'],
    'ecommerce':       ['online shopping modern', 'ecommerce platform', 'digital retail experience'],
    'devops':          ['code terminal dark', 'developer tools interface', 'cloud infrastructure'],
    'education':       ['online learning modern', 'digital education platform', 'e-learning interface'],
    'gaming':          ['gaming setup cinematic', 'esports dark neon', 'game interface futuristic'],
  };

  // Find matching category
  const matchedKey = Object.keys(queryMap).find(key => 
    cat.includes(key) || (productName || '').toLowerCase().includes(key)
  );

  return queryMap[matchedKey] || [
    `${productName} software interface`,
    `${productCategory} technology abstract`,
    'modern SaaS dashboard'
  ];
}

// ── Main search function ──────────────────────────────────────────────────────
async function searchRelevantImages(productCategory, productName, count = 12) {
  const queries = getCategoryQueries(productCategory, productName);

  console.log('[imageSearch] Searching for:', queries.slice(0, 2));

  // Search multiple queries in parallel
  const results = await Promise.all(
    queries.slice(0, 3).map(async (query) => {
      const [unsplash, pexels] = await Promise.all([
        searchUnsplash(query, 3),
        searchPexels(query, 3)
      ]);
      return [...unsplash, ...pexels];
    })
  );

  const allImages = results.flat();
  console.log('[imageSearch] Found:', allImages.length, 'relevant images');

  return allImages.slice(0, count);
}

module.exports = { searchRelevantImages, getCategoryQueries };