import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <h1>
            Learn <span>Forex</span>, Crypto &
            <br />
            Stock Trading
          </h1>

          <p>
            Master the financial markets with professional lessons,
            trading strategies, mentorship, and practical education
            designed for beginners and experienced traders.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="btn-primary">
              Get Started
            </a>

            <a href="/courses" className="btn-secondary">
              Explore Courses
            </a>
          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <div className="chart">

              <svg
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  fill="none"
                  stroke="#2ec5ff"
                  strokeWidth="5"
                  points="
                  0,180
                  40,160
                  70,140
                  120,150
                  160,90
                  210,110
                  260,60
                  300,80
                  350,30
                  400,50"
                />
              </svg>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}