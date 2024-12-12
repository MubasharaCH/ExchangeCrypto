import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Button from "@/components/ui/button";
import { ROUTES } from "../../../utils/routes";
import Link from "@/components/ui/link";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  console.log(ROUTES.Login, "routesss:");
  return (
    <header className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-yellow-500">
          <Link href="/">Exchange</Link>
        </div>

        {/* Search Icon and Hamburger Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          <FiSearch size={20} />
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="md:mr-26 hidden items-center space-x-6 md:flex">
          <Link href="/buy-crypto" className="hover:text-yellow-500">
            Buy Crypto
          </Link>
          <Link href="/markets" className="hover:text-yellow-500">
            Markets
          </Link>
          {/* Updated Trade Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("trade")}
              className="flex items-center space-x-2 text-white hover:text-yellow-500"
            >
              <span>Trade</span>
              <FaChevronDown
                className={`transform ${
                  activeDropdown === "trade" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {activeDropdown === "trade" && (
              <div className="absolute left-0 mt-2 w-48 space-y-2 rounded-md bg-gray-800 text-white shadow-lg">
                <Link
                  href="/trade/basic"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Basic
                  <p className="text-xs text-gray-400">
                    Buy and sell on the Spot market with advanced tools
                  </p>
                </Link>
                <Link
                  href="/trade/margin"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Margin
                  <p className="text-xs text-gray-400">
                    Increase your profits with leverage
                  </p>
                </Link>
                <Link
                  href="/trade/p2p"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  P2P
                  <p className="text-xs text-gray-400">
                    Buy & sell cryptocurrencies using bank transfer and 800+
                    options
                  </p>
                </Link>
                <Link
                  href="/trade/convert-block"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Convert & Block Trade
                  <p className="text-xs text-gray-400">
                    The easiest way to trade at all sizes
                  </p>
                </Link>
                <Link
                  href="/trade/advanced"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Advanced
                </Link>
              </div>
            )}
          </div>

          <Link href="/futures" className="hover:text-yellow-500">
            Futures
          </Link>
          <Link href="/earn" className="hover:text-yellow-500">
            Earn
          </Link>
          <Link href="/square" className="hover:text-yellow-500">
            Square
          </Link>
          <Link href="/more" className="hover:text-yellow-500">
            More
          </Link>
        </nav>
        <div className="hidden items-center space-x-4 md:flex">
          {/* Search and User Options */}
          <div className="flex items-center space-x-4 md:ml-28">
            <FiSearch className="text-white" size={25} />
            <Link href={ROUTES.Login}>
              <Button className="bg-gray-800 hover:bg-gray-700" size="small">
                Login
              </Button>
            </Link>
            <Link href={ROUTES.SignUp}>
              <Button className="bg-yellow-500 hover:bg-gray-700" size="small">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 z-50 h-full w-3/4 bg-gray-900 shadow-lg">
          {/* Mobile Header */}
          <div className="flex items-center justify-end  p-4">
            <button onClick={toggleMobileMenu}>
              <FaTimes size={25} />
            </button>
          </div>

          {/* Mobile Menu Content */}

          {/* Login and Sign-Up Buttons */}
          <div className="flex space-x-2 px-4 py-2">
            {/* <Link href="/login"> */}
            <button className="w-1/2 rounded-md bg-gray-700 py-2 text-center text-white hover:bg-gray-600">
              <Link href="/login">Login</Link>
            </button>

            <button className="w-1/2 rounded-md bg-yellow-500 py-2 text-center text-gray-900 hover:bg-yellow-400">
              Sign Up
            </button>
          </div>
          <div className="space-y-4 p-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-md bg-gray-800 p-2 pl-10 text-white focus:outline-none"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            {/* Navigation Links */}
            <Link
              href="/buy-crypto"
              className="block text-white hover:text-yellow-500"
            >
              Buy Crypto
            </Link>
            <Link
              href="/markets"
              className="block text-white hover:text-yellow-500"
            >
              Markets
            </Link>

            {/* Mobile Dropdown for Trade */}
            <div>
              <button
                onClick={() => handleDropdown("trade")}
                className="flex w-full items-center justify-between text-left text-white hover:text-yellow-500"
              >
                Trade
                <FaChevronDown
                  className={`transform ${
                    activeDropdown === "trade" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {activeDropdown === "trade" && (
                <div className="ml-4 space-y-2">
                  <Link
                    href="/trade/basic"
                    className="block text-gray-400 hover:text-yellow-500"
                  >
                    Basic
                  </Link>
                  <Link
                    href="/trade/margin"
                    className="block text-gray-400 hover:text-yellow-500"
                  >
                    Margin
                  </Link>
                  <Link
                    href="/trade/p2p"
                    className="block text-gray-400 hover:text-yellow-500"
                  >
                    P2P
                  </Link>
                  <Link
                    href="/trade/convert-block"
                    className="block text-gray-400 hover:text-yellow-500"
                  >
                    Convert & Block Trade
                  </Link>
                  <Link
                    href="/trade/advanced"
                    className="block text-gray-400 hover:text-yellow-500"
                  >
                    Advanced
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/futures"
              className="block text-white hover:text-yellow-500"
            >
              Futures
            </Link>
            <Link
              href="/earn"
              className="block text-white hover:text-yellow-500"
            >
              Earn
            </Link>
            <Link
              href="/square"
              className="block text-white hover:text-yellow-500"
            >
              Square
            </Link>
            <Link
              href="/more"
              className="block text-white hover:text-yellow-500"
            >
              More
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
