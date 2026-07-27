import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function GuideDetails() {
  const { id } = useParams();

  const [guide, setGuide] = useState({
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

  // Later connect to Flask API
  /*
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/guides/${id}`)
      .then(res => res.json())
      .then(data => setGuide(data));
  }, [id]);
  */

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <Link
            to="/guides"
            className="text-blue-200 hover:text-white"
          >
            ← Back to Guides
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-8">

            <div>

              <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {guide.category}
              </span>

              <h1 className="text-5xl font-bold mt-5">
                {guide.title}
              </h1>

              <p className="mt-6 text-blue-100">
                {guide.description}
              </p>

              <div className="flex flex-wrap gap-6 mt-8">

                <span>👨‍🏫 {guide.instructor}</span>

                <span>📚 {guide.lessons} Lessons</span>

                <span>⏱ {guide.duration}</span>

                <span>⭐ {guide.level}</span>

              </div>

              <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Continue Learning
              </button>

            </div>

            <img
              src={guide.image}
              alt={guide.title}
              className="rounded-xl shadow-lg"
            />

          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}
          <div className="lg:col-span-2">

            {/* Progress */}
            <div className="bg-white rounded-xl shadow p-6">

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                  Progress
                </h2>

                <span className="font-bold text-blue-700">
                  {guide.progress}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 mt-5">

                <div
                  className="bg-blue-700 h-4 rounded-full"
                  style={{
                    width: `${guide.progress}%`,
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

                {guide.lessonList.map((lesson) => (

                  <div
                    key={lesson.id}
                    className="border rounded-lg p-5 flex justify-between hover:bg-gray-50"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {lesson.id}. {lesson.title}
                      </h3>

                      <p className="text-gray-500">
                        {lesson.duration}
                      </p>

                    </div>

                    <button className="bg-blue-700 text-white px-4 py-2 rounded">
                      Start
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
                Guide Summary
              </h2>

              <div className="space-y-4">

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

            <div className="bg-white rounded-xl shadow p-6 mt-8">

              <h2 className="text-xl font-bold mb-5">
                What You'll Learn
              </h2>

              <ul className="space-y-3">

                {guide.objectives.map((item, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="text-green-600">✔</span>

                    <span>{item}</span>

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

export default GuideDetails;