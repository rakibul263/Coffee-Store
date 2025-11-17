import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const MainLayout = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div>
        <Navbar></Navbar>
        {/* <Hero></Hero> */}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
