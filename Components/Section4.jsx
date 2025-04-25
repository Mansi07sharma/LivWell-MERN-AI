import React from 'react';

const Section4 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Property to Rent Out?
          </h2>
          <p className="text-lg text-gray-600">
            List your property on LivWell and connect with thousands of potential tenants looking for their next home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=person%20using%20laptop%20to%20list%20property%20online%2C%20real%20estate%20listing%20process%2C%20modern%20home%20interior%20in%20background%2C%20professional%20photography%2C%20high-quality%20image%20for%20property%20management%20website&width=600&height=500&seq=9&orientation=landscape"
              alt="Post Property"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Easy 3-Step Listing Process
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 bg-opacity-50 text-white rounded-full flex-shrink-0 mr-4">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">
                    Create Your Account
                  </h4>
                  <p className="text-gray-600">
                    Sign up for free and verify your identity as a property owner or manager.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 bg-opacity-50 text-white rounded-full flex-shrink-0 mr-4">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">
                    Add Property Details
                  </h4>
                  <p className="text-gray-600">
                    Upload photos, add descriptions, set your price, and highlight amenities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 bg-opacity-50 text-white rounded-full flex-shrink-0 mr-4">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">
                    Connect with Tenants
                  </h4>
                  <p className="text-gray-600">
                    Receive inquiries, schedule viewings, and find the perfect tenant.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-indigo-600 bg-opacity-50 text-white px-6 py-3 rounded-lg whitespace-nowrap hover:bg-primary/90 transition w-full md:w-auto">
              Post Your Property Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;