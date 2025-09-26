import React, { useState } from "react";
import users from "../data/users.json";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password.trim()
    );

    if (foundUser) {
      login(foundUser);
      setEmail("");
      setPassword("");
      navigate("/all-shows");
      alert(`Welcome back, ${foundUser.name}!`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 mt-24">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/20 relative">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white flex items-center justify-center gap-2">
          <i className="fas fa-film text-red-400"></i>
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400">
              <i className="fas fa-envelope text-lg"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/20 border border-gray-400/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-7/8 text-red-400">
              <i className="fas fa-lock text-lg"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/20 border border-gray-400/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all"
              required
            />
            <p className="text-xs text-right mt-1 text-gray-300 hover:text-red-400 cursor-pointer transition-colors">
              Forgot Password?
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <i className="fas fa-sign-in-alt"></i>
            Login
          </button>
        </form>

        {/* Sign up link */}
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>
            Don’t have an account?{" "}
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text font-medium hover:underline transition-colors flex items-center justify-center gap-1"
            >
              <i className="fas fa-user-plus"></i> Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
