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
                {whishlistedItems.map((item,idx) => (
                    console.log(item),
                    <PropertyCard
                        key={idx}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                        location={item.location}
                        beds={item.beds}
                        baths={item.baths}
                        sqft={item.sqft}
                    />
                ))}
            </div>
        </>
    )
}

export default WhishListItems