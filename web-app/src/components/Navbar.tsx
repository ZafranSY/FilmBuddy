import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setisLoggedIn] =useState(false);

  const handleLogin=()=>{
    setisLoggedIn(true);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Movie Hub', path: '/MovieHub' },
    { name: 'Mood Movies', path: '/MoodMovie' }
  ];

  return (
    <nav className="bg-slate-800 border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white no-underline">Movie Hub</h1>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-base text-gray-300 hover:text-white hover:border-b-2 border-white py-1 transition-all duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
       {/* Auth Buttons - Only show if not logged in */}
       {!isLoggedIn && (
          <div className="hidden md:flex items-center space-x-2">
            <a 
              href="/login" 
              onClick={handleLogin}
              className="px-4 py-2 text-black bg-white rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Log in
            </a>
            <a 
              href="/signup"
              className="px-4 py-2 text-white border border-gray-700 bg-transparent rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Sign up
            </a>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
        <div className="md:hidden bg-slate-700 text-gray-300 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-600 rounded-md transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Menu Auth Buttons */}
            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 mt-3">
                <a 
                  href="/login" 
                  onClick={handleLogin}
                  className="block text-center px-3 py-2 text-black bg-white rounded-full text-base font-medium hover:bg-gray-100 transition-colors"
                >
                  Log in
                </a>
                <a 
                  href="/signup"
                  className="block text-center px-3 py-2 text-white border border-gray-500 bg-transparent rounded-full text-base font-medium hover:bg-gray-600 transition-colors"
                >
                  Sign up
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;