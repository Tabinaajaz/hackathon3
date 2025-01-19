import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Start your 14 days free trial
      </h1>
      <p className="mt-4 text-gray-500 text-center max-w-md">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Try it free now
      </button>
      <div className="flex mt-8 space-x-4">
        <a href="#" aria-label="Twitter">
        <FaTwitter 
        className="w-6 h-6 text-blue-500" />
        </a>
        <a href="#" aria-label="Facebook">
        <IoLogoFacebook  className="w-6 h-6 text-blue-800" />
        
        </a>
        <a href="#" aria-label="Instagram">
        <FaInstagramSquare 
        className="w-6 h-6 text-black-600" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedin
          className="w-6 h-6 text-blue-800" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
