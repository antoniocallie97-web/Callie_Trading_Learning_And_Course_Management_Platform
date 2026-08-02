import "./GuideDetails.css";

const lessons = [
  "Introduction to Forex",
  "Understanding Currency Pairs",
  "Trading Sessions",
  "Candlestick Patterns",
  "Support & Resistance",
  "Trend Analysis",
  "Chart Patterns",
  "Risk Management",
  "Trading Psychology",
  "Building a Trading Plan",
  "Live Market Analysis",
  "Final Assessment",
];

function GuideDetails() {
  return (
    <div className="guide-page">

      {/* Hero */}
      <section className="guide-hero">
        <span className="guide-badge">Beginner Course</span>

        <h1>Forex Trading Masterclass</h1>

        <p>
          Learn Forex trading from beginner to professional level through
          structured lessons, practical strategies, and risk management.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Start Learning</button>
          <button className="secondary-btn">Enroll Now</button>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-grid">

        <div className="stat-card">
          <h3>Category</h3>
          <p>Forex</p>
        </div>

        <div className="stat-card">
          <h3>Level</h3>
          <p>Beginner</p>
        </div>

        <div className="stat-card">
          <h3>Duration</h3>
          <p>8 Hours</p>
        </div>

        <div className="stat-card">
          <h3>Lessons</h3>
          <p>18</p>
        </div>

      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2>Skills You'll Learn</h2>

        <div className="skills-grid">
          <span>Technical Analysis</span>
          <span>Risk Management</span>
          <span>Trading Psychology</span>
          <span>Chart Reading</span>
          <span>Market Trends</span>
          <span>Trade Planning</span>
        </div>
      </section>

      {/* Curriculum */}
      <section className="curriculum">

        <h2>Course Curriculum</h2>

        {lessons.map((lesson, index) => (
          <div className="lesson-card" key={index}>
            <div className="lesson-left">
              <div className="lesson-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{lesson}</h3>
                <p>Click to begin this lesson.</p>
              </div>
            </div>

            <button className="play-btn">▶</button>
          </div>
        ))}

      </section>

      {/* Back */}
      <div className="back-section">
        <button className="back-btn">
          ← Back to Dashboard
        </button>
      </div>

    </div>
  );
}

export default GuideDetails;