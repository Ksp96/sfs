import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import whatsappLogo from '@/assets/whatsapp-logo-new.webp';

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
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <TooltipProvider>
        <Tooltip open={showTooltip}>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 group relative hover:scale-110 border-2 border-white/20"
              style={{
                width: '64px',
                height: '64px',
                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.5)'
              }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full rounded-full relative overflow-hidden"
              >
                <img 
                  src={whatsappLogo} 
                  alt="WhatsApp" 
                  className="h-8 w-8 group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg"
                />
                
                {/* Effet de pulse animé */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
                
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent 
            side="right"
            className="bg-[#25D366] text-white border-[#25D366] shadow-xl font-medium"
          >
            <p className="flex items-center gap-2">
              💬 Discutez avec nous sur WhatsApp
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WhatsAppButton;