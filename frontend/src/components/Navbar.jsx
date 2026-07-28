import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-blue-700"
        >
          <TrendingUp size={34} />
          CALLIE
        </Link>

        <div className="flex gap-10">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Courses
          </Link>

          <Link
            to="/guides"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Guides
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Dashboard
          </Link>

        </div>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}