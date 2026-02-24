import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import loginImage from "../assets/login-farm.jpg";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await login(email, password);
    navigate("/");
  } catch (error) {
    alert("Invalid email or password");
  }
};

  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2 relative h-screen">
        <img
          src={loginImage}
          alt="Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1b4332]/65"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white/80">
            Welcome to CropSphere 🌾
          </h2>
          <p className="text-sm md:text-base text-white/80 mt-3 max-w-md">
            Smart farming solutions for a better tomorrow.
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#e8f5e9] to-[#d8eedd] px-6">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl p-10 border border-green-200"
        >
          <h2 className="text-3xl font-bold text-[#1b4332] text-center mb-10">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-6 px-6 py-4 rounded-full bg-[#2d6a4f] text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#95d5b2]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-6 px-6 py-4 rounded-full bg-[#2d6a4f] text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#95d5b2]"
          />

          <button
            type="submit"
            className="w-full bg-[#1b4332] text-white py-4 rounded-full font-semibold hover:bg-[#2d6a4f]"
          >
            Sign In
          </button>

          <p className="mt-6 text-center text-[#344e41]">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold hover:text-[#2d6a4f]">
              Sign Up
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Login;