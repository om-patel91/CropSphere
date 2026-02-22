import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import loginImage from "../assets/login-farm.jpg";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      role: "farmer",
    };

    login(userData);
    navigate("/");
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
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#e8f5e9] to-[#d8eedd] px-6">

        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl p-10 border border-green-200"
        >
          <h2 className="text-3xl font-bold text-[#1b4332] text-center mb-8">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mb-5 px-6 py-4 rounded-full bg-[#2d6a4f] text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-5 px-6 py-4 rounded-full bg-[#2d6a4f] text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-8 px-6 py-4 rounded-full bg-[#2d6a4f] text-white"
          />

          <button className="w-full bg-[#1b4332] text-white py-4 rounded-full font-semibold hover:bg-[#2d6a4f]">
            Sign Up
          </button>

          <p className="mt-6 text-center text-[#344e41]">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold hover:text-[#2d6a4f]">
              Login
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Register;