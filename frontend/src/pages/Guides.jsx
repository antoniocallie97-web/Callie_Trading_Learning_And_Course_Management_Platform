import { Link, useParams } from "react-router-dom";

export default function Guide() {
  const { id } = useParams();

  const guide = {
    id,
    title: "Forex Trading Masterclass",
    category: "Forex",
    level: "Beginner",
    duration: "8 Hours",
    lessons: 12,
    description:
      "Master Forex trading from beginner to professional level with structured lessons and practical strategies.",
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
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-cyan-900">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
            {guide.category} • {guide.level}
          </span>
          <h1 className="mt-6 text-5xl font-black">{guide.title}</h1>
          <p className="mt-6 max-w-3xl text-slate-300">{guide.description}</p>
          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-500 text-slate-900 px-6 py-3 rounded-xl font-bold">Start Learning</button>
            <button className="border border-cyan-500 text-cyan-300 px-6 py-3 rounded-xl font-bold">Enroll Now</button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Course Curriculum</h2>
              <span className="text-cyan-300">{guide.lessons} Lessons</span>
            </div>

            <div className="space-y-4">
              {guide.courseContent.map((lesson, index) => (
                <div key={index} className="flex items-center justify-between rounded-2xl border border-white/10 p-5 hover:border-cyan-400">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-900 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{lesson}</h3>
                      <p className="text-sm text-slate-400">Click to begin this lesson.</p>
                    </div>
                  </div>
                  <button className="bg-cyan-500 text-slate-900 px-4 py-2 rounded-lg font-bold">▶ Start</button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-4">Guide Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between"><span>Category</span><strong>{guide.category}</strong></div>
                <div className="flex justify-between"><span>Level</span><strong>{guide.level}</strong></div>
                <div className="flex justify-between"><span>Duration</span><strong>{guide.duration}</strong></div>
                <div className="flex justify-between"><span>Lessons</span><strong>{guide.lessons}</strong></div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-4">Skills You'll Learn</h2>
              <div className="flex flex-wrap gap-2">
                {["Technical Analysis","Risk Management","Trading Psychology","Chart Reading","Market Trends","Trade Planning"].map(skill=>(
                  <span key={skill} className="px-3 py-2 rounded-full bg-cyan-500/20 text-cyan-300">{skill}</span>
                ))}
              </div>
            </div>

            <Link to="/dashboard" className="block text-center bg-cyan-500 text-slate-900 rounded-xl py-4 font-bold">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}