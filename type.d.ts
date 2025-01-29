export interface Product {
  title: string;
  name: string;
  content: { _type: string; [key: string]: any }[]; // Assuming `block` type with additional fields
  label: string;
  size?: string;
  category?: 'Dress' | 'Electronics' | 'Accessories' | 'Others';
  quantity: number;
  description: string;
    image: {
          asset: {
            _ref: string;
            _type: string;
          };
        };
       
    hotspot: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  
  price: number;
  discountPercentage;
  _id;
  poster;

totalprice: number;}