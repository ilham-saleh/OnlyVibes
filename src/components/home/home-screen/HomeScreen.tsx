"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const HomeScreen = () => {
  return (
    <div>
      <ModeToggle />
      <LogoutLink>Logout</LogoutLink>
    </div>
  );
};

export default HomeScreen;
