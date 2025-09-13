import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between lg:h-[300px] lg:items-center mt-20 gap-8">
      <div className="lg:w-5/12 w-full">
        <img src={assets.logo} alt="" className="w-35" />
        <p className="mt-5 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi
          praesentium perferendis amet placeat illum, libero totam cumque
          possimus laudantium ea ullam, magni deleniti cupiditate repellat
          pariatur voluptas alias aut et! Deserunt culpa repellat id!
        </p>
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-32 gap-12">
        <div>
          <h1 className="uppercase font-medium text-xl">company</h1>
          <ul className="text-gray-600 mt-5 text-sm space-y-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase font-medium text-xl">get in touch</h1>
          <div className="space-y-2 text-gray-600 w-68 mt-5 text-sm">
            <p>
              📍 Address: <br /> 1234 MG Road, Near Central Mall, Andheri West,
              Mumbai, Maharashtra – 400053
            </p>

            <p>
              📞 Phone:
              <br /> +91 99999 99999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
