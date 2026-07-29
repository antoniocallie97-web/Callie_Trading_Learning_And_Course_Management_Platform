export default function Home() {

  return (

    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-950
        via-blue-800
        to-indigo-900
        text-white
      "
    >

      {/* Dark overlay */}
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          bg-black/20
        "
      >


        <div
          className="
            text-center
            max-w-5xl
          "
        >


          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              mb-6
            "
          >
            Learn Forex, Crypto & Stock Trading
            <br />
            with Industry Professionals
          </h1>



          <p
            className="
              text-xl
              md:text-2xl
              text-gray-200
              mb-10
            "
          >
            Join Callie Trading Learning Platform
            and master financial markets with expert guidance.
          </p>



          <button
            className="
              bg-white
              text-blue-900
              px-10
              py-4
              rounded-full
              text-lg
              font-bold
              shadow-xl
              hover:bg-gray-200
              transition
            "
          >
            Join Now
          </button>


        </div>


      </div>


    </div>

  );

}