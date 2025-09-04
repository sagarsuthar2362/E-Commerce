import React from "react";

const Title = ({ text1, text2, center, size }) => {
  return (
    <div
      className={`flex items-center gap-4 mt-10 ${center && "justify-center"}`}
    >
      <h1 className={`uppercase text-${size || "3xl"}`}>
        <span className="text-gray-600">{text1}</span> {text2}
      </h1>

      <p className="w-12 h-[2px] bg-black"></p>
    </div>
  );
};

export default Title;
