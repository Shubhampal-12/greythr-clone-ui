import React from "react";
import Navbar from "../navbar/Navbar";


const logo = "http://127.0.0.1:8000/getimages/logo";

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="flex    mt-8 items-center justify-center">
      <div className="border-2 bg-gray-100   rounded-xl p-15 shadow-black shadow-xl md:p-20  ">

        <div className="text-center my-8 mt-[-33px]">

          <img src={logo} alt="" className=" h-[50px] ml-[80px]" />
          <h2 className="text-3xl font-bold mt-5 ">Hero here! 👋</h2>

        </div>

        <form className="flex flex-col p-5 items-center justify-center">
          <input
            className="border-2 text-black outline-none bg-transparent border-blue-700 rounded-lg px-5  py-3 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />

          <input
            className="border-2 text-black outline-none bg-transparent border-blue-600 rounded-lg px-5 py-3 text-xl placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your Password"
          />

          <button className="border-2 mt-10 text-white outline-none  border-blue-600  bg-blue-600 rounded-lg px-20 py-2 text-xl placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
