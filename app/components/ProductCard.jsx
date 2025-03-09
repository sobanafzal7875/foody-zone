import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";

const ProductCard = ({ item, onCartAction, buttonText, isRemovable }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="w-full max-w-[240px] mx-auto">
      {/* Image & Favorite Icon */}
      <div className="wrapper border p-5">
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
        <img src={item.src} alt={item.name} className="w-full h-auto" />

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-3">
          <span className="bg-[#642f21] text-[#fcb900] p-2 rounded-lg font-extrabold">
            {item.price}
          </span>
          <Rating name={`rating-${item.id}`} />
        </div>
      </div>

      {/* Name, Description & Action Button */}
      <div className="flex flex-col text-center mt-4">
        <h3 className="text-amber-900 font-bold text-xl md:text-2xl">
          {item.name}
        </h3>
        <p className="px-4 md:px-6 text-black text-sm md:text-base">
          {item.desc}
        </p>
        <button
          onClick={() => onCartAction(item)}
          className={`mt-3 px-5 py-2 md:px-8 md:py-3 transition duration-300 ease-in-out ${
            isRemovable
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-white border text-black hover:bg-[#fcb900]"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
