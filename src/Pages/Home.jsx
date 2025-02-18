import React from 'react';

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to My App</h1>
        <p className="text-lg text-blue-600">This is a simple home screen built with ReactJS and TailwindCSS</p>
      </header>
      <main className="mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Home;
