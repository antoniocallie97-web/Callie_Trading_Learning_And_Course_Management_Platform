import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="text-center max-w-xl">

        <h1 className="text-8xl font-extrabold text-blue-700">
          404
        </h1>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Go Home
          </Link>

          <Link
            to="/dashboard"
            className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            Dashboard
          </Link>

        </div>

        <div className="mt-12 text-7xl">
          📚
        </div>

        <p className="text-gray-500 mt-4">
          Continue learning with <span className="font-semibold">Callie Trading Learning Platform</span>.
        </p>

      </div>

    </div>
  );
}

export default NotFound;