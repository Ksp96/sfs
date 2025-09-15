import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User, Bot, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  icon?: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! 👋 Je suis votre assistant virtuel. Comment puis-je vous aider aujourd\'hui ?',
      isUser: false,
      timestamp: new Date(),
      icon: '🤖'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      keywords: ['services', 'que', 'proposez', 'quoi', 'offre'],
      answer: 'Nous proposons : dépôts, retraits, paiements de facture, inscriptions en ligne et expéditions de colis. ✅',
      icon: '🏪'
    },
    {
      keywords: ['dépôt', 'retrait', 'comment', 'effectuer'],
      answer: 'Il vous suffit de vous rendre dans notre point de service ou de nous contacter via WhatsApp pour être guidé. 📍',
      icon: '💳'
    },
    {
      keywords: ['facture', 'factures', 'payer', 'paiement', 'cie', 'canal', 'sodeci'],
      answer: 'Nous traitons les paiements pour les principaux services (CIE, CANAL+, SODECI, internet, téléphonie, etc.). 🧾',
      icon: '💰'
    },
    {
      keywords: ['horaire', '24h', '7j', 'ouvert', 'disponible'],
      answer: 'Oui, nous sommes disponibles à tout moment pour vos besoins urgents, 24h/24 et 7j/7. ⏰',
      icon: '🕐'
    },
    {
      keywords: ['sécurité', 'sécurisé', 'sûr', 'fiable', 'confiance'],
      answer: 'Absolument ! La sécurité et la confidentialité de vos transactions sont notre priorité. 🔒',
      icon: '🛡️'
    },
    {
      keywords: ['colis', 'expédition', 'livraison', 'envoi'],
      answer: 'Vous nous confiez votre colis, et nous organisons son acheminement rapide et sûr, avec un suivi transparent. 📦',
      icon: '🚚'
    },
    {
      keywords: ['inscription', 'en ligne', 'démarche'],
      answer: 'Oui, nous vous accompagnons dans vos démarches en ligne pour gagner du temps et éviter les erreurs. 💻',
      icon: '📋'
    },
    {
      keywords: ['paiement', 'moyen', 'orange', 'mtn', 'moov', 'wave', 'money'],
      answer: 'Mobile money (Orange Money, MTN, Moov, Wave) + espèces dans nos agences. 📱',
      icon: '💳'
    },
    {
      keywords: ['contact', 'contacter', 'joindre', 'whatsapp'],
      answer: 'Via WhatsApp, par téléphone ou directement depuis notre formulaire de contact. 📞',
      icon: '📲'
    },
    {
      keywords: ['pourquoi', 'choisir', 'avantage', 'différence'],
      answer: 'Parce que nous combinons rapidité, sécurité, disponibilité 24/7 et un service client attentif. ⭐',
      icon: '🎯'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (userInput: string): { answer: string; icon: string } | null => {
    const input = userInput.toLowerCase();
    
    for (const faq of faqData) {
      if (faq.keywords.some(keyword => input.includes(keyword))) {
        return { answer: faq.answer, icon: faq.icon };
      }
    }
    return null;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const foundAnswer = findAnswer(inputValue);
      
      let botResponse: Message;
      
      if (foundAnswer) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: foundAnswer.answer,
          isUser: false,
          timestamp: new Date(),
          icon: foundAnswer.icon
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Je n'ai pas trouvé d'information précise à ce sujet. Souhaitez-vous que je transfère votre demande à notre support ? 🤔",
          isUser: false,
          timestamp: new Date(),
          icon: '❓'
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, j'aimerais obtenir plus d'informations sur vos services.");
    window.open(`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 group relative animate-bounce"
          size="icon"
        >
          <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-30"></div>
          {isOpen ? (
            <X className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <MessageCircle className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
          
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-primary text-white text-sm rounded-lg whitespace-nowrap opacity-100 transition-opacity duration-300 pointer-events-none">
              Posez vos questions
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-card border-2 border-border rounded-2xl shadow-2xl z-40 animate-fade-in flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Assistant Saïda</h3>
                <p className="text-sm opacity-90">Posez vos questions</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                    {message.icon || <Bot className="h-4 w-4" />}
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                    message.isUser
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white border border-border rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className={`text-xs opacity-70 mt-1 block ${
                    message.isUser ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>

                {message.isUser && (
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white border border-border p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre question..."
                className="flex-1 rounded-xl border-2 focus:border-accent"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="rounded-xl bg-accent hover:bg-accent/90 px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Support Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={openWhatsApp}
              className="w-full mt-2 text-xs text-muted-foreground hover:text-accent"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Contacter le support
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;