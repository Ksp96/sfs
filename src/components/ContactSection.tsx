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
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos démarches.
            </p>
          </div>

          {/* Grille des informations de contact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 fade-in-up group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {info.details}
                  </p>
                  {info.action && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white hover:text-primary transition-colors duration-300"
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

          {/* Call to Action principal */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à commencer ?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Contactez-nous dès maintenant pour découvrir comment nous pouvons vous aider.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: 'var(--button-glow)' }}
              >
                <a href="tel:+2250767371357">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;