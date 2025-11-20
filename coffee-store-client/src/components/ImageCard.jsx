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
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="w-full px-4 md:px-0">
      <div className="text-center mt-10 md:mt-20 mb-10">
        <h1 className="raleway-regular text-[#331A15] text-sm md:text-base">
          Follow Us Now
        </h1>
        <h1 className="text-3xl md:text-4xl rancho-regular text-[#331A15] mt-2">
          Follow on Instagram
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-[90%] mx-auto mb-10">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Coffee ${idx + 1}`}
            className="w-full h-auto rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
