"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "./auth/AuthContext"; // Import useAuth

export default function ClientLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route
  const { user } = useAuth(); // Get the current user from AuthContext
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Check if the authentication state is ready
    if (user !== undefined) {
      setIsLoading(false); // Authentication state is ready
    }
  }, [user]);

  useEffect(() => {
    // Only redirect if the user is not logged in AND not on the login or register pages
    if (!isLoading && !user && pathname !== "/login" && pathname !== "/register") {
      router.push("/login");
    }
  }, [user, pathname, router, isLoading]);

  // Show a loading spinner or placeholder while checking authentication state
  if (isLoading) {
    return <div>Loading...</div>; // Replace with a proper loading component
  }

  return <>{children}</>;
}