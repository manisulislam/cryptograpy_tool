import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-400">
            Bitwise Thinkers
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-700`}
      >
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Home</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">About</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Services</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
