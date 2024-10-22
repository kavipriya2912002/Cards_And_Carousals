import "../index.css";
function Homepage() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
        <p className="text-6xl font-extrabold text-gray-900 mb-8 animate-bounce">
          Animated Cards and Carousals
        </p>
        <p className="text-4xl font-semibold text-gray-700 mb-6">
          Routes
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
            <li className="hover:text-purple-600 transition-colors duration-300">/cards - Scroll</li>
            <li className="hover:text-purple-600 transition-colors duration-300">/card - Hover</li>
            <li className="hover:text-purple-600 transition-colors duration-300">/bubble - Move the cursor</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homepage;
