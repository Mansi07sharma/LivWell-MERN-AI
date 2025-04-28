import React from 'react';
import { useForm } from 'react-hook-form';

function PostProperty() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Your Property</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Property Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Title</label>
              <input
                type="text"
                {...register('title', { required: 'Title is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Price</label>
              <input
                type="text"
                {...register('price', { required: 'Price is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Location</label>
              <input
                type="text"
                {...register('location', { required: 'Location is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Beds</label>
              <input
                type="number"
                {...register('beds', { required: 'Number of beds is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.beds && <p className="text-red-500 text-sm">{errors.beds.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Baths</label>
              <input
                type="number"
                {...register('baths', { required: 'Number of baths is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.baths && <p className="text-red-500 text-sm">{errors.baths.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Area (sqft)</label>
              <input
                type="text"
                {...register('area', { required: 'Area is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Contact</label>
              <input
                type="text"
                {...register('contact', { required: 'Contact is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostProperty;
