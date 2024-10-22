import '../index.css';
function Navbar() {
    return (
        <nav className="bg-customOffWhite shadow-md font-satisfy py-4">
          <div className="container  mx-auto px-6 flex justify-between items-center">
            {/* Logo on the left */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-800">Your Logo</a>
            </div>
    
            {/* Links in the center */}
            <div className="flex space-x-8">
              <a href="/" className="hover:text-customLightBlue text-customBlue">Home</a>
              <a href="/preview" className="hover:text-customLightBlue text-customBlue">Preview</a>
              <a href="/artists" className="hover:text-customLightBlue text-customBlue">Artists</a>
              <a href="/about" className="hover:text-customLightBlue text-customBlue">About</a>
            </div>
    
            {/* Button on the right */}
            <div>
              <button className="bg-customBlue text-white px-4 py-2 rounded hover:bg-customLightBlue">
                Join Drawing Community
              </button>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
