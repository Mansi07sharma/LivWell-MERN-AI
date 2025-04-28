import React from 'react';

const Section5 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied users who found their perfect home with LivWell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-medium mr-3">
                JD
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">James Davidson</h4>
                <p className="text-sm text-gray-500">Tenant</p>
              </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
            </div>
            <p className="text-gray-600">
              "Livi made my apartment search so much easier! I just told it what I was looking for, and it found me the perfect place near my office with all the amenities I wanted."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-medium mr-3">
                EM
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Emily Martinez</h4>
                <p className="text-sm text-gray-500">Property Owner</p>
              </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-half-fill" />
            </div>
            <p className="text-gray-600">
              "As a property owner, LivWell has been a game-changer. I listed my condo and had it rented within a week to great tenants. The platform is intuitive and their support team is excellent."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-medium mr-3">
                RJ
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Roman Joseph</h4>
                <p className="text-sm text-gray-500">Tenant</p>
              </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
            </div>
            <p className="text-gray-600">
              "Moving to a new city was stressful, but LivWell made finding an apartment so simple. The location detector helped me find places in safe neighborhoods near public transportation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;