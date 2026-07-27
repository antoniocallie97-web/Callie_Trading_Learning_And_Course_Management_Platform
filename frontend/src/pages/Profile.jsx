import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [formData, setFormData] = useState({
    username: storedUser.username || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    country: storedUser.country || "",
    bio: storedUser.bio || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save locally for now
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...storedUser,
        ...formData,
      })
    );

    setMessage("Profile updated successfully!");

    // Later replace with:
    // PUT /api/profile
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-700 text-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            My Profile
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto py-10 px-6">

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Top Banner */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 h-40 flex justify-center items-center">

            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-blue-700 border-4 border-white">

              {formData.username
                ? formData.username.charAt(0).toUpperCase()
                : "U"}

            </div>

          </div>

          <div className="p-8">

            <h2 className="text-3xl font-bold text-center">
              {formData.username || "Student"}
            </h2>

            <p className="text-center text-gray-500 mt-2">
              {formData.email}
            </p>

            {message && (
              <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-lg">
                {message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6 mt-8"
            >

              <div>
                <label className="font-semibold block mb-2">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254..."
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Kenya"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-semibold block mb-2">
                  Bio
                </label>

                <textarea
                  rows="5"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">

                <button
                  type="submit"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;