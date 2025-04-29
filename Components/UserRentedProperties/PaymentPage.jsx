import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../Authorisation/Firebase';
import { doc, collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../Authorisation/AuthContext';
import { useState } from 'react';

const PaymentPage = () => {
    const { state } = useLocation(); // receives property data via navigate
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);


    const sanitizeProperty = (property) => {
        return {
            _id: property._id || '',
            image: property.image || '',
            price: property.price || 0,
            rating: property.rating || 0,
            title: property.title || '',
            location: property.location || '',
            beds: property.beds ?? null,
            baths: property.baths ?? null,
            sqft: property.sqft ?? null,
        };
    };

    const deleteProperty = async (propertyId) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/delete/properties/${propertyId}`, {
                method: 'DELETE',
              });
              
      
          if (response.ok) {
            console.log('Property deleted successfully');
            // Optionally update UI or refetch
          } else {
            console.error('Failed to delete property');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };      

    const handlePaymentSuccess = async () => {
        if (!currentUser) {
            navigate('/login');
            return;
        }

        try {

            const sanitizedProperty = sanitizeProperty(state.property);
            console.log("Saving sanitized property to Firebase:", sanitizedProperty);


            const rentedRef = collection(db, 'users', currentUser.uid, 'rentedProperties');
            setLoading(true)
            await addDoc(rentedRef, sanitizedProperty);

            await deleteProperty(state.property._id);

            setLoading(false)

            navigate('/my-rented-properties');
        } catch (error) {
            console.error('Error saving rented property:', error);
            alert('Payment succeeded, but saving property failed.');
        }

        
    };

    const property = state?.property;

    if (!property) {
        return (
            <div className="text-center mt-10 text-red-600 font-semibold">
                Invalid property data. Please go back and try again.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-xl font-semibold">Loading...</p>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Payment Page</h1>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                        />
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800">{property.title}</h2>
                            <p className="text-gray-600">{property.location}</p>
                            <p className="mt-2 text-lg text-green-600 font-bold">₹{property.price}</p>
                            <p className="text-sm text-gray-500 mt-1">Beds: {property.beds} | Baths: {property.baths} | Sqft: {property.sqft}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2">Payment Summary</h3>
                        <p className="text-gray-700">You're about to rent this property. Click the button below to complete the process.</p>

                        <button
                            onClick={handlePaymentSuccess}
                            className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Confirm & Pay ₹{property.price}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
