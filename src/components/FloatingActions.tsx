import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = "Hello Verma Fashion House, I am browsing your Digital Showroom and would like to learn more about your premium traditional couture collections.";

  return (
    <div id="floating-actions-stack" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      
      {/* Back to Top button (US-002) */}
      {showScroll && (
        <button
          id="scroll-to-top-button"
          onClick={scrollToTop}
          className="p-3.5 bg-[#EAE8E4] text-[#1A1A1A] hover:text-[#E44D26] rounded-none border border-[#1A1A1A]/10 hover:bg-[#F5F5F0] transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Click-to-Call Button (US-002 / FR-004) */}
      <a
        id="floating-call-link"
        href="tel:+919876543210"
        className="p-4 bg-[#1A1A1A] text-white hover:bg-[#333333] rounded-none border border-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Call Verma Fashion House"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Chat Button (US-002 / FR-004) */}
      <a
        id="floating-whatsapp-link"
        href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-[#E44D26] hover:bg-[#1A1A1A] text-white rounded-none transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Inquire on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-transparent" />
      </a>

    </div>
  );
}
