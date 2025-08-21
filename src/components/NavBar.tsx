
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

interface NavLink {
  id: string;
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'about', title: 'About Me', path: '/about' },
  { id: 'skills', title: 'Skills', path: '/skills' },
  { id: 'projects', title: 'Projects', path: '/projects' },
  { id: 'education', title: 'Education', path: '/education' },
  { id: 'chat', title: 'Chat', path: '/chat' },
  { id: 'contact', title: 'Contact', path: '/contact' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar background
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-coral/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-coral to-coral-dark flex items-center gap-2">
          <span className="hidden md:inline">Portfolio</span>
          <span className="md:hidden">P.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.path}
                  className={`nav-item text-base font-medium hover:text-coral transition-colors ${
                    link.path === location.pathname ? 'active-nav-item text-coral underline decoration-coral/50 underline-offset-8' : ''
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <li 
                key={link.id} 
                className={`px-4 py-1 ${
                  isMenuOpen ? 'animate-menu-stagger' : ''
                }`}
                style={{ 
                  animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s' 
                }}
              >
                <Link
                  to={link.path}
                  className={`block py-3 px-2 rounded-lg transition-all duration-300 hover:bg-coral/10 hover:text-coral ${
                    link.path === location.pathname 
                      ? 'text-coral font-medium bg-coral/5 border-l-4 border-coral' 
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {link.title}
                    {link.path === location.pathname && (
                      <span className="w-2 h-2 bg-coral rounded-full animate-pulse"></span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
