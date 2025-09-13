import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoSaida from '@/assets/logo-saida.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Avis client', href: '#avis' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm border-b border-border/5">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo et nom */}
          <div className="flex items-center space-x-4">
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
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 pulse-orange relative overflow-hidden group"
              style={{ 
                boxShadow: '0 4px 20px rgba(243, 156, 18, 0.4), 0 0 0 2px rgba(243, 156, 18, 0.1)' 
              }}
            >
              <span className="relative z-10">Contactez-nous</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg w-fit hover:scale-105 pulse-orange"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  boxShadow: '0 4px 20px rgba(243, 156, 18, 0.4)' 
                }}
              >
                Contactez-nous
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;