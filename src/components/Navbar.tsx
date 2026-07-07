import React, { useState } from 'react';
import { Menu, X, Search, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onSearchClick: () => void;
  onProductSelect: (id: string | null) => void;
}

export default function Navbar({ currentTab, setCurrentTab, onSearchClick, onProductSelect }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleTabChange = (tabId: string) => {
    onProductSelect(null); // Reset detail view when switching tabs
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-sm transition-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            id="nav-logo"
            className="flex-shrink-0 cursor-pointer flex flex-col justify-center"
            onClick={() => handleTabChange('home')}
          >
            <span className="font-serif-luxury text-2xl font-semibold tracking-wide text-[#1A1A1A] leading-none">
              Verma Fashion House
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#E44D26] font-medium mt-1">
              Digital Showroom • Raipur
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleTabChange(item.id)}
                className={`relative py-2 text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
                  currentTab === item.id 
                    ? 'text-[#E44D26]' 
                    : 'text-[#1A1A1A]/70 hover:text-[#E44D26]'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E44D26]" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6">
            <button
              id="desktop-search-trigger"
              onClick={onSearchClick}
              className="p-2 text-[#1A1A1A]/75 hover:text-[#E44D26] transition-colors duration-200"
              aria-label="Search items"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              id="desktop-contact-whatsapp"
              href="https://wa.me/919876543210?text=Hello%20Verma%20Fashion%20House,%20I%20am%20interested%20in%20your%20couture%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#E44D26] hover:bg-[#1A1A1A] text-white py-2.5 px-5 rounded-none text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Inquire</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              id="mobile-search-trigger"
              onClick={onSearchClick}
              className="p-2 text-[#1A1A1A]/70"
              aria-label="Search items"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-none text-[#1A1A1A]/70 hover:text-[#1A1A1A] focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#FDFCFB] border-t border-[#1A1A1A]/10 transition-luxury">
          <div className="px-2 pt-3 pb-6 space-y-1 sm:px-3 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleTabChange(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium tracking-wider uppercase rounded-none transition-colors ${
                  currentTab === item.id 
                    ? 'bg-[#F5F5F0] text-[#E44D26] font-semibold' 
                    : 'text-[#1A1A1A]/70 hover:bg-[#F5F5F0] hover:text-[#E44D26]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4 flex flex-col space-y-3">
              <a
                id="mobile-nav-whatsapp"
                href="https://wa.me/919876543210?text=Hello%20Verma%20Fashion%20House,%20I%20am%20interested%20in%20your%20couture%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-[#E44D26] text-white hover:bg-[#1A1A1A] py-3.5 px-4 rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                id="mobile-nav-call"
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 w-full bg-[#EAE8E4] border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#F5F5F0] py-3.5 px-4 rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
