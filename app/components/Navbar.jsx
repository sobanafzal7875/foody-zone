"use client";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for active link detection
import { useCart } from "@/app/useCart"; // Import useCart hook

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname(); // Get the current route
  const { cart } = useCart(); // Get cart data
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total items

  // Define navItems array with paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu", submenu: ["Menu 1", "Menu 2"] },
    { name: "Shop", path: "/shop",  },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full z-50 ${isMobileMenuOpen ? "bg-white" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <CloseIcon className="text-gray-700" />
                ) : (
                  <MenuIcon className="text-white" />
                )}
              </button>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative" onMouseEnter={() => setOpenDropdown(index)}>
                  <Link href={item.path} className={`flex items-center transition-colors duration-300 ${
                    pathname === item.path ? "text-yellow-500" : "text-white hover:text-yellow-500"
                  }`}>
                    {item.name}
                    {item.submenu && <ArrowDropDownIcon className="ml-1" />}
                  </Link>

                  {/* Dropdown Submenu (Desktop) */}
                  {openDropdown === index && item.submenu && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-50"
                      onMouseLeave={() => setOpenDropdown(null)}>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link key={subIndex} href={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-500 transition-colors duration-300">
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cart Icon (Desktop) with Badge */}
            <div className="hidden lg:flex items-center relative">
              <Link href="/cart">
                <ShoppingCartIcon className="text-white hover:text-yellow-500 cursor-pointer transition-colors duration-300" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white mt-4 space-y-4 py-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link href={item.path} className={`block py-2 transition-colors duration-300 ${
                    pathname === item.path ? "text-yellow-500" : "text-gray-700 hover:text-yellow-500"
                  }`} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                </div>
              ))}

              {/* Cart Icon (Mobile) with Badge */}
              <div className="flex items-center mt-4 relative">
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
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
