// // Navbar.jsx
// import React, { useState } from 'react';
// import { UserCircle, LogOut } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Add your logout logic here (e.g., clearing tokens, resetting state, etc.)
//     console.log('Logging out...');
//     navigate('/'); // Navigate to root ("/") after logout
//   };

//   return (
//     <nav className="bg-blue-800 px-4 py-3 flex items-center justify-between">
//       {/* Logo and brand section */}
//       <div className="flex items-center space-x-2">
//         {/* Logo icon */}
//         <svg 
//           viewBox="0 0 24 24" 
//           className="w-6 h-6 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M12 4L4 8l8 4 8-4-8-4zM4 16l8 4 8-4M4 12l8 4 8-4" />
//         </svg>
        
//         {/* Brand name */}
//         <span className="text-white text-xl font-semibold">Pangea Pay</span>
//       </div>

//       {/* User section */}
//       <div className="flex items-center space-x-2 relative">
//         <span className="text-white">Welcome! Stefan Harary</span>
//         <button 
//           onClick={() => setShowDropdown(!showDropdown)}
//           className="focus:outline-none"
//         >
//           <UserCircle className="w-8 h-8 text-white hover:text-blue-200 transition-colors" />
//         </button>

//         {/* Dropdown Menu */}
//         {showDropdown && (
//           <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//             <button
//               onClick={handleLogout}
//               className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
//             >
//               <LogOut className="w-4 h-4 mr-2" />
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, resetting state, etc.)
    console.log('Logging out...');
    navigate('/'); // Navigate to root ("/") after logout
  };

  return (
    <div className="flex flex-col">
      {/* Top navbar with logo and user info */}
      <nav className="bg-blue-800 px-6 py-4 flex items-center justify-between">
        {/* Logo and brand section */}
        <div className="flex items-center space-x-2">
          {/* TokenWiz logo - simple network icon */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-white"
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
          
          {/* Brand name */}
          <span className="text-white text-2xl font-bold tracking-wide">PangeaPay</span>
        </div>

        {/* User section */}
        <div className="flex items-center space-x-3 relative">
          <span className="text-white text-sm">Welcome! Stefan Harary</span>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="focus:outline-none bg-blue-600 rounded-full p-1"
          >
            <UserCircle className="w-8 h-8 text-white" />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Bottom navbar with links */}
      <div className="bg-white shadow-md py-3 px-6 flex items-center space-x-8">
        <Link to="/home" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Dashboard
        </Link>
        <Link to="/buy-tokens" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="21" r="2" />
            <circle cx="20" cy="21" r="2" />
            <path d="M5.67 6H23l-1.68 8.39a2 2 0 01-2 1.61H8.75a2 2 0 01-2-1.74L5.23 2.74A2 2 0 003.25 1H1" />
          </svg>
          Buy Tokens
        </Link>
        <Link to="/ico-distribution" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
          </svg>
          ICO Distribution
        </Link>
        <Link to="/transactions" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
          </svg>
          Transactions
        </Link>
        <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Profile
        </Link>
        <div className="flex items-center text-gray-600 group relative">
          <Link to="/pages" className="flex items-center hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" />
              <polyline points="10 2 10 10 13 7 16 10 16 2" />
            </svg>
            Pages
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
        </div>
        
        {/* KYC Application Button */}
        <div className="ml-auto">
          <Link to="/kyc" className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors">
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
  );
};

export default Navbar;