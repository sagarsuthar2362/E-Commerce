import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <form className="w-[90%] sm:max-w-96 flex flex-col gap-3 items-center justify-center mx-auto">
      <Title text1={currentState} size={"3xl"} />

      {currentState === "Sign Up" && (
        <input
          type="text"
          name="username"
          className="border border-gray-600 outline-none rounded-sm px-3 py-1 w-full"
          placeholder="username"
          required
        />
      )}

      <input
        type="text"
        name="email"
        className="border border-gray-600 outline-none rounded-sm px-3 py-1 w-full"
        placeholder="email"
        required
      />

      <input
        type="text"
        name="password"
        className="border border-gray-600 outline-none rounded-sm px-3 py-1 w-full"
        placeholder="password"
        required
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

      <button className="bg-black py-1 text-white w-full cursor-pointer rounded-sm">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
