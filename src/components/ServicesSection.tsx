import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Banknote, Receipt, Package, ArrowLeftRight } from 'lucide-react';

const ServicesSection = () => {
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
      details: "Effectuez vos transactions en toute sécurité sur tous les réseaux : MTN, Orange, Moov et Wave. Service rapide et fiable.",
      gradient: "from-secondary to-secondary/80",
      delay: "0s"
    },
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "Paiement de factures",
      description: "SODECI, CIE, Canal+",
      details: "Réglez facilement vos factures d'eau, d'électricité et de télévision. Plus besoin de faire la queue, nous nous occupons de tout.",
      gradient: "from-accent to-accent/80",
      delay: "0.2s"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Expédition de colis",
      description: "Partout en Côte d'Ivoire",
      details: "Envoyez vos colis en toute confiance dans toute la Côte d'Ivoire. Suivi en temps réel et livraison garantie.",
      gradient: "from-primary to-primary/80",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre gamme complète de services financiers et logistiques, 
              conçus pour simplifier votre quotidien.
            </p>
          </div>

          {/* Grille des services */}
          <div className="grid md:grid-cols-3 gap-8">
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
                  <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-secondary">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </CardContent>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" 
                     style={{ boxShadow: 'inset 0 0 50px rgba(46, 204, 113, 0.1)' }} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;