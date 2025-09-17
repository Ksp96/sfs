import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ChatWidget from '@/components/ChatWidget';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons rapidement.",
    });

    // Reset du formulaire
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos démarches.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Formulaire de contact */}
              <div className="animate-fade-in">
                <Card className="shadow-lg border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                      <Send className="h-6 w-6" />
                      Envoyez-nous un message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Votre nom et prénom"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          Adresse email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 min-h-[120px]"
                          placeholder="Décrivez votre demande ou posez votre question..."
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Lien WhatsApp */}
                <div className="mt-6">
                  <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-500 rounded-full">
                            <MessageCircle className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-800">Contact rapide</h3>
                            <p className="text-sm text-green-600">Discutez avec nous sur WhatsApp</p>
                          </div>
                        </div>
                        <Button 
                          asChild
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <a
                            href="https://wa.me/2250767371357"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Nos coordonnées
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Plusieurs moyens de nous contacter selon vos préférences.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {contactInfo.map((info, index) => (
                      <Card
                        key={info.title}
                        className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                              {info.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-1">
                                {info.title}
                              </h4>
                              <p className="text-muted-foreground mb-3 leading-relaxed">
                                {info.details}
                              </p>
                              {info.action && (
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="hover:bg-accent hover:text-accent-foreground"
                                >
                                  <a 
                                    href={info.action} 
                                    target={info.action.startsWith('http') ? '_blank' : undefined}
                                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  >
                                    {info.actionText}
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <div className="bg-primary text-white rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-3xl font-bold mb-4">
                  Prêt à commencer ?
                </h3>
                <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
                  Contactez-nous dès maintenant pour découvrir comment nous pouvons vous aider 
                  avec nos services de qualité disponibles 24h/24.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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

      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
};

export default Contact;