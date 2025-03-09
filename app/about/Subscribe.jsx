import React from 'react';

const Subscribe = () => {
  return (
  <div className='flex justify-center items-center mt-20 mb-20'>
      <div className="gray w-2/3 bg-gray-100 m-6 p-8 sm:p-8 lg:p-20  flex flex-col justify-center items-center text-center">
      <h2 className="text-amber-900 text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        Subscribe To Newsletter
      </h2>
      <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl">
        Subscribe to the weekly newsletter for all the latest updates
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Email"
          className="w-full text-black sm:w-2/3 px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-red-600"
        />
        <button className="w-full sm:w-1/3 font-bold bg-red-600 border border-transparent text-white px-6 py-2 sm:px-9 sm:py-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border-red-600">
          SUBSCRIBE
        </button>
      </div>
    </div>
  </div>
  );
};

export default Subscribe;