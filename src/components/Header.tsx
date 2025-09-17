import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logoSaida from '@/assets/logo-saida.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm border-b border-border/5">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo et nom */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300">
            <div className="relative group">
              <img 
                src={logoSaida} 
                alt="Saïda et Frères Services" 
                className="h-12 w-12 object-contain rounded-full border-2 border-accent/40 shadow-lg logo-hover transition-all duration-300 group-hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(243, 156, 18, 0.3))',
                  boxShadow: '0 0 0 3px rgba(243, 156, 18, 0.1), 0 8px 25px rgba(0, 0, 0, 0.15)'
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </div>
            <div>
              <div className="flex items-baseline space-x-3">
                <h1 className="text-2xl font-black text-accent tracking-tight drop-shadow-sm">SAÏDA</h1>
                <span className="text-sm font-medium text-white">et Frères Services</span>
              </div>
              <p className="text-xs text-white/90 font-light">La confiance en service</p>
            </div>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isActiveLink(item.href) 
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 slide-in-right">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    isActiveLink(item.href) 
                      ? 'text-accent' 
                      : 'text-white hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;