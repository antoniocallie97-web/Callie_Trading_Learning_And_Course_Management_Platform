import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Callie
          </h1>

          <div className="flex items-center gap-4">
            <span>
              Welcome, <strong>{user?.username || "Student"}</strong>
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">

        {/* Greeting */}
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-600 mt-2">
            Continue your trading journey and improve your market skills.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Courses Enrolled</h3>
            <p className="text-4xl font-bold mt-3 text-blue-700">5</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Lessons Completed</h3>
            <p className="text-4xl font-bold mt-3 text-green-600">42</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Certificates</h3>
            <p className="text-4xl font-bold mt-3 text-yellow-500">3</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Progress</h3>
            <p className="text-4xl font-bold mt-3 text-purple-600">76%</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Link
              to="/courses"
              className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
            >
              <div className="text-5xl">📚</div>

              <h3 className="font-bold text-xl mt-4">
                Browse Courses
              </h3>

              <p className="text-gray-600 mt-2">
                Explore Forex, Crypto, Stocks and more.
              </p>
            </Link>

            <Link
              to="/profile"
              className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
            >
              <div className="text-5xl">👤</div>

              <h3 className="font-bold text-xl mt-4">
                My Profile
              </h3>

              <p className="text-gray-600 mt-2">
                Update your personal information.
              </p>
            </Link>

            <Link
              to="/my-learning"
              className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
            >
              <div className="text-5xl">📈</div>

              <h3 className="font-bold text-xl mt-4">
                Learning Progress
              </h3>

              <p className="text-gray-600 mt-2">
                Continue where you left off.
              </p>
            </Link>

          </div>

        </div>

        {/* Continue Learning */}
        <div className="mt-10 bg-white rounded-xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Continue Learning
          </h2>

          <div className="border rounded-lg p-6">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-xl font-bold">
                  Forex Trading Masterclass
                </h3>

                <p className="text-gray-500">
                  Lesson 12 of 25
                </p>

              </div>

              <span className="font-bold text-blue-700">
                48%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-5">

              <div
                className="bg-blue-700 h-3 rounded-full"
                style={{ width: "48%" }}
              ></div>

            </div>

            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Resume Course
            </button>

          </div>

        </div>

        {/* Recommended Courses */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Recommended Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              "Advanced Price Action",
              "Risk Management",
              "Crypto Trading Strategy",
            ].map((course) => (

              <div
                key={course}
                className="bg-white rounded-xl shadow p-6"
              >

                <h3 className="text-xl font-bold">
                  {course}
                </h3>

                <p className="text-gray-600 mt-3">
                  Learn practical trading strategies from experienced mentors.
                </p>

                <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
                  View Course
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;