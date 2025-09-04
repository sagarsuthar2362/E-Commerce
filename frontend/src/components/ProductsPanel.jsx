import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { ShopContext } from "../context/ShopContext";

const ProductsPanel = ({ title, start, end, bestseller }) => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <div className="text-center mt-10 space-y-2">
        <div className="flex items-center justify-center gap-8">
          <h1 className="uppercase text-4xl ">
            <span className="text-gray-600">{title.split(" ")[0]} </span>
            {title.split(" ")[1]}
          </h1>

          <p className="h-1 w-8 sm:w-12 bg-gray-700"></p>
        </div>

        <p className="md:text-md text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-5 mt-10 grid-cols-2 md:grid-cols-3">
        {bestseller
          ? products
              .filter((item) => item.bestseller)
              .map((item) => (
                <ProductsCard
                  _id={item._id}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  key={item._id}
                />
              ))
          : products
              .slice(start, end)
              .map((item) => (
                <ProductsCard
                  _id={item._id}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  key={item._id}
                />
              ))}
      </div>
    </div>
  );
};

export default ProductsPanel;
