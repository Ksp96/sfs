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
      {/* Background pattern amélioré */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de section amélioré */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold tracking-wide uppercase">Restons en contact</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Contactez-nous
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Notre équipe est à votre disposition 24/7 pour répondre à toutes vos questions 
              et vous accompagner dans vos démarches.
            </p>
          </div>

          {/* Grille des informations de contact restructurée */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500 fade-in-up group overflow-hidden relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {info.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-white/90 mb-4 leading-relaxed text-base">
                    {info.details}
                  </p>
                  {info.action && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium"
                    >
                      <a href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined}>
                        {info.actionText}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action amélioré */}
          <div className="text-center fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Effet de fond */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5" />
              
              <div className="relative z-10">
                <div className="inline-block p-3 bg-accent/20 rounded-full mb-6">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Prêt à commencer ?
                </h3>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Contactez-nous dès maintenant et découvrez comment nous pouvons 
                  simplifier votre quotidien avec nos services de qualité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <a href="tel:+2250767371357">
                      <Phone className="mr-2 h-5 w-5" />
                      Appeler maintenant
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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