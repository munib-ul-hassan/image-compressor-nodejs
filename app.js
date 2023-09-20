const sharp = require('sharp');

const inputFilePath = './marek-piwnicki-8Hd1IVrDpEc-unsplash.jpg'; // Replace with the path to your input image
const outputFilePath = './image.jpg'; // Replace with the desired output path

sharp(inputFilePath)
  .jpeg({ quality: 80 }) // Adjust the quality as needed (0-100)
  .toFile(outputFilePath, (err, info) => {
    if (err) {
      console.error('Error compressing image:', err);
    } else {
      console.log('Image compressed successfully:', info);
    }
  });
