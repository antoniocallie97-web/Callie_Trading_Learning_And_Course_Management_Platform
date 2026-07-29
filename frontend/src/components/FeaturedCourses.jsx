import { Link } from "react-router-dom";
import {
  TrendingUp,
  Bitcoin,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "Forex Trading Mastery",
    description:
      "Master the world's largest financial market through technical analysis, price action, and professional trading strategies.",
    icon: TrendingUp,
    level: "Beginner • Intermediate",
    duration: "12 Weeks",
    color: "bg-blue-600",
  },
  {
    title: "Cryptocurrency Investing",
    description:
      "Learn blockchain technology, crypto investing, DeFi, NFTs, and advanced digital asset portfolio management.",
    icon: Bitcoin,
    level: "Beginner",
    duration: "10 Weeks",
    color: "bg-amber-500",
  },
  {
    title: "Stock Market Investing",
    description:
      "Understand stocks, ETFs, dividends, growth investing, and value investing with real market examples.",
    icon: BarChart3,
    level: "Intermediate",
    duration: "14 Weeks",
    color: "bg-emerald-600",
  },
  {
    title: "Risk Management",
    description:
      "Protect your capital through position sizing, portfolio diversification, and professional risk control.",
    icon: ShieldCheck,
    level: "All Levels",
    duration: "6 Weeks",
    color: "bg-indigo-600",
  },
  {
    title: "Trading Psychology",
    description:
      "Develop emotional discipline, confidence, patience, and decision-making skills used by successful traders.",
    icon: BrainCircuit,
    level: "All Levels",
    duration: "8 Weeks",
    color: "bg-purple-600",
  },
];

function FeaturedCourses() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Featured Programs
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-slate-900">
            Learn From Industry-Focused Trading Programs
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Whether you're beginning your trading journey or expanding your
            professional skills, Callie offers practical, structured courses
            designed to help you succeed in today's financial markets.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
              >
                <div className={`${course.color} p-6`}>
                  <Icon className="text-white" size={42} />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {course.description}
                  </p>

                  <div className="flex justify-between mt-8 text-sm text-gray-500">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>

                  <Link
                    to="/courses"
                    className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-4 transition-all"
                  >
                    View Course

                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
          >
            Explore All Courses

            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;