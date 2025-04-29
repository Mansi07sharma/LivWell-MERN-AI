import React, { useEffect, useState } from 'react';
import { db } from '../Authorisation/Firebase';
import { collection, getDocs, doc } from 'firebase/firestore';
import { useAuth } from '../Authorisation/AuthContext';
import PropertyCard from '../RentPage/propertyCard';

function PostedProperties() {
  const { currentUser } = useAuth();
  const [rented, setRented] = useState([]);
  const [loading,setLoading] =useState(false);

  useEffect(() => {
    const fetchRented = async () => {
      if (!currentUser) return;

      const rentedRef = collection(doc(db, 'users', currentUser.uid), 'postedProperties');
      setLoading(true)
      const snapshot = await getDocs(rentedRef);

      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRented(data);
      setLoading(false)
    };

    fetchRented();
  }, [currentUser]);

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-md">
      <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md">
        <h1 className="text-4xl font-extrabold">Your Posted Properties</h1>
        <p className="text-lg mt-2">Here are the properties you have Posted!</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rented.length === 0 ? (
            <p className="text-center text-gray-500 italic col-span-full">No Posted properties found yet.</p>
          ) : (
            rented.map((property, index) => (
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
          )}
        </div>)}
    </div>
  );
}

export default PostedProperties;
