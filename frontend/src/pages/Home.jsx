import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section
        className="
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          bg-gradient-to-br
          from-slate-950
          via-blue-900
          to-blue-600
          text-white
        "
      >


        {/* Description */}
        <p
          className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-blue-100
            max-w-3xl
            leading-relaxed
          "
        >
          Learn Forex, Crypto & Stock Trading with Industry Professionals.
          Build your knowledge, improve your strategies, and become a smarter trader.
        </p>



        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-5
            mt-10
          "
        >

          <Link
            to="/register"
            className="
              bg-yellow-500
              text-slate-900
              px-10
              py-4
              rounded-xl
              font-bold
              text-lg
              hover:bg-yellow-400
              transition
              shadow-lg
            "
          >
            JOIN NOW
          </Link>



          <Link
            to="/courses"
            className="
              border-2
              border-white
              text-white
              px-10
              py-4
              rounded-xl
              font-bold
              text-lg
              hover:bg-white
              hover:text-blue-900
              transition
            "
          >
            EXPLORE COURSES
          </Link>

        </div>




        {/* Features Section */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            mt-16
            max-w-5xl
            w-full
          "
        >


          <div
            className="
              bg-white/10
              backdrop-blur-md
              rounded-xl
              p-6
              shadow-lg
            "
          >

            <h3 className="text-xl font-bold">
              📈 Forex Trading
            </h3>

            <p className="mt-3 text-blue-100">
              Learn currency markets, technical analysis, and professional trading strategies.
            </p>

          </div>




          <div
            className="
              bg-white/10
              backdrop-blur-md
              rounded-xl
              p-6
              shadow-lg
            "
          >

            <h3 className="text-xl font-bold">
              💰 Crypto & Stocks
            </h3>

            <p className="mt-3 text-blue-100">
              Understand digital assets and stock market opportunities.
            </p>

          </div>





          <div
            className="
              bg-white/10
              backdrop-blur-md
              rounded-xl
              p-6
              shadow-lg
            "
          >

            <h3 className="text-xl font-bold">
              🎓 Professional Guides
            </h3>

            <p className="mt-3 text-blue-100">
              Access structured lessons from beginner to advanced trading levels.
            </p>

          </div>


        </div>


      </section>

    </div>
  );
}