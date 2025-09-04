import React from "react";

const Subscribe = () => {
  return (
    <div className="md:w-6/12 w-full mx-auto space-y-3 mt-8">
        <h1 className="text-2xl text-center font-semibold text-gray-800">Subscribe now & get 20% off</h1>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          corporis.
        </p>

      <div className="border border-gray-200 flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-none flex-1 px-3 py-3"
        />
        <button className="uppercase bg-black text-white px-8">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
