// Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-block">
              <img src="/images/logo.png" alt="TokenWiz Logo" className="mx-auto" />
            </Link>
          </div>
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-2">Sign in</h2>
          <p className="text-center text-gray-600 mb-6">with your TokenWiz Account</p>
          {/* Login Form */}
          <form action="#">
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
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="mr-2"
                />
                <label htmlFor="remember-me" className="text-gray-700 text-sm">
                  Remember Me
                </label>
              </div>
              <div>
                <Link to="/forgot" className="text-blue-600 hover:underline text-sm">
                  Forgot password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>
          {/* Social Sign In */}
          <div className="my-6 text-center text-gray-500">Or Sign In With</div>
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
          {/* Link to Register */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline font-semibold">
              Sign up here
            </Link>
          </div>
        </div>
        {/* Right Side - Graphic (visible on large screens) */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50">
          <img src="/images/ath-gfx.png" alt="Illustration" className="max-w-full h-auto" />
        </div>
      </div>
      {/* Footer */}
      <div className="mt-4">
        <ul className="flex space-x-4 text-sm text-gray-500">
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
          <li>© 2018 TokenWiz.</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
