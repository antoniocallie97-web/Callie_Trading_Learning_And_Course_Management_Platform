import { useState } from "react";

export default function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Added success message state
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Show success message
    setMessage("Registration successful!");

    // Clear form after registration
    setFormData({
      username: "",
      email: "",
      password: "",
    });
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
          REGISTER
        </h1>


        {/* Success Message */}
        {message && (
          <p
            className="
              text-green-600
              text-center
              font-bold
              mb-5
            "
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
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
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
            Create Account
          </button>


        </form>


        <p
          className="
            text-center
            text-gray-600
            mt-6
          "
        >
          Already have an account?

          <span
            className="
              text-blue-700
              font-semibold
              ml-2
              cursor-pointer
            "
          >
            Login
          </span>

        </p>


      </div>


    </div>
  );
}