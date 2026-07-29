import {
  Award,
  Users,
  Globe,
  ShieldCheck,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Curriculum",
    description:
      "Our courses are carefully structured to take you from beginner to advanced trader using practical, real-world trading strategies.",
  },
  {
    icon: TrendingUp,
    title: "Real Market Experience",
    description:
      "Learn through live market analysis, practical chart examples, and professional trading techniques used in today's financial markets.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description:
      "Master Forex, Cryptocurrency, Stocks, Risk Management, Trading Psychology, Technical Analysis, and Portfolio Management.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management Focus",
    description:
      "Understand capital preservation, position sizing, and disciplined trading to protect your investments.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Connect with fellow learners, participate in discussions, and grow alongside a community of aspiring traders.",
  },
  {
    icon: Globe,
    title: "Learn Anywhere",
    description:
      "Access your courses from any device, anytime, with lifetime access to purchased learning materials.",
  },
];

function WhyChooseCallie() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            Why Choose Callie?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Learn With Confidence
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Callie Trading Learning Platform combines expert instruction,
            practical experience, and structured learning to help you build the
            skills needed to succeed in today's financial markets.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-700 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">50+</h3>
              <p className="mt-2 text-blue-100">Professional Courses</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">10K+</h3>
              <p className="mt-2 text-blue-100">Students Enrolled</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">95%</h3>
              <p className="mt-2 text-blue-100">Course Completion</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">24/7</h3>
              <p className="mt-2 text-blue-100">Learning Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseCallie;