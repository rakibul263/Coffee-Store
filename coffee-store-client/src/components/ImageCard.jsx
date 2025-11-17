import React from "react";
import img1 from "../assets/cups/Rectangle 9.png";
import img2 from "../assets/cups/Rectangle 10.png";
import img3 from "../assets/cups/Rectangle 11.png";
import img4 from "../assets/cups/Rectangle 12.png";
import img5 from "../assets/cups/Rectangle 13.png";
import img6 from "../assets/cups/Rectangle 14.png";
import img7 from "../assets/cups/Rectangle 15.png";
import img8 from "../assets/cups/Rectangle 16.png";

const ImageCard = () => {
  return (
    <div>
      <div className="text-center mt-30 mb-20">
        <h1 className="raleway-regular text-[#331A15]">Follow Us Now</h1>
        <h1 className="text-4xl rancho-regular text-[#331A15]">
          Follow on Instagram
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5 max-w-[80%] mx-auto mb-30">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </div>
  );
};

export default ImageCard;
