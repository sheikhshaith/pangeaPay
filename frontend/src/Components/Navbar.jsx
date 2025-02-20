// import React, { useState } from 'react';
// import { UserCircle, Menu, X } from 'lucide-react';
// import { useNavigate, Link } from 'react-router-dom';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log('Logging out...');
//     navigate('/');
//   };

//   const NavLink = ({ to, icon, children }) => (
//     <Link 
//       to={to} 
//       className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 md:p-0"
//       onClick={() => setIsMobileMenuOpen(false)}
//     >
//       {icon}
//       <span className="ml-2">{children}</span>
//     </Link>
//   );

//   return (
//     <div className="flex flex-col w-full">
//       {/* Top navbar */}
//       <nav className="bg-blue-800 px-4 md:px-6 py-4 flex items-center justify-between">
//         {/* Logo and brand section */}
//         <div className="flex items-center space-x-2">
//           <svg 
//             viewBox="0 0 24 24" 
//             className="w-6 md:w-8 h-6 md:h-8 text-white"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             <circle cx="6" cy="6" r="2" fill="white" />
//             <circle cx="18" cy="6" r="2" fill="white" />
//             <circle cx="6" cy="18" r="2" fill="white" />
//             <circle cx="18" cy="18" r="2" fill="white" />
//             <line x1="6" y1="6" x2="18" y2="6" />
//             <line x1="6" y1="18" x2="18" y2="18" />
//             <line x1="6" y1="6" x2="6" y2="18" />
//             <line x1="18" y1="6" x2="18" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//             <line x1="18" y1="6" x2="6" y2="18" />
//           </svg>
          
//           <span className="text-white text-xl md:text-2xl font-bold tracking-wide">PangeaPay</span>
//         </div>

//         {/* User section */}
//         <div className="flex items-center space-x-3 relative">
//           <span className="text-white text-sm hidden md:inline">Welcome! Stefan Harary</span>
//           <button 
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="focus:outline-none bg-blue-600 rounded-full p-1"
//           >
//             <UserCircle className="w-8 h-8 text-white" />
//           </button>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

         
//         </div>
//       </nav>

//       {/* Bottom navbar with links - Desktop */}
//       <div className="hidden md:flex bg-white shadow-md py-3 px-6 items-center space-x-8">
   
//         {/* KYC Application Button */}
//         <div className="ml-auto">
//           <Link to="/" className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <rect x="3" y="4" width="18" height="16" rx="2" />
//               <path d="M16 2v4" />
//               <path d="M8 2v4" />
//               <path d="M3 10h18" />
//             </svg>
//             KYC Application
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="flex flex-col py-2">
//             <NavLink to="/home" icon={
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <rect x="3" y="3" width="7" height="7" />
//                 <rect x="14" y="3" width="7" height="7" />
//                 <rect x="14" y="14" width="7" height="7" />
//                 <rect x="3" y="14" width="7" height="7" />
//               </svg>
//             }>
//               Dashboard
//             </NavLink>
            
//             <NavLink to="/buy-tokens" icon={
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="8" cy="21" r="2" />
//                 <circle cx="20" cy="21" r="2" />
//                 <path d="M5.67 6H23l-1.68 8.39a2 2 0 01-2 1.61H8.75a2 2 0 01-2-1.74L5.23 2.74A2 2 0 003.25 1H1" />
//               </svg>
//             }>
//               Buy Tokens
//             </NavLink>

//             <NavLink to="/ico-distribution" icon={
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
//                 <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
//               </svg>
//             }>
//               ICO Distribution
//             </NavLink>

//             <NavLink to="/transactions" icon={
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <polyline points="7 13 12 18 17 13" />
//                 <polyline points="7 6 12 11 17 6" />
//               </svg>
//             }>
//               Transactions
//             </NavLink>

//             <NavLink to="/profile" icon={
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
//                 <circle cx="12" cy="7" r="4" />
//               </svg>
//             }>
//               Profile
//             </NavLink>

//             <NavLink to="/pages" icon={
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" />
//                 <polyline points="10 2 10 10 13 7 16 10 16 2" />
//               </svg>
//             }>
//               Pages
//             </NavLink>

//             {/* Mobile KYC Application Button */}
//             <div className="px-2 mt-2">
//               <Link 
//                 to="/kyc" 
//                 className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <rect x="3" y="4" width="18" height="16" rx="2" />
//                   <path d="M16 2v4" />
//                   <path d="M8 2v4" />
//                   <path d="M3 10h18" />
//                 </svg>
//                 KYC Application
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;











// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isPagesOpen, setIsPagesOpen] = useState(false);

//   return (
//     <nav className="bg-black py-4">
//       <div className="container mx-auto px-8">
//         <div className="flex items-center justify-between">
//           {/* Brand Name */}
//           <div className="flex items-center">
//             <Link to="/" className="text-2xl font-bold text-[#CF992D]">
//               PangeaPay
//             </Link>
//           </div>

