


import React from "react";

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { src: "/burger-1.svg", name: "Burger" },
    { src: "/salad.svg", name: "Salad" },
    { src: "/french-fries.svg", name: "French Fries" },
    { src: "/fried-chicken.svg", name: "Fried Chicken" },
  ];

  return (
    <div className="p-4 md:p-8 m-4 md:m-10 flex justify-center items-center" >
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:justify-evenly items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition duration-300 ${
              selectedCategory === item.name
                ? "text-red-500 font-bold"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedCategory(item.name)}
          >
            <img
              src={item.src}
              className={`w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] object-cover transition duration-300 ${
                selectedCategory === item.name
                  ? "filter brightness-0 invert-[0%] sepia-[100%] saturate-[5000%] hue-rotate-[340deg]"
                  : ""
              }`}
              alt={item.name}
            />
            <p className="mt-2 text-center text-lg md:text-xl font-bold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;