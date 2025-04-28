import React from 'react';

const RentS5 = () => {
  return (
    <div>
      <section id="action-bar" className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-10 py-4 px-6">
        <div className="flex justify-center items-center bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 p-4 rounded-t-xl">
          {/* Apply Button */}
          <button className="bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-md hover:bg-indigo-800 transition duration-300 mx-2">
            Apply
          </button>

          {/* Save Button */}
          <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-lg font-bold shadow-md transition mx-2 hover:bg-[#ff0084] hover:text-white">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

export default RentS5;