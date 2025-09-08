import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
// import { MdDelete } from "react-icons/md";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import TotalPrice from "../components/TotalPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    products,
    currency,
    delivery_fees,
    removeFromCart,
    updateQty,
    subtotal,
  } = useContext(ShopContext);

  return (
    <div>
      <Title text1={"your"} text2={"cart"} />

      <div>
        {cartItems.length > 0 ? (
          <div className="border-t border-gray-300 divide-y divide-gray-300">
            {/* items in cart */}
            {cartItems.map((item) => (
              <div className="py-4" key={item._id}>
                <div className="flex items-center justify-between gap-7">
                  {/* left side */}
                  <div className="flex gap-8">
                    <img src={item.image[0]} alt="" className="h-24" />

                    <div>
                      <h2>{item.name}</h2>

                      <div className="flex items-center gap-8">
                        <p>
                          {currency}
                          {item.price}
                        </p>
                        <p className="p-2 h-8 w-8 border-gray-200 bg-gray-100 text-gray-600 flex items-center justify-center">
                          {item.selectedSize}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* right side */}
                  <div className="flex md:flex-row flex-col items-center md:gap-20 gap-5">
                    {/* quantity box */}
                    <input
                      type="number"
                      id=""
                      value={item.quantity}
                      className="border border-gray-300 p-1 w-15"
                      onChange={(e) =>
                        e.target.value <= 0
                          ? null
                          : updateQty(item, Number(e.target.value))
                      }
                    />

                    {/* remove from cart */}
                    <button
                      className="cursor-pointer"
                      onClick={() => removeFromCart(item)}
                    >
                      <img src={assets.bin_icon} alt="" className="h-7 w-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* total section */}
            <div className="w-4/12 ml-auto flex flex-col gap-5">
              <TotalPrice />

              <Link
                to={"/place-order"}
                className="bg-black text-white px-5 py-2 uppercase ml-auto"
              >
                proceed to checkout
              </Link>
            </div>
          </div>
        ) : (
          <div>your cart is empty</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
