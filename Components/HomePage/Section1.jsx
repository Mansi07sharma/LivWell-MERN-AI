import React from 'react';

const Section1 = () => {
  return (
    <div>
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=a%20modern%20living%20room%20with%20large%20windows%2C%20natural%20light%2C%20stylish%20furniture%2C%20minimalist%20design%2C%20plants%2C%20wooden%20floors%2C%20bright%20and%20airy%20space%2C%20with%20a%20view%20of%20city%20skyline%20in%20the%20background%2C%20perfect%20for%20a%20rental%20home%20advertisement%2C%20high-end%20real%20estate%20photography&width=1920&height=800&seq=1&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Home with LivWell
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover the ideal rental that matches your lifestyle, budget, and location preferences.
            </p>

            {/* Search Section */}
            {/* <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                  <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter location or use current location"
                    className="bg-transparent border-none outline-none px-3 w-full text-sm"
                  />
                  <button className="w-8 h-8 flex items-center justify-center text-primary">
                    <i className="ri-focus-3-line"></i>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-700">$500</span>
                      <input type="range" min="500" max="10000" defaultValue="2500" className="w-full" />
                      <span className="text-gray-700">$10,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <div className="relative">
                      <button className="w-full bg-gray-100 rounded px-4 py-3 text-left text-sm flex items-center justify-between">
                        <span>Any Type</span>
                        <i className="ri-arrow-down-s-line"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                  <button className="w-full sm:w-auto bg-indigo-700 text-white px-6 py-3 rounded-lg whitespace-nowrap hover:bg-indigo-600 transition flex items-center justify-center cursor-pointer">
                    <i className="ri-search-line mr-2"></i>
                    Search Properties
                  </button>

                  <button className="w-full sm:w-auto border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-lg whitespace-nowrap hover:bg-gray-200 transition flex items-center justify-center cursor-pointer">
                    <i className="ri-equalizer-line mr-2"></i>
                    Advanced Filters
                  </button>

                  <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg whitespace-nowrap hover:bg-green-400 transition flex items-center justify-center cursor-pointer">
                    <i className="ri-mic-line mr-2"></i>
                    Speak to Livi
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;