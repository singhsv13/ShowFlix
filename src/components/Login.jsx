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
      <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10 relative">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-100 rounded-full blur-2xl opacity-40"></div>

        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          <i className="fas fa-film text-red-500 mr-2"></i> Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-red-400">
              <i className="fas fa-envelope text-lg"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-red-400">
              <i className="fas fa-lock text-lg"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-400 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-full font-semibold shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Login
          </button>
        </form>

        {/* Sign up link */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text font-medium hover:underline transition-colors"
            >
              <i className="fas fa-user-plus mr-1"></i> Sign Up
            </a>
          </p>
        </div>
      </div>
  );
}
