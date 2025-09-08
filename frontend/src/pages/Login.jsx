import React, { useState } from "react";
import Title from "../components/Title";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // validator
  const validateForm = () => {
    if (
      currentState === "Sign Up" &&
      (!formData.username || !formData.email || !formData.password)
    ) {
      return false;
    }
    if (
      currentState === "Sign Up" &&
      (!formData.username || !formData.email || !formData.password)
    ) {
      return false;
    }

    return true;
  };

  const handleAuthSuccess = (res) => {
    const token = res?.data?.token;
    localStorage.setItem("token", token);
    toast.success(res?.data?.message, {
      theme: "dark",
    });
    navigate("/", { state: { successMessage: "Logged in successfully" } ,replace:true});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) return;

      const url =
        currentState === "Sign Up"
          ? "http://localhost:3000/api/user/register"
          : "http://localhost:3000/api/user/login";

      const res = await axios.post(url, formData);
      handleAuthSuccess(res);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong", {
        theme: "dark",
      });
    }
  };

  console.log(formData);

  return (
    <div>
      <ToastContainer />

      <form className="w-[90%] sm:max-w-96 flex flex-col gap-3 items-center justify-center mx-auto">
        <Title text1={currentState} size={"3xl"} />

        {currentState === "Sign Up" && (
          <input
            type="text"
            name="username"
            className="border border-gray-600 outline-none rounded-sm px-3 py-1 w-full"
            placeholder="username"
            required
            onChange={(e) => handleChange(e)}
            value={formData.username}
          />
        )}

        <input
          type="text"
          name="email"
          className="border border-gray-600 outline-none rounded-sm px-3 py-1 w-full"
          placeholder="email"
          required
          onChange={(e) => handleChange(e)}
          value={formData.email}
        />

        <input
          type="password"
          name="password"
          className="border border-gray-600 outline-none rounded-sm px-3 py-1 w-full"
          placeholder="password"
          required
          onChange={(e) => handleChange(e)}
          value={formData.password}
        />
        <div className="flex w-full justify-between text-gray-400 text-sm">
          <p className="cursor-pointer">Forgot password</p>
          <p
            className="cursor-pointer"
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
          >
            {" "}
            {currentState === "Login" ? "Create new" : "Login Here"}
          </p>
        </div>

        <button
          className="bg-black py-1 text-white w-full cursor-pointer rounded-sm"
          type="submit"
          onClick={handleSubmit}
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
