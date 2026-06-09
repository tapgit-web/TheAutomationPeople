import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Settings, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const productLinks = [
  { name: 'Sensors', href: '/products/sensors' },
  { name: 'Valves', href: '/products/valves' },
  { name: 'Automation Products', href: '/products/automation' },
  { name: 'Instruments', href: '/products/instruments' },
  { name: 'IOT', href: '/products/iot' },
];

const navLinks = [
  { name: 'Home', href: '/', id: 'hero' },
  { name: 'Services', href: '/services', id: 'top' },
  { name: 'Software', href: '/software', id: 'top' },
  { name: 'About Us', href: '/about', id: 'top' },
  { name: 'Contact Us', href: '/contact', id: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsOpen(false);
    setIsProductsOpen(false);
    if (location.pathname === href) {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
      if (id !== 'top') {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-green/95 backdrop-blur-sm border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center py-1 group">
            <img 
              src="/images/logo_transparent.png" 
              alt="The Automation People" 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110 drop-shadow-sm" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <button
              onClick={() => handleNavClick('/', 'hero')}
              className="text-[13px] lg:text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-[13px] lg:text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden py-2"
                  >
                    {productLinks.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => {
                          navigate(p.href);
                          setIsProductsOpen(false);
                          window.scrollTo({ top: 0, behavior: 'auto' });
                        }}
                        className="w-full text-left px-5 py-3 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-all"
                      >
                        {p.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.filter(l => l.name !== 'Home').map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.id)}
                className="text-[13px] lg:text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-green border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Home */}
              <button
                onClick={() => handleNavClick('/', 'hero')}
                className="block w-full text-left px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition-all"
              >
                Home
              </button>

              {/* Products Collapsible Menu */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1 mt-1 mb-2 border-l-2 border-emerald-500/30 overflow-hidden"
                    >
                      {productLinks.map((p) => (
                        <button
                          key={p.name}
                          onClick={() => {
                            navigate(p.href);
                            setIsOpen(false);
                            setIsMobileProductsOpen(false);
                            window.scrollTo({ top: 0, behavior: 'auto' });
                          }}
                          className="block w-full text-left px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                          {p.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {navLinks.filter(l => l.name !== 'Home').map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className="block w-full text-left px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
