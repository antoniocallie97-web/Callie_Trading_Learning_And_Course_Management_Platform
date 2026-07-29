import { NavLink, Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";

function NavigationMenu() {
  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition duration-300 ${
      isActive
        ? "text-blue-900 bg-blue-50"
        : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex flex-col"
          >
            <h1 className="text-4xl font-black tracking-widest text-blue-900">
              CALLIE
            </h1>

            <span className="text-xs uppercase tracking-[4px] text-gray-500">
              Trading Learning Platform
            </span>
          </Link>

          {/* Center Navigation */}

          <div className="hidden lg:flex items-center gap-3">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={navClass}
            >
              <div className="flex items-center gap-1">
                Courses
                <ChevronDown size={16} />
              </div>
            </NavLink>

            <NavLink
              to="/guides"
              className={navClass}
            >
              <div className="flex items-center gap-1">
                Guides
                <ChevronDown size={16} />
              </div>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={navClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/profile"
              className={navClass}
            >
              Profile
            </NavLink>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <button
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
            >
              <Search size={20} />
            </button>

            <button
              className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
            >
              <ShoppingCart size={20} />

              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <NavLink
              to="/login"
              className="text-blue-900 font-semibold hover:text-blue-700"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Register
            </NavLink>

            <button
              className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition"
            >
              <User
                size={20}
                className="text-blue-900"
              />
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default NavigationMenu;