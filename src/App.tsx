import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CollectionsShowcase from './components/CollectionsShowcase';
import BrandCarousel from './components/BrandCarousel';
import Testimonials from './components/Testimonials';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import GlobalSearch from './components/GlobalSearch';
import QuickViewModal from './components/QuickViewModal';
import { products } from './data';
import { Product, Category } from './types';
import { Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Quick navigation helpers
  const handleSelectProduct = (id: string) => {
    setActiveProductId(id);
    setCurrentTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: Category) => {
    setCurrentTab('products');
    setActiveProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // In our ProductGrid we can implement a custom category selection mechanism
  };

  const activeProduct = products.find((p) => p.id === activeProductId);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-gold/35 selection:text-stone-900">
      
      {/* Sticky Premium Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onSearchClick={() => setSearchOpen(true)}
        onProductSelect={setActiveProductId}
      />

      {/* Main Content Areas based on selected tab */}
      <main className="flex-grow">
        
        {currentTab === 'home' && (
          <div className="animate-fade-in">
            {/* Majestic Hero Cover */}
            <Hero onExploreClick={() => setCurrentTab('products')} />

            {/* Curated Elegance: Men's Tailoring, Women's Couture, Kids Heritage */}
            <CollectionsShowcase onSelectCategory={handleSelectCategory} />

            {/* Heritage Statistics Counter */}
            <Stats />

            {/* The Verma Standard: Why Choose Us Section */}
            <section className="py-16 bg-[#FDFCFB] border-b border-[#1A1A1A]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs uppercase tracking-widest text-[#E44D26] font-bold">
                    The Verma Difference
                  </span>
                  <h3 className="font-serif-luxury text-3xl font-semibold text-[#1A1A1A] mt-2">
                    Why Raipur Trusts Us
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  
                  <div className="p-6">
                    <span className="text-2xl mb-4 block" role="img" aria-label="heritage">⚜️</span>
                    <h4 className="font-serif-luxury text-lg font-semibold text-[#1A1A1A]">
                      Authentic Pure Silks
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed">
                      Sourced straight from certified handloom weavers across India, offering spectacular durability, colors, and majestic zari border embroidery.
                    </p>
                  </div>

                  <div className="p-6">
                    <span className="text-2xl mb-4 block" role="img" aria-label="scissors">✂️</span>
                    <h4 className="font-serif-luxury text-lg font-semibold text-[#1A1A1A]">
                      Bespoke Atelier Fitting
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed">
                      Our on-premises master tailors modify styles and drapes to perfectly contour your body, ensuring effortless confidence during ceremonies.
                    </p>
                  </div>

                  <div className="p-6">
                    <span className="text-2xl mb-4 block" role="img" aria-label="store">🏛️</span>
                    <h4 className="font-serif-luxury text-lg font-semibold text-[#1A1A1A]">
                      Generational Store Trust
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/70 mt-3 leading-relaxed">
                      Over 12 years of delivering customized bridal gowns, hand-stitched sherwanis, and fine traditional attire directly from Raipur's main hub.
                    </p>
                  </div>

                </div>

              </div>
            </section>

            {/* Infinite partner brand showcase */}
            <BrandCarousel />

            {/* Staggered testimonials loop */}
            <Testimonials />

            {/* CTA: Visit our showroom */}
            <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E44D26_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E44D26] font-bold">
                  Visit Raipur's Leading Couture House
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-semibold tracking-wide">
                  Experience Verma Luxury Live
                </h3>
                <p className="text-stone-350 text-sm max-w-xl mx-auto leading-relaxed font-light">
                  Touch the quality of raw silk, feel the weights of zardosi threads, and find your perfect outfit in our physical showroom.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setCurrentTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#E44D26] hover:bg-[#FDFCFB] text-white hover:text-[#1A1A1A] font-semibold text-xs uppercase tracking-widest rounded-none transition-all duration-300"
                  >
                    Get Store Location
                  </button>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Verma%20Fashion%20House,%20I%20am%20interested%20in%20arranging%20a%20personal%20tailoring%20fitting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-stone-950 border border-white/20 hover:border-white font-semibold text-xs uppercase tracking-widest rounded-none transition-all duration-300"
                  >
                    WhatsApp Appointment
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === 'about' && (
          <div className="animate-fade-in">
            <About onBrowseProducts={() => setCurrentTab('products')} />
          </div>
        )}

        {currentTab === 'products' && (
          <div className="animate-fade-in">
            {activeProductId && activeProduct ? (
              <ProductDetails
                product={activeProduct}
                onBack={() => setActiveProductId(null)}
              />
            ) : (
              <ProductGrid
                onSelectProduct={handleSelectProduct}
                onQuickView={setQuickViewProduct}
              />
            )}
          </div>
        )}

        {currentTab === 'gallery' && (
          <div className="animate-fade-in">
            <Gallery />
          </div>
        )}

        {currentTab === 'faq' && (
          <div className="animate-fade-in">
            <FAQ />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="animate-fade-in">
            <Contact />
          </div>
        )}

      </main>

      {/* Persistent Premium Footer */}
      <Footer setCurrentTab={setCurrentTab} onProductSelect={setActiveProductId} />

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingActions />

      {/* Global Search Overlay (FR-003) */}
      <GlobalSearch
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
        setCurrentTab={setCurrentTab}
      />

      {/* Quick View Modal Overlay (FR-005) */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onViewDetails={handleSelectProduct}
      />

    </div>
  );
}
