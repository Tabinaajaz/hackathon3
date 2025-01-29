"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState(""); // State for selected filter
  const router = useRouter(); // For navigation

  // Handle filter selection
  const handleFilterChange = (event:any) => {
    setSelectedFilter(event.target.value); // Update selected filter
  };

  // Handle Filter button click
  const handleFilterApply = () => {
    if (!selectedFilter) {
      alert("Please select a filter option."); // Alert if no filter is selected
      return;
    }

    // Example of different logic based on the selected filter
    switch (selectedFilter) {
      case "popularity":
        router.push("/");
        break;
      case "newest":
        router.push("/products?sort=newest");
        break;
      case "about":
        router.push("/about");
        break;
      case "high-to-low":
        router.push("/products?sort=price_desc");
        break;
      default:
        break;
    }
  };

    return (
      <div className="flex flex-wrap items-center justify-between gap-4 pr-40 py-2 border-b bg-white">
        <p className="text-sm text-gray-600">
          Showing all <span className="font-medium">12</span> results
        </p>
        <div className="flex items-center gap-2  mr-28">
          <p className="text-sm text-gray-600">Views:</p>
          <button className="p-2 border rounded-md hover:bg-gray-100 focus:ring focus:ring-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-100 focus:ring focus:ring-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
      
    <div className="flex items-left gap-2 ml-24">
      {/* Filter Dropdown */}
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="">Select a filter</option>
        <option value="popularity">Popularity</option>
        <option value="newest">Newest</option>
        <option value="about">About</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>

      {/* Filter Button */}
      <button
        onClick={handleFilterApply}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
        Filter
      </button>
    </div>
  

       
       </div>
       </div>
    );
  };
  
  export default Filter;
  