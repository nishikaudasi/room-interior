"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

export function Provider({ children }) {
  const { user } = useUser();

  const VerifyUser = async () => {
    try {
      console.log("User data being sent:", user); // Debugging
      const dataResult = await axios.post("/api/verify-user", {
        user: user,
      });
      console.log(dataResult.data);
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  return <div>{children}</div>;
}

export default Provider;