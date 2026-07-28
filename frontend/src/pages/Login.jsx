import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Invalid email or password."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/* Logo */}

        <div className="text-center mb-8">

          <h1 className="text-5xl font-extrabold text-blue-700 tracking-wide">
            CALLIE
          </h1>

          <p className="text-gray-500 text-lg mt-2">
            Trading Learning Platform
          </p>

        </div>

        {/* Welcome */}

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back 👋
        </h2>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                h-12
                px-4
                rounded-xl
                border-2
                border-gray-300
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-300
                outline-none
                transition
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="
                w-full
                h-12
                px-4
                rounded-xl
                border-2
                border-gray-300
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-300
                outline-none
                transition
              "
            />

          </div>

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-gray-600">

              <input type="checkbox" />

              Remember Me

            </label>

            <button
              type="button"
              className="text-blue-700 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-700
              hover:bg-blue-800
              text-white
              text-lg
              font-bold
              py-3
              rounded-xl
              transition-all
              duration-300
            "
          >
            {loading ? "Signing In..." : "LOGIN"}
          </button>

        </form>

        <div className="text-center mt-8">

          <p className="text-gray-600">
            Don't have an account?
          </p>

          <Link to="/register">

            <button
              className="
                mt-4
                w-full
                bg-green-600
                hover:bg-green-700
                text-white
                font-bold
                text-lg
                py-3
                rounded-xl
                transition-all
                duration-300
              "
            >
              REGISTER
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}