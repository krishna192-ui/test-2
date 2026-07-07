import React from 'react';
import { Eye, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onSelect, onQuickView }: ProductCardProps) {
  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-[#FDFCFB] rounded-none border border-[#1A1A1A]/10 overflow-hidden transition-luxury flex flex-col h-full"
    >
      {/* Image Container with Zoom hover effect */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#EAE8E4] cursor-pointer" onClick={() => onSelect(product.id)}>
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Style Tag Indicator */}
        <div className="absolute top-3 left-3 bg-[#FDFCFB] px-3 py-1 rounded-none text-[9px] font-bold uppercase tracking-[0.15em] text-[#E44D26] border border-[#1A1A1A]/10">
          {product.style}
        </div>

        {/* Hover overlay with Quick View trigger */}
        <div className="absolute inset-0 bg-[#1A1A1A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            id={`quickview-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-[#1A1A1A] hover:bg-[#E44D26] text-white p-3.5 rounded-none transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center"
            title="Quick View"
            aria-label={`Quick view of ${product.name}`}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-[9px] uppercase tracking-[0.15em] text-[#1A1A1A]/50 font-bold">
            {product.category} Ethnic Wear
          </span>
          <h3 
            onClick={() => onSelect(product.id)}
            className="font-serif-luxury text-base font-semibold text-[#1A1A1A] tracking-wide mt-1 cursor-pointer hover:text-[#E44D26] transition-colors line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#1A1A1A]/70 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-4 mt-4">
          <span className="text-[10px] uppercase tracking-[0.1em] text-[#1A1A1A]/40 font-semibold">
            Estimated price
          </span>
          <div className="text-right">
            <span className="text-sm font-bold font-mono text-[#E44D26]">
              {product.price}
            </span>
          </div>
        </div>

        {/* View Details Button */}
        <button
          id={`viewdetails-btn-${product.id}`}
          onClick={() => onSelect(product.id)}
          className="w-full mt-4 py-3 bg-[#EAE8E4] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white text-xs uppercase tracking-[0.15em] font-bold rounded-none border border-[#1A1A1A]/5 group-hover:border-transparent flex items-center justify-center space-x-1.5 transition-all duration-300"
        >
          <span>View Detailed Showcase</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
