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


    localStorage.setItem(
      "user",
      JSON.stringify({
        ...storedUser,
        ...formData,
      })
    );


    setMessage("Profile updated successfully!");

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

              {
                formData.username
                ? formData.username.charAt(0).toUpperCase()
                : "U"
              }


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



              {/* Username */}
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




              {/* Email */}
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





              {/* Phone */}
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





              {/* Country */}
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






              {/* Bio */}
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