import { HiChevronRight } from "react-icons/hi";

export default function Shopping() {
  return (
    <div className="w-full h-auto bg-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[870px] mx-auto py-12">
        {/* Left Column - Pricing Heading */}
        <div className="w-full text-center px-4 md:px-12 md:mx-32">
          {/* Pricing heading */}
          <h5 className="text-xs sm:text-sm md:text-base font-montserrat text-gray-600 font-semibold uppercase tracking-wide">
          WHAT WE DO
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-2xl font-montserrat font-bold text-gray-950 tracking-tight mt-2 text-center">
          Innovation tailored for you
          </h2>
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mt-4">
            <a href="/" className="text-xs sm:text-sm md:text-base font-montserrat font-bold text-gray-600">
              HOME
            </a>
            <HiChevronRight className="text-gray-600" />
            <a href="/product" className="text-xs sm:text-sm md:text-base font-montserrat font-bold text-gray-600">
              Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
