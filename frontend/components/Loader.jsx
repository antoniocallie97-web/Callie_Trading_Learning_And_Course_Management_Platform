function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-6 text-lg text-gray-600 font-medium">
        {text}
      </p>

    </div>
  );
}

export default Loader;