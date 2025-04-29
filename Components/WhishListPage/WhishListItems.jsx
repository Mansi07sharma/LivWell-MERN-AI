import React from 'react'
import { useWishlist } from './WhishList'
import PropertyCard from '../RentPage/propertyCard';

function WhishListItems() {
    const { whishlistedItems, setWhishlistedItems } = useWishlist();
    return (
        <>
            <div className="text-center py-6">
                <h1 className="text-4xl font-bold text-gray-800">
                    Your Dream Wishlist
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    Explore your favorite properties and make them yours!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {whishlistedItems.map((property, idx) => (
                    console.log(property),
                    <PropertyCard
                        key={property._id}
                        _id={property._id}
                        image={property.image}
                        price={property.price}
                        rating={property.rating}
                        title={property.title}
                        location={property.location}
                        beds={property.beds}
                        baths={property.baths}
                        sqft={property.area}
                    />
                ))}
            </div>
        </>
    )
}

export default WhishListItems