import React from "react";
import banner from "../assets/more/3.png";
import img1 from "../assets/icons/1.png";
import img2 from "../assets/icons/2.png";
import img3 from "../assets/icons/3.png";
import img4 from "../assets/icons/4.png";
import { FaCoffee } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full">
      <img src={banner} alt="Banner" className="w-full object-cover" />
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 left-[400px] bottom-[500px]">
        <h1 className="text-4xl md:text-5xl text-white rancho-regular mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <h5 className="text-white max-w-xl">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </h5>
        <button className="btn bg-[#E3B577] rancho-regular mt-5 text-2xl">
          Learn More
        </button>
      </div>
      {/* card */}
      <div className="bg-[#ECEAE3] w-full p-5 ">
        <div className="max-w-[80%] mx-auto flex gap-7">
          <div className="space-y-2">
            <img src={img1} alt="" />
            <h1 className="text-2xl text-[#331A15] font-bold">Awesome Aroma</h1>
            <p className="raleway-regular text-[#331A15] ">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img src={img2} alt="" />
            <h1 className="text-2xl text-[#331A15] font-bold">High Quality</h1>
            <p className="raleway-regular text-[#331A15] ">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="space-y-2">
            <img src={img3} alt="" />
            <h1 className="text-2xl text-[#331A15] font-bold">Pure Grades</h1>
            <p className="raleway-regular text-[#331A15] ">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-2">
            <img src={img4} alt="" />
            <h1 className="text-2xl text-[#331A15] font-bold">
              Proper Roasting
            </h1>
            <p className="raleway-regular text-[#331A15] ">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
      {/* show items */}
      <div className="text-center mt-30 w-full">
        <h1 className="raleway-regular text-[#331A15]">--- Sip & Savor ---</h1>
        <h1 className="rancho-regular text-4xl">Our Popular Products</h1>
        <button className="flex gap-2 btn bg-[#E3B577] border-[#331A15] mx-auto mt-3 ">
          Add Coffee <FaCoffee></FaCoffee>
        </button>
      </div>
    </div>
  );
};

export default Hero;
