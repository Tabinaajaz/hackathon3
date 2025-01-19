// components/FilterRow.tsx
const FilterRow = () => {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-2 border-b bg-white">
        <p className="text-sm text-gray-600">
          Showing all <span className="font-medium">12</span> results
        </p>
        <div className="flex items-center gap-2">
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
        </div>
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
            Filter
          </button>
        </div>
      </div>
    );
  };
  
  export default FilterRow;
  