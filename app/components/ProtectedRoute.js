"use client";
// import { useAuth } from "../auth/AuthContext";
import { useAuth } from "../auth/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if user is not authenticated
    }
  }, [user, router]);

  return user ? children : null;
}