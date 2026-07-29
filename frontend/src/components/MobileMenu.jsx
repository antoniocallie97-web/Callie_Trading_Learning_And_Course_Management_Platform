import { NavLink } from "react-router-dom";
import {
  X,
  Home,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={closeMenu}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-80 h-screen bg-white shadow-2xl z-50 lg:hidden">

        {/* Header */}
        <div className="bg-blue-900 text-white px-6 py-5 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-black tracking-wider">
              CALLIE
            </h2>

            <p className="text-xs uppercase tracking-[4px] text-yellow-400">
              Trading Academy
            </p>
          </div>

          <button onClick={closeMenu}>
            <X size={30} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="mt-6">

          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
          >
            <Home size={22} />
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
          >
            <BookOpen size={22} />
            Courses
          </NavLink>

          <NavLink
            to="/guides"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
          >
            <GraduationCap size={22} />
            Guides
          </NavLink>

          <NavLink
            to="/dashboard"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
          >
            <LayoutDashboard size={22} />
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
          >
            <User size={22} />
            Profile
          </NavLink>

          <hr className="my-4" />

          <NavLink
            to="/login"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
          >
            <LogIn size={22} />
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={closeMenu}
            className="flex items-center gap-4 px-6 py-4 text-white bg-blue-900 hover:bg-blue-800 mx-4 rounded-xl transition"
          >
            <UserPlus size={22} />
            Register
          </NavLink>

        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-100 p-6">

          <h3 className="font-bold text-blue-900 mb-3">
            Contact Us
          </h3>

          <p className="text-sm text-gray-600">
            📧 antoniocallie97@gmail.com
          </p>

          <p className="text-sm text-gray-600 mt-2">
            📞 +254 719 203 612
          </p>

          <p className="text-sm text-gray-600 mt-2">
            📍 Nairobi, Kenya
          </p>

        </div>

      </div>
    </>
  );
}

export default MobileMenu;