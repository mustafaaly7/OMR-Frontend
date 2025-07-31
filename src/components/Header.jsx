import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent`}
        >
          OMR <span className={scrolled ? "text-gray-800" : "text-white"}>Paper Checker</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <a
            href="#features"
            className={`relative group flex items-center text-base ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#pricing"
            className={`relative group flex items-center text-base ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#pricing"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-base flex items-center"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"} hover:text-indigo-400`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden ${
          scrolled ? "bg-white/95" : "bg-indigo-900/90"
        } backdrop-blur-md shadow-lg border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <a
            href="#features"
            className={`${scrolled ? "text-gray-700" : "text-white"} hover:text-indigo-400`}
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`${scrolled ? "text-gray-700" : "text-white"} hover:text-indigo-400`}
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
