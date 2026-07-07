import React, { useState, useEffect } from 'react';
import { Search, RotateCcw, Filter, ShoppingBag, Grid, List } from 'lucide-react';
import { Product, Category, Style } from '../types';
import { products } from '../data';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onSelectProduct: (productId: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductGrid({ onSelectProduct, onQuickView }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedStyles, setSelectedStyles] = useState<Style[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter application logic
  useEffect(() => {
    let result = products;

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Styles Filter
    if (selectedStyles.length > 0) {
      result = result.filter((p) => selectedStyles.includes(p.style));
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.style.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedStyles, searchQuery]);

  const toggleStyleFilter = (style: Style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedStyles([]);
    setSearchQuery('');
  };

  const categories: (Category | 'All')[] = ['All', 'Men', 'Women', 'Kids'];
  const styles: Style[] = ['Ethnic', 'Formal', 'Casual', 'Seasonal'];

  return (
    <section id="catalog-section" className="py-12 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div id="catalog-header" className="border-b border-[#1A1A1A]/10 pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E44D26] font-bold">
                Exquisite Verma Collection
              </span>
              <h2 className="font-serif-luxury text-4xl font-semibold text-[#1A1A1A] tracking-tight mt-1">
                Our Showroom Collections
              </h2>
              <p className="text-sm text-[#1A1A1A]/70 mt-2 max-w-xl">
                Browse our curated selection of premium handcrafted Indian heritage attire, bespoke custom suits, and festive legacy pieces.
              </p>
            </div>
            
            {/* Search Input Bar */}
            <div id="catalog-search-bar" className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection..."
                className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#1A1A1A]/15 rounded-none text-sm focus:outline-none focus:border-[#E44D26] focus:ring-1 focus:ring-[#E44D26]"
              />
              <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Filters Sidebar */}
          <aside id="desktop-filters-sidebar" className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8 bg-[#F5F5F0] border border-[#1A1A1A]/10 p-6 rounded-none">
              
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A] flex items-center">
                  <Filter className="w-3.5 h-3.5 text-[#E44D26] mr-2" />
                  Filter Catalog
                </h3>
                {(selectedCategory !== 'All' || selectedStyles.length > 0 || searchQuery !== '') && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[10px] uppercase tracking-wider font-bold text-[#E44D26] hover:text-[#1A1A1A] flex items-center space-x-1 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Categories Tabs */}
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/50">
                  Primary Categories
                </h4>
                <div className="flex flex-col space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      id={`filter-category-${cat}`}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left px-3 py-2 rounded-none text-sm transition-all font-medium ${
                        selectedCategory === cat
                          ? 'bg-[#1A1A1A] text-white font-semibold'
                          : 'text-[#1A1A1A]/70 hover:bg-[#EAE8E4] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {cat === 'All' ? 'All Collections' : `${cat}'s Wear`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Checkboxes */}
              <div className="space-y-3 pt-4 border-t border-[#1A1A1A]/10">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/50">
                  Style or Occasion
                </h4>
                <div className="space-y-2">
                  {styles.map((style) => (
                    <label
                      key={style}
                      id={`filter-style-label-${style}`}
                      className="flex items-center space-x-3 cursor-pointer text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStyles.includes(style)}
                        onChange={() => toggleStyleFilter(style)}
                        className="rounded-none border-[#1A1A1A]/20 text-[#E44D26] focus:ring-[#E44D26] h-4 w-4"
                      />
                      <span>{style} Wear</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Store Location note */}
              <div className="bg-[#EAE8E4] p-4 rounded-none border border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/60 leading-relaxed">
                📍 Visit our physical store at MG Road, Raipur to experience direct drape styling.
              </div>

            </div>
          </aside>

          {/* Mobile Filters Dropdown / Button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center space-x-2 bg-[#F5F5F0] border border-[#1A1A1A]/10 px-4 py-2.5 rounded-none text-sm font-bold text-[#1A1A1A] transition-colors hover:bg-[#EAE8E4]"
            >
              <Filter className="w-4 h-4 text-[#E44D26]" />
              <span>Filter Collections</span>
            </button>
            
            {(selectedCategory !== 'All' || selectedStyles.length > 0 || searchQuery !== '') && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#E44D26] hover:text-[#1A1A1A] flex items-center space-x-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          {/* Mobile Filter Options Panel */}
          {mobileFiltersOpen && (
            <div className="lg:hidden bg-[#F5F5F0] border border-[#1A1A1A]/10 p-5 rounded-none mb-6 space-y-4">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-2">Category</h4>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-none text-xs font-semibold transition-colors ${
                        selectedCategory === cat ? 'bg-[#1A1A1A] text-white' : 'bg-[#FDFCFB] border border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:bg-[#EAE8E4]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-2">Styles</h4>
                <div className="flex flex-wrap gap-1.5">
                  {styles.map((style) => (
                    <button
                      key={style}
                      onClick={() => toggleStyleFilter(style)}
                      className={`px-3 py-1.5 rounded-none text-xs font-semibold transition-colors ${
                        selectedStyles.includes(style) ? 'bg-[#1A1A1A] text-white' : 'bg-[#FDFCFB] border border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:bg-[#EAE8E4]'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid Content Area */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div id="products-grid-layout" className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={onSelectProduct}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            ) : (
              /* Beautiful Empty State */
              <div id="catalog-empty-state" className="flex flex-col items-center justify-center py-20 text-center bg-[#F5F5F0] rounded-none border border-dashed border-[#1A1A1A]/20 p-8">
                <div className="p-4 bg-[#FDFCFB] rounded-none border border-[#1A1A1A]/10 mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#1A1A1A]/30" />
                </div>
                <h3 className="font-serif-luxury text-xl font-semibold text-[#1A1A1A]">
                  No matching garments found
                </h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-2 max-w-sm">
                  We couldn't find any premium attire matching your current selection. Try resetting filters or using different keywords.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 px-6 py-2.5 bg-[#E44D26] hover:bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-semibold rounded-none transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
