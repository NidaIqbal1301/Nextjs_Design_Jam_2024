"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="shadow-md font-sans tracking-wide relative z-30">
        {/* Top section with notification */}
        <section className="flex items-center justify-center py-2 bg-[#2A254B] text-white px-10">
          <div className="flex items-center space-x-2">
            <TbTruckDelivery />
            <p className="text-sm text-center">
              Free delivery on all orders over £50 with code easter checkout
            </p>
          </div>
        </section>

        {/* Main header */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
          <h1 className="flex justify-center items-center text-black text-4xl h-10">
            Avion
          </h1>

          {/* Mobile Menu Button */}
          <div className="flex max-lg:ml-auto">
            <button className="lg:hidden" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Icons (Search, Cart, User) */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex gap-x-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                >
                  Blog
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-4">
              <FaSearch className="w-6 h-6 cursor-pointer" />
              <Link href="/shopping">
                <FaShoppingCart className="w-6 h-6 cursor-pointer" />
              </Link>
              <Link href="/auth">
                <FaUserCircle className="w-6 h-6 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Appears when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 w-full bg-white shadow-md py-4">
            {/* Close button */}
            <div className="flex justify-end px-4">
              <button onClick={toggleMenu} className="text-gray-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#2A254B] text-gray-400 text-[15px]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#2A254B] text-gray-400 text-[15px]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#2A254B] text-gray-400 text-[15px]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden md:block w-full h-[70px]  px-[20px] md:px-[318px] py-[20px] bg-[#F9F9F9] shadow-md">
          <ul className="flex justify-between text-gray-800 text-sm font-medium">
            <Link href="/productListing">
              <li className="text-gray-400 cursor-pointer">All Products</li>
            </Link>
            <li className="text-gray-400 cursor-pointer">Plan Posts</li>
            <li className="text-gray-400 cursor-pointer">Ceramics</li>
            <li className="text-gray-400 cursor-pointer">Tables</li>
            <li className="text-gray-400 cursor-pointer">Chairs</li>
            <li className="text-gray-400 cursor-pointer">Crockery</li>
            <li className="text-gray-400 cursor-pointer">Tableware</li>
            <li className="text-gray-400 cursor-pointer">Cutlery</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
