import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-4 transition-all duration-300 ${
        isScrolled ? "bg-white/30 shadow-md backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-3xl md:text-5xl font-bold text-white">TravelX</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg md:text-2xl space-x-6">
          {["Home", "Destinations", "Contact"].map((item) => (
            <li key={item} className="text-white hover:text-purple-800 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Unicode icons) */}
        <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-center py-4">
          <ul className="space-y-4 text-xl">
            {["🏠Home", "✈️Destinations", "☎️Contact"].map((item) => (
              <li
                key={item}
                className="text-white hover:text-purple-800 cursor-pointer"
                onClick={toggleMenu}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

