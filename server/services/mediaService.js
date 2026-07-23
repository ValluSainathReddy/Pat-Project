const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const optimizeImage = async (filePath) => {
  const outputPath = path.join(path.dirname(filePath), `optimized-${path.basename(filePath)}`);

  await sharp(filePath)
    .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true })
    .toFile(outputPath);

  return outputPath;
};

const removeFile = (filePath) => {
  if (!filePath) return;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

module.exports = {
  optimizeImage,
  removeFile,
};
