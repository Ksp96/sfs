import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Fatou K.",
      text: "Service rapide et fiable, je recommande vivement !",
      avatar: "FK",
      delay: "0s"
    },
    {
      name: "Jean M.",
      text: "J'ai pu payer ma facture CIE en quelques minutes, super efficace.",
      avatar: "JM",
      delay: "0.2s"
    },
    {
      name: "Awa T.",
      text: "Expédition de mon colis sans stress, suivi impeccable.",
      avatar: "AT",
      delay: "0.4s"
    },
    {
      name: "Ismaël D.",
      text: "Équipe professionnelle, disponible et toujours à l'écoute.",
      avatar: "ID",
      delay: "0.6s"
    }
  ];

  const gradients = [
    "from-accent to-accent/80",
    "from-secondary to-secondary/80", 
    "from-primary to-primary/80",
    "from-accent to-secondary"
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-muted/50 to-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-8 w-8 text-accent animate-pulse fill-current" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Avis Clients
              </h2>
              <Star className="h-8 w-8 text-secondary animate-pulse fill-current" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits qui nous font confiance au quotidien.
            </p>
          </div>

          {/* Grille des témoignages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`group relative overflow-hidden border-2 border-border rounded-2xl hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transform bg-card/80 backdrop-blur-sm ${
                  isVisible ? 'slide-in-left opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: testimonial.delay,
                  animationDuration: '0.8s',
                  animationFillMode: 'both'
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="h-8 w-8 text-accent" />
                </div>
                
                <CardContent className="relative z-10 p-6 text-center">
                  {/* Avatar */}
                  <div className="mb-4 flex justify-center">
                    <Avatar className={`w-16 h-16 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 group-hover:scale-110`}>
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className={`bg-gradient-to-br ${gradients[index]} text-white font-bold text-lg`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 text-accent fill-current animate-pulse" 
                        style={{animationDelay: `${i * 0.1}s`, animationDuration: '2s'}}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed mb-4 italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Name */}
                  <p className="font-bold text-primary text-lg group-hover:text-accent transition-colors duration-300">
                    {testimonial.name}
                  </p>
                </CardContent>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" 
                     style={{ boxShadow: 'inset 0 0 50px rgba(243, 156, 18, 0.1)' }} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;