import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

// Ensure credentials are read exclusively from process.env (never hardcoded)
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("Missing Cloudinary environment variables. Make sure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set.");
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

const picturesDir = path.resolve('public/pictures');
const manifestPath = path.join(picturesDir, 'manifest.json');
const cloudinaryManifestPath = path.join(picturesDir, 'cloudinary-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.error("Manifest not found at", manifestPath);
  process.exit(1);
}

const localManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const existingCloudinaryData = fs.existsSync(cloudinaryManifestPath)
  ? JSON.parse(fs.readFileSync(cloudinaryManifestPath, 'utf-8'))
  : [];
const existingMap = new Map(existingCloudinaryData.map(item => [item.id, item]));

async function uploadAll() {
  console.log(`Checking ${localManifest.length} optimized WebP pictures for Cloudinary upload...\n`);

  const results = [];
  let uploadedCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < localManifest.length; i++) {
    const item = localManifest[i];
    const filePath = path.join(picturesDir, item.optimizedFile);

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}, skipping.`);
      continue;
    }

    const existing = existingMap.get(item.id);
    if (existing && existing.cloudinaryUrl && !existing.uploadError) {
      // Already uploaded and valid, merge latest metadata from local manifest
      results.push({
        ...item,
        cloudinaryPublicId: existing.cloudinaryPublicId,
        cloudinaryUrl: existing.cloudinaryUrl,
        cloudinaryFormat: existing.cloudinaryFormat,
        cloudinaryBytes: existing.cloudinaryBytes
      });
      skippedCount++;
      continue;
    }

    try {
      console.log(`[${i + 1}/${localManifest.length}] Uploading ${item.optimizedFile} (${item.optimizedSize})...`);
      
      const uploadResult = await cloudinary.uploader.upload(filePath, {
        folder: 'imc-alger/campus-pictures',
        public_id: item.id,
        overwrite: true,
        resource_type: 'image',
        tags: ['imc-alger', item.category, ...(item.tags || [])],
        context: {
          title: item.title,
          category: item.category,
          recommendedPage: item.recommendedPage
        }
      });

      console.log(`  -> OK: ${uploadResult.secure_url}`);
      uploadedCount++;

      results.push({
        ...item,
        cloudinaryPublicId: uploadResult.public_id,
        cloudinaryUrl: uploadResult.secure_url,
        cloudinaryFormat: uploadResult.format,
        cloudinaryBytes: uploadResult.bytes
      });
    } catch (err) {
      console.error(`  -> ERROR uploading ${item.optimizedFile}:`, err.message);
      results.push({
        ...item,
        uploadError: err.message
      });
    }
  }

  console.log(`\nUploaded: ${uploadedCount} new images, Preserved: ${skippedCount} existing images.`);

  fs.writeFileSync(cloudinaryManifestPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log('\n========================================');
  console.log(`All uploads completed!`);
  console.log(`Saved Cloudinary manifest to: ${cloudinaryManifestPath}`);
  console.log('========================================\n');
}

uploadAll().catch(err => {
  console.error("Fatal upload error:", err);
  process.exit(1);
});
