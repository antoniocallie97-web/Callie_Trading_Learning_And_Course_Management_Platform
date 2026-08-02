import { Link, useParams } from "react-router-dom";

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
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-3xl"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}

            <div>

              <span className="inline-flex rounded-full border border-cyan-400 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">

                {guide.category} • {guide.level}

              </span>

              <h1 className="mt-7 text-5xl md:text-6xl font-black leading-tight">

                {guide.title}

              </h1>

              <p className="mt-8 text-slate-300 text-lg leading-8">

                {guide.description}

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-400">

                  ▶ Start Learning

                </button>

                <button className="rounded-xl border border-cyan-500 px-8 py-4 font-bold text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-slate-900">

                  Enroll Now

                </button>

              </div>

              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                  <p className="text-3xl font-black text-cyan-400">

                    {guide.lessons}

                  </p>

                  <p className="text-slate-400">

                    Lessons

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                  <p className="text-3xl font-black text-cyan-400">

                    {guide.duration}

                  </p>

                  <p className="text-slate-400">

                    Duration

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                  <p className="text-3xl font-black text-cyan-400">

                    4.9★

                  </p>

                  <p className="text-slate-400">

                    Rating

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                  <p className="text-3xl font-black text-cyan-400">

                    3K+

                  </p>

                  <p className="text-slate-400">

                    Students

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div>

              <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

                <h2 className="text-3xl font-bold">

                  Course Progress

                </h2>

                <p className="mt-3 text-slate-400">

                  Continue your learning journey.

                </p>

                <div className="mt-10">

                  <div className="flex justify-between mb-3">

                    <span className="text-slate-300">

                      Progress

                    </span>

                    <span className="font-bold">

                      35%

                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-700">

                    <div className="h-3 w-1/3 rounded-full bg-cyan-400"></div>

                  </div>

                </div>

                <div className="mt-10 space-y-6">

                  <div className="flex justify-between">

                    <span className="text-slate-300">

                      Completed

                    </span>

                    <span>

                      6 Lessons

                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-300">

                      Remaining

                    </span>

                    <span>

                      12 Lessons

                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-300">

                      Certificate

                    </span>

                    <span className="text-cyan-400 font-bold">

                      Available

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

          {/* Course Content */}
          <div></div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-3xl font-bold">
                    Course Curriculum
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Complete each lesson to unlock the next one.
                  </p>

                </div>

                <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300 text-sm font-semibold">
                  {guide.lessons} Lessons
                </span>

              </div>

              <div className="space-y-5">

                {guide.courseContent.map((lesson, index) => (

                  <div
                    key={index}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  >

                    <div className="flex items-center gap-5">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-900">

                        {String(index + 1).padStart(2, "0")}

                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">

                          {lesson}

                        </h3>

                        <p className="mt-1 text-sm text-slate-400">

                          Learn through practical examples and market demonstrations.

                        </p>

                      </div>

                    </div>

                    <button className="rounded-full bg-cyan-500 px-5 py-3 font-bold text-slate-900 transition hover:scale-105 hover:bg-cyan-400">

                      ▶ Start

                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ================= SIDEBAR ================= */}

          <div className="space-y-8"></div>
                      {/* Guide Information Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <h2 className="text-2xl font-bold text-white mb-6">
                Guide Information
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-slate-400">Category</span>
                  <span className="font-semibold text-cyan-400">
                    {guide.category}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-slate-400">Level</span>
                  <span className="font-semibold text-white">
                    {guide.level}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-slate-400">Duration</span>
                  <span className="font-semibold text-white">
                    {guide.duration}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Lessons</span>
                  <span className="font-semibold text-white">
                    {guide.lessons}
                  </span>
                </div>

              </div>

              <button className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-400">

                Enroll Now

              </button>

            </div>

            {/* Skills Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <h2 className="text-2xl font-bold text-white mb-6">
                Skills You'll Learn
              </h2>

              <div className="flex flex-wrap gap-3">

                {[
                  "Technical Analysis",
                  "Risk Management",
                  "Trading Psychology",
                  "Chart Reading",
                  "Market Trends",
                  "Trade Planning",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Achievement Card */}
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8 shadow-xl">

              <div className="text-5xl">
                🏆
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Earn Your Certificate
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Complete every lesson and pass the final assessment to unlock
                your Callie Trading Certificate.
              </p>

            </div>

            {/* Student Statistics */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

              <h2 className="text-2xl font-bold text-white mb-6">
                Course Statistics
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Students
                  </span>

                  <span className="font-bold text-cyan-400">
                    3,245
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Completion Rate
                  </span>

                  <span className="font-bold text-cyan-400">
                    94%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Rating
                  </span>

                  <span className="font-bold text-yellow-400">
                    ⭐ 4.9/5
                  </span>
                </div>

              </div>

            </div>

            <Link
              to="/dashboard"
              className="block rounded-xl bg-cyan-500 py-4 text-center text-lg font-bold text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              ← Back to Dashboard
            </Link>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Guide;