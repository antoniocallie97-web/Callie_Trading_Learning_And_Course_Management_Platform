import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

function TopInfoBar() {
  return (
    <div className="bg-blue-950 text-gray-200 border-b border-blue-900">

      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

          {/* Left Side */}

          <div className="flex flex-wrap items-center gap-6 text-sm">

            <div className="flex items-center gap-2">
              <MapPin className="text-yellow-400" size={18} />
              <span>Nairobi, Kenya</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="text-yellow-400" size={18} />
              <span>+254 719 203 612</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-yellow-400" size={18} />
              <span>antoniocallie97@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="text-yellow-400" size={18} />
              <span>Mon - Fri : 8:00 AM - 6:00 PM</span>
            </div>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              <Youtube size={20} />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TopInfoBar;