import React from 'react';
import { MessageCircle, Phone, MapPin, Instagram, Facebook, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onProductSelect: (id: string | null) => void;
}

export default function Footer({ setCurrentTab, onProductSelect }: FooterProps) {
  
  const handleNavClick = (tabId: string) => {
    onProductSelect(null);
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#1A1A1A] text-stone-400 border-t border-stone-900 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#FDFCFB]/10 pb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div 
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex flex-col"
            >
              <span className="font-serif-luxury text-xl font-bold tracking-wide text-white">
                Verma Fashion House
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#E44D26] font-medium mt-1">
                Digital Showroom • Raipur
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Established in 2014, providing premium bridal couture, royal groom's wear, bespoke tailoring, and majestic drapes to families across Raipur.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 bg-[#FDFCFB]/5 hover:bg-[#E44D26] hover:text-white rounded-none text-stone-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#FDFCFB]/5 hover:bg-[#E44D26] hover:text-white rounded-none text-stone-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#FDFCFB]/5 hover:bg-[#E44D26] hover:text-white rounded-none text-stone-400 transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
              Sitemap Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Products', 'Gallery', 'FAQ', 'Contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleNavClick(tab.toLowerCase())}
                    className="hover:text-[#E44D26] transition-colors text-left"
                  >
                    {tab} Showroom
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
              Boutique Contacts
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#E44D26] flex-shrink-0 mt-0.5" />
                <span>MG Road, Raipur, Chhattisgarh, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#E44D26] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#E44D26]">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/919876543210?text=Hello%20Verma%20Fashion%20House,%20I%20saw%20your%20digital%20showroom." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400"
                >
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Store Hours */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
              Visiting Hours
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              We look forward to welcoming you to Raipur's flagship couture house.
            </p>
            <div className="bg-[#FDFCFB]/5 p-4 rounded-none border border-[#FDFCFB]/10 space-y-1">
              <p className="text-[11px] text-white font-medium">Monday – Saturday</p>
              <p className="text-xs text-stone-400">10:00 AM – 9:00 PM</p>
              <p className="text-[11px] text-[#E44D26] font-semibold mt-2">Sunday: Showroom Closed</p>
            </div>
          </div>

        </div>

        {/* Legal & Footer Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-stone-400">
          <p>
            © {new Date().getFullYear()} Verma Fashion House. All Rights Reserved. Raipur Heritage Excellence.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0 text-stone-400">
            <a href="#" className="hover:text-[#E44D26]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E44D26]">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E44D26]">Shipping Info</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
