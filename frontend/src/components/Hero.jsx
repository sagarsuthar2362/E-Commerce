import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="border-1 border-gray-400 flex md:flex-row flex-col my-5">
      {/* left hero section */}
      <div className="md:w-1/2 text-gray-700 flex items-center justify-center">
        <div className="flex flex-col md:gap-2 md:py-2 py-12">
          <div className="flex items-center gap-3">
            <hr className="w-14 h-[1px]" />
            <h2 className="uppercase md:text-xl text-sm font-semibold">
              our bestsellers
            </h2>
          </div>

          <h1 className="md:text-6xl text-4xl" id="hero-text">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-3">
            <h2 className="uppercase md:text-xl text-sm font-semibold">
              shop now
            </h2>
            <hr className="w-14 h-[1px]" />
          </div>
        </div>
      </div>

      {/* right hero section */}
      <div className="md:w-1/2">
        <img src={assets.hero_img} />
      </div>
    </div>
  );
};

export default Hero;
