

import React, { useState } from 'react';
import { UserCircle, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const NavLink = ({ to, icon, children }) => (
    <Link 
      to={to} 
      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 md:p-0"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  );

  return (
    <div className="flex flex-col w-full">
      {/* Top navbar */}
      <nav className="bg-blue-800 px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo and brand section */}
        <div className="flex items-center space-x-2">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 md:w-8 h-6 md:h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="6" cy="6" r="2" fill="white" />
            <circle cx="18" cy="6" r="2" fill="white" />
            <circle cx="6" cy="18" r="2" fill="white" />
            <circle cx="18" cy="18" r="2" fill="white" />
            <line x1="6" y1="6" x2="18" y2="6" />
            <line x1="6" y1="18" x2="18" y2="18" />
            <line x1="6" y1="6" x2="6" y2="18" />
            <line x1="18" y1="6" x2="18" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
          
          <span className="text-white text-xl md:text-2xl font-bold tracking-wide">PangeaPay</span>
        </div>

        {/* User section */}
        <div className="flex items-center space-x-3 relative">
          <span className="text-white text-sm hidden md:inline">Welcome! Stefan Harary</span>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="focus:outline-none bg-blue-600 rounded-full p-1"
          >
            <UserCircle className="w-8 h-8 text-white" />
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

         
        </div>
      </nav>

      {/* Bottom navbar with links - Desktop */}
      <div className="hidden md:flex bg-white shadow-md py-3 px-6 items-center space-x-8">
   
        {/* KYC Application Button */}
        <div className="ml-auto">
          <Link to="/" className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
            </svg>
            KYC Application
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col py-2">
            <NavLink to="/home" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            }>
              Dashboard
            </NavLink>
            
            <NavLink to="/buy-tokens" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="21" r="2" />
                <circle cx="20" cy="21" r="2" />
                <path d="M5.67 6H23l-1.68 8.39a2 2 0 01-2 1.61H8.75a2 2 0 01-2-1.74L5.23 2.74A2 2 0 003.25 1H1" />
              </svg>
            }>
              Buy Tokens
            </NavLink>

            <NavLink to="/ico-distribution" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
              </svg>
            }>
              ICO Distribution
            </NavLink>

            <NavLink to="/transactions" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="7 13 12 18 17 13" />
                <polyline points="7 6 12 11 17 6" />
              </svg>
            }>
              Transactions
            </NavLink>

            <NavLink to="/profile" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }>
              Profile
            </NavLink>

            <NavLink to="/pages" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" />
                <polyline points="10 2 10 10 13 7 16 10 16 2" />
              </svg>
            }>
              Pages
            </NavLink>

            {/* Mobile KYC Application Button */}
            <div className="px-2 mt-2">
              <Link 
                to="/kyc" 
                className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
                KYC Application
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;