import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    bio: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }

        const data = await response.json();

        setFormData({
          username: data.username || "",
          email: data.email || "",
          phone: data.phone || "",
          country: data.country || "",
          bio: data.bio || "",
        });

        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [navigate, token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setMessage(data.message);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server.");
    }
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
        <div
          className="
            max-w-6xl
            mx-auto
            px-6
            py-5
            flex
            justify-between
            items-center
          "
        >
          <h1 className="text-2xl font-bold">
            My Profile
          </h1>

          <button
            onClick={handleLogout}
            className="
              bg-red-500
              hover:bg-red-600
              px-5
              py-2
              rounded-lg
            "
          >
            Logout
          </button>
        </div>
      </header>

      <div
        className="
          max-w-md
          mx-auto
          py-12
          px-6
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            shadow-xl
            overflow-hidden
          "
        >

          {/* Profile Banner */}
          <div
            className="
              bg-gradient-to-r
              from-blue-700
              to-indigo-700
              h-36
              flex
              justify-center
              items-center
            "
          >
            <div
              className="
                w-28
                h-28
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                text-5xl
                font-bold
                text-blue-700
                border-4
                border-white
              "
            >
              {formData.username
                ? formData.username.charAt(0).toUpperCase()
                : "U"}
            </div>
          </div>

          <div
            className="
              p-8
              text-center
            "
          >
            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {formData.username || "Student"}
            </h2>

            <p className="text-gray-500 mt-2">
              {formData.email}
            </p>

            {message && (
              <div
                className="
                  mt-6
                  bg-green-100
                  text-green-700
                  p-3
                  rounded-lg
                "
              >
                {message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="
                flex
                flex-col
                items-center
                gap-5
                mt-8
              "
            >
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="
                  w-72
                  px-4
                  py-3
                  border
                  rounded-lg
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="
                  w-72
                  px-4
                  py-3
                  border
                  rounded-lg
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="
                  w-72
                  px-4
                  py-3
                  border
                  rounded-lg
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="
                  w-72
                  px-4
                  py-3
                  border
                  rounded-lg
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

              <textarea
                rows="4"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                className="
                  w-72
                  px-4
                  py-3
                  border
                  rounded-lg
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  w-72
                  bg-blue-700
                  text-white
                  py-3
                  rounded-lg
                  font-bold
                  hover:bg-blue-800
                  transition
                "
              >
                Save Changes
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;