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

        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            py-5
            flex
            justify-between
            items-center
          "
        >

          <h1 className="text-3xl font-extrabold uppercase">
            CALLIE
          </h1>


          <div className="flex items-center gap-8">

            <span className="text-lg">
              Welcome,{" "}
              <strong>
                {user?.username || "Student"}
              </strong>
            </span>


            <button
              onClick={handleLogout}
              className="
                bg-red-500
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-red-600
                transition
              "
            >
              Logout
            </button>


          </div>

        </div>

      </nav>



      {/* Main Dashboard Content */}
      <main
        className="
          max-w-7xl
          mx-auto
          px-8
          py-16
          text-center
        "
      >



        {/* Welcome Section */}
        <section
          className="
            bg-white
            rounded-2xl
            shadow-lg
            p-12
          "
        >

          <h2
            className="
              text-4xl
              font-extrabold
              text-blue-900
            "
          >
            Welcome Back 👋
          </h2>


          <p
            className="
              text-gray-600
              text-xl
              mt-5
              leading-relaxed
            "
          >
            Continue your trading journey and improve your market skills.
          </p>


        </section>





        {/* Statistics */}
        <section className="mt-16">


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-10
            "
          >


            {[
              {
                title: "Courses Enrolled",
                value: "5",
                color: "text-blue-700",
              },

              {
                title: "Lessons Completed",
                value: "42",
                color: "text-green-600",
              },

              {
                title: "Certificates",
                value: "3",
                color: "text-yellow-500",
              },

              {
                title: "Progress",
                value: "76%",
                color: "text-purple-600",
              },

            ].map((item) => (

              <div
                key={item.title}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  p-10
                  min-h-[220px]
                  flex
                  flex-col
                  justify-center
                "
              >

                <h3 className="text-gray-500 text-lg">
                  {item.title}
                </h3>


                <p
                  className={`
                    text-5xl
                    font-extrabold
                    mt-6
                    ${item.color}
                  `}
                >
                  {item.value}
                </p>


              </div>

            ))}


          </div>


        </section>





        {/* Quick Actions */}
        <section className="mt-20">


          <h2
            className="
              text-3xl
              font-bold
              text-blue-900
              mb-10
            "
          >
            Quick Actions
          </h2>



          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-10
            "
          >


            {[
              {
                icon: "📚",
                title: "Browse Courses",
                text: "Explore Forex, Crypto, Stocks and more.",
                link: "/courses",
              },

              {
                icon: "👤",
                title: "My Profile",
                text: "Update your personal information.",
                link: "/profile",
              },

              {
                icon: "📈",
                title: "Learning Progress",
                text: "Continue where you left off.",
                link: "/my-learning",
              },

            ].map((item) => (

              <Link
                key={item.title}
                to={item.link}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  p-10
                  hover:shadow-2xl
                  transition
                "
              >

                <div className="text-6xl">
                  {item.icon}
                </div>


                <h3
                  className="
                    text-2xl
                    font-bold
                    mt-6
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    text-gray-600
                    mt-4
                    leading-relaxed
                  "
                >
                  {item.text}
                </p>


              </Link>

            ))}


          </div>


        </section>







        {/* Continue Learning */}
        <section
          className="
            mt-20
            bg-white
            rounded-2xl
            shadow-lg
            p-12
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-blue-900
              mb-10
            "
          >
            Continue Learning
          </h2>



          <div className="border rounded-xl p-10">


            <h3 className="text-2xl font-bold">
              Forex Trading Masterclass
            </h3>


            <p className="text-gray-500 mt-4 text-lg">
              Lesson 12 of 25
            </p>



            <div
              className="
                w-full
                bg-gray-200
                rounded-full
                h-4
                mt-8
              "
            >

              <div
                className="
                  bg-blue-700
                  h-4
                  rounded-full
                "
                style={{
                  width: "48%",
                }}
              >

              </div>


            </div>



            <p
              className="
                text-blue-700
                font-bold
                text-lg
                mt-5
              "
            >
              48% Complete
            </p>



            <button
              className="
                mt-8
                bg-blue-700
                text-white
                px-10
                py-4
                rounded-lg
                hover:bg-blue-800
                transition
              "
            >
              Resume Course
            </button>


          </div>


        </section>







        {/* Recommended Courses */}
        <section className="mt-20">


          <h2
            className="
              text-3xl
              font-bold
              text-blue-900
              mb-10
            "
          >
            Recommended Courses
          </h2>



          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-10
            "
          >

            {[
              "Advanced Price Action",
              "Risk Management",
              "Crypto Trading Strategy",
            ].map((course) => (

              <div
                key={course}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  p-10
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {course}
                </h3>


                <p
                  className="
                    text-gray-600
                    mt-5
                    leading-relaxed
                  "
                >
                  Learn practical trading strategies from experienced mentors.
                </p>


                <button
                  className="
                    mt-8
                    bg-blue-700
                    text-white
                    px-8
                    py-3
                    rounded-lg
                    hover:bg-blue-800
                  "
                >
                  View Course
                </button>


              </div>

            ))}


          </div>


        </section>



      </main>


    </div>
  );
}


export default Dashboard;