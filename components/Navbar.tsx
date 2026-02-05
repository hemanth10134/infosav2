import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              Info<span className="text-primary-600">Savi</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-100 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <Button variant={scrolled ? 'primary' : 'white'} size="sm">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <Button fullWidth onClick={() => setIsOpen(false)}>Get Consultation</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;