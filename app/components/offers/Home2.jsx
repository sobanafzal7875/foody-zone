import React from "react";

const Home2 = () => {
  // Dynamic data for burgers
  const burgers = [
    {
      id: 1,
      code: "9349",
      name: "Panish Burger",
      description: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula",
      price: "$8.95",
      image: "burger-11.jpg",
    },
    {
      id: 2,
      code: "9350",
      name: "Classic Burger",
      description: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula",
      price: "$7.95",
      image: "burger-13.jpg",
    },
    {
      id: 3,
      code: "9351",
      name: "Crispy Chicken",
      description: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula",
      price: "$8.50",
      image: "burger-12.jpg",
    },
  ];

  return (
    <div className="flex justify-between p-4 items-center">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
      {burgers.map((burger) => (
        <div key={burger.id} className="flex text-black relative group">
          {/* Image Section */}
          <div className="rounded-lg overflow-hidden bg-black ">
            {/* Code Badge - Stays Fixed */}
            <span className="bg-yellow-400 absolute top-3 left-3 rounded-lg p-2 text-sm font-semibold z-10">
              CODE: {burger.code}
            </span>
  
            {/* Image - Scales on Hover */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={burger.image}
                alt={burger.name}
                className="w-60 h-48  transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </div>
  
          {/* Content Section */}
          <div className="flex flex-col w-56 px-4">
            <h2 className="text-amber-900 text-xl font-semibold mb-2">
              {burger.name}
            </h2>
            <p className="text-gray-500 mb-3 text-sm">{burger.description}</p>
            <p className="text-2xl font-semibold text-red-600">{burger.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Home2;