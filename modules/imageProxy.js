const axios = require('axios');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Helper function to create a file name from a URL
function getFileNameFromUrl(url) {
  const hash = crypto.createHash('md5').update(url).digest('hex');
  return `${hash}.jpg`; // or any extension based on the URL content
}

// Helper function to create the directory for saving images
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Main function to proxy image download
async function proxyImage(url, sessionId) {
  const outputDir = path.join(__dirname, '../output/generated-assets', sessionId);
  ensureDirExists(outputDir);

  const filename = getFileNameFromUrl(url);
  const outputFilePath = path.join(outputDir, filename);

  try {
    const response = await axios({
      method: 'get',
      url,
      responseType: 'stream',
      timeout: 10000, // Timeout after 10 seconds
    });

    const writer = fs.createWriteStream(outputFilePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(`/output/generated-assets/${sessionId}/${filename}`));
      writer.on('error', (err) => reject(err));
    });
  } catch (error) {
    console.error(`Error downloading image from ${url}:`, error.message);
    
    // Fallback to a default placeholder image if download fails
    return '/output/generated-assets/default-placeholder.jpg'; // Your fallback image
  }
}

module.exports = {
  proxyImage
};