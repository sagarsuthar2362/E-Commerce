import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductsCard from "./ProductsCard";

const RelatedItem = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const similarProducts = products.filter(
    (item) => item.category == category && item.subCategory == subCategory
  );

  return (
    <div className="md:mt-30 space-y-8">
      <div>
        <div className="flex items-center justify-center gap-4">
          <h1 className="uppercase text-3xl ">
            <span className="text-gray-600">related </span>
            products
          </h1>

          <p className="h-1 w-8 sm:w-12 bg-gray-700"></p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {similarProducts.slice(0,5).map((item) => (
          <ProductsCard
          key={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            _id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedItem;
