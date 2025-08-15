import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledDown(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`bg-white shadow-md w-full sticky top-0 z-50 transition-opacity duration-300 ${
        isScrolledDown ? 'opacity-60' : 'opacity-100'
      }`}
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
        {/* Logo */}
        <h1 className="text-base sm:text-lg md:text-2xl font-bold text-red-600 whitespace-nowrap">
          Swift<span className="text-green-600">Move</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 mx-auto">
          <Link to="/" className="hover:text-red-600 whitespace-nowrap">Home</Link>
          <a href="#about" className="hover:text-red-600 whitespace-nowrap">About</a>
          <a href="#services" className="hover:text-red-600 whitespace-nowrap">Services</a>
          <a href="#pricing" className="hover:text-red-600 whitespace-nowrap">Pricing</a>
          <a href="#contact" className="hover:text-red-600 whitespace-nowrap">Contact</a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2 text-xs sm:text-sm">
          <Link to="/login" className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors">Login</Link>
          <Link to="/register" className="border border-red-600 text-red-600 px-3 py-2 rounded hover:bg-red-50 transition-colors">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
<div
  className={`fixed top-0 right-0 h-screen w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } shadow-lg bg-gray-50 text-black flex flex-col overflow-y-auto`}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
      <X size={24} className="text-red-600" />
    </button>
  </div>

  {/* Menu Content */}
  <div className="flex flex-col justify-between flex-grow px-6 pb-6">
    {/* Navigation Links */}
    <nav className="flex flex-col space-y-4 text-base">
      <Link to="/" onClick={closeMobileMenu} className="hover:text-red-400">Home</Link>
      <a href="#about" onClick={closeMobileMenu} className="hover:text-red-400">About</a>
      <a href="#services" onClick={closeMobileMenu} className="hover:text-red-400">Services</a>
      <a href="#pricing" onClick={closeMobileMenu} className="hover:text-red-400">Pricing</a>
      <a href="#contact" onClick={closeMobileMenu} className="hover:text-red-400">Contact</a>
    </nav>

    {/* Auth Buttons */}
    <div className="flex flex-col space-y-2 pt-6">
      <Link
        to="/login"
        onClick={closeMobileMenu}
        className="bg-red-600 text-white px-4 py-2 rounded text-center hover:bg-red-700 transition-colors"
      >
        Login
      </Link>
      <Link
        to="/register"
        onClick={closeMobileMenu}
        className="border border-red-600 text-red-600 bg-white px-4 py-2 rounded text-center hover:bg-red-100 transition-colors"
      >
        Register
      </Link>
    </div>
  </div>
</div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}
