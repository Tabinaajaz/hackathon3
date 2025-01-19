// components/CategoryCards.jsx
import Image from 'next/image';
import card1 from "@/public/card-cover-5.jpg"
import card2 from "@/public/image2.jpg"
import card3 from "@/public/card-cover-7.jpg"
import card4 from "@/public/card-cover-4.jpg"
import card5 from "@/public/card-cover-6.jpg"


const categories = [
  { id: 1, title: 'CLOTHS', items: '5 Items', Image: card1 },
  { id: 2, title: 'CLOTHS', items: '5 Items', Image: card2 },
  { id: 3, title: 'CLOTHS', items: '5 Items', Image: card3 },
  { id: 5, title: 'CLOTHS', items: '5 Items', Image:card4 },
  { id: 4, title: 'CLOTHS', items: '5 Items', Image: card5 },
];

const Cards = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src= {category.Image}
              alt={category.title}
              width={300}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-xl font-bold">{category.title}</h2>
              <p>{category.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
