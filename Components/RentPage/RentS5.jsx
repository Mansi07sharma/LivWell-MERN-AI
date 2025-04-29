import React from 'react';
import { useWishlist } from '../WhishListPage/WhishList';
import { useAuth } from '../Authorisation/AuthContext';
import { useNavigate } from 'react-router-dom';

const RentS5 = (props) => {
  const { whishlistedItems, setWhishlistedItems } = useWishlist();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const addToWhishList = () => {
    console.log(props.data.rentDetails)
    const newItem = {
      _id: props.data.rentDetails._id,
      image: props.data.rentDetails.image,
      price: props.data.rentDetails.price,
      rating: props.data.rentDetails.rating,
      title: props.data.rentDetails.title,
      location: props.data.rentDetails.location,
      beds: props.data.rentDetails.beds,
      baths: props.data.rentDetails.baths,
      sqft: props.data.rentDetails.sqft,
    };

    setWhishlistedItems(prev => [...prev, newItem]);
  };

  const handleApply = () => {
    if (!currentUser) {
      navigate('/login');
    } else {
      navigate('/payment', {
        state: {
          property: {
            _id: props.data.rentDetails._id,
            image: props.data.rentDetails.image,
            price: props.data.rentDetails.price,
            rating: props.data.rentDetails.rating,
            title: props.data.rentDetails.title,
            location: props.data.rentDetails.location,
            beds: props.data.rentDetails.beds,
            baths: props.data.rentDetails.baths,
            sqft: props.data.rentDetails.sqft,
          }
        }
      });
    }
  };


  return (
    <div>
      <section id="action-bar" className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-10 py-4 px-6">
        <div className="flex justify-center items-center bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 p-4 rounded-t-xl">
          {/* Apply Button */}
          <button onClick={() => handleApply()} className="bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-md hover:bg-indigo-800 transition duration-300 mx-2">
            Apply
          </button>

          {/* Save Button */}
          <button onClick={() => { addToWhishList() }} className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-lg font-bold shadow-md transition mx-2 hover:bg-[#ff0084] hover:text-white">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

export default RentS5;