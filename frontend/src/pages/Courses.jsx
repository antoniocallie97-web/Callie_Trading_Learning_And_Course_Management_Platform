import { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 1,
      title: "Forex Trading Masterclass",
      category: "Forex",
      level: "Beginner",
      duration: "8 Hours",
      instructor: "Callie Academy",
      students: 1543,
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Cryptocurrency Trading",
      category: "Crypto",
      level: "Intermediate",
      duration: "10 Hours",
      instructor: "Callie Academy",
      students: 1120,
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Price Action Trading",
      category: "Forex",
      level: "Advanced",
      duration: "6 Hours",
      instructor: "Callie Academy",
      students: 890,
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Risk Management",
      category: "Trading Psychology",
      level: "Beginner",
      duration: "4 Hours",
      instructor: "Callie Academy",
      students: 760,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Trading Courses
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Learn trading from beginner to professional level with structured,
            practical courses.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <select className="border rounded-lg px-4 py-3">
            <option>All Categories</option>
            <option>Forex</option>
            <option>Crypto</option>
            <option>Stocks</option>
            <option>Risk Management</option>
          </select>

        </div>

      </section>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredCourses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={course.image}
                alt={course.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>

                <h2 className="text-2xl font-bold mt-4">
                  {course.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  Instructor: {course.instructor}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-5 text-sm">

                  <div>
                    <span className="font-semibold">Level</span>
                    <p>{course.level}</p>
                  </div>

                  <div>
                    <span className="font-semibold">Duration</span>
                    <p>{course.duration}</p>
                  </div>

                  <div>
                    <span className="font-semibold">Students</span>
                    <p>{course.students}</p>
                  </div>

                </div>

                <Link
                  to={`/courses/${course.id}`}
                  className="block mt-6 text-center bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  View Course
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Courses;