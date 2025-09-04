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
      <div className="mt-10 flex flex-col justify-self-end md:w-full gap-3">
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

        {location === "/place-order" && (
          <div>
            <Title text1={"payment"} text2={"method"} size={"xl"} />

            <div className="grid grid-cols-3 gap-5 ">
              <div className=" flex gap-2 border p-2 border-gray-300">
                <input type="radio" name="payment_method" value="stripe" />
                <img src={assets.stripe_logo} alt="" className="h-6" />
              </div>

              <div className=" flex gap-2 border p-2 border-gray-300">
                <input type="radio" name="payment_method" value="razorpay" />
                <img src={assets.razorpay_logo} alt="" className="h-6" />
              </div>

              <div className=" flex gap-2 border p-2 border-gray-300">
                <input type="radio" name="payment_method" value="cod" />
                <p className="uppercase text-gray-500">cash on delivery</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalPrice;
