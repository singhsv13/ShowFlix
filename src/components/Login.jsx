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
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 mt-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <i className="fas fa-envelope"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition-all"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <i className="fas fa-lock"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition-all"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-md"
        >
          <i className="fas fa-sign-in-alt mr-2"></i>
          Login
        </button>
      </form>

      {/* Sign up link */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-red-500 font-medium hover:underline transition-colors"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
