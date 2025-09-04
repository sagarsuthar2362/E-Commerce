import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Service = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full p-10">
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <div>
            <img src={assets.exchange_icon} alt="" className="h-12" />
          </div>
          <div>
            <h1>Easy Exchange Policy</h1>
            <p className="text-gray-500">We offer hassle free exchange policy</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-8">
          <div>
            <img src={assets.quality_icon} alt="" className="h-12" />
          </div>
          <div>
            <h1>Easy Exchange Policy</h1>
            <p className="text-gray-500">We offer hassle free exchange policy</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-8">
          <div>
            <img src={assets.support_img} alt="" className="h-12" />
          </div>
          <div>
            <h1>Easy Exchange Policy</h1>
            <p className="text-gray-500">We offer hassle free exchange policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
