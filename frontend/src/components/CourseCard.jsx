export default function CourseCard({ title, lessons }) {
  return (

    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">

      <img
        src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=700"
        className="rounded-xl"
      />

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">

        {lessons} Lessons

      </p>

      <button className="mt-6 bg-blue-700 text-white px-5 py-3 rounded-lg w-full hover:bg-blue-800">

        Start Course

      </button>

    </div>

  );
}