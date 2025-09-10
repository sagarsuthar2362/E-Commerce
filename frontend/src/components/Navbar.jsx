import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { setShowSearch, showSearch } = useContext(ShopContext);
  const { cartItems } = useContext(ShopContext);

  // number of items in cart
  const cartItemsQuantity = cartItems
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  // navigate
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between border-b pb-4 border-gray-300">
      <div className="">
        <Link to={"/"}>
          <img src={assets.logo} className="md:h-13 h-10" />
        </Link>
      </div>

      <ul className="md:flex hidden gap-9 ">
        <NavLink to={"/"} className="flex flex-col items-center border-none">
          <p>HOME</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="flex flex-col items-center border-none"
        >
          <p>COLLECTION</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to={"/about"}
          className="flex flex-col items-center border-none"
        >
          <p>ABOUT</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to={"/contact"}
          className="flex flex-col items-center border-none"
        >
          <p>CONTACT</p>
          <hr className="w-1/2 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-8">
        <img
          src={assets.search_icon}
          alt=""
          onClick={() => setShowSearch(true)}
          className="w-5 cursor-pointer"
        />

        <div className="group relative cursor-pointer">
          <img
            src={assets.profile_icon}
            className="w-5"
            onClick={() => {
              if (!token) {
                navigate("/login");
              }
            }}
          />

          {token && (
            <div className="group-hover:block hidden absolute right-0 top-6 bg-slate-100 p-4">
              <div className="px-8 space-y-5">
                <Link to={"/orders"} className="cursor-pointer">
                  Orders
                </Link>
                <p className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="w-5 cursor-pointer relative">
          <img src={assets.cart_icon} alt="" />

          <div className="absolute right-[-5px] bottom-[-5px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
            <p className="text-xs font-semibold">{cartItemsQuantity}</p>
          </div>
        </Link>

        {/* hamburger menu */}
        <div
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setVisible(true)}
        >
          <img src={assets.menu_icon} alt="" />
        </div>
      </div>

      {/* sidebar */}
      {visible && (
        <div className="top-0 left-0 absolute w-full h-full bg-white text-black transition-all duration-300">
          <div
            className="flex items-center gap-4 p-4 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} className="rotate-180 h-5" />
            <p className="font-semibold text-xl">Back</p>
          </div>

          <ul id="sidebar" className="flex flex-col">
            <NavLink
              to={"/"}
              onClick={() => setVisible(false)}
              className={`py-3 px-6`}
            >
              HOME
            </NavLink>

            <NavLink
              to={"/collection"}
              onClick={() => setVisible(false)}
              className={`py-3 px-6`}
            >
              COLLECTION
            </NavLink>

            <NavLink
              to={"/about"}
              onClick={() => setVisible(false)}
              className={`py-3 px-6`}
            >
              ABOUT
            </NavLink>

            <NavLink
              to={"/contact"}
              onClick={() => setVisible(false)}
              className={`py-3 px-6`}
            >
              CONTACT
            </NavLink>

            <NavLink
              to={"/"}
              onClick={() => setVisible(false)}
              className={`py-3 px-6`}
            >
              ADMIN PANEL
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
