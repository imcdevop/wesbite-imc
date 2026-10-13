import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary strictly using environment variables (never hardcoded)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

/**
 * Generate an optimized Cloudinary delivery URL with automatic format and quality
 * @param publicId The public ID of the asset in Cloudinary
 * @param options Width, height, crop mode
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string | number;
  } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    // Fallback to local path if Cloudinary is not configured
    return publicId.startsWith('/') ? publicId : `/pictures/${publicId}.webp`;
  }

  const transformations: string[] = ['f_auto', 'q_auto'];

  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);

  const transformString = transformations.join(',');
  const cleanId = publicId.replace(/^\//, '');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${cleanId}`;
}
