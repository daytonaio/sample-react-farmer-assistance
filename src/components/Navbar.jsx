import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { userLoggedIn, setUserLoggedIn, currentUser, setCurrentUser } = useAuth()

  return (
    <nav className="navbar sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 navbar-items">
        <img
          src={logo}
          className="h-20 w-auto navbar-img "
          alt="Website Logo"
        />

        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 nav-link hover:text-green-800 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <a
              href="#about-us"
                className="block py-2 px-3 md:p-0 nav-link hover:text-green-950 hover:underline"
              >
                About us
              </a>
            </li>
            <li>
              <a
                 href="#our-services"
                className="block py-2 px-3 md:p-0 nav-link hover:text-green-950 hover:underline"
              >
                Our Services
              </a>
            </li>



          </ul>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default">
          {
            userLoggedIn ?
              <>
                {console.log(auth.currentUser.displayName)}
                <Link to='/userprofile' className="bg-green-800 text-white px-4 py-2 rounded ml-4">
                  View my profile
                </Link>
              </>
              :
              <>
                <Link to='/signup' className="bg-green-800 text-white px-4 py-2 rounded ml-4">
                  Register
                </Link>
              </>
          }
        </div>



      </div>
    </nav>
  );
};

export default Navbar;
