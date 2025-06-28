import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../StaticHomePage/navbar/Navbar";

const logo = "http://127.0.0.1:8000/getimages/logo";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call /token API to get access token
      const tokenResponse = await axios.post(
        "http://127.0.0.1:8000/auth/token",
        new URLSearchParams({
          username: formData.email, // OAuth2PasswordRequestForm expects 'username'
          password: formData.password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const { access_token, token_type } = tokenResponse.data;

      // Store token in localStorage
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("token_type", token_type);

      // Redirect to UserHomePage
      navigate("/user-home");
    } catch (err) {
      setError(
        err.response?.data?.detail || "An error occurred during login."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-8 items-center justify-center">
        <div className="border-2 bg-gray-100 rounded-xl p-15 shadow-black shadow-xl md:p-20">
          <div className="text-center my-8 mt-[-33px]">
            <img src={logo} alt="Logo" className="h-[50px] ml-[80px]" />
            <h2 className="text-3xl font-bold mt-5">Hero here! 👋</h2>
          </div>

          <form
            className="flex flex-col p-5 items-center justify-center"
            onSubmit={handleLogin}
          >
            <input
              className="border-2 text-black outline-none bg-transparent border-blue-700 rounded-lg px-5 py-3 text-xl placeholder:text-gray-400"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              required
            />

            <input
              className="border-2 text-black outline-none bg-transparent border-blue-600 rounded-lg px-5 py-3 text-xl placeholder:text-gray-400 mt-3"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your Password"
              required
            />

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <button
              className="border-2 mt-10 text-white outline-none border-blue-600 bg-blue-600 rounded-lg px-20 py-2 text-xl placeholder:text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;