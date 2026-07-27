import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-800 text-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div>
            <h1 className="text-2xl font-bold">
              Callie Admin Panel
            </h1>

            <p className="text-blue-200">
              Welcome, {admin?.username || "Administrator"}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Statistics */}
        <h2 className="text-3xl font-bold mb-6">
          Dashboard Overview
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Users</h3>
            <p className="text-4xl font-bold text-blue-700 mt-2">
              150
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Courses</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">
              18
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Guides</h3>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              34
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-500">Enrollments</h3>
            <p className="text-4xl font-bold text-orange-500 mt-2">
              526
            </p>
          </div>

        </div>

        {/* Management Cards */}
        <h2 className="text-3xl font-bold mt-12 mb-6">
          Management
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Link
            to="/admin/users"
            className="bg-white shadow rounded-xl p-8 hover:shadow-lg transition"
          >
            <div className="text-5xl">👥</div>

            <h3 className="text-2xl font-bold mt-4">
              Manage Users
            </h3>

            <p className="text-gray-600 mt-3">
              View, edit and remove registered users.
            </p>

          </Link>

          <Link
            to="/admin/courses"
            className="bg-white shadow rounded-xl p-8 hover:shadow-lg transition"
          >
            <div className="text-5xl">📚</div>

            <h3 className="text-2xl font-bold mt-4">
              Manage Courses
            </h3>

            <p className="text-gray-600 mt-3">
              Create, edit or delete trading courses.
            </p>

          </Link>

          <Link
            to="/admin/guides"
            className="bg-white shadow rounded-xl p-8 hover:shadow-lg transition"
          >
            <div className="text-5xl">📖</div>

            <h3 className="text-2xl font-bold mt-4">
              Manage Guides
            </h3>

            <p className="text-gray-600 mt-3">
              Publish and organize learning guides.
            </p>

          </Link>

          <Link
            to="/admin/comments"
            className="bg-white shadow rounded-xl p-8 hover:shadow-lg transition"
          >
            <div className="text-5xl">💬</div>

            <h3 className="text-2xl font-bold mt-4">
              Comments
            </h3>

            <p className="text-gray-600 mt-3">
              Moderate discussions and feedback.
            </p>

          </Link>

          <Link
            to="/admin/reports"
            className="bg-white shadow rounded-xl p-8 hover:shadow-lg transition"
          >
            <div className="text-5xl">📈</div>

            <h3 className="text-2xl font-bold mt-4">
              Reports
            </h3>

            <p className="text-gray-600 mt-3">
              Monitor platform growth and analytics.
            </p>

          </Link>

          <Link
            to="/admin/settings"
            className="bg-white shadow rounded-xl p-8 hover:shadow-lg transition"
          >
            <div className="text-5xl">⚙️</div>

            <h3 className="text-2xl font-bold mt-4">
              Settings
            </h3>

            <p className="text-gray-600 mt-3">
              Configure the Callie platform.
            </p>

          </Link>

        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-xl mt-12 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">User</th>
                <th className="text-left py-3">Activity</th>
                <th className="text-left py-3">Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-4">John Doe</td>
                <td>Enrolled in Forex Masterclass</td>
                <td>Today</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Jane Smith</td>
                <td>Completed Risk Management</td>
                <td>Today</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Michael</td>
                <td>Registered Account</td>
                <td>Yesterday</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;