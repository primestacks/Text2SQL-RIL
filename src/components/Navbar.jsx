import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary w-full my-auto text-white p-2 font-secondary transition-all duration-300">
      <div className="max-w-7xl my-auto mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="text-[17px] lg:text-3xl md:text-2xl font-bold">
            <img
              src="./assets/text2sql-icon.svg"
              alt="text2sql-olog"
              className="inline-block mr-2 lg:w-10 w-7"
            />
            Text2SQL
          </a>

          {/* Desktop Menu */}
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-seconday">
              Home
            </a>
            <a href="#" className="hover:text-seconday">
              Features
            </a>
            <a href="#" className="hover:text-seconday">
              Documentation
            </a>
            <a href="#" className="hover:text-seconday">
              FAQ
            </a>
            <a href="#" className="hover:text-seconday">
              Support
            </a>
          </div>

          {/* Desktop Login & Signup Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-6 py-2 border border-seconday text-seconday rounded-lg cursor-pointer">
              Login
            </button>
            <button className="px-6 py-2 bg-seconday rounded-lg  cursor-pointer">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } py-10 rounded-lg bg-blue-900 backdrop-blur-lg opacity-80`}
      >
        <a href="#" className="block px-4 py-2 text-white hover::opacity-90">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-white hover:b:opacity-90">
          Features
        </a>
        <a href="#" className="block px-4 py-2 text-white hover::opacity-90">
          Documentation
        </a>
        <a href="#" className="block px-4 py-2 text-white hover::opacity-90">
          FAQ
        </a>
        <a href="#" className="block px-4 py-2 text-white hover:opacity-90">
          Support
        </a>

        {/* Mobile Login & Signup Buttons */}
        <div className="mt-2 px-4 space-y-2">
          <button className="w-full px-4 py-2 border border-seconday sm:block md:inline-block  rounded-lg hover:opacity-95">
            Login
          </button>
          <button className="w-full px-4 sm:block md:inline-block py-2 bg-seconday rounded-lg hover:bg-blue-500">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
