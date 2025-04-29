

import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const MapCard = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB-ff9GF-tY3sCbvjY2iR6eMbI2JUNfvmg', // Replace with your key
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div className="w-full lg:w-4/12">
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="relative h-48 mb-4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={14}
            options={{
              disableDefaultUI: true,
              draggable: true,
              scrollwheel: false,
            }}
          >
            {/* Marker at provided location */}
            <MarkerF position={location} />
          </GoogleMap>

          {/* <div className="absolute bottom-2 right-2">
            <button className="bg-white p-2 rounded shadow">
              <i className="fas fa-expand-alt text-indigo-700"></i>
            </button>
          </div> */}
        </div>

        <p className="text-gray-700 mb-3">
          Walk Score: 92/100 - Walker's Paradise
        </p>
        <p className="text-gray-700">
          Transit Score: 98/100 - World-class public transportation
        </p>
      </div>
    </div>
  );
};

export default MapCard;
