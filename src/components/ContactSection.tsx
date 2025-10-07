import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      details: "07 67 37 13 57",
      action: "tel:+2250767371357",
      actionText: "Appeler maintenant"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "spacome62@gmail.com",
      action: "mailto:spacome62@gmail.com",
      actionText: "Envoyer un email"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      details: "Anyama Plaque Arabe, près de la Boulangerie, Abidjan",
      action: "https://maps.google.com/?q=Anyama+Plaque+Arabe+Abidjan",
      actionText: "Voir sur la carte"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      details: "Lun-Sam: 7h-19h | Dim: 8h-17h",
      action: null,
      actionText: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-primary to-primary/95 text-white relative overflow-hidden">
      {/* Background pattern premium */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-elegant" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de section premium */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-full border border-accent/30 animate-shimmer relative overflow-hidden">
              <span className="text-sm font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_100%] gradient-animate">
                Restons en contact
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-secondary animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Contactez-nous
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Notre équipe est à votre disposition 24/7 pour répondre à toutes vos questions 
              et vous accompagner dans vos démarches.
            </p>
          </div>

          {/* Grille des informations de contact avec nouvelle palette */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => {
              const isEven = index % 2 === 0;
              const bgColor = isEven ? 'from-accent to-accent/90' : 'from-secondary to-secondary/90';
              const hoverBg = isEven ? 'hover:from-accent/90 hover:to-accent' : 'hover:from-secondary/90 hover:to-secondary';
              
              return (
                <Card
                  key={info.title}
                  className={`bg-gradient-to-br ${bgColor} ${hoverBg} border-none text-white transition-all duration-500 fade-in-up group overflow-hidden relative shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-2 shimmer-effect`}
                  style={{
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Effet de particules premium */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 elegant-glow" />
                  
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white group-hover:bg-white ${isEven ? 'group-hover:text-accent' : 'group-hover:text-secondary'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg icon-3d-pulse`}>
                        {info.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white drop-shadow-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-white/95 mb-4 leading-relaxed text-base font-medium drop-shadow">
                      {info.details}
                    </p>
                    {info.action && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-current transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <a href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined}>
                          {info.actionText}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action premium */}
          <div className="text-center fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/30 shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500 elegant-glow">
              {/* Effet de fond animé premium */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/10 to-accent/10 animate-glow-pulse" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative z-10">
                <div className="inline-block p-4 bg-gradient-to-br from-accent to-secondary rounded-full mb-6 elegant-bounce shadow-2xl">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-secondary">
                  Prêt à commencer ?
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Contactez-nous dès maintenant et découvrez comment nous pouvons 
                  simplifier votre quotidien avec nos services de qualité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-accent/50 hover:scale-110 transition-all duration-300 border-2 border-white/20 shimmer-effect"
                  >
                    <a href="tel:+2250767371357">
                      <Phone className="mr-2 h-5 w-5" />
                      Appeler maintenant
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-secondary/50 hover:scale-110 transition-all duration-300 border-2 border-white/20 shimmer-effect"
                  >
                    <a href="mailto:spacome62@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Envoyer un email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;