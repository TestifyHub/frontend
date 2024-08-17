import React from 'react';
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center md:flex-row md:justify-between w-full">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Link className="flex flex-row items-center" to="/">
              <img
                loading="lazy"
                className="h-10 fill-current text-purple-600"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <p>&copy; 2024 TestifyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
