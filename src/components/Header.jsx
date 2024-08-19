import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleResize = () => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);

    // Close the menu when resizing from mobile to desktop
    if (!mobile) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = (e) => {
    e.preventDefault(); // Prevent default behavior
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
  };

  const hamburgerButtonClass = isMobileMenuOpen
    ? "hamburger active"
    : "hamburger false";

  return (
    <header className="absolute w-full z-30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 mr-4">
            <Link className="flex flex-row" to="/">
              <img
                loading="lazy"
                className="h-10 fill-current text-purple-600"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex md:flex-grow">
            {/* Desktop menu */}
            <ul className="flex flex-grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="text-gray-200 hover:text-gray-100 font-semibold text-lg px-4 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/features"
                  smooth={true}
                  duration={2000}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 hover:text-gray-100 font-semibold text-lg px-4 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/integrations"
                  smooth={true}
                  duration={200}
                >
                  Integrations
                </Link>
              </li>
            </ul>
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="text-gray-200 px-4 py-3 font-semibold flex items-center transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <div className="btn-sm text-white font-semibold bg-purple-600 hover:bg-purple-700 ml-3">
                  <Link to="/signup">Sign up</Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="lg:hidden">
            <button className={hamburgerButtonClass} onClick={handleMenuToggle}>
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current  transition duration-150 ease-in-out text-gray-200 hover:text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1"></rect>
                <rect y="11" width="24" height="2" rx="1"></rect>
                <rect y="18" width="24" height="2" rx="1"></rect>
              </svg>
            </button>

            {isMobileMenuOpen && (
              <div
                key="overlay"
                className="fixed inset-0 transition-opacity"
                onClick={handleMenuToggle} // This closes the menu when the overlay is clicked
              >
                <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
              </div>
            )}

            <nav
              id="mobile-nav"
              className={`absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg ring-1 ring-gray-900/5 bg-gray-800 ${
                isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link
                    className="flex text-gray-200 hover:text-gray-100 py-2"
                    to="/features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex text-gray-200 hover:text-gray-100 py-2"
                    to="/integrations"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex text-gray-200 hover:text-gray-100 py-2"
                    to="/signin"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
