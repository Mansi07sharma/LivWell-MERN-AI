import React from 'react';

const RentS3 = (props) => {
    return (
        <div>
            {/* Property Details */}
            <section id="details" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Property Details</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                        {props.Overview}
                    </p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Property Specifications</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center">
                                <i className="fas fa-check text-indigo-700 mr-2"></i>
                                <span>{props.propSpeci[0]}</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check text-indigo-700 mr-2"></i>
                                <span>{props.propSpeci[1]}</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check text-indigo-700 mr-2"></i>
                                <span>{props.propSpeci[2]}</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check text-indigo-700 mr-2"></i>
                                <span>{props.propSpeci[3]}</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check text-indigo-700 mr-2"></i>
                                <span>{props.propSpeci[4]}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Building Amenities</h3>
                        <p className="text-gray-700 mb-2">
                            {props.buildingAmenities}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Neighborhood</h3>
                        <p className="text-gray-700 mb-2">
                            {props.neighborhood}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Pet Policy</h3>
                        <p className="text-gray-700 mb-2">
                            {props.petPolicy}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Lease Terms</h3>
                        <p className="text-gray-700 mb-2">
                            {props.leaseTerms}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RentS3;