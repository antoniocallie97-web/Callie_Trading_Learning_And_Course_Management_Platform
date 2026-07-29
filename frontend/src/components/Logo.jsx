import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="
        flex
        flex-col
        items-center
        justify-center
        group
      "
    >

      <h1
        className="
          text-5xl
          sm:text-6xl
          lg:text-8xl
          font-black
          uppercase
          tracking-[0.25em]
          bg-gradient-to-r
          from-slate-950
          via-blue-900
          to-blue-500
          bg-clip-text
          text-transparent
          drop-shadow-xl
          transition-all
          duration-500
          group-hover:scale-105
        "
      >
        CALLIE
      </h1>


      <div className="flex items-center gap-4 mt-3">

        <div className="h-[2px] w-16 bg-yellow-500"></div>

        <span
          className="
            text-sm
            uppercase
            tracking-[0.5em]
            font-semibold
            text-slate-600
          "
        >
          Trading Learning Platform
        </span>

        <div className="h-[2px] w-16 bg-yellow-500"></div>

      </div>

    </Link>
  );
}