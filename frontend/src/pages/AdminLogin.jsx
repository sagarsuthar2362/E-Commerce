import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const backendApi = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "qwerty@123",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${backendApi}/api/user/admin`,
        formData
      );
      const token = res.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message || "Login after some time");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <ToastContainer />
      <div className="shadow-xl p-5 md:w-3/12 space-y-4">
        <h1 className="text-lg text-center font-medium ">Admin Panel</h1>

        <form action="" className="space-y-4">
          <div className="flex flex-col text-sm">
            <label className="text-gray-500 ">Email Address</label>
            <input
              type="email"
              placeholder="admin@email.com"
              className="p-2 outline-none border border-gray-300 rounded-sm"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              name="email"
            />
          </div>

          <div className="flex flex-col text-sm">
            <label className="text-gray-500 ">Password</label>
            <input
              type="password"
              placeholder="*******"
              className="p-2 outline-none border border-gray-300 rounded-sm"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              name="password"
            />
          </div>

          <button
            className="bg-black text-white w-full p-2 rounded-sm cursor-pointer"
            onClick={(e) => handleSubmit(e)}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
