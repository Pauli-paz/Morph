import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'services', 'work', 'investors', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'work', label: 'Nuestro Trabajo' },
    { id: 'investors', label: 'Clientes' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm h-16' : 'bg-background h-20'
      }`}
    >
      <div className="mx-auto px-[60px] h-full flex items-center justify-between max-w-full">
        <button
          onClick={() => scrollToSection('hero')}
          className={`transition-all duration-300 flex items-center ${
            isScrolled ? 'h-8' : 'h-10'
          }`}
        >
          <img 
            src="https://c.animaapp.com/mi6dyn0qsz0esz/img/morph.svg" 
            alt="Morph Logo" 
            className="h-full w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-12">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-foreground font-normal text-base transition-all duration-200 hover:text-primary cursor-pointer relative pb-1 ${
                      activeSection === item.id ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                    )}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile MenuIcon Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col w-full p-6 gap-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} className="w-full">
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-foreground font-normal text-base transition-all duration-200 hover:text-primary cursor-pointer w-full text-left py-3 ${
                        activeSection === item.id ? 'text-primary' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
}
