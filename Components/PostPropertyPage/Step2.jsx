import React from "react";

const Step2 = () => {
  return (
    <div className="step-content">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Location</h2>
      <div className="space-y-6">
        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter full address"
            className="w-full px-4 py-3 border border-gray-300 rounded text-gray-700"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter city"
            className="w-full px-4 py-3 border border-gray-300 rounded text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
