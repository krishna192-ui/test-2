import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1600"
          alt="Verma Fashion House Heritage Bridal Collection"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-85 scale-105 animate-pulse-slow"
          style={{ animationDuration: '8s' }}
        />
        {/* Elegant Gradient overlays to ensure high contrast & luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-stone-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Tagline / Subtitle */}
        <div id="hero-tagline" className="inline-flex items-center space-x-2 bg-[#1A1A1A]/85 px-4 py-2 rounded-none border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#E44D26]" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-100">
            Est. 2014 • 12 Years of Excellence
          </span>
        </div>

        {/* Heading */}
        <h1 
          id="hero-heading"
          className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight drop-shadow-md"
        >
          Season's Finest
        </h1>

        {/* Description */}
        <p 
          id="hero-description"
          className="max-w-2xl mx-auto text-stone-200 text-base sm:text-lg tracking-wide leading-relaxed font-light mb-10 drop-shadow-sm"
        >
          Discover the pinnacle of Raipur heritage craftsmanship blended with contemporary luxury. Experience exquisite handwoven silk, royal zardosi, and precision custom-tailored silhouettes.
        </p>

        {/* Call to Actions */}
        <div id="hero-actions" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            id="hero-cta-explore"
            className="group flex items-center justify-center space-x-2 w-full sm:w-auto bg-[#E44D26] hover:bg-[#1A1A1A] text-white text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-none border border-[#E44D26] hover:border-[#1A1A1A] transition-all duration-300"
          >
            <span>Explore Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="https://wa.me/919876543210?text=Hello%20Verma%20Fashion%20House,%20I%20want%20to%20book%20a%20personal%20bridal%20consultation%20session."
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-consult"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-white/10 hover:bg-white text-white hover:text-stone-950 text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-none border border-white/20 hover:border-white transition-all duration-300"
          >
            <span>Book Consultation</span>
          </a>
        </div>

      </div>

      {/* Decorative Border Accent at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E44D26]" />
    </section>
  );
}
