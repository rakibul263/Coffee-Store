import React from "react";
import logo from "../assets/more/logo1.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#331A15]/90 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="rancho-regular text-2xl">Espresso Emporium</h1>
        </div>
        <div className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className="hover:text-[#D2B48C]">
            Home
          </Link>
          <Link to="/addCoffee" className="hover:text-[#D2B48C]">
            Add Coffee
          </Link>
          <Link to="/menu" className="hover:text-[#D2B48C]">
            Menu
          </Link>
          <Link to="/contact" className="hover:text-[#D2B48C]">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <Link to="https://www.facebook.com/">
            <FaFacebook
              size={20}
              className="hover:text-blue-500 duration-200"
            />
          </Link>
          <Link to="https://github.com/">
            <FaGithub size={20} className="hover:text-gray-300 duration-200" />
          </Link>
          <Link to="https://www.linkedin.com/">
            <FaLinkedin
              size={20}
              className="hover:text-blue-400 duration-200"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
