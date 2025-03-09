"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Fetch cart data from localStorage
const fetchCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    console.error("Error fetching cart:", error);
    return [];
  }
};

// Save cart data to localStorage
const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

export const useCart = () => {
  const queryClient = useQueryClient();

  // Fetch cart data
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  // Add item to cart (increase quantity for the same item)
  const addToCartMutation = useMutation({
    mutationFn: (item) => {
      const existingItem = cart.find((i) => i.id === item.id && i.name === item.name);
      const newCart = existingItem
        ? cart.map((i) =>
            i.id === item.id && i.name === item.name
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...cart, { ...item, quantity: 1 }];

      saveCart(newCart);
      return newCart;
    },
    onMutate: async (item) => {
      await queryClient.cancelQueries(["cart"]);
      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (oldCart = []) => {
        const existingItem = oldCart.find((i) => i.id === item.id && i.name === item.name);
        return existingItem
          ? oldCart.map((i) =>
              i.id === item.id && i.name === item.name
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          : [...oldCart, { ...item, quantity: 1 }];
      });

      return { previousCart };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["cart"], context.previousCart);
    },
  });

  // Remove item from cart (completely remove it based on id and name)
  const removeFromCartMutation = useMutation({
    mutationFn: ({ id, name }) => {
      const newCart = cart.filter((item) => !(item.id === id && item.name === name)); // Remove exact match
    console.log(newCart )
      saveCart(newCart);
      return newCart;
    },
    onMutate: async ({ id, name }) => {
      await queryClient.cancelQueries(["cart"]);
      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (oldCart = []) =>
        oldCart.filter((item) => !(item.id === id && item.name === name)) // Remove exact match
      );

      return { previousCart };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["cart"], context.previousCart);
    },
  });

  return {
    cart,
    addToCart: addToCartMutation.mutate,
    removeFromCart: removeFromCartMutation.mutate,
  };
};
