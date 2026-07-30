import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <nav
      className="
        w-full
        bg-white
        shadow-lg
        py-6
        px-10
        flex
        items-center
        justify-between
      "
    >
      {/* Main Navigation */}
      <div
        className="
          flex
          flex-1
          justify-around
          items-center
          max-w-5xl
        "
      >
        <Link
          to="/"
          className="
            text-lg
            font-bold
            uppercase
            tracking-wide
            text-blue-900
            hover:text-yellow-500
            hover:scale-110
            transition
            duration-300
          "
        >
          Home
        </Link>

        <Link
          to="/courses"
          className="
            text-lg
            font-bold
            uppercase
            tracking-wide
            text-blue-900
            hover:text-yellow-500
            hover:scale-110
            transition
            duration-300
          "
        >
          Courses
        </Link>

        <Link
          to="/guides"
          className="
            text-lg
            font-bold
            uppercase
            tracking-wide
            text-blue-900
            hover:text-yellow-500
            hover:scale-110
            transition
            duration-300
          "
        >
          Guides
        </Link>

        <Link
          to="/dashboard"
          className="
            text-lg
            font-bold
            uppercase
            tracking-wide
            text-blue-900
            hover:text-yellow-500
            hover:scale-110
            transition
            duration-300
          "
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          className="
            text-lg
            font-bold
            uppercase
            tracking-wide
            text-blue-900
            hover:text-yellow-500
            hover:scale-110
            transition
            duration-300
          "
        >
          Profile
        </Link>
      </div>

      {/* Authentication Buttons */}
      <div
        className="
          flex
          items-center
          gap-8
        "
      >
        {!token ? (
          <>
            {/* Register */}
            <div
              className="
                border-2
                border-yellow-500
                rounded-xl
                px-7
                py-3
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
                shadow-lg
                hover:scale-110
                transition
              "
            >
              <Link
                to="/register"
                className="
                  text-white
                  text-lg
                  font-bold
                  uppercase
                "
              >
                Register
              </Link>
            </div>

            {/* Login */}
            <div
              className="
                border-2
                border-blue-700
                rounded-xl
                px-7
                py-3
                bg-blue-700
                shadow-lg
                hover:scale-110
                transition
              "
            >
              <Link
                to="/login"
                className="
                  text-white
                  text-lg
                  font-bold
                  uppercase
                "
              >
                Login
              </Link>
            </div>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="
              border-2
              border-red-600
              rounded-xl
              px-7
              py-3
              bg-red-600
              text-white
              text-lg
              font-bold
              uppercase
              shadow-lg
              hover:bg-red-700
              hover:scale-110
              transition
            "
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}