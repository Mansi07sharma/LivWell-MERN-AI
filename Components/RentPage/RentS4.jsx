import React from 'react'

const RentS4 = () => {
    return (
        <div>
            <section id="amenities" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Amenities</h2>

                {/* Basic Amenities */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Basic Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-snowflake"></i>
                            </div>
                            <span>Air Conditioning</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-fire"></i>
                            </div>
                            <span>Heating</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-wifi"></i>
                            </div>
                            <span>High-Speed Internet</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <span>In-Unit Laundry</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <span>Dishwasher</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-couch"></i>
                            </div>
                            <span>Furnished Options</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-parking"></i>
                            </div>
                            <span>Garage Parking</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-door-closed"></i>
                            </div>
                            <span>Storage Units</span>
                        </div>
                    </div>
                </div>

                {/* Luxury Amenities */}
                <div className="mb-6 pb-50">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Luxury Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-swimming-pool"></i>
                            </div>
                            <span>Rooftop Pool</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-dumbbell"></i>
                            </div>
                            <span>Fitness Center</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-concierge-bell"></i>
                            </div>
                            <span>24/7 Concierge</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-hot-tub"></i>
                            </div>
                            <span>Spa Facilities</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-glass-cheers"></i>
                            </div>
                            <span>Residents' Lounge</span>
                        </div>
                        <div className="flex items-center">
                            <div className="amenity-icon p-2 rounded-lg mr-3">
                                <i className="fas fa-film"></i>
                            </div>
                            <span>Private Theater</span>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default RentS4