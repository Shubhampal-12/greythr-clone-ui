import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const logo = "http://127.0.0.1:8000/getimages/logo";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // for redirecting

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("API Response:", result);

        const token =
          result.access_token || Math.random().toString(36).substring(2);
        const user = result.userdata;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/LoginHome");
      } else {
        alert(result.detail);
      }
    } catch {
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-8 items-center justify-center">
        <div className="border-2 bg-gray-100 rounded-xl p-15 shadow-black shadow-xl md:p-20">
          <div className="text-center my-8 mt-[-33px]">
            <img src={logo} alt="logo" className="h-[50px] ml-[80px]" />
            <h2 className="text-3xl font-bold mt-5">Hero here! 👋</h2>
          </div>

          <form
            className="flex flex-col p-5 items-center justify-center"
            onSubmit={handleLogin}
          >
            <input
              className="border-2 text-black outline-none bg-transparent border-blue-700 rounded-lg px-5 py-3 text-xl placeholder:text-gray-400"
              type="email"
              placeholder="Enter your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              className="border-2 text-black outline-none bg-transparent border-blue-600 rounded-lg px-5 py-3 text-xl placeholder:text-gray-400 mt-3"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="border-2 mt-10 text-white outline-none border-blue-600 bg-blue-600 rounded-lg px-20 py-2 text-xl"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
