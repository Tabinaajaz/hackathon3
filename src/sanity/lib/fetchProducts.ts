import { client } from '@/sanity/lib/client';

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{ 
   _id,
  title, 
    price, 
    productImage,
    dicountPercentage,
    image { asset -> { url } }
  }`;

  const products = await client.fetch(query);
  return products;
};
