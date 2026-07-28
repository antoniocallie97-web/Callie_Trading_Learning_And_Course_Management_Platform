import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">

      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h1 className="text-6xl font-bold leading-tight">
            Learn Trading Like
            <br />
            Professionals
          </h1>

          <p className="mt-8 text-xl text-gray-100">

            Master Forex, Stocks, Crypto, Risk Management,
            Technical Analysis and become a confident trader.

          </p>

          <div className="mt-10 flex gap-6">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">

              Start Learning

            </button>

            <button className="flex items-center gap-2 border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">

              Browse Courses

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900"
            alt="Trading"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}