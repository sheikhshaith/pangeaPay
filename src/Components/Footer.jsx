import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Left side navigation */}
        <nav className="flex space-x-6">
          <a href="/whitepaper" className="text-gray-600 hover:text-gray-800 transition-colors">
            Whitepaper
          </a>
          <a href="/faqs" className="text-gray-600 hover:text-gray-800 transition-colors">
            FAQs
          </a>
          <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-600 hover:text-gray-800 transition-colors">
            Terms of Condition
          </a>
        </nav>

        {/* Right side content */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">© 2018 TokenWiz.</span>
          
          {/* Language selector button */}
          <button className="flex items-center space-x-1 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <span className="text-gray-600">EN</span>
            <svg 
              className="w-4 h-4 text-gray-600" 
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;