import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Afficher le tooltip après 3 secondes pour attirer l'attention
      setTimeout(() => setShowTooltip(true), 3000);
      // Masquer le tooltip après 8 secondes
      setTimeout(() => setShowTooltip(false), 8000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+2250767371357";
  const defaultMessage = "Je viens de visiter votre site internet et je suis intéressé par vos services.\nPourriez-vous m'envoyer plus d'informations sur vos offres (dépôts, retraits, paiements de facture, inscriptions en ligne ou expédition de colis) ?\nMerci d'avance 🙏";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative animate-pulse hover:animate-none whatsapp-hover"
              style={{
                width: '56px',
                height: '56px',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
              }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full rounded-full"
              >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Effet de pulse subtil */}
                <div className="absolute inset-0 rounded-full bg-secondary opacity-50 animate-ping" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-white border-primary">
            <p>Discutez sur WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WhatsAppButton;