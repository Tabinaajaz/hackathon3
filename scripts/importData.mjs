import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'j4buuc6u',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skd52IpeOqIxI6fHqrSsE0ak2KEpCU07M8KiUNyy5WlFHwpm9N512NgvkXbvZOC7O4Yb54WO5DTO8ohkDiqoQYFMTlHKniE5Wn6f7pD9UtF5x7AZxKTZHQWr8ieFG9uMWbugvTd4ROOQLSlcvpRDn78oZDWGowWEciLnSOvgF7z4jr7YsrrZ',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        // productImage: {
        //   _type: 'image',
        //   asset: {
        //     _ref: imageId,
        //   },
        // },
        // tags: product.tags,
        dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();