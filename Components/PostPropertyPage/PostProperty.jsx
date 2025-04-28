import React from 'react';
import { useForm } from 'react-hook-form';

function PostProperty() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    let r = await fetch("http://127.0.0.1:3000/properties", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
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
              <label className="block text-gray-600 mb-1">Rating</label>
              <input
                type="number"
                step="0.1"
                {...register('rating', { required: 'Rating is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
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
              <label className="block text-gray-600 mb-1">Image URL</label>
              <input
                type="text"
                {...register('image', { required: 'Image URL is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">More Images (comma-separated URLs)</label>
              <textarea
                {...register('moreImages', { required: 'At least one image URL is required' })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.moreImages && <p className="text-red-500 text-sm">{errors.moreImages.message}</p>}
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

        {/* Description Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Description</h2>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Overview</label>
            <textarea
              {...register('overview', { required: 'Overview is required' })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.overview && <p className="text-red-500 text-sm">{errors.overview.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Property Specifications (comma-separated)</label>
            <textarea
              {...register('propertySpecifications', { required: 'Specifications are required' })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.propertySpecifications && <p className="text-red-500 text-sm">{errors.propertySpecifications.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Building Amenities</label>
            <textarea
              {...register('buildingAmenities', { required: 'Building amenities are required' })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.buildingAmenities && <p className="text-red-500 text-sm">{errors.buildingAmenities.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Neighborhood</label>
            <textarea
              {...register('neighborhood', { required: 'Neighborhood details are required' })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.neighborhood && <p className="text-red-500 text-sm">{errors.neighborhood.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Pet Policy</label>
            <textarea
              {...register('petPolicy', { required: 'Pet policy is required' })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.petPolicy && <p className="text-red-500 text-sm">{errors.petPolicy.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Lease Terms</label>
            <textarea
              {...register('leaseTerms', { required: 'Lease terms are required' })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.leaseTerms && <p className="text-red-500 text-sm">{errors.leaseTerms.message}</p>}
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