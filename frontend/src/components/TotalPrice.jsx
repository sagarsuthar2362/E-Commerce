import React, { useCallback, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useLocation } from "react-router-dom";
import Title from "./Title";
import { assets } from "../assets/frontend_assets/assets";

const TotalPrice = () => {
  const { currency, subtotal, delivery_fees } = useContext(ShopContext);
  const location = useLocation().pathname;
  return (
    <div>
      {" "}
      <div className="mt-10 flex flex-col justify-self-end w-full gap-3">
        <Title text1={"cart"} text2={"totals"} />

        <div className="divide-y divide-gray-300 w-full ">
          <div className="flex justify-between py-1 text-sm">
            <p className="capitalize ">subtotal </p>
            <span>
              {currency} {subtotal}
            </span>
          </div>

          <div className="flex justify-between py-1 text-sm">
            <p className="capitalize ">shipping fee </p>
            <span>
              {currency} {delivery_fees}
            </span>
          </div>

          <div className="flex justify-between py-1 text-sm">
            <p className="uppercase ">
              {" "}
              <strong>total</strong>
            </p>
            <span>
              <strong>
                {currency} {subtotal + delivery_fees}
              </strong>
            </span>
          </div>
        </div>

        {/* {location === "/place-order" && (
   
        )} */}
      </div>
    </div>
  );
};

export default TotalPrice;
