import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl font-bold tracking-[0.1px] font-montserrat text-gray-800">
            Bandage
          </h3>
          <div className="flex space-x-6 text-blue-500">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-600 mt-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-500">User Analytic</a></li>
              <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">IOS & Android</a></li>
              <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-blue-500">Customers</a></li>
              <li><a href="#" className="hover:text-blue-500">API</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Get In Touch</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-l border border-gray-300"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 mt-10">
        <div className="text-center py-6">
          <p className="text-sm font-montserrat font-bold tracking-[0.2px] text-gray-500">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
