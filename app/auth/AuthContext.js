"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check localStorage for user on initial load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(
      (u) => u.email === email.trim() && u.password === password.trim()
    );
  
    if (user) {
      setUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
    
  };
  
  // Register function
  const register = async (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email.trim());
    if (userExists) return false;
  
    const newUser = { email: email.trim(), password: password.trim() };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // Save updated users list
    localStorage.setItem("currentUser", JSON.stringify(newUser)); // Set current user
    setUser(newUser); // Update state
    return true;
    

  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);