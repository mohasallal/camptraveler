"use client";
import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

type SideMenuTypes = {
  children: React.ReactNode;
};

const SideMenu = ({ children }: SideMenuTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    }
  }, [isOpen]);

  
  return (
    <div className="lg:hidden block" onClick={handleMenuOpen}>
      {children}
      {isOpen && (
        <NavLinks className="absolute bg-white gap-5 top-0 left-0 z-30 flex flex-col justify-center items-center w-full h-full" />
      )}
    </div>
  );
};

export default SideMenu;
