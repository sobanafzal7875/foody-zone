"use client";
import React from "react";
import { useCart } from "../useCart";
import Image from "next/image";
export default function CartPage() {
  const { cart, removeFromCart } = useCart(); // Use cart and removeFromCart

  return (
    <>
      {/* Navbar Components */}
   
      <div className="contact flex justify-center items-center">
        <h2 className="text-6xl">        CART PAGE
        </h2>
      </div>

      {/* Cart Content */}
      <div className="p-8 text-black">
        <h2 className="text-4xl font-bold mb-8 text-center">🛒 Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-lg font-semibold">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.name}`}
                className="border border-gray-300 p-6 rounded-xl shadow-lg bg-white flex flex-col items-center text-center"
              >
                {/* Product Image */}
                <Image
                  src={item.src}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover mb-4"
                />

                {/* Product Name & Description */}
                <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                {/* Price & Quantity */}
                <div className="mt-4 flex flex-col items-center">
                  <span className="bg-[#642f21] text-[#fcb900] px-4 py-2 rounded-lg font-extrabold text-lg">
                    ${item.price}
                  </span>
                  <p className="text-lg font-semibold mt-2">Quantity: {item.quantity}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart({ id: item.id, name: item.name })}
                  className="mt-5 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-red-700"
                >
                  🗑 Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

  
    </>
  );
}
