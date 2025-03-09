import React from 'react';

const Delivery = () => {
  return (
    <div className='bg-img3 mt-16 flex justify-center items-center py-16 sm:py-24'>
      <div className='flex justify-center items-center flex-col w-11/12 sm:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-4/5 p-6 sm:p-8 lg:p-10'>
        {/* Heading */}
        <h2 className='text-2xl sm:text-3xl lg:text-4xl text-amber-800 text-center'>
          WE GUARANTEE
        </h2>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-6xl text-amber-950 text-center mt-4'>
          30 MINUTES DELIVERY !
        </h2>

        {/* Description */}
        <p className='text-amber-800 text-center mt-4 text-sm sm:text-base lg:text-lg xl:px-20 2xl:px-32'>
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna
        </p>

        {/* Button */}
        <button className="mt-6 bg-red-800 border border-transparent text-white px-6 py-2 sm:px-9 sm:py-3 transition duration-300 ease-in-out hover:bg-[#fcb900] hover:border-[#fcb900] text-sm sm:text-base lg:text-lg">
          CALL: 983-764-349-4332
        </button>
      </div>
    </div>
  );
};

export default Delivery;