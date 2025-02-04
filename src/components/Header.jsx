import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Header Component
 * Responsive navigation header with mobile menu support
 */
const Header = () => {
  // State for scroll and mobile menu behavior
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events to update header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-sm`}
    >
      {/* Main header container */}
      <div className=" flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="ABC Logo" className="h-32 w-auto" />
        </Link>

        {/* Company name with responsive line breaks */}
        <h1 className="py-2 text-white text-lg font-bold text-wrap lg:text-2xl">
          Avanced <br className="md:hidden" />
          Banking <br className="md:hidden" />
          Consulting
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/clients"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Clients
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden py-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/clients"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Clients
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
