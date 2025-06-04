import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-yellow-300 hover:text-yellow-500 transition duration-300">RideUp</Link>
        <ul className="flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-yellow-300 transition duration-300 text-lg">Home</Link></li>
          <li className="relative group">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex items-center hover:text-yellow-300 focus:outline-none transition duration-300 text-lg"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Market <ChevronDown className="ml-1 h-4 w-4 group-hover:transform group-hover:rotate-180 transition duration-300" />
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-10">
                <li>
                  <Link to="/market" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-300 transition duration-300">All Products</Link>
                </li>
                <li>
                  <Link to="/market/wheel" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-300 transition duration-300">Wheels</Link>
                </li>
                <li>
                  <Link to="/market/exhaust" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-300 transition duration-300">Exhaust</Link>
                </li>
                <li>
                  <Link to="/market/mirrors" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-300 transition duration-300">Mirrors</Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/gallery" className="hover:text-yellow-300 transition duration-300 text-lg">Gallery</Link></li>
          <li><Link to="/cart" className="hover:text-yellow-300 transition duration-300 text-lg">Cart</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300 transition duration-300 text-lg">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;