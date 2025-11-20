import React from "react";
import banner from "../assets/more/3.png";
import img1 from "../assets/icons/1.png";
import img2 from "../assets/icons/2.png";
import img3 from "../assets/icons/3.png";
import img4 from "../assets/icons/4.png";
import { FaCoffee } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <img src={banner} alt="Banner" className="w-full object-cover" />
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl text-white rancho-regular mb-4 leading-snug md:leading-tight max-w-2xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <h5 className="text-white max-w-xl text-sm md:text-base">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </h5>
          <button className="btn bg-[#E3B577] rancho-regular mt-5 text-lg md:text-2xl px-6 md:px-10">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3] w-full py-10">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              img: img1,
              title: "Awesome Aroma",
              desc: "You will definitely be a fan of the design & aroma of your coffee",
            },
            {
              img: img2,
              title: "High Quality",
              desc: "We served the coffee to you maintaining the best quality",
            },
            {
              img: img3,
              title: "Pure Grades",
              desc: "The coffee is made of the green coffee beans which you will love",
            },
            {
              img: img4,
              title: "Proper Roasting",
              desc: "Your coffee is brewed by first roasting the green coffee beans",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <h1 className="text-xl md:text-2xl text-[#331A15] font-bold">
                {item.title}
              </h1>
              <p className="text-[#331A15] text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 md:mt-16 w-full px-4">
        <h1 className="raleway-regular text-[#331A15] text-sm md:text-base">
          --- Sip & Savor ---
        </h1>
        <h1 className="rancho-regular text-3xl md:text-4xl mt-2">
          Our Popular Products
        </h1>
        <button className="flex gap-2 btn bg-[#E3B577] border-[#331A15] mx-auto mt-4 text-lg md:text-xl px-6 md:px-10 items-center justify-center">
          Add Coffee <FaCoffee />
        </button>
      </div>
    </div>
  );
};

export default Hero;
