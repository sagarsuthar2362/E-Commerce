import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const fetchMyOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/order/my-orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  console.log(orders);

  return (
    <>
      <Title text1={"my"} text2={"orders"} />
      <div className="divide-y mt-10">
        {orders.map((order) => (
          <div key={order._id} className="py-4 text-gray-700">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between mb-6">
                <div className="flex gap-5">
                  <img
                    src={item.image[0]}
                    className="h-[90px]"
                    alt={item.name}
                  />

                  <div className="flex flex-col justify-between">
                    <h2 className="font-medium">{item.name}</h2>
                    <div className="flex gap-8">
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="w-1/2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <p className="w-2 h-2 rounded-full bg-green-500"></p>
                    <p>{order.status}</p>
                  </div>

                  <button className="border px-2 py-1 rounded-md border-gray-200 cursor-pointer">
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
