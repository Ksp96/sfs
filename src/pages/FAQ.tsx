import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, CheckCircle, Sparkles, Settings, CreditCard, FileText, Clock, Shield, Package, Laptop, Smartphone, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ChatWidget from '@/components/ChatWidget';

const FAQ = () => {
  const faqs = [
    {
      question: "Quels services proposez-vous ?",
      answer: "Nous proposons : dépôts, retraits, paiements de facture, inscriptions en ligne et expéditions de colis.",
      icon: Settings,
      color: "from-blue-500 to-purple-600"
    },
    {
      question: "Comment puis-je effectuer un dépôt ou un retrait ?",
      answer: "Rendez-vous dans notre point de service ou contactez-nous via WhatsApp pour être guidé étape par étape.",
      icon: CreditCard,
      color: "from-green-500 to-emerald-600"
    },
    {
      question: "Quels types de factures puis-je payer chez vous ?",
      answer: "Nous traitons les paiements pour CIE, SODECI, CANAL+, internet, téléphonie et bien d'autres.",
      icon: FileText,
      color: "from-orange-500 to-red-600"
    },
    {
      question: "Êtes-vous disponibles 24h/24 et 7j/7 ?",
      answer: "Oui, notre équipe est joignable à tout moment pour répondre à vos besoins urgents.",
      icon: Clock,
      color: "from-indigo-500 to-blue-600"
    },
    {
      question: "Vos services sont-ils sécurisés ?",
      answer: "Absolument ! La sécurité et la confidentialité des transactions sont garanties.",
      icon: Shield,
      color: "from-emerald-500 to-teal-600"
    },
    {
      question: "Comment fonctionne l'expédition de colis ?",
      answer: "Vous nous confiez votre colis, et nous organisons son envoi rapide et sûr, avec un suivi fiable.",
      icon: Package,
      color: "from-purple-500 to-pink-600"
    },
    {
      question: "Puis-je faire mes inscriptions en ligne avec vous ?",
      answer: "Oui, nous vous accompagnons pour réussir vos démarches en ligne sans erreurs.",
      icon: Laptop,
      color: "from-cyan-500 to-blue-600"
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Mobile money (Orange Money, MTN, Moov, Wave) et espèces dans nos agences.",
      icon: Smartphone,
      color: "from-yellow-500 to-orange-600"
    },
    {
      question: "Comment puis-je vous contacter facilement ?",
      answer: "Via WhatsApp, téléphone ou formulaire de contact du site.",
      icon: Users,
      color: "from-pink-500 to-rose-600"
    },
    {
      question: "Pourquoi choisir Saïda & Frère Services ?",
      answer: "Parce que nous combinons rapidité, sécurité, disponibilité permanente et un service client attentif.",
      icon: Star,
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
                Questions Fréquentes
              </h1>
              <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Trouvez rapidement les réponses à vos questions les plus courantes sur nos services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Accordéon FAQ */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-2 border-border rounded-2xl px-6 hover:border-accent/60 transition-all duration-500 bg-card hover:shadow-xl hover:shadow-accent/10 group hover:scale-[1.02] transform"
                  >
                    <AccordionTrigger className="text-left py-6 hover:text-accent transition-all duration-300 text-lg font-semibold">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${faq.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <faq.icon className="h-6 w-6 text-white group-hover:animate-pulse relative z-10" />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/10 group-hover:animate-ping opacity-20"></div>
                        </div>
                        <span className="group-hover:translate-x-2 transition-transform duration-300 group-hover:text-primary">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-base">
                      <div className="flex items-start gap-4 ml-16 animate-fade-in">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mt-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                          <CheckCircle className="h-5 w-5 text-white animate-pulse relative z-10" style={{animationDuration: '1.5s'}} />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                        </div>
                        <span className="pt-2 text-foreground font-medium leading-relaxed">{faq.answer}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Vous ne trouvez pas la réponse ?
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Notre équipe est là pour vous aider. Contactez-nous directement 
                  et obtenez une réponse personnalisée.
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

export default FAQ;