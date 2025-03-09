

import React from "react";

const BigitBurger = () => {
  return (
    <div className="bg-img  flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly  p-4 lg:p-8 gap-6 lg:gap-10">
        {/* Left Section (Text and Button) */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold">THE</h2>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold">
            BIGITI <br /> BURGER
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Mushroom patty, vegan cheese, lettuce, tomatoes, <br />
            avocado ligula rutrum risus ultrice luctus ligula congue a
          </p>
          <button className="mt-6 bg-red-800 border border-transparent text-white px-6 py-2 sm:px-9 sm:py-3 transition duration-300 ease-in-out hover:bg-[#fcb900] hover:border-[#fcb900]">
            🛒 ADD TO CART
          </button>
        </div>

        {/* Right Section (Images) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          {/* Main Image */}
          <div className="w-full sm:w-auto">
            <img
              src="/promo-11-img.png"
              alt="Bigit Burger"
              className="w-full max-w-[300px] sm:max-w-[400px]"
            />
          </div>

          {/* Small Images */}
          <div className="flex flex-row lg:flex-col gap-4">
            <div className="border p-4 flex flex-col items-center">
              <img
                src="/burger-06.png"
                alt="Komil Burger"
                className="w-16 sm:w-20 lg:w-24"
              />
              <p className="mt-2 text-sm sm:text-base">Komil Burger</p>
            </div>
            <div className="border p-4 flex flex-col items-center">
              <img
                src="/burger-06.png"
                alt="Sough Burger"
                className="w-16 sm:w-20 lg:w-24"
              />
              <p className="mt-2 text-sm sm:text-base">Sough Burger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigitBurger;