import React from 'react';

const AboutMore = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-16 sm:mt-24 lg:mt-32">
        {/* Left Section (Image) */}
        <div className="left lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-start">
          <img
            src="/about-01-img.png"
            alt="About Us"
            className="w-full max-w-[500px] lg:max-w-[600px]"
          />
        </div>

        {/* Right Section (Text and Button) */}
        <div className="right lg:w-1/2 xl:w-2/5 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-amber-900 text-3xl sm:text-4xl md:text-5xl font-semibold py-4 lg:py-6">
            Nothing brings people together like a good burger
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl py-4 lg:py-6">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna Porta semper
            lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus
            feugiat dolor lacinia cubilia curae.
          </p>
          <button className="mt-6 font-bold bg-red-600 border border-transparent text-white px-6 py-2 sm:px-9 sm:py-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border-red-600">
            ABOUT MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMore;