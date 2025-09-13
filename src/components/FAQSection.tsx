import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, CheckCircle, Sparkles, Settings, CreditCard, FileText, Clock, Shield, Package, Laptop, Smartphone, Users, Star } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Quels services proposez-vous ?",
      answer: "Nous proposons : dépôts, retraits, paiements de facture, inscriptions en ligne et expéditions de colis.",
      icon: Settings,
      color: "from-blue-500 to-purple-600"
    },
    {
      question: "Comment puis-je effectuer un dépôt ou un retrait ?",
      answer: "Il vous suffit de vous rendre dans notre point de service ou de nous contacter directement via WhatsApp pour être guidé.",
      icon: CreditCard,
      color: "from-green-500 to-emerald-600"
    },
    {
      question: "Quels types de factures puis-je payer chez vous ?",
      answer: "Nous traitons les paiements pour les principaux services (CIE, CANAL+, SODECI, internet, téléphonie, etc.).",
      icon: FileText,
      color: "from-orange-500 to-red-600"
    },
    {
      question: "Proposez-vous un service 24h/24 et 7j/7 ?",
      answer: "Oui, nous sommes disponibles à tout moment pour vos besoins urgents.",
      icon: Clock,
      color: "from-indigo-500 to-blue-600"
    },
    {
      question: "Est-ce que vos services sont sécurisés ?",
      answer: "Absolument ! La sécurité et la confidentialité de vos transactions sont notre priorité.",
      icon: Shield,
      color: "from-emerald-500 to-teal-600"
    },
    {
      question: "Comment fonctionne l'expédition de colis ?",
      answer: "Vous nous confiez votre colis, et nous organisons son acheminement rapide et sûr, avec un suivi transparent.",
      icon: Package,
      color: "from-purple-500 to-pink-600"
    },
    {
      question: "Puis-je faire mes inscriptions en ligne avec vous ?",
      answer: "Oui, nous vous accompagnons dans vos démarches en ligne pour gagner du temps et éviter les erreurs.",
      icon: Laptop,
      color: "from-cyan-500 to-blue-600"
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons les paiements via mobile money (Orange Money, MTN, Moov, Wave) ainsi que les espèces dans nos agences.",
      icon: Smartphone,
      color: "from-yellow-500 to-orange-600"
    },
    {
      question: "Comment puis-je vous contacter facilement ?",
      answer: "Vous pouvez nous joindre via WhatsApp, par téléphone ou directement depuis le formulaire de contact du site.",
      icon: Users,
      color: "from-pink-500 to-rose-600"
    },
    {
      question: "Pourquoi choisir vos services plutôt qu'un autre prestataire ?",
      answer: "Parce que nous combinons rapidité, sécurité, disponibilité 24/7 et un service client attentif à vos besoins.",
      icon: Star,
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16 fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Questions Fréquentes
              </h2>
              <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus courantes sur nos services.
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;