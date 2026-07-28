import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl">

      <div className="max-w-7xl mx-auto px-8 py-6">

        {/* ================= TOP SECTION ================= */}

        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-5">

            <div className="bg-yellow-400 p-4 rounded-full shadow-2xl">
              <TrendingUp size={50} className="text-blue-900" />
            </div>

            <div>
              <h1 className="text-5xl font-black uppercase tracking-wider text-white">
                CALLIE
              </h1>

              <p className="text-blue-200 text-xl uppercase tracking-[7px] font-semibold">
                Trading Learning Platform
              </p>
            </div>

          </div>

          {/* Login/Register */}

          <div className="flex gap-5">

            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl text-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
            >
              Register
            </Link>

          </div>

        </div>

        {/* ================= NAVIGATION ================= */}

        <div className="grid grid-cols-4 gap-8 mt-12">

          <Link
            to="/"
            className="h-28 flex items-center justify-center
                       bg-blue-600
                       rounded-3xl
                       border-4 border-blue-300
                       text-white
                       text-3xl
                       font-extrabold
                       uppercase
                       shadow-2xl
                       hover:bg-blue-700
                       hover:shadow-blue-500
                       hover:-translate-y-2
                       hover:scale-105
                       transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="h-28 flex items-center justify-center
                       bg-blue-600
                       rounded-3xl
                       border-4 border-blue-300
                       text-white
                       text-3xl
                       font-extrabold
                       uppercase
                       shadow-2xl
                       hover:bg-blue-700
                       hover:shadow-blue-500
                       hover:-translate-y-2
                       hover:scale-105
                       transition-all duration-300"
          >
            Courses
          </Link>

          <Link
            to="/guides"
            className="h-28 flex items-center justify-center
                       bg-blue-600
                       rounded-3xl
                       border-4 border-blue-300
                       text-white
                       text-3xl
                       font-extrabold
                       uppercase
                       shadow-2xl
                       hover:bg-blue-700
                       hover:shadow-blue-500
                       hover:-translate-y-2
                       hover:scale-105
                       transition-all duration-300"
          >
            Guides
          </Link>

          <Link
            to="/dashboard"
            className="h-28 flex items-center justify-center
                       bg-blue-600
                       rounded-3xl
                       border-4 border-blue-300
                       text-white
                       text-3xl
                       font-extrabold
                       uppercase
                       shadow-2xl
                       hover:bg-blue-700
                       hover:shadow-blue-500
                       hover:-translate-y-2
                       hover:scale-105
                       transition-all duration-300"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </nav>
  );
}