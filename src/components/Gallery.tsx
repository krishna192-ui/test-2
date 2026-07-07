import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { galleryItems } from '../data';

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Store', 'Couture', 'Craft', 'Groom', 'Kids'];

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx(prev => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx(prev => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery-section" className="py-16 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div id="gallery-header" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E44D26] font-bold flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E44D26]" />
            Our Legacy in Focus
          </span>
          <h2 className="font-serif-luxury text-4xl font-semibold text-[#1A1A1A] tracking-tight mt-2">
            Showroom & Craft Gallery
          </h2>
          <p className="text-sm text-[#1A1A1A]/70 mt-3 leading-relaxed">
            An intimate glimpse into the craftsmanship, heritage, and atmosphere that define Verma Fashion House. Experience the artistry woven into every thread.
          </p>

          {/* Categories / Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  setLightboxIdx(null);
                }}
                className={`px-5 py-2 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedFilter === cat
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-[#FDFCFB] text-[#1A1A1A] hover:bg-[#EAE8E4] border border-[#1A1A1A]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (FR-008) */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setLightboxIdx(idx)}
              className="group relative aspect-square bg-[#EAE8E4] rounded-none overflow-hidden cursor-pointer border border-[#1A1A1A]/10 transition-luxury"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Blur-overlay on hover */}
              <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#E44D26] font-bold">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-white text-lg font-medium mt-1">
                  {item.title}
                </h3>
                <span className="mt-3 inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-white/80 border-b border-white/40 pb-0.5 max-w-max">
                  <span>Enlarge Artwork</span>
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay (FR-008) */}
        {lightboxIdx !== null && (
          <div
            id="lightbox-backdrop"
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/95 flex flex-col items-center justify-center p-4 animate-fade-in"
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 text-white/75 hover:text-white p-2.5 hover:bg-white/10 rounded-none transition-all"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Cycle Arrow */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-none bg-white/10 text-white/75 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image View */}
            <div id="lightbox-image-frame" className="max-w-4xl max-h-[75vh] relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredItems[lightboxIdx].image}
                alt={filteredItems[lightboxIdx].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-none border border-white/10"
              />
            </div>

            {/* Right Cycle Arrow */}
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-none bg-white/10 text-white/75 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Info Bar */}
            <div id="lightbox-info-bar" className="mt-6 text-center text-white" onClick={(e) => e.stopPropagation()}>
              <span className="text-xs uppercase tracking-widest text-[#E44D26] font-bold">
                {filteredItems[lightboxIdx].category} Collection
              </span>
              <h4 className="font-serif-luxury text-xl mt-1 font-medium">
                {filteredItems[lightboxIdx].title}
              </h4>
              <p className="text-xs text-stone-400 mt-2 font-mono">
                Image {lightboxIdx + 1} of {filteredItems.length}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
