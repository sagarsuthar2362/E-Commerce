import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div>
      <div>
        <Title text1={"my"} text2={"orders"} />
      </div>

      <div className="divide-y mt-10">
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="py-4 text-gray-700 flex justify-between">
            <div className="flex gap-5">
              <img src={item.image[0]} className="h-[90px]" />

              <div className="flex flex-col justify-between">
                <h2 className="font-medium">{item.name}</h2>
                <div className="flex gap-8">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>Date: 25,Jul 2025</p>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p>Ready to ship</p>
              </div>

              <button className="border px-2 py-1 rounded-md border-gray-200 cursor-pointer">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
