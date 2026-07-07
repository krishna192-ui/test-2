import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';
import { faqItems } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-01'); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq-section" className="py-16 bg-[#FDFCFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title Section */}
        <div id="faq-header" className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E44D26] font-bold flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E44D26]" />
            Support & Concierge
          </span>
          <h2 className="font-serif-luxury text-4xl font-semibold text-[#1A1A1A] tracking-tight mt-2">
            Common Inquiries
          </h2>
          <p className="text-sm text-[#1A1A1A]/70 mt-3 leading-relaxed max-w-xl mx-auto">
            Find answers to frequently asked questions about our heritage collections, bespoke tailoring, and boutique services. If you need further assistance, our concierge is ready to help.
          </p>

          {/* Quick Search bar inside FAQ (US-001/NFR-005) */}
          <div id="faq-search-bar" className="relative max-w-md mx-auto mt-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search common questions..."
              className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#1A1A1A]/15 rounded-none text-sm focus:outline-none focus:border-[#E44D26] focus:ring-1 focus:ring-[#E44D26]"
            />
            <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Accordions (FR-006) */}
        <div id="faq-accordions-list" className="space-y-4 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-[#F5F5F0] border border-[#1A1A1A]/10 rounded-none overflow-hidden transition-luxury"
                >
                  <button
                    id={`faq-button-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left font-serif-luxury font-medium text-[#1A1A1A] hover:text-[#E44D26] transition-colors"
                  >
                    <span className="text-sm sm:text-base tracking-wide">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#E44D26] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1A1A1A]/40 flex-shrink-0" />
                    )}
                  </button>

                  {/* Accordion body panel */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-48 border-t border-[#1A1A1A]/10' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed font-light bg-[#FDFCFB]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div id="faq-empty-state" className="text-center py-8 text-[#1A1A1A]/60 text-sm">
              No matching questions found. Ask us directly on WhatsApp!
            </div>
          )}
        </div>

        {/* Bottom CTA for direct contact (FR-004) */}
        <div id="faq-bottom-cta" className="mt-12 bg-[#F5F5F0] border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8 text-center space-y-4">
          <h3 className="font-serif-luxury text-xl font-semibold text-[#1A1A1A]">
            Still have questions?
          </h3>
          <p className="text-xs text-[#1A1A1A]/70 max-w-md mx-auto">
            Our boutique specialists are available to guide you on sizing, custom linings, and traditional drapes.
          </p>
          <div className="pt-2">
            <a
              id="faq-whatsapp-btn"
              href="https://wa.me/919876543210?text=Hello%20Verma%20Fashion%20House,%20I%20have%20an%20inquiry%20regarding%20bridal%20timelines."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#E44D26] hover:bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-none transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Contact Showroom Specialist</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
