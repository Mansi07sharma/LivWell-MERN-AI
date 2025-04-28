import React from 'react';

const Section3 = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Livi, Your Personal Rental Assistant
            </h2>
            <p className="text-lg text-gray-600">
              Find your perfect home faster with our voice-powered AI assistant. Just speak your requirements and Livi will do the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-violet-100 text-violet-600 rounded-full mx-auto mb-4">
                <i className="ri-mic-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Search</h3>
              <p className="text-gray-600">
                Simply say what you're looking for: "Find me a 2-bedroom apartment in downtown with a gym under $3,000."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-violet-100 text-violet-600 rounded-full mx-auto mb-4">
                <i className="ri-filter-3-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Filtering</h3>
              <p className="text-gray-600">
                Livi understands complex requests: "Show pet-friendly homes with a balcony near public transportation."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-violet-100 text-violet-600 rounded-full mx-auto mb-4">
                <i className="ri-compass-3-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location Intelligence</h3>
              <p className="text-gray-600">
                Ask about neighborhoods: "What's the best area for families with good schools within 20 minutes of downtown?"
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-1/3 h-full"
              style={{
                backgroundImage: "url('https://readdy.ai/api/search-image?query=futuristic%20AI%20assistant%20interface%2C%20blue%20glowing%20technology%2C%20abstract%20digital%20waves%2C%20modern%20tech%20visualization%2C%20clean%20minimalist%20design&width=400&height=600&seq=8&orientation=portrait')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1,
              }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Try Livi Now</h3>
                <p className="text-gray-600 mb-6">
                  Experience the future of home searching with our AI-powered voice assistant. Just tap the button and start speaking.
                </p>

                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Try saying:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">"Find apartments near Central Park"</span>
                    <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">"Show me 2-bed houses under $3,500"</span>
                    <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">"Pet-friendly with parking"</span>
                  </div>
                </div>

                <button className="bg-violet-700 text-white px-6 py-3 rounded-lg whitespace-nowrap hover:bg-violet-800 transition flex items-center justify-center">
                  <i className="ri-mic-line mr-2"></i>
                  Speak to Livi
                </button>
              </div>

              <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-violet-100 flex items-center justify-center livi-pulse relative">
                  <div className="w-24 h-24 rounded-full bg-violet-200 flex items-center justify-center absolute">
                    <div className="w-16 h-16 rounded-full bg-violet-700 flex items-center justify-center text-white">
                      <i className="ri-mic-line text-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;