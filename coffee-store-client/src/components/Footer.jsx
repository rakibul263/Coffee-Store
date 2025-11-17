import React from "react";
import logo from "../assets/more/logo1.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] w-full py-12 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left Side */}
        <div>
          <img src={logo} alt="Logo" className="w-[75px] h-[90px]" />

          <h1 className="rancho-regular text-[#331A15] text-3xl mt-4 mb-3">
            Espresso Emporium
          </h1>

          <p className="raleway-regular text-gray-700 leading-relaxed w-[90%]">
            Always ready to be your friend. Come & contact with us to share your
            memorable moments with the best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-[#331A15]">
            <Link to="https://www.facebook.com/rakibul13631/">
              <FaFacebook
                size={32}
                className="hover:text-blue-500 duration-200"
              />
            </Link>
            <Link to="https://github.com/rakibul263">
              <FaGithub
                size={32}
                className="hover:text-gray-700 duration-200"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/itzshuvo/">
              <FaLinkedin
                size={32}
                className="hover:text-blue-600 duration-200"
              />
            </Link>
          </div>

          <h4 className="rancho-regular text-[#331A15] text-2xl mt-6 mb-4">
            Get in Touch
          </h4>

          <div className="space-y-3 raleway-regular text-gray-700">
            <p className="flex items-center gap-3">
              <IoCall size={20} /> +8801521711716
            </p>
            <p className="flex items-center gap-3">
              <MdEmail size={20} /> rakibulhasanshuvo206@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <IoLocation size={20} /> Mirpur-13, Dhaka-1216
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-25">
          <h1 className="rancho-regular text-[#331A15] text-3xl mb-6">
            Connect with Us
          </h1>

          <div className="space-y-4 flex flex-col justify-center">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full rounded-lg"
            />

            <textarea
              placeholder="Type your message..."
              className="textarea textarea-bordered w-full h-[120px] rounded-lg"
            ></textarea>
            <button className="rancho-regular text-[#331A15] btn btn-outline border-2 rounded-3xl px-8 mt-5 font-bold text-xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
