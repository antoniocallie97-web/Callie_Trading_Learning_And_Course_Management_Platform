import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Globe,
  MessageCircle,
  Share2,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-white">
              CALLIE
            </h2>

            <p className="text-blue-400 uppercase tracking-[3px] mt-2">
              Trading Learning Platform
            </p>

            <p className="mt-5 text-gray-400">
              Learn Forex, Cryptocurrency, Stocks,
              Risk Management and Trading Psychology
              from beginner to professional level.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/guides">Guides</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">

              <div className="flex gap-3 items-center">
                <Mail size={18}/>
                antoniocallie97@gmail.com
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18}/>
                +254 719 203 612
              </div>

              <div className="flex gap-3 items-center">
                <MapPin size={18}/>
                Nairobi, Kenya
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <Globe />

              <MessageCircle />

              <Share2 />

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 flex justify-between items-center">

          <p>
            © {currentYear} Callie Trading Learning Platform
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="bg-blue-700 p-3 rounded-full"
          >
            <ArrowUp size={18}/>
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;