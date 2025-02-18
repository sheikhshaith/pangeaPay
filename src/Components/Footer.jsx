import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-slate-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-300">
          © 2024 Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
