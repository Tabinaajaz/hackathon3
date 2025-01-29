import {client} from"@/sanity/lib/client";


export async function getServerSideProps() {
    const query = `*[_type == "product"]{ _id, title, description,slug.current}`;
    const products = await client.fetch(query);
  
    return {
      props: {
        products,
      },
    };
  }
  