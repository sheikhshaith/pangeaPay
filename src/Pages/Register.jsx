// Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: White Background + Sign-up Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-8">
        {/* Logo */}
        

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2">Sign up</h2>
        <p className="text-center text-gray-600 mb-6">Create New PangeaPay Account</p>

        {/* Registration Form */}
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="term-condition"
              className="mr-2"
            />
            <label htmlFor="term-condition" className="text-gray-700 text-sm">
              I agree to TokenWiz’s{' '}
              <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{' '}
              &amp;{' '}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms
              </Link>.
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
        </form>

        {/* Social Sign Up */}
        <div className="my-6 text-center text-gray-500">Or Sign Up With</div>
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

        {/* Already have an account? */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600 hover:underline font-semibold">
            log in instead
          </Link>
        </div>

        {/* Footer (Inside Left Panel for the Screenshot Look) */}
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
            <li>© 2018 PangeaPay.</li>
          </ul>
        </div>
      </div>

      {/* Right Side: Blue Background + Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
        {/* Replace /imm.jpeg with your actual illustration image */}
        <img
          src="/immmm.png"
          alt="Illustration"
          className="max-w-md h-auto"
        />
      </div>
    </div>
  );
};

export default Register;
