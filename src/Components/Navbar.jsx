import React, { useState } from 'react';
import { UserCircle, LogOut } from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <nav className="bg-blue-800 px-4 py-3 flex items-center justify-between">
      {/* Logo and brand section */}
      <div className="flex items-center space-x-2">
        {/* Logo icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 4L4 8l8 4 8-4-8-4zM4 16l8 4 8-4M4 12l8 4 8-4" />
        </svg>
        
        {/* Brand name */}
        <span className="text-white text-xl font-semibold">Pangea Pay</span>
      </div>

      {/* User section */}
      <div className="flex items-center space-x-2 relative">
        <span className="text-white">Welcome! Stefan Harary</span>
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="focus:outline-none"
        >
          <UserCircle className="w-8 h-8 text-white hover:text-blue-200 transition-colors" />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;