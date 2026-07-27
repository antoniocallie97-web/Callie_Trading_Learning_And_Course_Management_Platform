import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight">
              Learn Trading From Professionals
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Welcome to <span className="font-semibold">Callie</span>, your
              complete trading learning platform. Access professional trading
              courses, market guides, educational videos, quizzes, and track
              your learning journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Learn With Callie?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">
              Professional Trading Courses
            </h3>
            <p className="text-gray-600">
              Learn Forex, Stocks, Crypto, and Commodities through structured
              lessons created by experienced traders.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-xl font-bold mb-3">
              Video Learning
            </h3>
            <p className="text-gray-600">
              Watch detailed trading tutorials with practical examples and live
              market analysis.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">
              Track Your Progress
            </h3>
            <p className="text-gray-600">
              Monitor completed lessons, quizzes, certificates, and your overall
              learning progress.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Trading Categories
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Forex Trading",
              "Cryptocurrency",
              "Stock Market",
              "Risk Management",
            ].map((course) => (
              <div
                key={course}
                className="border rounded-xl p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="font-bold text-xl">{course}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Become a Better Trader?
          </h2>

          <p className="mt-5 text-lg text-indigo-100">
            Join thousands of learners improving their trading knowledge through
            expert-led courses and practical market education.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Callie Trading Learning Platform</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;