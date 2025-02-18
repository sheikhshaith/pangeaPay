import React from "react";

const Home= () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white text-gray-900 text-center">
      <div className="p-12  bg-blue-800  rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-md">Welcome to PangeaPay</h1>
        <p className="text-xl text-white opacity-90 drop-shadow-md">Your trusted global payment solution</p>
      </div>
    </div>
  );
};

export default Home;
