import React from 'react'
import PropertyCard from '../RentPage/propertyCard'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchByPhone() {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchSearchResults = async () => {
            const queryParams = new URLSearchParams(location.search);
            const query = queryParams.get('query');

            if (query) {
                try {
                    setLoading(true);
                    const response = await fetch(`http://localhost:3000/search/user/${query}`);
                    if (response.ok) {
                        const data = await response.json();
                        setSearchResults(data);
                    } else {
                        console.error('Failed to fetch search results');
                    }
                } catch (error) {
                    console.error('Error fetching search results:', error);
                } finally {
                    setLoading(false); // Stop loading whether success or failure
                }
            }
        };

        fetchSearchResults();
    }, [location.search]);


    return (
        <>
            <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md">
                <h1 className="text-4xl font-extrabold">Search Results</h1>
                <p className="text-lg mt-2">Explore the properties matching your search criteria!</p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-xl font-semibold">Loading...</p>
                </div>
            ) : (

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                    {searchResults.length > 0 ? (
                        searchResults.map((property) => (
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
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500">No results found.</p>
                    )}
                </div>
            )}
        </>
    );
}

export default SearchByPhone; 