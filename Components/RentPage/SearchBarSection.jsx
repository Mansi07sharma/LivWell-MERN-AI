import React from 'react';

function SearchBarSection() {
  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-1/3">
            <div className="w-5 h-5 flex items-center justify-center text-gray-500">
              <i className="ri-search-line"></i>
            </div>
            <input
              type="text"
              placeholder="Search by location, property name..."
              className="bg-transparent border-none outline-none px-3 w-full text-sm"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 whitespace-nowrap">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition flex items-center">
              <i className="ri-money-dollar-circle-line mr-1"></i>
              Price
              <i className="ri-arrow-down-s-line ml-1"></i>
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition flex items-center">
              <i className="ri-home-line mr-1"></i>
              Property Type
              <i className="ri-arrow-down-s-line ml-1"></i>
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition flex items-center">
              <i className="ri-hotel-bed-line mr-1"></i>
              Beds & Baths
              <i className="ri-arrow-down-s-line ml-1"></i>
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition flex items-center">
              <i className="ri-equalizer-line mr-1"></i>
              More Filters
            </button>
          </div>

          {/* Map Toggle */}
          <div className="flex items-center border border-primary rounded-full p-1 ml-auto">
            <button
              id="grid-view-btn"
              className="px-4 py-1 rounded-full text-sm whitespace-nowrap map-toggle-active"
            >
              <i className="ri-layout-grid-line mr-1"></i>
              Grid
            </button>
            <button
              id="map-view-btn"
              className="px-4 py-1 rounded-full text-sm whitespace-nowrap map-toggle-inactive"
            >
              <i className="ri-map-pin-line mr-1"></i>
              Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBarSection;
