import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface CollectionsShowcaseProps {
  onSelectCategory: (category: Category) => void;
}

export default function CollectionsShowcase({ onSelectCategory }: CollectionsShowcaseProps) {
  
  const collections = [
    {
      id: 'Men' as Category,
      title: "Men's Tailoring",
      subtitle: "Bespoke Royal Sherwanis & Suits",
      image: "/test-2/images/mens_sherwani_1783348635538.jpg",
      description: "Step into imperial grandeur with masterfully fitted premium fabrics, tailored specifically to fit your posture."
    },
    {
      id: 'Women' as Category,
      title: "Women's Couture",
      subtitle: "Heritage Bridal Lehengas & Silk Sarees",
      image: "/test-2/images/womens_saree_1783348649255.jpg",
      description: "Immerse yourself in rich Banarasi georgettes, royal raw silk, and detailed handwoven zari borders."
    },
    {
      id: 'Kids' as Category,
      title: "Kids Heritage",
      subtitle: "Festive Soft Kurtas & Traditional Suits",
      image: "/test-2/images/kids_traditional_1783348662154.jpg",
      description: "Delicate organic lining paired with bright mustard silks, designed for ultimate comfort and ceremony style."
    }
  ];

  return (
    <section id="collections-showcase-section" className="py-16 bg-[#FDFCFB] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#E44D26] font-bold flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E44D26]" />
            Curated Elegance
          </span>
          <h3 className="font-serif-luxury text-3xl font-semibold text-[#1A1A1A] mt-2">
            The Verma Standard Collections
          </h3>
          <p className="text-sm text-[#1A1A1A]/70 mt-3 leading-relaxed">
            Meticulously created garments designed for those who appreciate true craftsmanship, heritage, and pure drapes.
          </p>
        </div>

        {/* Collections Grid */}
        <div id="collections-showcase-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              id={`collection-card-${item.id}`}
              onClick={() => onSelectCategory(item.id)}
              className="group cursor-pointer bg-[#F5F5F0] border border-[#1A1A1A]/10 rounded-none overflow-hidden transition-luxury flex flex-col justify-between"
            >
              
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE8E4]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/20 transition-all duration-300" />
              </div>

              {/* Text Information */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#E44D26] font-bold">
                    Premium Range
                  </span>
                  <h4 className="font-serif-luxury text-xl font-semibold text-[#1A1A1A] mt-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#1A1A1A]/55 font-bold tracking-wider mt-1 uppercase">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-[#E44D26] hover:text-[#1A1A1A] font-semibold border-b border-transparent group-hover:border-[#E44D26] transition-all pb-0.5">
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
