import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

          <p className="text-sm font-medium text-center">
            🎉 New Professional Trading Programs Now Available
          </p>

          <Link
            to="/courses"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-5 py-2 rounded-full text-sm font-bold transition"
          >
            Explore Courses
          </Link>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col"
            >
              <span className="text-3xl font-extrabold tracking-wider text-blue-900">
                CALLIE
              </span>

              <span className="text-xs tracking-[4px] text-gray-500 uppercase">
                Trading Learning Platform
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">

              <Link
                to="/courses"
                className="text-gray-700 hover:text-blue-700 font-medium transition"
              >
                Courses
              </Link>

              <Link
                to="/certificates"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium transition"
              >
                Professional Certificates
                <ChevronDown size={16} />
              </Link>

              <Link
                to="/pre-college"
                className="text-gray-700 hover:text-blue-700 font-medium transition"
              >
                Beginner Programs
              </Link>

              <Link
                to="/enterprise"
                className="text-gray-700 hover:text-blue-700 font-medium transition"
              >
                Enterprise
              </Link>

              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-700 font-medium transition"
              >
                Resource Center
              </Link>

            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-5">

              <button className="text-gray-600 hover:text-blue-700 transition">
                <Search size={22} />
              </button>

              <button className="text-gray-600 hover:text-blue-700 transition relative">
                <ShoppingCart size={22} />

                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-950 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </button>

              <Link
                to="/login"
                className="font-semibold text-blue-900 hover:text-blue-700 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg"
              >
                Start Learning
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (

          <div className="lg:hidden border-t bg-white">

            <div className="flex flex-col p-6 space-y-5">

              <Link to="/courses">Courses</Link>

              <Link to="/certificates">
                Professional Certificates
              </Link>

              <Link to="/pre-college">
                Beginner Programs
              </Link>

              <Link to="/enterprise">
                Enterprise
              </Link>

              <Link to="/resources">
                Resource Center
              </Link>

              <Link
                to="/login"
                className="font-semibold text-blue-700"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-700 text-white text-center py-3 rounded-xl"
              >
                Start Learning
              </Link>

            </div>

          </div>

        )}

      </nav>
    </>
  );
}

export default Navbar;