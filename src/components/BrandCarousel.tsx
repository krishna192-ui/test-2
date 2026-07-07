import React from 'react';
import { brandLogos } from '../data';

export default function BrandCarousel() {
  return (
    <section id="brand-showcase-section" className="py-12 bg-[#FDFCFB] border-t border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/40 font-bold mb-8">
          Curated Weaver & Heritage Partnerships
        </p>

        {/* Sliding strip of logos */}
        <div className="relative w-full overflow-hidden flex items-center justify-center">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {/* Displaying partners with fine typography style */}
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-[#1A1A1A] hover:text-[#E44D26] transition-colors"
              >
                <span className="text-xl">{brand.logo}</span>
                <span className="font-serif-luxury text-sm tracking-widest font-semibold uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
            {/* Duplicate for infinite seamless scroll */}
            {brandLogos.map((brand, idx) => (
              <div
                key={`dup-${idx}`}
                className="hidden sm:flex items-center space-x-2 text-[#1A1A1A] hover:text-[#E44D26] transition-colors"
              >
                <span className="text-xl">{brand.logo}</span>
                <span className="font-serif-luxury text-sm tracking-widest font-semibold uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
