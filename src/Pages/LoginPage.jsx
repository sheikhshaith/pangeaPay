// Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel: Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-8">
        {/* Logo */}

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2">Log In</h2>
        <p className="text-center text-gray-600 mb-6">
          With Your PangeaPay Account
        </p>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center text-gray-700 text-sm">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link
              to="/forgot"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <Link to="/home" className="text-blue-600 hover:underline text-sm">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
          </Link>
        </form>

        {/* Or Sign In With */}
        <div className="my-6 text-center text-gray-500">Or Log In With</div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex-1 py-3 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <i className="fab fa-facebook-f mr-2"></i> Facebook
          </a>
          <a
            href="#"
            className="flex-1 py-3 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <i className="fab fa-google mr-2"></i> Google
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign Up Here
          </Link>
        </div>

        {/* Footer (inside left panel for a similar look) */}
        <div className="mt-8 text-center">
          <ul className="inline-flex space-x-4 text-sm text-gray-500">
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>© 2024 PangeaPay.</li>
          </ul>
        </div>
      </div>

      {/* Right Panel: Blue Background + Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-blue-900">
        {/* Replace /imm.jpeg with your actual illustration image */}
        <img src="/immmm.png" alt="Illustration" className="max-w-md h-auto" />
      </div>
    </div>
  );
};

export default Login;
