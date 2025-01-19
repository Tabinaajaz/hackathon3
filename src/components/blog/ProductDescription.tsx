import Image from "next/image";
import items from "@/public/images/card-item.png";

export default function Description() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Tabs Section */}
      <div className="border-b border-gray-200 mb-6">
        <ul className="flex flex-wrap gap-4 justify-center text-sm sm:text-base">
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer pb-2 border-b-2 border-transparent hover:border-gray-400">
            Description
          </li>
          <li className="text-gray-900 pb-2 border-b-2 border-black cursor-pointer">
            Additional Information
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer pb-2 border-b-2 border-transparent hover:border-gray-400">
            Reviews (0)
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Left: Image */}
        <div>
          <Image
            src={items}
            alt="Product Description"
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div>
          {/* Section Title */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          {/* Text Content */}
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Additional Links Section */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-4">
            the quick fox jumps over
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
          </ul>

          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-4">
            the quick fox jumps over
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-start gap-2">
              <span>➤</span>
              the quick fox jumps over the lazy dog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
