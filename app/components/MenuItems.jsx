


"use client";
import React from "react";
import { useCart } from "@/app/useCart";
import ProductCard from "./ProductCard"; // Import the reusable component

const MenuItems = ({ items }) => {
  const { addToCart } = useCart();

  return (
    <div className="md:p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard
            key={`${item.id}-${item.name}`}
            item={item}
            onCartAction={addToCart}
            buttonText="🛒 ADD TO CART"
            isRemovable={false} // Not removable in menu
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
