'use client'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import { useState } from "react";

// Menu Items
const menuItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/Shop" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Pages", href: "/pages" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full h-auto px-4 py-2 bg-white shadow-md md:px-8 md:py-4 ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h3 className="text-xl font-bold text-black md:text-2xl">Bandage</h3>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          {mobileMenuOpen ? <IoClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center justify-center h-full space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="text-lg font-semibold text-gray-600 hover:text-black">
                <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Menu */}
      <div className="hidden md:flex md:space-x-6">
        <ul className="flex space-x-4">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              className="relative text-gray-600 hover:text-black"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <Link href={item.href} className="text-sm font-semibold">
                  {item.name}
                </Link>
              ) : (
                <span className="flex items-center space-x-1">
                  {item.name}
                  <IoIosArrowDown className="w-4 h-4" />
                </span>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <ul className="absolute left-0 z-10 mt-2 bg-white border rounded-lg shadow-lg">
                  {item.dropdown.map((subItem :any, subIndex:any) => (
                    <li
                      key={subIndex}
                      className="px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Link href={`/${subItem.toLowerCase().replace(/ /g, "-")}`}>
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Options */}
      <div className="hidden md:flex md:items-center md:space-x-2">
        <Link href="/login" className="flex items-center text-blue-500">
          <BsFillPersonFill className="w-5 h-5" />
          <span className="ml-1 text-sm font-semibold">Login/Register</span>
        </Link>

        <button className="text-blue-500">
          <CiSearch className="w-5 h-5" />
        </button>

        <button className="relative text-blue-500">
          <CiShoppingCart className="w-5 h-5" />
        </button>

        <button className="text-blue-500">
          <MdFavoriteBorder className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
