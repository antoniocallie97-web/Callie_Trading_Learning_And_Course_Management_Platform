import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Callie
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Learn Forex, Cryptocurrency, Stocks, Risk Management,
              and Trading Psychology from beginner to professional level.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/guides" className="hover:text-white">
                  Guides
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/profile" className="hover:text-white">
                  My Profile
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-white">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/admin" className="hover:text-white">
                  Admin
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">

              <p>📧 support@callie.com</p>

              <p>📞 +254 700 000 000</p>

              <p>📍 Nairobi, Kenya</p>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-2xl">

              <a href="#" className="hover:scale-110 transition">
                🌐
              </a>

              <a href="#" className="hover:scale-110 transition">
                📘
              </a>

              <a href="#" className="hover:scale-110 transition">
                📷
              </a>

              <a href="#" className="hover:scale-110 transition">
                🐦
              </a>

              <a href="#" className="hover:scale-110 transition">
                ▶️
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Callie Trading Learning Management Platform.
            All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link
              to="/privacy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;