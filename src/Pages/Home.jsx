import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-gray-900 text-center p-4">
      <div className="p-6 sm:p-8 md:p-12 bg-blue-800 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 animate-fadeIn w-full max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-md">
          Welcome to PangeaPay
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white opacity-90 drop-shadow-md">
          Your trusted global payment solution
        </p>
      </div>
    </div>
  );
};

export default Home;