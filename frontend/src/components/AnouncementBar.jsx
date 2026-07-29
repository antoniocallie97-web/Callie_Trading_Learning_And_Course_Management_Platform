import { Link } from "react-router-dom";
import { Megaphone, ArrowRight } from "lucide-react";

function AnnouncementBar() {
  return (
    <div className="bg-yellow-400 border-b border-yellow-500">

      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">

          {/* Left */}

          <div className="flex items-center gap-3">

            <Megaphone
              size={22}
              className="text-blue-900"
            />

            <p className="text-blue-950 font-semibold">

              🎉 New Professional Trading Courses Available!
              Start learning Forex, Crypto and Stocks today.

            </p>

          </div>

          {/* Right */}

          <Link
            to="/register"
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-900
              hover:bg-blue-800
              text-white
              font-semibold
              px-6
              py-2.5
              rounded-full
              transition
              duration-300
              shadow-lg
            "
          >
            Enroll Now

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </div>
  );
}

export default AnnouncementBar;