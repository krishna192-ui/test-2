import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message details are required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Please provide a more detailed inquiry (minimum 10 characters)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate premium backend ingestion API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact-section" className="py-16 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div id="contact-header" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E44D26] font-bold flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E44D26]" />
            Get in Touch
          </span>
          <h2 className="font-serif-luxury text-4xl font-semibold text-[#1A1A1A] tracking-tight mt-2">
            Visit Our Showroom
          </h2>
          <p className="text-sm text-[#1A1A1A]/70 mt-3 leading-relaxed">
            Visit our boutique on MG Road, Raipur, or write to our design specialists to start designing your bespoke festive attire today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Inquiry Form (Left 6 Columns) */}
          <div className="lg:col-span-6 bg-[#FDFCFB] border border-[#1A1A1A]/10 p-8 rounded-none">
            
            <h3 className="font-serif-luxury text-xl font-semibold text-[#1A1A1A] mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 text-[#E44D26] mr-2.5" />
              Send a Message
            </h3>

            {isSubmitted ? (
              <div id="contact-success-state" className="text-center py-12 space-y-4 animate-fade-in">
                <div className="inline-flex p-3 bg-emerald-50 rounded-none text-emerald-600 border border-emerald-100 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-xl font-semibold text-[#1A1A1A]">
                  Inquiry Sent Successfully
                </h4>
                <p className="text-xs text-[#1A1A1A]/70 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Verma Fashion House. Our bespoke concierge team will review your inquiry and reach out within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#F5F5F0] hover:bg-[#EAE8E4] text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold rounded-none border border-[#1A1A1A]/15 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name Input */}
                <div className="space-y-1">
                  <label htmlFor="form-name" className="text-xs font-semibold text-[#1A1A1A]/75 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#1A1A1A]/15 rounded-none text-sm focus:outline-none focus:border-[#E44D26] focus:ring-1 focus:ring-[#E44D26]"
                  />
                  {errors.name && <p className="text-red-600 text-xs font-medium">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label htmlFor="form-email" className="text-xs font-semibold text-[#1A1A1A]/75 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#1A1A1A]/15 rounded-none text-sm focus:outline-none focus:border-[#E44D26] focus:ring-1 focus:ring-[#E44D26]"
                  />
                  {errors.email && <p className="text-red-600 text-xs font-medium">{errors.email}</p>}
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label htmlFor="form-message" className="text-xs font-semibold text-[#1A1A1A]/75 uppercase tracking-wider">
                    Your Inquiry Details
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the occasion, preferred garments, or custom tailoring questions..."
                    className="w-full px-4 py-3 bg-[#FDFCFB] border border-[#1A1A1A]/15 rounded-none text-sm focus:outline-none focus:border-[#E44D26] focus:ring-1 focus:ring-[#E44D26]"
                  />
                  {errors.message && <p className="text-red-600 text-xs font-medium">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="form-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#E44D26] hover:bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-semibold rounded-none transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Details...</span>
                  ) : (
                    <>
                      <span>Transmit Showroom Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Map & Showroom Information (Right 6 Columns) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Showroom Details */}
            <div className="bg-[#FDFCFB] border border-[#1A1A1A]/10 p-8 rounded-none grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-stone-400">
                  <MapPin className="w-4.5 h-4.5 text-[#E44D26]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/70">Address</span>
                </div>
                <p className="text-xs text-[#1A1A1A] font-light leading-relaxed">
                  MG Road, Raipur,<br />
                  Chhattisgarh, 492001<br />
                  India
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-stone-400">
                  <Clock className="w-4.5 h-4.5 text-[#E44D26]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/70">Boutique Hours</span>
                </div>
                <p className="text-xs text-[#1A1A1A] font-light leading-relaxed">
                  Monday – Saturday:<br />
                  10:00 AM – 9:00 PM<br />
                  <span className="text-[#E44D26] font-semibold">Sunday: Closed</span>
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10 sm:col-span-2">
                <div className="flex items-center space-x-2 text-stone-400">
                  <Phone className="w-4.5 h-4.5 text-[#E44D26]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/70">Direct Contacts</span>
                </div>
                <p className="text-xs text-[#1A1A1A] font-light leading-relaxed flex flex-col gap-1.5">
                  <span>📞 Phone: <a href="tel:+919876543210" className="hover:text-[#E44D26] font-medium">+91 98765 43210</a></span>
                  <span>✉️ Email: <a href="mailto:info@vermafashion.com" className="hover:text-[#E44D26] font-medium">info@vermafashion.com</a></span>
                </p>
              </div>

            </div>

            {/* Embedded Location Map with Marker & Fallback Map Link (FR-006) */}
            <div id="showroom-interactive-map" className="relative rounded-none overflow-hidden aspect-[16/9] border border-[#1A1A1A]/10 bg-[#EAE8E4] flex items-center justify-center text-center p-6 flex-grow">
              
              {/* Fallback clean visual layout of map if map API fails / mock visual representing map layout */}
              <div className="absolute inset-0 z-0 bg-[#EAE8E4]">
                {/* Beautiful custom vector map representing the boutique block */}
                <div className="w-full h-full opacity-60 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-center items-center">
                  <div className="w-24 h-24 bg-[#E44D26]/10 rounded-none absolute animate-ping duration-1000 opacity-20" />
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-none flex items-center justify-center text-white relative z-10">
                    <MapPin className="w-6 h-6 text-[#E44D26]" />
                  </div>
                  <div className="mt-4 relative z-10 bg-[#FDFCFB] p-4 rounded-none border border-[#1A1A1A]/10 max-w-xs">
                    <h4 className="font-serif-luxury font-semibold text-xs text-[#1A1A1A]">Verma Fashion House</h4>
                    <p className="text-[10px] text-[#1A1A1A]/60 mt-1">MG Road, Raipur (Chhattisgarh)</p>
                  </div>
                </div>
              </div>

              {/* Get Directions overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <a
                  id="map-directions-link"
                  href="https://maps.google.com/?q=MG+Road,+Raipur,+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#1A1A1A] hover:bg-[#E44D26] text-white py-3 px-4 rounded-none text-xs uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  <span>Get Navigation Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E44D26]" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
