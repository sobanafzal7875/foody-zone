import React from "react";

const BurgerElse = () => {
  const categories = [
    { src: "/burger-1.svg", name: "Burger" },
    { src: "/salad.svg", name: "Salad" },
    { src: "/french-fries.svg", name: "French Fries" },
    { src: "/fried-chicken.svg", name: "Fried Chicken" },
  ];

  return (
    <div className="bg-img2 mt-8 text-black flex justify-center items-center p-4 sm:p-8">
      <div className="max-w-4xl w-full flex flex-col justify-center items-center text-center">
        {/* Heading Section */}
        <h2 className="p-3 font-bold text-4xl sm:text-5xl lg:text-6xl text-amber-900">
          <span className="text-yellow-500">BURGERS...</span> WHAT ELSE?
        </h2>

        {/* Description Section */}
        <p className="p-3 text-sm sm:text-base lg:text-lg max-w-2xl">
          Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor
          an tempus feugiat dolor lacinia cubilia curae integer orci congue and
          metus mollislorem primis in integer metus curae integer orci congue
          integer and primis in integer metus mollis faucibus
        </p>

        {/* Categories Section */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 p-4 sm:p-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer transition duration-300"
            >
              <img
                src={item.src}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover"
                alt={item.name}
              />
              <p className="mt-2 text-center text-base sm:text-lg lg:text-xl font-bold">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <button className="mt-6 bg-red-800 border border-transparent text-white px-6 py-2 sm:px-9 sm:py-3 transition duration-300 ease-in-out hover:bg-[#fcb900] hover:border-[#fcb900]">
          Explore Our Menu
        </button>
      </div>
    </div>
  );
};

export default BurgerElse;