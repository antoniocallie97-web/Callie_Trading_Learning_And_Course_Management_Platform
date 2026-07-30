import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setIsError(false);

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {

        setMessage(data.message);

        // Save JWT token
        localStorage.setItem(
          "token",
          data.access_token
        );

        // Save logged-in user
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        // Clear form
        setFormData({
          email: "",
          password: "",
        });

        // Redirect after 1 second
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

      } else {

        setIsError(true);
        setMessage(
          data.message || "Login failed."
        );

      }

    } catch (error) {

      console.error(error);

      setIsError(true);
      setMessage(
        "Unable to connect to the server."
      );

    }

  };


  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
        px-6
      "
    >

      <div
        className="
          bg-white
          shadow-2xl
          rounded-2xl
          p-10
          w-full
          max-w-sm
        "
      >

        <h1
          className="
            text-3xl
            font-extrabold
            text-center
            uppercase
            text-blue-900
            mb-8
          "
        >
          LOGIN
        </h1>


        {message && (
          <p
            className={`
              text-center
              font-bold
              mb-5
              ${isError ? "text-red-600" : "text-green-600"}
            `}
          >
            {message}
          </p>
        )}


        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            items-center
            gap-5
          "
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-72
              px-4
              py-3
              rounded-lg
              border
              border-gray-300
              text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-72
              px-4
              py-3
              rounded-lg
              border
              border-gray-300
              text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />


          <button
            type="submit"
            className="
              w-72
              py-3
              mt-4
              rounded-lg
              bg-blue-700
              text-white
              font-bold
              uppercase
              hover:bg-blue-800
              transition
              shadow-lg
            "
          >
            Login
          </button>

        </form>


        <p
          className="
            text-center
            text-gray-600
            mt-6
          "
        >
          Don't have an account?

          <span
            className="
              text-blue-700
              font-semibold
              ml-2
              cursor-pointer
            "
          >
            Register
          </span>

        </p>

      </div>

    </div>
  );
}