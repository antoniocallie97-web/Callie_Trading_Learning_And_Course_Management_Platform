import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Newsletter */}

      <div className="border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Join Callie Community
              </span>

              <h2 className="mt-6 text-4xl font-bold text-white">
                Stay Ahead of the Financial Markets
              </h2>

              <p className="mt-5 text-gray-400 leading-8">
                Receive educational articles, trading tips,
                new course announcements, and exclusive learning
                resources directly in your inbox.
              </p>

            </div>

            <div>

              <div className="flex flex-col sm:flex-row gap-4">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
                />

                <button className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl font-semibold text-white transition">
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-extrabold text-white tracking-widest">
              CALLIE
            </h2>

            <p className="mt-2 text-blue-400 tracking-[4px] uppercase text-sm">
              Trading Learning Platform
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Empowering future traders through professional
              education in Forex, Cryptocurrency, Stocks,
              Risk Management and Trading Psychology.
            </p>

          </div>

          {/* Courses */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Learning
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Forex Trading
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Cryptocurrency
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Stock Market
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Risk Management
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Trading Psychology
                </Link>
              </li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/guides" className="hover:text-blue-400 transition">
                  Trading Guides
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-blue-400 transition">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-blue-400 transition">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-blue-400 transition">
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Mail className="text-blue-400" size={20} />

                <span>
                  antoniocallie97@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="text-blue-400" size={20} />

                <span>
                  +254 719 203 612
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-blue-400" size={20} />

                <span>
                  Nairobi, Kenya
                </span>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-500 flex items-center justify-center transition"
              >
                <Twitter size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-800 flex items-center justify-center transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition"
              >
                <Youtube size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">

            © {currentYear} Callie Trading Learning Platform.
            All Rights Reserved.

          </p>

          <div className="flex items-center gap-6 mt-5 md:mt-0">

            <Link
              to="/privacy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-blue-400 transition"
            >
              Terms of Service
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition"
            >
              <ArrowUp size={18} className="text-white" />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;