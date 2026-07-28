import CourseCard from "./CourseCard";

export default function Courses() {
  return (

    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">

          Featured Courses

        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          <CourseCard
            title="Forex Trading"
            lessons="35"
          />

          <CourseCard
            title="Stock Trading"
            lessons="42"
          />

          <CourseCard
            title="Crypto Trading"
            lessons="28"
          />

        </div>

      </div>

    </section>

  );
}