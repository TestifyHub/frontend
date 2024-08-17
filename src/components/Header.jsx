import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/integrations"
                >
                  Integrations
                </Link>
              </li>
            </ul>
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="text-gray-200 font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <div className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  <Link to="/signup">Sign up</Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="lg:hidden"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
