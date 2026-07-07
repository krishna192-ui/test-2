import React from 'react';
import { ArrowRight, Sparkles, Award, Shield, UserCheck } from 'lucide-react';

interface AboutProps {
  onBrowseProducts: () => void;
}

export default function About({ onBrowseProducts }: AboutProps) {
  return (
    <div id="about-us-page" className="bg-[#FDFCFB]">
      
      {/* Narrative Section */}
      <section className="py-16 sm:py-24 border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copywriting (Left 5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E44D26] font-bold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E44D26]" />
                Our Legacy in Raipur
              </span>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
                Our Heritage
              </h2>
              
              <blockquote className="border-l-2 border-[#E44D26] pl-4 text-[#1A1A1A]/70 italic text-sm my-4">
                "Fashion is not merely about clothing; it is the physical manifestation of a city's soul and history."
              </blockquote>

              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                Rooted deeply in the cultural tapestry of Raipur, Verma Fashion House began its journey twelve years ago with a singular vision: to bridge the timeless artistry of traditional Indian textiles with the refined silhouettes of modern luxury.
              </p>
              
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                What started as an intimate boutique has blossomed into a sanctuary for those who appreciate digital craftsmanship and unparalleled sartorial elegance. Every piece curated within our walls tells a story of dedication, precision, and an enduring respect for our heritage.
              </p>
            </div>

            {/* Immersive Image (Right 7 Columns) */}
            <div id="about-heritage-photo" className="lg:col-span-7 rounded-none overflow-hidden aspect-[16/10] bg-[#EAE8E4] border border-[#1A1A1A]/10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
                alt="Verma Fashion House Showroom Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Brand Values / Philosophy Grid */}
      <section className="py-16 bg-[#F5F5F0] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E44D26] font-bold">
              The Verma Promise
            </span>
            <h3 className="font-serif-luxury text-3xl font-semibold text-[#1A1A1A] mt-2">
              Our Philosophy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Uncompromising Quality */}
            <div className="bg-[#FDFCFB] p-8 rounded-none border border-[#1A1A1A]/10 text-center flex flex-col items-center">
              <div className="p-3 bg-[#F5F5F0] rounded-none text-[#E44D26] border border-[#1A1A1A]/10 mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-lg font-semibold text-[#1A1A1A]">
                Uncompromising Quality
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed">
                We source only the finest handloom silks, authentic linens, and premium brocades. Every stitch is monitored to ensure perfection.
              </p>
            </div>

            {/* Bespoke Service */}
            <div className="bg-[#FDFCFB] p-8 rounded-none border border-[#1A1A1A]/10 text-center flex flex-col items-center">
              <div className="p-3 bg-[#F5F5F0] rounded-none text-[#E44D26] border border-[#1A1A1A]/10 mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-lg font-semibold text-[#1A1A1A]">
                Bespoke Service
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed">
                Our concierge approach means your showroom visit is entirely personalized. We customize designs to express your exact identity.
              </p>
            </div>

            {/* Community Trust */}
            <div className="bg-[#FDFCFB] p-8 rounded-none border border-[#1A1A1A]/10 text-center flex flex-col items-center">
              <div className="p-3 bg-[#F5F5F0] rounded-none text-[#E44D26] border border-[#1A1A1A]/10 mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-lg font-semibold text-[#1A1A1A]">
                Community Trust
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed">
                Over 12 years, we have grown alongside Raipur's distinguished families, becoming a trusted generational partner in style.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Meet the Artisans / Craft Callout (FR-008, custom process) */}
      <section className="relative py-24 overflow-hidden bg-[#1A1A1A] text-white">
        
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=1200"
            alt="Hand embroidery craftsmanship"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E44D26] font-bold">
            Meet the Artisans
          </span>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-semibold tracking-wide text-white">
            The Verma Legacy
          </h3>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            The true essence of Verma Fashion House lies in the hands of our master weavers and tailors. Many of our artisans hail from lineages that have perfected their craft over generations. By intertwining their ancient techniques with contemporary design sensibilities, we create garments that transcend fleeting trends. It is a legacy built on patience, precision, and profound respect for the loom.
          </p>
          <div className="pt-6">
            <button
              onClick={onBrowseProducts}
              className="inline-flex items-center space-x-2 bg-[#E44D26] hover:bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-widest py-3.5 px-8 rounded-none transition-all duration-300"
            >
              <span>Explore the Craft</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
