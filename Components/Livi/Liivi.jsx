import React, { useState } from 'react';
import PropertyCard from '../RentPage/propertyCard';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';

function Liivi() {
    const [properties, setProperties] = useState([]);

    const startListening = () => {
        recognition.start();
    };

    recognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("User said:", transcript);

        try {
            const response = await fetch('http://localhost:3000/api/voice-search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: transcript })
            });

            const results = await response.json();

            if (Array.isArray(results)) {
                setProperties(results);
            } else {
                console.error("Unexpected response format:", results);
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    return (
            <div className="p-6 w-full mx-auto">
            {/* Heading Section */}
            <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md">
                <h1 className="text-4xl font-extrabold">Welcome to Liivi</h1>
                <p className="text-lg mt-2">
                    Use your voice to search for your dream properties. Just click the button below and start speaking!
                </p>
            </div>

            {/* Voice Search Button */}
            <div className="flex justify-center mt-6 p-8">
                <button
                    onClick={startListening}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                    🎤 Speak
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
                {properties.map((property, index) => (
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
        </div>
    );
}

export default Liivi;