//           {/* Navigation Container with Border */}
//           <div className="hidden md:flex items-center justify-between bg-[#29303A]/50 border border-[#CF992D]/20 rounded-full px-8 py-2">
//             <div className="flex items-center space-x-8">
//               <Link to="/home" className="text-white hover:text-[#CF992D]/90">
//                 Home
//               </Link>
//               <Link to="/about" className="text-white hover:text-[#CF992D]">
//                 About Us
//               </Link>
//               <Link to="/services" className="text-white hover:text-[#CF992D]">
//                 Services
//               </Link>
//               <div className="relative group">
//                 <button className="flex items-center text-white hover:text-[#CF992D] focus:outline-none">
//                   Pages
//                   <ChevronDown size={20} className="ml-1" />
//                 </button>
//                 {/* Dropdown menu */}
//                 <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white hidden group-hover:block">
//                   <div className="py-1">
//                     <Link to="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Features
//                     </Link>
//                     <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Pricing
//                     </Link>
//                     <Link to="/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       FAQs
//                     </Link>
//                     <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Blog
//                     </Link>
//                     <Link to="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Testimonials
//                     </Link>
//                     <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Our Team
//                     </Link>
//                     <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Careers
//                     </Link>
//                     <Link to="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Privacy Policy
//                     </Link>
//                     <Link to="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Terms of Service
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <Link to="/kyc" className="text-white hover:text-[#CF992D]">
//                 Contact Us
//               </Link>
//             </div>
//           </div>

//           {/* Login Button */}
//           <Link to="/login" className="hidden md:block">
//             <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
//               Login
//             </button>
//           </Link>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => {
//               setIsOpen(!isOpen);
//               setIsPagesOpen(false); // Close pages menu when toggling main menu
//             }}
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4">
//             <div className="rounded-lg border border-[#CF992D]/20 p-4 bg-[#29303A]/50">
//               <Link to="/" className="block py-2 text-[#CF992D]">
//                 Home
//               </Link>
//               <Link to="/about" className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]">
//                 About Us
//               </Link>
//               <Link to="/services" className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]">
//                 Services
//               </Link>
//               <div className="py-2">
//                 <button
//                   className="flex items-center text-[#C9C9C9] hover:text-[#CF992D]"
//                   onClick={() => setIsPagesOpen(!isPagesOpen)}
//                 >
//                   Pages
//                   <ChevronDown 
//                     size={20} 
//                     className={`ml-1 transform transition-transform ${isPagesOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {isPagesOpen && (
//                   <div className="pl-4 mt-2">
//                     <Link 
//                       to="/features" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Features
//                     </Link>
//                     <Link 
//                       to="/pricing" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Pricing
//                     </Link>
//                     <Link 
//                       to="/faqs" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       FAQs
//                     </Link>
//                     <Link 
//                       to="/blog" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Blog
//                     </Link>
//                     <Link 
//                       to="/testimonials" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Testimonials
//                     </Link>
//                     <Link 
//                       to="/team" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Our Team
//                     </Link>
//                     <Link 
//                       to="/careers" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Careers
//                     </Link>
//                     <Link 
//                       to="/privacy" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Privacy Policy
//                     </Link>
//                     <Link 
//                       to="/terms" 
//                       className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
//                       onClick={() => {
//                         setIsPagesOpen(false);
//                         setIsOpen(false);
//                       }}
//                     >
//                       Terms of Service
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <Link to="/" className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]">
//                 Contact Us
//               </Link>
//               <Link to="/login" className="block mt-4">
//                 <button className="w-full bg-white text-[#29303A] px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
//                   Login
//                 </button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <nav className="bg-black py-4 px-6">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#CF992D]">
              PangeaPay
            </Link>
          </div>

          {/* Navigation Container with Border */}
          <div className="hidden md:flex items-center justify-between bg-[#29303A]/50 border border-[#CF992D]/20 rounded-full px-8 py-2">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#CF992D]/90">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-[#CF992D]">
                About Us
              </Link>
              <Link to="/services" className="text-white hover:text-[#CF992D]">
                Services
              </Link>
              <div className="relative group">
                <div className="flex items-center text-white hover:text-[#CF992D] cursor-default">
                  Pages
                  <ChevronDown size={20} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </div>
                {/* Dropdown menu - Now visible on group hover */}
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="py-1">
                    <Link to="/kyc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      KYC
                    </Link>
                    
                    
                  </div>
                </div>
              </div>
              <Link to="/contact" className="text-white hover:text-[#CF992D]">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <Link to="/login" className="hidden md:block">
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Login
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsPagesOpen(false);
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="rounded-lg border border-[#CF992D]/20 p-4 bg-[#29303A]/50">
              <Link to="home" className="block py-2 text-[#CF992D]">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]">
                About Us
              </Link>
              <Link to="/services" className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]">
                Services
              </Link>
              <div className="py-2">
                <button
                  className="flex items-center text-[#C9C9C9] hover:text-[#CF992D] w-full"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                >
                  Pages
                  <ChevronDown 
                    size={20} 
                    className={`ml-1 transform transition-transform ${isPagesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isPagesOpen && (
                  <div className="pl-4 mt-2">
                    <Link 
                      to="/kyc" 
                      className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]"
                      onClick={() => {
                        setIsPagesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      KYC
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/" className="block py-2 text-[#C9C9C9] hover:text-[#CF992D]">
                Contact Us
              </Link>
              <Link to="/login" className="block mt-4">
                <button className="w-full bg-white text-[#29303A] px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;