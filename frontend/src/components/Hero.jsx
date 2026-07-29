import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}

          <div>

            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

              <TrendingUp size={18} />

              Professional Trading Education

            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

              Become a

              <span className="text-blue-700">
                {" "}Professional Trader
              </span>

              <br />

              with Callie

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              Learn Forex, Cryptocurrency, Stocks,
              Risk Management, Technical Analysis,
              Trading Psychology and Portfolio Management
              through structured professional courses
              designed for beginners and experienced traders.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/register"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center gap-2 transition"
              >
                Start Learning

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/courses"
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Browse Courses
              </Link>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-bold text-blue-700">

                  50+

                </h2>

                <p className="text-gray-600 mt-2">

                  Courses

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-700">

                  10K+

                </h2>

                <p className="text-gray-600 mt-2">

                  Students

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-700">

                  95%

                </h2>

                <p className="text-gray-600 mt-2">

                  Success Rate

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border">

              <div className="bg-blue-700 text-white rounded-2xl p-8">

                <span className="text-sm uppercase tracking-widest">

                  Featured Programme

                </span>

                <h2 className="mt-4 text-3xl font-bold">

                  Professional Trading Certificate

                </h2>

                <p className="mt-4 text-blue-100">

                  Master the financial markets with one
                  comprehensive learning pathway covering
                  Forex, Crypto, Stocks, Risk Management,
                  Trading Psychology and Technical Analysis.

                </p>

                <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-xl transition">

                  Learning Style Options

                </button>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="bg-slate-50 rounded-xl p-5">

                  <BookOpen
                    className="text-blue-700"
                    size={32}
                  />

                  <h3 className="font-bold mt-3">

                    60+ Lessons

                  </h3>

                  <p className="text-sm text-gray-600 mt-2">

                    Step-by-step curriculum.

                  </p>

                </div>

                <div className="bg-slate-50 rounded-xl p-5">

                  <Award
                    className="text-blue-700"
                    size={32}
                  />

                  <h3 className="font-bold mt-3">

                    Certificate

                  </h3>

                  <p className="text-sm text-gray-600 mt-2">

                    Earn recognition after completion.

                  </p>

                </div>

                <div className="bg-slate-50 rounded-xl p-5">

                  <ShieldCheck
                    className="text-blue-700"
                    size={32}
                  />

                  <h3 className="font-bold mt-3">

                    Risk Management

                  </h3>

                  <p className="text-sm text-gray-600 mt-2">

                    Learn capital protection strategies.

                  </p>

                </div>

                <div className="bg-slate-50 rounded-xl p-5">

                  <TrendingUp
                    className="text-blue-700"
                    size={32}
                  />

                  <h3 className="font-bold mt-3">

                    Live Markets

                  </h3>

                  <p className="text-sm text-gray-600 mt-2">

                    Real trading examples and analysis.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;