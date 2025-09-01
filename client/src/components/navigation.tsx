import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur border-b border-border' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold gradient-text" data-testid="logo">
              Shahariar Anik
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="hover:text-primary transition-colors duration-300"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-primary transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="hover:text-primary transition-colors duration-300"
                data-testid="nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="hover:text-primary transition-colors duration-300"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('personal')} 
                className="hover:text-primary transition-colors duration-300"
                data-testid="nav-personal"
              >
                Personal
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-primary transition-colors duration-300"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-border">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="block hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('personal')} 
                className="block hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-personal"
              >
                Personal
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
