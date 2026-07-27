import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-52 object-cover"
      />

      {/* Course Content */}
      <div className="p-6">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
          {course.category}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 line-clamp-3">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

          <div>
            <p className="text-gray-500">Instructor</p>
            <p className="font-semibold">
              {course.instructor}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Level</p>
            <p className="font-semibold">
              {course.level}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Duration</p>
            <p className="font-semibold">
              {course.duration}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Students</p>
            <p className="font-semibold">
              {course.students}
            </p>
          </div>

        </div>

        {/* Progress */}
        {course.progress !== undefined && (
          <div className="mt-6">

            <div className="flex justify-between text-sm mb-2">
              <span>Your Progress</span>
              <span>{course.progress}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-700 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

          </div>
        )}

        {/* Action Button */}
        <Link
          to={`/courses/${course.id}`}
          className="block mt-6 text-center bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          View Course
        </Link>

      </div>

    </div>
  );
}

export default CourseCard;