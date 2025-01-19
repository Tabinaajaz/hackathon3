// cards.tsx
import React from 'react';

type CardProps = {
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  discountPercentage: number;
  colors: string[]; //
};

const Card: React.FC<CardProps> = ({ image, title, subtitle, price, discountPercentage, colors }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <p className="text-lg font-bold">${discountPercentage.toFixed(2)}</p>
      <p className="text-sm text-gray-400 line-through">${price.toFixed(2)}</p>
      <div className="mt-2">
        {colors.length > 0 && colors.map((color, index) => (
          <span key={index} className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
        ))}
      </div>
    </div>
  );
};

export default Card;
