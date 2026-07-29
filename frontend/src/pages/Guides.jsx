import { useParams, Link } from "react-router-dom";

function Guide() {
  const { id } = useParams();


  const guide = {
    id,
    title: "Forex Trading Masterclass",
    author: "Callie Academy",
    category: "Forex",
    level: "Beginner",
    duration: "8 Hours",
    lessons: 18,

    description:
      "Master Forex trading from the fundamentals to advanced strategies. Learn market structure, technical analysis, risk management, and practical trading techniques.",


    courseContent: [
      "Introduction to Forex",
      "Understanding Currency Pairs",
      "Trading Sessions",
      "Candlestick Patterns",
      "Support & Resistance",
      "Trend Analysis",
      "Chart Patterns",
      "Risk Management",
      "Trading Psychology",
      "Building a Trading Plan",
      "Live Market Analysis",
      "Final Assessment",
    ],
  };


  return (
    <div className="min-h-screen bg-gray-100">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white">

        <div
          className="
            max-w-4xl
            mx-auto
            px-6
            py-14
            text-center
          "
        >

          <span
            className="
              bg-white
              text-blue-700
              px-4
              py-2
              rounded-full
              font-bold
              text-sm
            "
          >
            {guide.category}
          </span>


          <h1
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              mt-6
            "
          >
            {guide.title}
          </h1>


          <p
            className="
              mt-5
              text-blue-100
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            {guide.description}
          </p>


          <div
            className="
              flex
              justify-center
              flex-wrap
              gap-6
              mt-7
              text-sm
            "
          >

            <span>
              👨‍🏫 {guide.author}
            </span>

            <span>
              📚 {guide.lessons} Lessons
            </span>

            <span>
              ⏱ {guide.duration}
            </span>

            <span>
              ⭐ {guide.level}
            </span>

          </div>


          <button
            className="
              mt-8
              bg-white
              text-blue-700
              px-8
              py-3
              rounded-lg
              font-bold
              hover:bg-gray-100
            "
          >
            Start Learning
          </button>


        </div>

      </section>





      {/* Main Content */}
      <section
        className="
          max-w-4xl
          mx-auto
          px-6
          py-12
        "
      >


        <div
          className="
            grid
            lg:grid-cols-[1.7fr_1fr]
            gap-6
            items-start
          "
        >



          {/* Course Content */}
          <div
            className="
              bg-white
              rounded-2xl
              shadow-lg
              p-6
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-blue-900
                text-center
                mb-6
              "
            >
              Course Content
            </h2>


            <div className="space-y-3">


              {guide.courseContent.map((lesson, index) => (

                <div
                  key={index}
                  className="
                    border
                    rounded-lg
                    p-3
                    flex
                    justify-between
                    items-center
                    hover:bg-gray-50
                    transition
                  "
                >


                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-blue-700
                        text-white
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-sm
                      "
                    >
                      {index + 1}
                    </div>


                    <span
                      className="
                        font-medium
                        text-gray-700
                        text-sm
                      "
                    >
                      {lesson}
                    </span>


                  </div>


                  <span className="text-green-600">
                    ▶
                  </span>


                </div>

              ))}


            </div>


          </div>







          {/* Sidebar */}
          <div className="space-y-5">


            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-5
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                  text-blue-900
                  mb-5
                "
              >
                Guide Information
              </h3>



              <div className="space-y-4">


                <div className="flex justify-between text-sm">
                  <span>Category</span>
                  <strong>{guide.category}</strong>
                </div>


                <div className="flex justify-between text-sm">
                  <span>Level</span>
                  <strong>{guide.level}</strong>
                </div>


                <div className="flex justify-between text-sm">
                  <span>Duration</span>
                  <strong>{guide.duration}</strong>
                </div>


                <div className="flex justify-between text-sm">
                  <span>Lessons</span>
                  <strong>{guide.lessons}</strong>
                </div>


              </div>



              <button
                className="
                  w-full
                  mt-6
                  bg-blue-700
                  text-white
                  py-3
                  rounded-lg
                  font-bold
                  hover:bg-blue-800
                "
              >
                Enroll Now
              </button>


            </div>







            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-5
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                  text-blue-900
                  mb-4
                "
              >
                Skills You'll Learn
              </h3>


              <ul
                className="
                  space-y-2
                  text-gray-600
                  text-sm
                "
              >

                <li>✅ Technical Analysis</li>
                <li>✅ Risk Management</li>
                <li>✅ Trading Psychology</li>
                <li>✅ Chart Reading</li>
                <li>✅ Market Trends</li>
                <li>✅ Trade Planning</li>

              </ul>


            </div>





            <Link
              to="/dashboard"
              className="
                block
                text-center
                bg-gray-900
                text-white
                py-3
                rounded-lg
                font-bold
                hover:bg-black
              "
            >
              Back to Dashboard
            </Link>


          </div>


        </div>


      </section>


    </div>
  );
}


export default Guide;