import React from "react";
import banner from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src={banner}
        alt=""
        className="h-20 w-full object-cover fixed top-0 left-0 z-10"
      />
      <div className="fixed top-0 left-0 w-full h-20 flex items-center justify-center gap-4 z-20">
        <img src={logo} alt="" className="w-10" />
        <h1 className="rancho-regular text-white text-3xl">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Header;
