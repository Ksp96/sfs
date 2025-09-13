import { ArrowLeftRight, Receipt, Package, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { icon: <ArrowLeftRight className="h-5 w-5" />, name: "Dépôt & Retrait" },
    { icon: <Receipt className="h-5 w-5" />, name: "Paiement factures" },
    { icon: <Package className="h-5 w-5" />, name: "Expédition colis" },
  ];

  const contacts = [
    { icon: <Phone className="h-4 w-4" />, text: "07 67 37 13 57", href: "tel:+2250767371357" },
    { icon: <Mail className="h-4 w-4" />, text: "spacome62@gmail.com", href: "mailto:spacome62@gmail.com" },
    { icon: <MapPin className="h-4 w-4" />, text: "Anyama Plaque Arabe", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contenu principal du footer */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Logo et description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Saïda et Frères Services</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Votre partenaire de confiance pour tous vos besoins financiers et logistiques. 
                Service rapide, sécurisé et professionnel depuis plusieurs années.
              </p>
              <div className="flex items-center space-x-2 text-accent">
                <span className="text-lg">✨</span>
                <span className="font-medium">La confiance en service</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">Nos Services</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <div className="text-accent">
                      {service.icon}
                    </div>
                    <span className="text-sm">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">Contact</h4>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-white/60 text-sm">
                © {currentYear} Saïda et Frères Services. Tous droits réservés.
              </div>

              {/* Mentions légales */}
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-white/60">
                  Service agréé et sécurisé
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-white/80">En ligne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;