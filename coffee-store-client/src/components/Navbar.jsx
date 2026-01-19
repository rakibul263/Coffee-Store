import React, { use, useState } from "react";
import logo from "../assets/more/logo1.png";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);

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
          <Link to="/users" className="hover:text-[#D2B48C]">
            Users
          </Link>
          <Link to="/menu" className="hover:text-[#D2B48C]">
            Menu
          </Link>
          <Link to="/contact" className="hover:text-[#D2B48C]">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex">
          {user ? (
            <button
              onClick={logOut}
              className="inline-block btn btn-active hover:bg-[#331A15] hover:text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              onClick={() => setOpen(false)}
              to="/signin"
              className="btn btn-[white]"
            >
              LogIn
            </Link>
          )}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`md:hidden bg-[#331A15]/95 text-white px-6 py-4 space-y-4 font-semibold transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          onClick={() => setOpen(false)}
          to="/"
          className="block hover:text-[#D2B48C]"
        >
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/addCoffee"
          className="block hover:text-[#D2B48C]"
        >
          Add Coffee
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/users"
          className="block hover:text-[#D2B48C]"
        >
          Users
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/menu"
          className="block hover:text-[#D2B48C]"
        >
          Menu
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/contact"
          className="block hover:text-[#D2B48C]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
