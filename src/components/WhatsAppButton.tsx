import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/918473874300"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
