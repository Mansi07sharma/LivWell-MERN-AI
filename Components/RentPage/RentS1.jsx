import React, { useEffect, useState } from 'react';
import RentS2 from './RentS2';
import RentS3 from './RentS3';
import RentS4 from './RentS4';
import RentS5 from './RentS5';
import { useParams } from 'react-router-dom';
const RentS1 = () => {
    const {id}=useParams();
    const [rentDetails, setRentDetails] = useState({
        moreImages: [],
        description: {
          Overview: '',
          'Property Specifications': [],
          'Building Amenities': '',
          Neighborhood: '',
          'Pet Policy': '',
          'Lease Terms': ''
        },
        area: '',
        location: '',
        price: '',
        beds: '',
        baths: '',
        title: ''
      });
      
    useEffect(() => {
        const fetchingDetails = async () => {
            try {
                const res = await fetch(`http://localhost:3000/rent/${id}`);
                const data=await res.json();
                console.log(data);
                setRentDetails(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchingDetails();
    }, [id]);

    return (
        <div>
            <main className="container mx-auto px-4 py-6">
                {/* Photo Gallery Section */}
                <section id="photos" className="mb-12">
                    <div className="grid grid-cols-4 grid-rows-2 gap-2">
                        {/* Main Image */}
                        <div className="col-span-2 row-span-2 relative">
                            <img
                                src={rentDetails.moreImages[0]}
                                alt="Beach Living"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            
                        </div>

                        {/* Other Small Images */}
                        <div className="relative">
                            <img
                                src={rentDetails.moreImages[1]}
                                alt="Living Room"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="relative">
                            <img
                                src={rentDetails.moreImages[2]}
                                alt="Kitchen"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="relative">
                            <img
                                src={rentDetails.moreImages[3]}
                                alt="Bedroom"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="relative">
                            <img
                                src={rentDetails.moreImages[4]}
                                alt="Bathroom"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </section>
                <RentS2 area={rentDetails.area } location={rentDetails.location} price={rentDetails.price} beds={rentDetails.beds} baths={rentDetails.baths} title={rentDetails.title}/>
                <RentS3 Overview={rentDetails.description.Overview} propSpeci={rentDetails.description['Property Specifications']} buildingAmenities={rentDetails.description['Building Amenities']} neighborhood={rentDetails.description.Neighborhood} petPolicy={rentDetails.description['Pet Policy']} leaseTerms={rentDetails.description['Lease Terms']}/>
                <RentS4 />
                <RentS5 />
            </main>
        </div>
    );
}

export default RentS1;
