import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductsCard = ({ _id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  

  return (
    <Link to={`/product/${_id}`} className="pb-3 cursor-pointer">
      <div className="md:w-full overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition-all duration-200"
        />
      </div>

      <div className="space-y-1 mt-3">
        <h3>{name}</h3>
        <span>
          {currency}
          {price}
        </span>
      </div>
    </Link>
  );
};

export default ProductsCard;
