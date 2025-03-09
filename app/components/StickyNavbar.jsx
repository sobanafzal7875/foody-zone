"use client";

import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for active link detection
import { useCart } from "@/app/useCart"; // Import custom cart hook

const StickyNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); // Get the current route
  const { cart } = useCart(); // Get cart data
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total items

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Menu",
      path: "/menu",
      submenu: [
        { name: "Menu 1", path: "/menu/menu-1" },
        { name: "Menu 2", path: "/menu/menu-2" },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
    },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll event for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-md w-full fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out hidden lg:block ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Navigation Items */}
          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 flex items-center ${
                    pathname === item.path ? "text-yellow-500 font-bold" : ""
                  }`}
                >
                  {item.name}
                  {item.submenu && <ArrowDropDownIcon className="ml-1" />}
                </Link>

                {/* Dropdown Menu */}
                {openDropdown === index && item.submenu && (
                  <div className="absolute top-full left-0 bg-white shadow-lg z-50 rounded-lg mt-2 py-2 w-48">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-500 transition-colors duration-300"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Shopping Cart Icon with Badge */}
          <div className="flex items-center relative">
            <Link href="/cart">
              <ShoppingCartIcon className="text-gray-700 hover:text-yellow-500 cursor-pointer transition-colors duration-300" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
