import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Forex Trader",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "Callie completely changed the way I trade. The Forex course gave me the confidence to develop a disciplined trading strategy and manage risk professionally.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiku",
    role: "Crypto Investor",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The Cryptocurrency program simplified concepts that once seemed overwhelming. I now understand blockchain, portfolio management, and long-term investing.",
    rating: 5,
  },
  {
    name: "Brian Otieno",
    role: "Stock Market Investor",
    image: "https://i.pravatar.cc/150?img=18",
    review:
      "Professional lessons, excellent instructors, and practical examples. Callie is the best trading education platform I've used.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
            Student Success Stories
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Trusted by Future Traders Worldwide
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Thousands of students have started their financial education journey
            with Callie Trading Learning Platform and continue to grow their
            confidence in the financial markets.
          </p>

        </div>

        {/* Testimonials */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
            >

              <Quote
                className="text-blue-700 mb-6"
                size={42}
              />

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex mt-6">

                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}

              </div>

              <div className="flex items-center mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div className="ml-4">

                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 bg-blue-700 rounded-3xl p-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Join Thousands of Successful Learners
          </h3>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Gain practical trading knowledge through structured learning,
            expert guidance, and hands-on market analysis designed for
            today's financial world.
          </p>

          <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold transition">
            Start Learning Today
          </button>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;