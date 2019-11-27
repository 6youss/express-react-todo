import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  return (
    <div className="flex justify-around items-center bg-gray-300 h-screen">
      <Signup />
      <Login />
    </div>
  );
};

export default Auth;
