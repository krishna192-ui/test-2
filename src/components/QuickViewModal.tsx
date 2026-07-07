import React from 'react';
import { X, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onViewDetails: (productId: string) => void;
}

export default function QuickViewModal({ product, onClose, onViewDetails }: QuickViewModalProps) {
  if (!product) return null;

  const whatsappText = `Hello Verma Fashion House, I saw the "${product.name}" (ID: ${product.id}) on your Digital Showroom and would like to inquire about its custom fitting, fabric quality, and price range.`;

  return (
    <div id="quickview-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-sm">
      <div 
        id="quickview-modal"
        className="relative bg-[#FDFCFB] rounded-none max-w-3xl w-full overflow-hidden shadow-2xl border border-[#1A1A1A]/10 flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#FDFCFB] text-[#1A1A1A] hover:bg-[#EAE8E4] transition-colors border border-[#1A1A1A]/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Section */}
        <div className="w-full md:w-1/2 relative bg-[#EAE8E4] aspect-square md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#E44D26] font-bold">
              {product.category} • {product.style} Collection
            </span>
            <h2 className="font-serif-luxury text-2xl font-semibold text-[#1A1A1A] tracking-wide mt-1.5">
              {product.name}
            </h2>
            
            <div className="mt-3 flex items-baseline space-x-2">
              <span className="text-lg font-semibold font-mono text-[#E44D26]">
                {product.priceRange || product.price}
              </span>
            </div>

            <p className="text-xs text-[#1A1A1A]/70 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Specs */}
            <div className="mt-6 space-y-2 border-t border-[#1A1A1A]/10 pt-4 text-xs text-[#1A1A1A]/80">
              {product.fabric && (
                <div className="flex justify-between">
                  <span className="font-medium text-[#1A1A1A]/50">Fabric</span>
                  <span>{product.fabric}</span>
                </div>
              )}
              {product.technique && (
                <div className="flex justify-between">
                  <span className="font-medium text-[#1A1A1A]/50">Craft Technique</span>
                  <span>{product.technique}</span>
                </div>
              )}
              {product.care && (
                <div className="flex justify-between">
                  <span className="font-medium text-[#1A1A1A]/50">Care Instructions</span>
                  <span>{product.care}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {/* WhatsApp Inquiry Button */}
            <a
              id="quickview-whatsapp-inquire"
              href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full bg-[#E44D26] hover:bg-[#1A1A1A] text-white py-3.5 px-4 rounded-none text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Inquire on WhatsApp</span>
            </a>

            {/* View Full Specs Link */}
            <button
              id="quickview-full-details"
              onClick={() => {
                onViewDetails(product.id);
                onClose();
              }}
              className="flex items-center justify-center space-x-2 w-full bg-[#EAE8E4] border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#F5F5F0] py-3.5 px-4 rounded-none text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              <span>View Full Details & Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
