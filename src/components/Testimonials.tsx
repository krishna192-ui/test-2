import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-play feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials-section" className="py-16 bg-[#FDFCFB] border-b border-[#1A1A1A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E44D26] font-bold">
            Client Experiences
          </span>
          <h3 className="font-serif-luxury text-3xl font-semibold text-[#1A1A1A] mt-2">
            Shared Stories
          </h3>
        </div>

        {/* Testimonial Active Card view */}
        <div className="relative bg-[#F5F5F0] border border-[#1A1A1A]/10 p-8 sm:p-12 rounded-none text-center">
          
          {/* Quote Icon decorative backdrop */}
          <div className="absolute top-6 left-6 text-[#E44D26]/10">
            <Quote className="w-12 h-12" />
          </div>

          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(testimonials[activeIdx].rating)].map((_, idx) => (
              <Star key={idx} className="w-4 h-4 text-[#E44D26] fill-[#E44D26]" />
            ))}
          </div>

          <p className="font-serif-luxury text-[#1A1A1A]/80 italic text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            "{testimonials[activeIdx].content}"
          </p>

          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-wide">
              {testimonials[activeIdx].name}
            </h4>
            <p className="text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest font-bold mt-1">
              {testimonials[activeIdx].role}
            </p>
          </div>

          {/* Manual Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-2.5 bg-[#FDFCFB] hover:bg-[#EAE8E4] rounded-none text-[#1A1A1A] border border-[#1A1A1A]/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-stone-500 font-semibold">
              {activeIdx + 1} / {testimonials.length}
            </span>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-2.5 bg-[#FDFCFB] hover:bg-[#EAE8E4] rounded-none text-[#1A1A1A] border border-[#1A1A1A]/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
