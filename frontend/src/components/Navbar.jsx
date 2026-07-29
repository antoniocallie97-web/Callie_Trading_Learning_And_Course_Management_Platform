import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition duration-300 ${
      isActive
        ? "bg-blue-700 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
    }`;

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <span>📈 Learn Forex, Crypto & Stock Trading with Industry Professionals</span>

          <Link
            to="/register"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-1 rounded-full font-semibold transition"
          >
            Join Now
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-wider text-blue-900">
                CALLIE
              </span>

              <span className="text-xs uppercase tracking-[4px] text-gray-500">
                Trading Learning Platform
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3">

              <NavLink to="/" className={navItem}>
                Home
              </NavLink>

              <NavLink to="/courses" className={navItem}>
                Courses
              </NavLink>

              <NavLink to="/guides" className={navItem}>
                Guides
              </NavLink>

              <NavLink to="/dashboard" className={navItem}>
                Dashboard
              </NavLink>

              <NavLink to="/profile" className={navItem}>
                Profile
              </NavLink>

            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">

              <button className="p-2 rounded-full hover:bg-gray-100">
                <Search size={20} />
              </button>

              <Link
                to="/login"
                className="px-5 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Register
              </Link>

              <button className="p-2 rounded-full bg-blue-100 text-blue-700">
                <User size={20} />
              </button>

            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white shadow-md">
            <div className="flex flex-col px-6 py-5 space-y-3">

              <NavLink
                to="/"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/courses"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Courses
              </NavLink>

              <NavLink
                to="/guides"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Guides
              </NavLink>

              <NavLink
                to="/dashboard"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/profile"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Profile
              </NavLink>

              <Link
                to="/login"
                className="w-full text-center py-3 border border-blue-700 rounded-lg text-blue-700 hover:bg-blue-700 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="w-full text-center py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;