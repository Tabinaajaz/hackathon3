'use client'
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Bandage</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/products" className="text-gray-700 hover:text-blue-500">
              Product
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-blue-500">
              Pricing
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </nav>

          {/* Desktop Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-700 hover:text-blue-500">
              Become a member
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md pr-14 mx-24 py-2 items-center">
            <nav className="flex flex-col space-y-2   text-left px-4 py-2">
              <a href="/" className="text-gray-700  hover:text-blue-500">
                Home
              </a>
              <a href="/products" className="text-gray-700 hover:text-blue-500">
                Product
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-500">
                Pricing
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
              <a href="/login" className="text-gray-700 hover:text-blue-500">
                Become a member
              </a> 
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
