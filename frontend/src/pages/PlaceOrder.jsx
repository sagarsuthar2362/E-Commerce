import React from "react";
import Title from "../components/Title";
import TotalPrice from "../components/TotalPrice";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center">
      <Title text1={"delivery"} text2={"information"} />
      <section className="flex justify-between">
        <div className="w-4/12">
          <form className="flex flex-col gap-3  mt-10">
            <div className="flex gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="border border-gray-300 outline-none p-2 rounded"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="border border-gray-300 outline-none p-2 rounded"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-gray-300 outline-none p-2 rounded"
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              className="border border-gray-300 outline-none p-2 rounded"
            />

            <div className="flex gap-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border border-gray-300 outline-none p-2 rounded"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                className="border border-gray-300 outline-none p-2 rounded"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                className="border border-gray-300 outline-none p-2 rounded"
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border border-gray-300 outline-none p-2 rounded"
              />
            </div>

            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="border border-gray-300 outline-none p-2 rounded"
            />
          </form>
        </div>

        <div className="w-5/12 flex flex-col gap-5">
          <TotalPrice />

          <Link
            to={"/orders"}
            className="bg-black text-white px-5 py-2 uppercase ml-auto"
          >
           place order
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlaceOrder;
