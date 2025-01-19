
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-green-600 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-sm md:px-8">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <i className=""><FaPhoneAlt/>
</i>
            <span>(225) 555-0118</span>
          </span>
          <span className="flex items-center space-x-1">
            <i className="fas fa-envelope"></i>
            <span>michelle.rivera@example.com</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex space-x-2">
            <a href="#" aria-label="Instagram" className="hover:text-gray-200">
              <i className=""><CiInstagram /></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-200">
              <i className=""><FaYoutube />
              </i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-200">
              <i className=""><FaFacebook />
              </i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200">
              <i className="text-white"><FaTwitter />
              </i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black mb-16">
        <div className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">Bandage</Link>
          </div>

          {/* Links */}
          <ul className="hidden space-x-6 md:flex">
            <li>
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/Shop" className="hover:text-gray-400">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-gray-400">Pages</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:text-gray-400">Login / Register</Link>
            <i className=" cursor-pointer hover:text-gray-400"><CiSearch /></i>
            <i className=" cursor-pointer hover:text-gray-400"><FiShoppingCart />
            </i>
            <i className=" cursor-pointer hover:text-gray-400"><CiHeart />
            </i>
          </div>
        </div>
      </nav>
           </header>
  );
};

export default Header ;
