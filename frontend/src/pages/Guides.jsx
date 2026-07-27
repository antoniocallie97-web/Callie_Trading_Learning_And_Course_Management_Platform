import { useParams, Link } from "react-router-dom";

function Guide() {
  const { id } = useParams();

  // Temporary data
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

      {/* Hero */}
      <section className="bg-blue-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            {guide.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {guide.title}
          </h1>

          <p className="mt-5 text-blue-100 max-w-3xl">
            {guide.description}
          </p>

          <div className="flex flex-wrap gap-6 mt-8 text-sm">

            <span>👨‍🏫 {guide.author}</span>

            <span>📚 {guide.lessons} Lessons</span>

            <span>⏱ {guide.duration}</span>

            <span>⭐ {guide.level}</span>

          </div>

          <button className="mt-10 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Start Learning
          </button>

        </div>

      </section>

      {/* Guide Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Lessons */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Course Content
            </h2>

            <div className="space-y-4">

              {guide.courseContent.map((lesson, index) => (

                <div
                  key={index}
                  className="border rounded-lg p-5 flex justify-between items-center hover:bg-gray-50"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <span className="font-medium">
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
          <div className="space-y-6">

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-xl font-bold mb-4">
                Guide Information
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Category</span>
                  <strong>{guide.category}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Difficulty</span>
                  <strong>{guide.level}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <strong>{guide.duration}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Lessons</span>
                  <strong>{guide.lessons}</strong>
                </div>

              </div>

              <button className="w-full mt-8 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                Enroll Now
              </button>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-xl font-bold mb-4">
                Skills You'll Learn
              </h3>

              <ul className="space-y-3 text-gray-600">

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
              className="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-black"
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