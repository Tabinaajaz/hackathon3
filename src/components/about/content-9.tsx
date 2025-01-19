// components/ProblemsSection.tsx
const ProblemsSection = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-20 items-center">
          {/* Left Content */}
          <div className="text-center md:w-[394px]  md:h-[188px] md:text-left">
            <h4 className="text-sm font-semibold font-montserrat text-red-500 uppercase mb-2">
              Problems trying
            </h4>
            <h1 className="text-2xl md:text-3xl  mt-7 font-montserrat font-bold text-gray-800 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h1>
          </div>
  
          {/* Right Content */}
          <div className="text-center md:text-left md:w-[545px] md:h-10]">
            <p className="text-gray-600 leading-[20px] ml-10 tracking-widest font-montserrat font-normal md:text-[14px] ">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProblemsSection;
  