import React from 'react';
import Image from 'next/image';
import image  from "@/public/contact.png.png"
const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white py-12 px-6 lg:px-20">
      {/* Left Side: Text Content */}
      <div className="flex-1 text-left mx-5">
        <h3 className="text-lg font-medium mb-5  text-gray-500 uppercase">Contact Us</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Get in touch today!
        </h1>
        <p className="text-gray-600 mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <p className="mt-6 text-gray-700">
          <strong>Phone:</strong> +451 215 215 <br />
          <strong>Fax:</strong> +451 215 215
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-twitter"></i> {/* Replace with SVG or icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 mt-10 lg:mt-0">
        <Image
        src={image}
          alt="Happy family shopping"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ContactSection;
