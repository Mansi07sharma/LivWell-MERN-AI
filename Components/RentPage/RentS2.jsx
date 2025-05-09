import React from 'react';
import MapCard from '../Map/MapCard';
import LiveLocationMap from '../Map/Map';

const RestS2 = (props) => {
    return (
        <div>
            {/* Property Overview */}
            <section id="overview" className="mb-12">
                <div className="flex flex-wrap">
                    {/* Left Section */}
                    <div className="w-full lg:w-8/12 pr-0 lg:pr-6">
                        <div className="mb-4">
                            <h2 className="text-3xl font-bold text-gray-800">{props.price}</h2>
                            <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                                Available Now
                            </span>
                        </div>

                        {/* Property Details */}
                        <div className="flex flex-wrap text-gray-700 mb-6">
                            <div className="w-1/2 md:w-1/4 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-building mr-2 text-indigo-700"></i>
                                    <span>Penthouse</span>
                                </div>
                            </div>

                            <div className="w-1/2 md:w-1/4 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-bed mr-2 text-indigo-700"></i>
                                    <span>{props.beds} Bedrooms</span>
                                </div>
                            </div>

                            <div className="w-1/2 md:w-1/4 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-bath mr-2 text-indigo-700"></i>
                                    <span>{props.baths} Bathrooms</span>
                                </div>
                            </div>

                            <div className="w-1/2 md:w-1/4 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-ruler-combined mr-2 text-indigo-700"></i>
                                    <span>{props.area} sq ft</span>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">
                                {props.title}
                            </h3>
                            <p className="text-gray-600">{props.location}</p>
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="mb-6">
              <button className="bg-indigo-700 text-white px-6 py-3 rounded hover:bg-indigo-800 mr-3">
                <i className="fas fa-video mr-2"></i> Virtual Tour
              </button>
              <button className="border border-indigo-700 text-indigo-700 px-6 py-3 rounded hover:bg-indigo-50">
                <i className="far fa-calendar-alt mr-2"></i> Schedule Tour
              </button>
            </div> */}
                    </div>

                    {/* Right Section (Map) */}
                    <MapCard location={{ lat: props.lat, lng: props.lon }}/>
                    
                </div>
            </section>
        </div>
    );
};

export default RestS2;