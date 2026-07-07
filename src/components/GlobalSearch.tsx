import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  setCurrentTab: (tab: string) => void;
}

export default function GlobalSearch({ isOpen, onClose, onSelectProduct, setCurrentTab }: GlobalSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFiltered([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.style.toLowerCase().includes(query) ||
        (p.fabric && p.fabric.toLowerCase().includes(query))
    );
    setFiltered(results);
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div id="global-search-overlay" className="fixed inset-0 z-50 flex flex-col bg-[#1A1A1A]/80 backdrop-blur-md transition-all duration-300">
      
      {/* Modal Container */}
      <div id="search-modal-container" className="w-full max-w-3xl mx-auto mt-20 bg-[#FDFCFB] rounded-none shadow-2xl border border-[#1A1A1A]/10 overflow-hidden flex flex-col max-h-[70vh]">
        
        {/* Header Search Input */}
        <div className="flex items-center justify-between p-5 border-b border-[#1A1A1A]/10">
          <div className="flex items-center space-x-3 flex-grow">
            <Search className="w-5 h-5 text-[#1A1A1A]/40" />
            <input
              ref={inputRef}
              type="text"
              id="global-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bridal lehengas, sherwanis, fine silks..."
              className="w-full text-base bg-transparent border-none outline-none text-[#1A1A1A] placeholder-[#1A1A1A]/45 focus:ring-0"
            />
          </div>
          <button
            id="close-search-button"
            onClick={onClose}
            className="p-2 rounded-none hover:bg-[#F5F5F0] text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors border border-transparent hover:border-[#1A1A1A]/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Content */}
        <div className="flex-grow overflow-y-auto p-6">
          {searchQuery.trim() === '' ? (
            <div id="search-suggestions" className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 font-semibold flex items-center">
                <Sparkles className="w-3.5 h-3.5 text-[#E44D26] mr-1.5" />
                Popular Curated Collections
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Bridal Lehenga', 'Royal Sherwani', 'Zari Saree', 'Kids Ethnic', 'Bespoke Tailoring'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-4 py-2 bg-[#F5F5F0] hover:bg-[#EAE8E4] text-[#1A1A1A] rounded-none text-xs font-medium tracking-wide border border-[#1A1A1A]/5 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length > 0 ? (
            <div id="search-results-list" className="space-y-4">
              <span className="text-xs text-[#1A1A1A]/50 font-medium">
                Found {filtered.length} matching pieces
              </span>
              <div className="space-y-3">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    id={`search-result-${product.id}`}
                    onClick={() => {
                      onSelectProduct(product.id);
                      setCurrentTab('products');
                      onClose();
                    }}
                    className="flex items-center space-x-4 p-3 hover:bg-[#F5F5F0] rounded-none cursor-pointer transition-all duration-200 border border-transparent hover:border-[#1A1A1A]/10"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover rounded-none border border-[#1A1A1A]/10"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase tracking-widest text-[#E44D26] font-semibold">
                          {product.category} • {product.style}
                        </span>
                      </div>
                      <h3 className="font-serif-luxury font-medium text-[#1A1A1A] text-sm mt-0.5">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70 line-clamp-1 mt-0.5">
                        {product.description}
                      </p>
                    </div>
                    <div className="text-right flex items-center space-x-2">
                      <span className="text-xs font-mono font-medium text-[#E44D26]">
                        {product.price}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div id="search-no-results" className="text-center py-12">
              <p className="text-sm text-[#1A1A1A]/60 font-medium">No custom pieces match "{searchQuery}"</p>
              <button
                onClick={() => {
                  setCurrentTab('products');
                  onClose();
                }}
                className="mt-4 inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-[#E44D26] hover:text-[#1A1A1A] font-semibold border-b border-[#E44D26] hover:border-[#1A1A1A] pb-0.5 transition-all"
              >
                <span>Browse Full Catalog</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
