export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(3,7,18,.80), rgba(3,7,18,.80)), url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 text-white">

        <h1 className="text-7xl font-extrabold leading-tight">
          MASTER THE
          <br />
          <span className="text-yellow-400">
            FINANCIAL MARKETS
          </span>
        </h1>

        <p className="mt-8 text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Learn Forex, Stocks, Crypto, Commodities and Risk Management
          from beginner to professional with interactive lessons,
          real market analysis and practical trading guides.
        </p>

        <div className="mt-12 flex gap-6">

          <button className="bg-yellow-400 text-black px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition">
            Start Learning
          </button>

          <button className="border-2 border-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white hover:text-black transition">
            Browse Courses
          </button>

        </div>

      </div>
    </section>
  );
}