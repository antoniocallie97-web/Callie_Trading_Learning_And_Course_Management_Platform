import { useParams, Link } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  // Temporary course data
  const course = {
    id,
    title: "Forex Trading Masterclass",
    category: "Forex",
    instructor: "Callie Academy",
    level: "Beginner",
    duration: "8 Hours",
    students: 1543,
    rating: 4.9,
    progress: 35,
    description:
      "Master Forex trading from beginner to advanced level. Learn market structure, technical analysis, price action, risk management, trading psychology, and how to build a profitable trading strategy.",

    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",

    lessons: [
      { id: 1, title: "Introduction to Forex", duration: "12 min" },
      { id: 2, title: "Currency Pairs", duration: "18 min" },
      { id: 3, title: "Market Sessions", duration: "20 min" },
      { id: 4, title: "Candlestick Patterns", duration: "25 min" },
      { id: 5, title: "Support & Resistance", duration: "30 min" },
      { id: 6, title: "Trend Analysis", duration: "28 min" },
      { id: 7, title: "Risk Management", duration: "35 min" },
      { id: 8, title: "Trading Psychology", duration: "22 min" },
      { id: 9, title: "Building a Trading Plan", duration: "40 min" },
    ],

    skills: [
      "Technical Analysis",
      "Risk Management",
      "Trading Psychology",
      "Price Action",
      "Chart Reading",
      "Trade Planning",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <Link
            to="/courses"
            className="text-blue-200 hover:text-white"
          >
            ← Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-8">

            <div>

              <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {course.category}
              </span>

              <h1 className="text-5xl font-bold mt-5">
                {course.title}
              </h1>

              <p className="mt-6 text-blue-100">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 mt-8">

                <span>👨‍🏫 {course.instructor}</span>

                <span>📚 {course.lessons.length} Lessons</span>

                <span>⭐ {course.rating}</span>

                <span>⏱ {course.duration}</span>

              </div>

              <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Start Course
              </button>

            </div>

            <img
              src={course.image}
              alt={course.title}
              className="rounded-xl shadow-lg"
            />

          </div>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Lessons */}
          <div className="lg:col-span-2">

            {/* Progress */}
            <div className="bg-white rounded-xl shadow p-6">

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                  Your Progress
                </h2>

                <span className="text-blue-700 font-bold">
                  {course.progress}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 mt-5">

                <div
                  className="bg-blue-700 h-4 rounded-full"
                  style={{
                    width: `${course.progress}%`,
                  }}
                ></div>

              </div>

            </div>

            {/* Lessons */}
            <div className="bg-white rounded-xl shadow p-6 mt-8">

              <h2 className="text-2xl font-bold mb-6">
                Course Lessons
              </h2>

              <div className="space-y-4">

                {course.lessons.map((lesson) => (

                  <div
                    key={lesson.id}
                    className="border rounded-lg p-5 flex justify-between items-center hover:bg-gray-50"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {lesson.id}. {lesson.title}
                      </h3>

                      <p className="text-gray-500">
                        {lesson.duration}
                      </p>

                    </div>

                    <button className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800">
                      Watch
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div>

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-xl font-bold mb-5">
                Course Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Instructor</span>
                  <strong>{course.instructor}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Students</span>
                  <strong>{course.students}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <strong>{course.duration}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Level</span>
                  <strong>{course.level}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Lessons</span>
                  <strong>{course.lessons.length}</strong>
                </div>

              </div>

            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow p-6 mt-8">

              <h2 className="text-xl font-bold mb-5">
                Skills You'll Learn
              </h2>

              <ul className="space-y-3">

                {course.skills.map((skill, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-600">✔</span>
                    {skill}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;