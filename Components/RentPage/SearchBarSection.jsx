import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBarSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
              type="text" onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search User by Phone Number..."
              className="bg-transparent border-none outline-none px-3 w-full text-sm"
            />
            <button
              onClick={() => {
                if (searchQuery.trim()) {
                  navigate(`/search/user?query=${searchQuery}`);
                }
              }}
              className="w-9 h-8 flex items-center justify-center bg-purple-700 rounded-full text-white hover:bg-purple-800 transition"
            >
              <i className="ri-search-line"></i>
            </button>
          </div>


          {/* Map Toggle */}
          <div className="flex items-center border border-primary rounded-full p-1 ml-auto">

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
