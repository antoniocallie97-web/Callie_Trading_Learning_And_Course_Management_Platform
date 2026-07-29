import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function GuideDetails() {
  const { id } = useParams();

  const [guide] = useState({
    id,
    title: "Forex Trading Masterclass",
    category: "Forex",
    instructor: "Callie Academy",

    description:
      "Learn Forex trading from beginner to advanced level. Understand market structure, price action, risk management, trading psychology, and build a profitable trading plan.",

    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",

    duration: "8 Hours",
    lessons: 18,
    students: 1543,
    level: "Beginner",
    progress: 35,


    objectives: [
      "Understand Forex market structure",
      "Learn candlestick patterns",
      "Master technical analysis",
      "Develop risk management skills",
      "Build a complete trading strategy",
    ],


    lessonList: [
      {
        id: 1,
        title: "Introduction to Forex",
        duration: "15 min",
      },

      {
        id: 2,
        title: "Currency Pairs",
        duration: "22 min",
      },

      {
        id: 3,
        title: "Candlestick Patterns",
        duration: "35 min",
      },

      {
        id: 4,
        title: "Support & Resistance",
        duration: "28 min",
      },

      {
        id: 5,
        title: "Risk Management",
        duration: "30 min",
      },
    ],
  });



  return (

    <div className="min-h-screen bg-gray-100">


      {/* Hero */}
      <section className="bg-blue-700 text-white">


        <div
          className="
            max-w-6xl
            mx-auto
            px-8
            py-16
          "
        >


          <Link
            to="/guides"
            className="
              text-blue-200
              hover:text-white
            "
          >
            ← Back to Guides
          </Link>



          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              items-center
              mt-10
            "
          >


            <div>


              <span
                className="
                  bg-white
                  text-blue-700
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                "
              >
                {guide.category}
              </span>



              <h1
                className="
                  text-5xl
                  font-extrabold
                  mt-8
                "
              >
                {guide.title}
              </h1>



              <p
                className="
                  mt-6
                  text-blue-100
                  leading-relaxed
                  text-lg
                "
              >
                {guide.description}
              </p>



              <div
                className="
                  flex
                  flex-wrap
                  gap-8
                  mt-10
                "
              >

                <span>
                  👨‍🏫 {guide.instructor}
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
                  mt-10
                  bg-white
                  text-blue-700
                  px-10
                  py-3
                  rounded-xl
                  font-bold
                "
              >
                Continue Learning
              </button>


            </div>




            <img
              src={guide.image}
              alt={guide.title}
              className="
                rounded-2xl
                shadow-xl
              "
            />



          </div>


        </div>


      </section>






      {/* Main Content */}
      <section
        className="
          max-w-5xl
          mx-auto
          px-8
          py-16
        "
      >


        <div
          className="
            grid
            lg:grid-cols-[1.7fr_1fr]
            gap-10
            items-start
          "
        >





          {/* Left Content */}
          <div>



            {/* Progress */}
            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-8
              "
            >

              <div
                className="
                  flex
                  justify-between
                  items-center
                "
              >

                <h2 className="text-2xl font-bold">
                  Progress
                </h2>


                <span
                  className="
                    font-bold
                    text-blue-700
                  "
                >
                  {guide.progress}%
                </span>


              </div>



              <div
                className="
                  w-full
                  bg-gray-200
                  rounded-full
                  h-4
                  mt-6
                "
              >

                <div
                  className="
                    bg-blue-700
                    h-4
                    rounded-full
                  "
                  style={{
                    width: `${guide.progress}%`,
                  }}
                ></div>


              </div>


            </div>







            {/* Lessons */}
            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-8
                mt-10
              "
            >


              <h2
                className="
                  text-3xl
                  font-bold
                  mb-8
                "
              >
                Course Lessons
              </h2>




              <div className="space-y-6">


                {guide.lessonList.map((lesson) => (

                  <div
                    key={lesson.id}
                    className="
                      border
                      rounded-xl
                      p-6
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
                        gap-5
                      "
                    >


                      <div
                        className="
                          w-10
                          h-10
                          rounded-full
                          bg-blue-700
                          text-white
                          flex
                          items-center
                          justify-center
                          font-bold
                        "
                      >
                        {lesson.id}
                      </div>



                      <div>


                        <h3
                          className="
                            font-bold
                            text-lg
                          "
                        >
                          {lesson.id}. {lesson.title}
                        </h3>



                        <p
                          className="
                            text-gray-500
                            mt-2
                          "
                        >
                          ⏱ {lesson.duration}
                        </p>


                      </div>


                    </div>





                    <button
                      className="
                        bg-blue-700
                        text-white
                        px-6
                        py-2
                        rounded-lg
                        hover:bg-blue-800
                      "
                    >
                      Start
                    </button>


                  </div>


                ))}



              </div>


            </div>


          </div>







          {/* Sidebar */}
          <aside
            className="
              space-y-10
            "
          >


            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-7
              "
            >


              <h2
                className="
                  text-xl
                  font-bold
                  mb-6
                "
              >
                Guide Summary
              </h2>



              <div className="space-y-5">


                <div className="flex justify-between">
                  <span>Students</span>
                  <strong>{guide.students}</strong>
                </div>


                <div className="flex justify-between">
                  <span>Lessons</span>
                  <strong>{guide.lessons}</strong>
                </div>


                <div className="flex justify-between">
                  <span>Duration</span>
                  <strong>{guide.duration}</strong>
                </div>


                <div className="flex justify-between">
                  <span>Level</span>
                  <strong>{guide.level}</strong>
                </div>


              </div>


            </div>







            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-7
              "
            >


              <h2
                className="
                  text-xl
                  font-bold
                  mb-6
                "
              >
                What You'll Learn
              </h2>



              <ul className="space-y-5">


                {guide.objectives.map((item,index)=>(

                  <li
                    key={index}
                    className="
                      flex
                      gap-3
                      items-start
                    "
                  >

                    <span className="text-green-600">
                      ✔
                    </span>


                    <span>
                      {item}
                    </span>


                  </li>


                ))}


              </ul>


            </div>



          </aside>



        </div>


      </section>



    </div>

  );
}


export default GuideDetails;