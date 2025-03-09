import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useCart } from "@/app/useCart"; // Import the useCart hook

const Explore = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { addToCart } = useCart(); // Use the addToCart function from the useCart hook

  // Menu items data (8 items)
  const menuItems = [
    {
      id: 1,
      src: "/burger-11.jpg",
      name: "Panish Burger",
      desc: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula",
      price: "$10.35",
    },
    {
      id: 2,
      src: "/burger-12.jpg",
      name: "Classic Beef Burger",
      desc: "Juicy beef patty, cheddar cheese, lettuce, tomato, and onions",
      price: "$12.50",
    },
    {
      id: 3,
      src: "/burger-13.jpg",
      name: "Spicy Chicken Burger",
      desc: "Crispy chicken, spicy mayo, lettuce, tomatoes, and pickles",
      price: "$11.20",
    },
    {
      id: 4,
      src: "/burger-14.jpg",
      name: "Cheese Overload Burger",
      desc: "Beef patty, double cheddar cheese, caramelized onions",
      price: "$13.99",
    },
    {
      id: 5,
      src: "/burger-15.jpg",
      name: "BBQ Ranch Burger",
      desc: "Smoked BBQ sauce, grilled beef patty, crispy onions",
      price: "$12.99",
    },
    {
      id: 6,
      src: "/burger-16.jpg",
      name: "Veggie Delight Burger",
      desc: "Plant-based patty, vegan cheese, avocado, lettuce",
      price: "$9.99",
    },
    {
      id: 7,
      src: "/burger-17.jpg",
      name: "Double Patty Burger",
      desc: "Two beef patties, lettuce, tomato, cheddar cheese",
      price: "$14.50",
    },
    {
      id: 8,
      src: "/burger-12.jpg",
      name: "Mushroom Swiss Burger",
      desc: "Beef patty, Swiss cheese, mushrooms, garlic aioli",
      price: "$13.25",
    },
  ];

  return (
    <div className="mt-5 text-black">
      {/* Heading */}
      <div className="flex justify-center items-center">
        <div className="p-4 mt-8 text-center w-[90%] md:w-[500px]">
          <h2 className="text-4xl md:text-5xl text-red-800 font-bold">
            Explore our menu
          </h2>
          <p className="mt-5 text-sm md:text-base">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna
          </p>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="p-5 md:p-10  flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <di
              v
              key={item.id}
              className="rounded-lg overflow-hidden border relative transition group w-[260px] md:w-[280px]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform ease-in-out duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <Rating
                    name={`rating-${item.id}`}
                    // onChange={(event, newValue) => console.log(newValue)}
                    defaultValue={2}
                  />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.desc}</p>

                <div className="flex items-center py-3 justify-between">
                  <span className="bg-[#642f21] text-[#fcb900] p-2 rounded-lg font-bold text-sm">
                    {item.price}
                  </span>

                  {/* Button appears on hover */}
                  <button className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-[#fcb900] border text-black px-4 py-2 ease-in-out text-sm"
                onClick={() => addToCart(item)} // Add item to cart on button click
                >
                    🛒 ADD TO CART
                  </button>
                </div>
              </div>
            </di>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
