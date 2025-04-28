import React from "react";

const Step3 = () => {
  return (
    <div className="step-content">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Description & Photos
      </h2>
      <div className="space-y-6">
        {/* Property Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Property Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Spacious 2-Bedroom Apartment with City View"
            className="w-full px-4 py-3 border border-gray-300 rounded text-gray-700"
          />
          <p className="text-gray-500 text-sm mt-1">
            Make it catchy and highlight key features (70 characters max)
          </p>
        </div>

        {/* Property Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Property Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="6"
            placeholder="Describe your property in detail..."
            className="w-full px-4 py-3 border border-gray-300 rounded text-gray-700"
          ></textarea>
          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-500 text-sm">Minimum 100 characters</p>
            <p className="text-gray-500 text-sm">
              <span id="charCount">0</span>/2000
            </p>
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Property Photos <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-sm mb-4">
            Upload at least 3 high-quality photos. First photo will be
            the cover image.
          </p>
          <div className="drag-area" id="dragArea">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-3">
              <i className="ri-upload-cloud-line text-primary text-2xl"></i>
            </div>
            <p className="text-gray-700 font-medium mb-1">
              Drag & drop photos here
            </p>
            <p className="text-gray-500 text-sm mb-3">or</p>
            <button className="bg-primary text-white px-6 py-2 !rounded-button hover:bg-primary/90 transition">
              Browse Files
            </button>
            <input type="file" className="hidden" multiple accept="image/*" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
