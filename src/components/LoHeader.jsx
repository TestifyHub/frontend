import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function LoHeader() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/signin"); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#dropdown-button") && !event.target.closest("#dropdown-menu") &&
          !event.target.closest("#dropdown-button-mobile") && !event.target.closest("#dropdown-menu-mobile")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="absolute w-full z-30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 mr-4">
              <a className="flex flex-row" aria-label="Logo" href="/dashboard">
                <img
                  loading="lazy"
                  className="h-10 fill-current text-purple-600"
                  src={logo}
                  alt="Logo"
                />
              </a>
            </div>
            <nav className="hidden lg:flex md:flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <div className="relative inline-block text-left">
                  <div className="relative flex-shrink-0 pl-4 ml-4">
                    <button
                      id="dropdown-button"
                      onClick={toggleDropdown}
                      className="rounded-full flex text-sm text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                      aria-controls="dropdown-menu"
                    >
                      <img
                        loading="lazy"
                        className="rounded-full h-10 w-10"
                        src="https://ui-avatars.com/api/?background=202938&color=fff&size=256&font-size=0.5&bold=true&name=PP"
                        alt="user avatar"
                      />
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div
                      id="dropdown-menu"
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md border bg-gray-800 border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                    >
                      <div className="py-1" role="none">
                        <a
                          className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
                          role="menuitem"
                          href="/dashboard"
                        >
                          Dashboard
                        </a>
                        <button
                          onClick={handleLogout}
                          className="w-full block py-2 px-4 text-sm text-left text-white hover:bg-gray-700"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </ul>
            </nav>
            <div className="lg:hidden">
              <div className="relative flex-shrink-0 pl-4 ml-4">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      id="dropdown-button-mobile"
                      onClick={toggleDropdown}
                      className="rounded-full flex text-sm text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                    >
                      <img
                        loading="lazy"
                        className="rounded-full h-10 w-10"
                        src="https://ui-avatars.com/api/?background=202938&color=fff&size=256&font-size=0.5&bold=true&name=PP"
                        alt="user avatar"
                      />
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div
                      id="dropdown-menu-mobile"
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md border bg-gray-800 border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                    >
                      <div className="py-1" role="none">
                        <a
                          className="text-white hover:bg-gray-100 block py-2 px-4 text-sm"
                          role="menuitem"
                          href="/dashboard"
                        >
                          Dashboard
                        </a>
                        <button
                          onClick={handleLogout}
                          className="w-full block py-2 px-4 text-sm text-left text-white hover:bg-gray-700"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LoHeader;
