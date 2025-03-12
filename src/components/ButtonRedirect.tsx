"use client";
import React from "react";
import { useRouter } from "next/navigation";
const ButtonRedirect = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/register");
  };
  return <button onClick={handleNavigate}>Go To Register</button>;
};

export default ButtonRedirect;
