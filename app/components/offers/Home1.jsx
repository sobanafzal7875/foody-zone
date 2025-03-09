import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useCart } from "@/app/useCart"; // Import the useCart hook

const Home1 = () => {
    const { addToCart } = useCart(); // Use the addToCart function from the useCart hook
  
  // Dynamic data for burgers
  const burgers = [
    {
      id: 1,
      name: "Onion Rings",
      description:
        "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula",
      src: "/side-01-1.png",
      price: "10.34$",
    },
    {
      id: 2,
      name: "Chicken Nuggets",
      description:
        "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula",
      src: "/side-04-1.png",
      price: "9.99$",
    },
  ];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="flex justify-center items-center mt-10 p-4 flex-col">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-20 w-full max-w-6xl">
        {/* Static Burger Card (Unchanged) */}
        <div className="bg-[#F7BE27] rounded-md flex flex-col justify-center items-center px-6 py-12 lg:px-9 lg:py-20 w-full lg:w-[800px] text-center">
          <img src="/burger-06.png" alt="" className="w-48 lg:w-72" />
          <h2 className="text-amber-800 text-2xl lg:text-3xl font-semibold mt-6 lg:mt-7 mb-2">
            Smokey House Burger
          </h2>
          <p className="text-amber-700 text-sm lg:text-base">
            Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles
          </p>
        </div>

        {/* Dynamic Burger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
          {burgers.map((burger) => (
            <div key={burger.id} className="w-full max-w-[300px] mx-auto">
              {/* Image & Favorite Icon */}
              <div className="wrapper border p-4 lg:p-6">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
                <img
                  src={burger.src}
                  alt={burger.name}
                  className="w-full h-auto"
                />

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-3">
                  <span className="bg-[#642f21] text-[#fcb900] p-2 rounded-lg font-extrabold text-sm lg:text-base">
                    {burger.price}
                  </span>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={2}
                  />
                </div>
              </div>

              {/* Name, Description & Add to Cart */}
              <div className="flex flex-col text-center mt-4">
                <h3 className="text-amber-900 font-bold text-lg lg:text-xl xl:text-2xl">
                  {burger.name}
                </h3>
                <p className="px-4 md:px-6 text-black text-xs lg:text-sm xl:text-base">
                  {burger.description}
                </p>
                <button className="mt-3 bg-white border text-black px-4 py-2 lg:px-5 lg:py-2 xl:px-8 xl:py-3 transition duration-300 ease-in-out hover:bg-[#fcb900] text-sm lg:text-base"
                onClick={() => addToCart(burger)} // Add item to cart on button click
                >
                  🛒 ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      </div>
      <div className="flex justify-center gap-12 mt-32 mb-32 flex-wrap w-full max-w-6xl">
        <img
          src="/offer-1.jpg"
          alt="Offer 1"
          className="w-full max-w-[550px] rounded-lg shadow-md"
        />
        <img
          src="/offer-2.jpg"
          alt="Offer 2"
          className="w-full max-w-[550px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home1;
