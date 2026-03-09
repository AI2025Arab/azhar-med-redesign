const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'redesign');
const imagesToFix = ['6_before_v2.jpg', '7_before_v2.jpg', '8_before_v2.jpg'];

async function processImages() {
    for (const file of imagesToFix) {
        const inputPath = path.join(dir, file);
        if (!fs.existsSync(inputPath)) {
            console.log(`File not found: ${inputPath}`);
            continue;
        }
        const outputPath = path.join(dir, file.replace('.jpg', '_fixed.jpg'));
        try {
            await sharp(inputPath)
                .jpeg({ quality: 85, chromasubsampling: '4:4:4' }) // Re-encode to standard JPEG
                .toFile(outputPath);
            console.log(`Processed ${file} -> saved as _fixed`);

            // Replace original with fixed
            fs.unlinkSync(inputPath);
            fs.renameSync(outputPath, inputPath);
            console.log(`Replaced original ${file} with fixed version.`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

processImages();
