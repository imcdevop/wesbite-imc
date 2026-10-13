import type { CollectionConfig } from 'payload';
import { cloudinary } from '../lib/cloudinary';

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Média',
    plural: 'Médias & Photos',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'category', 'cloudinaryUrl', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'public/media',
    mimeTypes: ['image/*'],
    adminThumbnail: ({ doc }) => (doc?.cloudinaryUrl as string) || (doc?.url as string),
  },
  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        // If a file is uploaded via multipart/form-data
        const file = req.file;
        if (file && file.data) {
          try {
            const uploadResult = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                {
                  folder: 'imc-alger/cms-media',
                  resource_type: 'image',
                  format: 'webp',
                },
                (error, result) => {
                  if (error || !result) return reject(error || new Error('Upload failed'));
                  resolve({
                    secure_url: result.secure_url,
                    public_id: result.public_id,
                  });
                }
              );
              uploadStream.end(file.data);
            });

            data.cloudinaryUrl = uploadResult.secure_url;
            data.cloudinaryPublicId = uploadResult.public_id;
          } catch (err) {
            console.error('Erreur upload Cloudinary:', err);
          }
        }
        return data;
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        if (doc?.cloudinaryPublicId) {
          try {
            await cloudinary.uploader.destroy(doc.cloudinaryPublicId as string);
          } catch (err) {
            console.error('Erreur suppression Cloudinary:', err);
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texte alternatif (SEO)',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Légende de la photo',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Catégorie de la photo',
      options: [
        { label: 'Campus & Façade', value: 'campus' },
        { label: 'Incubateur & Innovation', value: 'incubateur' },
        { label: 'Pôle Recherche & Colloques', value: 'recherche' },
        { label: 'Gouvernance & Conseils', value: 'gouvernance' },
        { label: 'Formation Continue & Executive', value: 'formation-continue' },
        { label: 'Partenaires & Cérémonies', value: 'partenaires' },
        { label: 'Actualités & Événements', value: 'actualites' },
      ],
      defaultValue: 'campus',
    },
    {
      name: 'cloudinaryUrl',
      type: 'text',
      label: 'URL Cloudinary CDN',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'cloudinaryPublicId',
      type: 'text',
      label: 'Public ID Cloudinary',
      admin: {
        readOnly: true,
      },
    },
  ],
};
