import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide"
          >
            Callie
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="hover:text-gray-200 transition"
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="hover:text-gray-200 transition"
            >
              Courses
            </Link>

            <Link
              to="/guides"
              className="hover:text-gray-200 transition"
            >
              Guides
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className="hover:text-gray-200 transition"
              >
                Dashboard
              </Link>
            )}

          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  {user.username}
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-gray-200"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800">

          <Link
            to="/"
            className="block px-6 py-3 hover:bg-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="block px-6 py-3 hover:bg-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>

          <Link
            to="/guides"
            className="block px-6 py-3 hover:bg-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Guides
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block px-6 py-3 hover:bg-blue-900"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="block px-6 py-3 hover:bg-blue-900"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left px-6 py-3 bg-red-500 hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-6 py-3 hover:bg-blue-900"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="block px-6 py-3 hover:bg-blue-900"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;