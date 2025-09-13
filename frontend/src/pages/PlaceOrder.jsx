import React, { useContext, useState } from "react";
import Title from "../components/Title";
import TotalPrice from "../components/TotalPrice";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { cartItems, price, subtotal, delivery_fees, clearCart } =
    useContext(ShopContext);
  const amount = Number(subtotal + delivery_fees);
  const [paymentMethod, setpaymentMethod] = useState("");

  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    },
    phone: "",
    paymentMethod: "",
    cartItems,
    amount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["street", "city", "zipcode", "state", "country"].includes(name)) {
      setformData({
        ...formData,
        address: { ...formData.address, [name]: value },
      });
    } else {
      setformData({ ...formData, [name]: value });
    }
  };

  const handlePaymentMethod = (method) => {
    setpaymentMethod(method);
    setformData({ ...formData, paymentMethod: method });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/order",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 201) {
        await clearCart();
        navigate("/orders");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isFormValid = () => {
    const { firstname, lastname, email, address, phone, paymentMethod } =
      formData;

    return (
      firstname.trim() &&
      lastname.trim() &&
      email.trim() &&
      address.city.trim() &&
      address.country.trim() &&
      address.state.trim() &&
      address.street.trim() &&
      address.zipcode.trim() &&
      phone.trim() &&
      paymentMethod.trim()
    );
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
      <Title text1={"delivery"} text2={"information"} />

      <section className="flex md:flex-row flex-col justify-between">
        {/* left div */}
        <div className="md:w-4/12 w-full">
          <div className="flex flex-col gap-3 mt-10">
            <div className="flex gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="border border-gray-300 outline-none p-2 rounded"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="border border-gray-300 outline-none p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-gray-300 outline-none p-2 rounded"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              className="border border-gray-300 outline-none p-2 rounded"
              onChange={handleChange}
              required
            />

            <div className="flex gap-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border border-gray-300 outline-none p-2 rounded"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                className="border border-gray-300 outline-none p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-3">
              <input
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                className="border border-gray-300 outline-none p-2 rounded"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border border-gray-300 outline-none p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="border border-gray-300 outline-none p-2 rounded"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* right div */}
        <div className="md:w-5/12 w-full flex flex-col gap-5">
          <TotalPrice />

          <div>
            <Title text1={"payment"} text2={"method"} size={"xl"} />

            <div className="grid grid-cols-3 gap-5 ">
              <div
                className=" flex items-center gap-2 border p-2 border-gray-300"
                onClick={() => handlePaymentMethod("stripe")}
              >
                <p
                  className={`w-3 h-3 ${
                    paymentMethod === "stripe" && "bg-green-500"
                  } rounded-full border`}
                ></p>
                <img src={assets.stripe_logo} alt="" className="h-6" />
              </div>

              <div
                className=" flex items-center gap-2 border p-2 border-gray-300"
                onClick={() => handlePaymentMethod("razorpay")}
              >
                <p
                  className={`w-3 h-3 ${
                    paymentMethod === "razorpay" && "bg-green-500"
                  } rounded-full border`}
                ></p>
                <img src={assets.razorpay_logo} alt="" className="h-6" />
              </div>

              <div
                className=" flex items-center gap-2 border p-2 border-gray-300"
                onClick={() => handlePaymentMethod("COD")}
              >
                <p
                  className={`w-3 h-3 ${
                    paymentMethod === "COD" && "bg-green-500"
                  } rounded-full border`}
                ></p>
                <p className="uppercase text-gray-500">cash on delivery</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`px-5 py-2 uppercase ml-auto ${
              isFormValid()
                ? "bg-black text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Place Order
          </button>
        </div>
      </section>
    </form>
  );
};

export default PlaceOrder;
