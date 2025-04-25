import React from 'react';

const Section6 = () => {
  return (
    <section className="py-16 bg-indigo-600 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied users who found their dream rental with LivWell.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-white text-blue-900 px-8 py-3 rounded-lg whitespace-nowrap hover:bg-gray-100 transition font-medium cursor-pointer">
              Start Searching
            </button>
            <button className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded-lg whitespace-nowrap hover:bg-white/10 transition font-medium cursor-pointer">
              Post a Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;