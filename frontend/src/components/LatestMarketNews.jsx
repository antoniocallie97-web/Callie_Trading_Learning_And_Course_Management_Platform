import { Link } from "react-router-dom";
import {
  Newspaper,
  TrendingUp,
  Bitcoin,
  LineChart,
  ArrowRight,
  Calendar,
} from "lucide-react";

const news = [
  {
    title: "Understanding Today's Forex Market Trends",
    category: "Forex",
    date: "July 29, 2026",
    description:
      "Learn how economic news, central bank decisions, and technical analysis influence the global Forex market.",
    icon: TrendingUp,
    color: "bg-blue-600",
  },
  {
    title: "Cryptocurrency Market Outlook for Beginners",
    category: "Cryptocurrency",
    date: "July 28, 2026",
    description:
      "Explore Bitcoin, Ethereum, and other digital assets while learning safe investing and risk management principles.",
    icon: Bitcoin,
    color: "bg-yellow-500",
  },
  {
    title: "Building a Long-Term Stock Portfolio",
    category: "Stocks",
    date: "July 27, 2026",
    description:
      "Discover portfolio diversification, dividend investing, and strategies for sustainable long-term growth.",
    icon: LineChart,
    color: "bg-green-600",
  },
];

function LatestMarketNews() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

            <Newspaper size={18} />

            Latest Market Insights

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">

            Stay Updated With Financial Markets

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Read educational articles covering Forex, Cryptocurrency,
            Stocks, Technical Analysis, Risk Management, and Trading
            Psychology to improve your financial knowledge.

          </p>

        </div>

        {/* News Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {news.map((article, index) => {
            const Icon = article.icon;

            return (

              <div
                key={index}
                className="bg-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >

                <div className={`${article.color} p-8`}>

                  <Icon
                    className="text-white"
                    size={44}
                  />

                </div>

                <div className="p-8">

                  <div className="flex justify-between items-center text-sm mb-5">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">

                      {article.category}

                    </span>

                    <span className="flex items-center gap-1 text-gray-500">

                      <Calendar size={15} />

                      {article.date}

                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">

                    {article.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {article.description}

                  </p>

                  <Link
                    to="/guides"
                    className="inline-flex items-center gap-2 mt-8 text-blue-700 font-semibold group-hover:gap-4 transition-all"
                  >

                    Read Article

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </div>

            );
          })}

        </div>

        {/* Newsletter */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 p-12 text-center text-white">

          <h3 className="text-4xl font-bold">

            Never Miss a Market Update

          </h3>

          <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">

            Subscribe to receive trading tips, market analysis,
            educational articles, and new course announcements directly
            in your inbox.

          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl text-slate-900 w-full sm:w-96 outline-none"
            />

            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold transition"
            >
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LatestMarketNews;