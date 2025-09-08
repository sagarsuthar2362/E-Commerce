import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import addProducts from "./AddProduct";

const AdminLayout = () => {
  const location = useLocation().pathname;

  return (
    <div className="h-screen">
      <nav className="flex items-center justify-between border-b border-gray-300 md:px-12 px-2 py-2">
        <img src={assets.logo} alt="" className="h-15" />

        <button className="bg-red-500 text-white rounded-xl px-4 py-1 cursor-pointer text-sm">
          Logout
        </button>
      </nav>

      <section className="md:px-12 px-2 flex">
        {/* sidebar */}
        <div
          className="border-r border-gray-300 h-screen md:w-2/12 pt-7 text-sm space-y-5"
          id="adminSidebar"
        >
          <NavLink
            to={"/admin/add"}
            className="border flex items-center gap-2  border-r-0 p-2"
          >
            <img src={assets.add_icon} className="h-6" />
            <p className="hidden md:block">Add Items</p>
          </NavLink>

          <NavLink
            to={"/admin/list"}
            className="border flex items-center gap-2  border-r-0 p-2  "
          >
            <img src={assets.order_icon} className="h-6" />
            <p className="hidden md:block"> List Items</p>
          </NavLink>

          <NavLink
            to={"/admin/orders"}
            className="border flex items-center gap-2  border-r-0 p-2 "
          >
            <img src={assets.parcel_icon} className="h-6" />
            <p className="hidden md:block"> Orders</p>
          </NavLink>
        </div>

        {/* admin sections */}
        <div className="bg-red-200 flex-1 p-8">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AdminLayout;
