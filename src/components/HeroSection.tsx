import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Banknote, Receipt, Package, UserPlus, ArrowLeftRight } from 'lucide-react';
import heroBackground from '@/assets/new-hero-background.png';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background avec parallax amélioré */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.20)), url(${heroBackground})`,
          transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0001})`,
        }}
      />
      
      {/* Overlay gradient sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="min-h-[calc(100vh-120px)] flex flex-col justify-between">
          
          {/* Texte principal en haut à gauche */}
          <div className="text-left space-y-8 slide-in-left pt-16" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                Votre partenaire
                <span className="block text-accent drop-shadow-2xl font-extrabold">de confiance</span>
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-white leading-relaxed font-semibold drop-shadow-xl max-w-2xl">
                Services financiers <span className="text-accent font-bold">rapides</span> et <span className="text-accent font-bold">sécurisés</span> pour tous vos besoins
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 transform"
                style={{ 
                  boxShadow: '0 10px 40px rgba(243, 156, 18, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                }}
              >
                Découvrir nos services
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              {/* Badges de confiance */}
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Service 24h/7j</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Rapide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Box des services en bas à gauche */}
          <div className="slide-in-left w-96 bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/15 shadow-xl mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <ArrowLeftRight className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-white font-medium text-base">Dépôts</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Banknote className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-white font-medium text-base">Retraits</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Receipt className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-white font-medium text-base">Paiements de facture</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <UserPlus className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-white font-medium text-base">Inscriptions en ligne</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Package className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-white font-medium text-base">Expéditions de colis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;