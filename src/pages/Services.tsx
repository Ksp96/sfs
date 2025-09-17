import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Banknote, Receipt, Package, ArrowLeftRight, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ChatWidget from '@/components/ChatWidget';
import orangeLogo from '@/assets/orange-logo.png';
import mtnLogo from '@/assets/mtn-logo.png';
import moovLogo from '@/assets/moov-logo.png';
import waveLogo from '@/assets/wave-logo.png';
import cieLogo from '@/assets/cie-logo.jpg';
import sodeciLogo from '@/assets/sodeci-logo.jpg';
import canalLogo from '@/assets/canal-logo.webp';
import livraisonLogo from '@/assets/livraison-logo.webp';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <ArrowLeftRight className="h-8 w-8" />,
      title: "Dépôt & Retrait",
      description: "Tout réseau mobile",
      details: "Effectuez vos transactions en toute sécurité sur tous les réseaux : MTN, Orange, Moov et Wave. Service rapide et fiable disponible 24h/24.",
      gradient: "from-secondary to-secondary/80",
      delay: "0s",
      logos: [
        { src: orangeLogo, alt: "Orange Money" },
        { src: mtnLogo, alt: "MTN Mobile Money" },
        { src: moovLogo, alt: "Moov Money" },
        { src: waveLogo, alt: "Wave" }
      ]
    },
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "Paiement de factures",
      description: "SODECI, CIE, Canal+",
      details: "Réglez facilement vos factures d'eau, d'électricité et de télévision. Plus besoin de faire la queue, nous nous occupons de tout en quelques minutes.",
      gradient: "from-accent to-accent/80",
      delay: "0.2s",
      logos: [
        { src: cieLogo, alt: "CIE Côte d'Ivoire" },
        { src: sodeciLogo, alt: "SODECI" },
        { src: canalLogo, alt: "Canal+" }
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Inscriptions en ligne",
      description: "Démarches administratives",
      details: "Nous vous accompagnons dans vos inscriptions et démarches administratives en ligne. Gagnez du temps et évitez les erreurs grâce à notre expertise.",
      gradient: "from-primary to-primary/80",
      delay: "0.4s"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Expédition de colis",
      description: "Partout en Côte d'Ivoire",
      details: "Envoyez vos colis en toute confiance dans toute la Côte d'Ivoire. Suivi en temps réel et livraison garantie avec nos partenaires logistiques.",
      gradient: "from-emerald-500 to-emerald-600",
      delay: "0.6s",
      logos: [
        { src: livraisonLogo, alt: "Service de livraison" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Découvrez notre gamme complète de services financiers et logistiques, 
              conçus pour simplifier votre quotidien et vous faire gagner du temps.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-muted/30" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className={`group relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                    isVisible ? 'slide-in-left opacity-100' : 'opacity-0 translate-x-[-50px]'
                  }`}
                  style={{
                    animationDelay: service.delay,
                    animationDuration: '0.8s',
                    animationFillMode: 'both'
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 text-center pb-4">
                    <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    {/* Logos des partenaires */}
                    {service.logos && (
                      <div className="mb-4">
                        <div className="flex justify-center items-center gap-2 flex-wrap max-w-[280px] mx-auto">
                          {service.logos.map((logo, logoIndex) => (
                            <div key={logoIndex} className="bg-white/90 rounded-lg p-1.5 hover:bg-white transition-colors duration-300 shadow-sm">
                              <img src={logo.src} alt={logo.alt} className="h-4 w-auto object-contain" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {service.details}
                    </p>
                  </CardContent>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" 
                       style={{ boxShadow: 'inset 0 0 50px rgba(46, 204, 113, 0.1)' }} />
                </Card>
              ))}
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Besoin d'aide ?
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Notre équipe est disponible 24h/24 pour répondre à vos questions 
                  et vous accompagner dans l'utilisation de nos services.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a
                    href="tel:+2250767371357"
                    className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Appelez-nous
                  </a>
                  <a
                    href="https://wa.me/2250767371357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
};

export default Services;