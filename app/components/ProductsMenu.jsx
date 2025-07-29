"use client"
import React, { useState, useEffect } from "react";
import CategorySelector from "./CategorySelector";
import MenuItems from "./MenuItems";

const ProductsMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Burger");
  const [menuData, setMenuData] = useState([]);

  // Fetching data (simulate backend API call)
  useEffect(() => {
    const fetchData = async () => {
     const data = [
  { src: "/burger-02.png", name: "BIGTI BURGER", price: "$10.35", category: "Burger", desc: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula" },
  { src: "/burger-02.png", name: "KOMIL BURGER", price: "$11.40", category: "Burger", desc: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula" },
  { src: "/burger-02.png", name: "SOUGH BURGER", price: "$8.60", category: "Burger", desc: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula" },
  { src: "/burger-02.png", name: "SOUGH BURGER", price: "$8.60", category: "Burger", desc: "Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula" },
  { src: "/burger-02.png", name: "Caesar Salad", price: "$7.99", category: "Salad", desc: "Fresh lettuce, parmesan, croutons, and Caesar dressing" },
  { src: "/burger-02.png", name: "Caesar Salad", price: "$7.99", category: "Salad", desc: "Fresh lettuce, parmesan, croutons, and Caesar dressing" },
  { src: "/burger-02.png", name: "Caesar Salad", price: "$7.99", category: "Salad", desc: "Fresh lettuce, parmesan, croutons, and Caesar dressing" },
  { src: "/burger-02.png", name: "Greek Salad", price: "$9.49", category: "Salad", desc: "Tomatoes, cucumbers, olives, feta cheese, and olive oil" },
  { src: "/burger-02.png", name: "Classic Fries", price: "$4.99", category: "French Fries", desc: "Crispy golden fries with a side of ketchup" },
  { src: "/burger-02.png", name: "Cheese Fries", price: "$5.99", category: "French Fries", desc: "Fries loaded with melted cheddar cheese" },
  { src: "/burger-02.png", name: "Cheese Fries", price: "$5.99", category: "French Fries", desc: "Fries loaded with melted cheddar cheese" },
  { src: "/burger-02.png", name: "Cheese Fries", price: "$5.99", category: "French Fries", desc: "Fries loaded with melted cheddar cheese" },
  { src: "/burger-02.png", name: "Spicy Fried Chicken", price: "$11.99", category: "Fried Chicken", desc: "Crispy, spicy fried chicken served with coleslaw" },
  { src: "/burger-02.png", name: "Spicy Fried Chicken", price: "$11.99", category: "Fried Chicken", desc: "Crispy, spicy fried chicken served with coleslaw" },
  { src: "/burger-02.png", name: "Spicy Fried Chicken", price: "$11.99", category: "Fried Chicken", desc: "Crispy, spicy fried chicken served with coleslaw" },
  { src: "/burger-02.png", name: "BBQ Fried Chicken", price: "$12.49", category: "Fried Chicken", desc: "Tender chicken coated in smoky BBQ sauce" },
];

      setMenuData(data);
    };

    fetchData();
  }, []);

  // Filter items based on selected category
  const filteredItems = menuData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Selector Component */}
      <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Menu Items Component */}
      <MenuItems items={filteredItems} />
    </div>
  );
};

export default ProductsMenu;
