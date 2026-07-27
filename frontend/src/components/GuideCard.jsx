import { Link } from "react-router-dom";

function GuideCard({ guide }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* Guide Image */}
      <img
        src={guide.image}
        alt={guide.title}
        className="w-full h-52 object-cover"
      />

      {/* Guide Content */}
      <div className="p-6">

        <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
          {guide.category}
        </span>

        <h2 className="text-2xl font-bold mt-4">
          {guide.title}
        </h2>

        <p className="text-gray-600 mt-3 line-clamp-3">
          {guide.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

          <div>
            <p className="text-gray-500">Instructor</p>
            <p className="font-semibold">
              {guide.instructor}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Level</p>
            <p className="font-semibold">
              {guide.level}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Duration</p>
            <p className="font-semibold">
              {guide.duration}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Lessons</p>
            <p className="font-semibold">
              {guide.lessons}
            </p>
          </div>

        </div>

        <div className="mt-6">

          <Link
            to={`/guides/${guide.id}`}
            className="block text-center bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            View Guide
          </Link>

        </div>

      </div>

    </div>
  );
}

export default GuideCard;