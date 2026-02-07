import React, { useState } from "react";
import Logo from "../atoms/Logo";
import UserProfile from "../atoms/UserProfile";
import { navItems } from "../../constants/navItem";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useAuth } from "../../contexts/useAuth";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, loading } = useAuth();

  return (
    <header className="w-full h-[143px] relative bg-white z-50">
      <div className="max-w-[1680px] h-full mx-auto flex items-center justify-between relative px-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 lg:gap-12 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-[16px] md:text-[18px] lg:text-[22px]
                    font-poppins text-[#5B5B5B] hover:text-[#49BBBD] 
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-[#5B5B5B]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu />
          </button>

          {/* Profile for Desktop */}
          <div className="hidden md:block">
            {loading ? null : isAuthenticated ? (
              <UserProfile user_info={user} withDrawer />
            ) : (
              <Link
                to="/login"
                className="text-[16px] md:text-[18px] lg:text-[22px] 
                  font-poppins text-[#5B5B5B] hover:text-[#49BBBD] 
                  transition-colors
                "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 w-3/4 max-w-sm h-full bg-white flex flex-col p-6">
            <button
              className="self-end text-3xl font-bold mb-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>

            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-lg font-medium text-[#5B5B5B] hover:text-[#49BBBD]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4 mb-10">
              {loading ? null : isAuthenticated ? (
                <>
                  <div className="w-full text-left py-3 rounded-md 
                    flex items-center gap-3 border border-gray-100 
                   text-gray-700 hover:bg-gray-50 transition
                  ">
                    <UserProfile user_info={user} className="!h-auto" withDrawer />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="w-full text-center py-3 rounded-md border
                    border-gray-300 text-[#49BBBD] font-bold
                      transition hover:border-[#49BBBD] 
                    "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="w-full text-center py-3 
                      rounded-md bg-[#49BBBD] text-white 
                      hover:opacity-90 transition font-bold
                    "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
