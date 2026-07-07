import React, { useState, useEffect } from 'react';
import { ArrowLeft, MessageCircle, MapPin, Calendar, Heart, Shield, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetails({ product, onBack }: ProductDetailsProps) {
  const [activeImage, setActiveImage] = useState(product.image);

  // Sync active image if product changes
  useEffect(() => {
    setActiveImage(product.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const whatsappInquiryText = `Hello Verma Fashion House, I saw your spectacular "${product.name}" (ID: ${product.id}) in your online showroom and would like to coordinate a custom sizing appointment in Raipur. Please let me know the details!`;

  return (
    <article id="product-detail-view" className="py-12 bg-[#FDFCFB] transition-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button / Navigation */}
        <button
          id="back-to-catalog-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-[#1A1A1A]/70 hover:text-[#E44D26] text-xs uppercase tracking-widest font-bold mb-8 transition-colors py-2 px-3 bg-[#F5F5F0] border border-[#1A1A1A]/5 rounded-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collections</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Images Section (Left 7 Columns on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary Large Image */}
            <div id="product-primary-image-container" className="aspect-[3/4] rounded-none overflow-hidden bg-[#F5F5F0] border border-[#1A1A1A]/10 relative group">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
              />
              <div className="absolute top-4 right-4 bg-[#1A1A1A] px-3 py-1.5 rounded-none text-[10px] font-bold uppercase tracking-widest text-white">
                Premium Atelier
              </div>
            </div>

            {/* Thumbnail Gallery (FR-008, can switch between active images) */}
            {product.additionalImages && product.additionalImages.length > 1 && (
              <div id="product-thumbnails-list" className="grid grid-cols-3 gap-2 sm:gap-4">
                {product.additionalImages.map((img, idx) => (
                  <button
                    key={idx}
                    id={`thumbnail-selector-${idx}`}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-none overflow-hidden border bg-[#F5F5F0] hover:opacity-100 transition-all ${
                      activeImage === img
                        ? 'border-[#E44D26] ring-1 ring-[#E44D26]'
                        : 'border-[#1A1A1A]/15 opacity-75'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} View ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Copywriting Section (Right 5 Columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Categories & tags */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#E44D26] font-bold flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E44D26]" />
                  {product.category}'s {product.style} Collection
                </span>
                <h1 id="product-main-title" className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-wide mt-2">
                  {product.name}
                </h1>
                <div className="mt-3 flex items-baseline space-x-2">
                  <span className="text-xl font-semibold font-mono text-[#E44D26]">
                    {product.priceRange || product.price}
                  </span>
                  <span className="text-xs text-[#1A1A1A]/55">
                    (Custom Made-to-Order range)
                  </span>
                </div>
              </div>

              {/* Description Copy */}
              <div className="border-t border-[#1A1A1A]/10 pt-6">
                <h3 className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-3">
                  Garment Story & Description
                </h3>
                <p id="product-story" className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Premium Specs Grid */}
              <div className="bg-[#F5F5F0] border border-[#1A1A1A]/10 rounded-none p-5 space-y-3 text-xs">
                <h3 className="uppercase tracking-widest text-[#1A1A1A]/50 font-bold text-[10px] pb-2 border-b border-[#1A1A1A]/10">
                  Atelier Specifications
                </h3>
                
                <div className="flex justify-between py-1 border-b border-[#1A1A1A]/5">
                  <span className="font-semibold text-[#1A1A1A]/60">Fabric Composition</span>
                  <span className="text-[#1A1A1A] font-medium">{product.fabric || 'Pure Premium Threadworks'}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#1A1A1A]/5">
                  <span className="font-semibold text-[#1A1A1A]/60">Artisan Technique</span>
                  <span className="text-[#1A1A1A] font-medium">{product.technique || 'Hand-embroidered Masterwork'}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#1A1A1A]/5">
                  <span className="font-semibold text-[#1A1A1A]/60">Care Instructions</span>
                  <span className="text-[#1A1A1A] font-medium">{product.care || 'Dry Clean Only'}</span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="font-semibold text-[#1A1A1A]/60">Tailoring Timeline</span>
                  <span className="text-[#1A1A1A] font-medium">{product.delivery || 'Standard Delivery'}</span>
                </div>

              </div>

            </div>

            {/* Call to Actions (Inquire WhatsApp and Store directions) */}
            <div id="product-cta-container" className="mt-10 pt-6 border-t border-[#1A1A1A]/10 space-y-4">
              
              <div className="flex items-center space-x-2 text-[#1A1A1A]/60 text-xs font-medium">
                <Shield className="w-4 h-4 text-[#E44D26]" />
                <span>Genuine Indian heritage fabric certified in Raipur store.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* WhatsApp Chat trigger */}
                <a
                  id="product-whatsapp-inquire-btn"
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappInquiryText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#E44D26] hover:bg-[#1A1A1A] text-white py-4 px-6 rounded-none text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Inquire WhatsApp</span>
                </a>

                {/* Visit Showroom / Location hook */}
                <a
                  id="product-directions-btn"
                  href="https://maps.google.com/?q=MG+Road,+Raipur,+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#1A1A1A] hover:bg-[#333333] text-white py-4 px-6 rounded-none text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 text-[#E44D26]" />
                  <span>Visit Store to Try On</span>
                </a>

              </div>

              {/* Secure Booking Guarantee */}
              <p className="text-[10px] text-[#1A1A1A]/40 text-center italic">
                *Pricing varies according to custom sizing, selected borders, and lining fabric.
              </p>

            </div>

          </div>

        </div>

      </div>
    </article>
  );
}
