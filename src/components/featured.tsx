import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";

import Image from "next/image";
import Card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";

export default function FeaturedCards() {
  const cardData = [
    {
      id: 1,
      tag1: "Google",
      tag2: "Trending",
      tag3: "New",
      title: "Practice Advice",
      description:
        "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.",
      image: Card1,
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      tag1: "Google",
      tag2: "Trending",
      tag3: "New",
      title: "Loudest à la Madison #1",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: card2,
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      tag1: "Google",
      tag2: "Trending",
      tag3: "New",
      title: "Featured Posts",
      description:
        "Learn more about trending topics in the world of technology and innovation.",
      image: card3,
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Heading Section */}
      <div className="text-center py-16 px-4">
        <h6 className="text-sky-400 text-sm font-bold tracking-wide">
          Practice Advice
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          Featured Posts
        </h2>
        <p className="text-gray-400 mt-4 mx-auto max-w-lg text-sm leading-6">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Cards Grid Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="w-full h-48 relative">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <a
                  href="#"
                  className="text-blue-300 hover:underline text-xs tracking-wide"
                >
                  {card.tag1}
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-300 hover:underline text-xs tracking-wide"
                >
                  {card.tag2}
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-300 hover:underline text-xs tracking-wide"
                >
                  {card.tag3}
                </a>
              </div>

              {/* Title and Description */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>

              {/* Date and Comments */}
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <MdOutlineWatchLater className="mr-1 text-blue-500" />
                  {card.date}
                </span>
                <span className="flex items-center">
                  <FaRegImage className="mr-1 text-green-500" />
                  {card.comments}
                </span>
              </div>

              {/* Button */}
              <button className="flex items-center text-black font-medium hover:underline">
                Learn More
                <IoIosArrowForward className="ml-2 text-blue-500 text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
