import React from 'react';
import AboutMore from './AboutMore';

const Hero = () => {
  return (
    <div className="">
      <div className="text-center about-img flex justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white">
          ABOUT TESTO
        </h2>
      </div>
        <AboutMore/>
    </div>
  );
};

export default Hero;