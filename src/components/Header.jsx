import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-white text-xl font-bold">
              Avanced Banking Consulting
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
