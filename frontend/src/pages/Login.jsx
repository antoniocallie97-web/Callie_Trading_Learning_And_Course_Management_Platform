import { useState } from "react";

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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


        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            items-center
            gap-5
          "
        >


          {/* Email */}
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



          {/* Password */}
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



          {/* Login Button */}
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