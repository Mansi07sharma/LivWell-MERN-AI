import React, { useEffect, useState } from 'react';
import PropertyCard from './propertyCard';


function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        console.log(data);
        setProperties(data);
      } catch (err) {
        console.error('Error fetching properties:', err);
      }
    };

    fetchProperties();
  }, []);

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {console.log(properties)}
        {properties.map((property) => (
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
  );
}

export default Properties; 
