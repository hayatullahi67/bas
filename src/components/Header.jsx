import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'News & Story', path: '/blog' },
    { name: 'Community', path: '/community' },
    // { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed    top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 h-[100px]">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* <img 
              src="assets/BASlogo.png" 
              alt="Bitcoin Africa Story" 
              className="w-[100px] h-[100px] group-hover:border-yellow-400 transition-colors duration-300"
            /> */}
            <img 
              src="assets/BASlogo.png" 
              alt="Bitcoin Africa Story" 
              className="w-[100px] h-[78px] group-hover:border-yellow-400 transition-colors duration-300"
            />
            {/* <span className="text-xl font-bold text-white hidden sm:block">
              Bitcoin <span className="text-yellow-500">Africa</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-yellow-500'
                    : 'text-gray-300 hover:text-yellow-500'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all duration-200 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-yellow-500 bg-yellow-500/10'
                    : 'text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;