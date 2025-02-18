// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="w-full bg-gray-50 border-t border-gray-200 py-4 px-6">
//       <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
//         {/* Left side navigation */}
//         <nav className="flex space-x-6">
//           <a href="/whitepaper" className="text-gray-600 hover:text-gray-800 transition-colors">
//             Whitepaper
//           </a>
//           <a href="/faqs" className="text-gray-600 hover:text-gray-800 transition-colors">
//             FAQs
//           </a>
//           <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800 transition-colors">
//             Privacy Policy
//           </a>
//           <a href="/terms" className="text-gray-600 hover:text-gray-800 transition-colors">
//             Terms of Condition
//           </a>
//         </nav>

//         {/* Right side content */}
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-600">© 2018 PangeaPay.</span>
          
//           {/* Language selector button */}
//           <button className="flex items-center space-x-1 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors">
//             <span className="text-gray-600">EN</span>
//             <svg 
//               className="w-4 h-4 text-gray-600" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;











import React, { useState } from 'react';

const Footer = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Spanish' },
    { code: 'FR', name: 'French' },
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Navigation links - Stack on mobile, row on desktop */}
        <nav className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-6">
          <a 
            href="/whitepaper" 
            className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
          >
            Whitepaper
          </a>
          <a 
            href="/faqs" 
            className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
          >
            FAQs
          </a>
          <a 
            href="/privacy-policy" 
            className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
          >
            Terms of Condition
          </a>
        </nav>

        {/* Right side content - Copyright and Language selector */}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <span className="text-gray-600 text-sm md:text-base order-2 sm:order-1">
            © 2018 PangeaPay.
          </span>
          
          {/* Language selector dropdown */}
          <div className="relative order-1 sm:order-2">
            <button 
              className="flex items-center space-x-1 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <span className="text-gray-600 text-sm md:text-base">EN</span>
              <svg 
                className={`w-4 h-4 text-gray-600 transform transition-transform duration-200 ${
                  isLanguageDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Language dropdown menu */}
            {isLanguageDropdownOpen && (
              <div className="absolute bottom-full mb-1 right-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      // Add language change logic here
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;