import { Product, Testimonial, GalleryItem, FAQItem } from './types';

export const products: Product[] = [
  {
    id: 'WOM-ETH-01',
    name: 'Crimson Zardosi Bridal Lehenga',
    category: 'Women',
    style: 'Ethnic',
    price: '₹ 1,45,000',
    priceRange: '₹ 1,45,000 - ₹ 1,85,000',
    description: 'An absolute masterpiece of heritage craftsmanship. This breathtaking crimson lehenga is meticulously hand-embroidered over 400 hours by master artisans. Featuring intricate Zardosi work, heavy gold sequin detailing, and traditional motifs that evoke the grandeur of Raipur\'s royal history.',
    image: '/src/assets/images/hero_banner_lehenga_1783348621538.jpg',
    additionalImages: [
      '/src/assets/images/hero_banner_lehenga_1783348621538.jpg',
      '/src/assets/images/craft_detail_1783348676434.jpg',
      '/src/assets/images/showroom_interior_1783348687036.jpg'
    ],
    fabric: 'Pure Raw Silk',
    technique: 'Hand-stitched Zardosi',
    care: 'Dry Clean Only',
    delivery: '4-6 Weeks (Made to Order)',
    featured: true
  },
  {
    id: 'MEN-ETH-01',
    name: 'Charcoal Tailored Royal Sherwani',
    category: 'Men',
    style: 'Formal',
    price: '₹ 32,500',
    description: 'A sophisticated deep charcoal sherwani crafted from premium silk-blend brocade. Features exquisite hand-carved brass buttons, clean contemporary lines, and a structured posture. Perfect for royal receptions and groom\'s select occasions.',
    image: '/src/assets/images/mens_sherwani_1783348635538.jpg',
    additionalImages: [
      '/src/assets/images/mens_sherwani_1783348635538.jpg',
      '/src/assets/images/showroom_interior_1783348687036.jpg'
    ],
    fabric: 'Silk-Blend Brocade',
    technique: 'Precision Tailoring & Zari Hand-loops',
    care: 'Dry Clean Only',
    delivery: '2-3 Weeks (Custom Fitted)',
    featured: true
  },
  {
    id: 'WOM-ETH-02',
    name: 'Emerald Zari Border Saree',
    category: 'Women',
    style: 'Ethnic',
    price: '₹ 18,900',
    description: 'A gorgeous Banarasi georgette saree in striking emerald green, displaying a magnificent real gold zari weave border. Perfect for festive celebrations and heritage gatherings, representing standard Indian elegance.',
    image: '/src/assets/images/womens_saree_1783348649255.jpg',
    additionalImages: [
      '/src/assets/images/womens_saree_1783348649255.jpg',
      '/src/assets/images/craft_detail_1783348676434.jpg'
    ],
    fabric: 'Banarasi Georgette',
    technique: 'Handloom Real Zari Weaving',
    care: 'Dry Clean Only',
    delivery: 'Immediate Delivery (Ready-to-Wear)',
    featured: true
  },
  {
    id: 'KID-ETH-01',
    name: 'Mustard Festive Kurta Set',
    category: 'Kids',
    style: 'Seasonal',
    price: '₹ 6,500',
    description: 'A delightful, bright mustard yellow traditional silk-blend kurta with pajamas designed for kids. Made with premium ultra-soft cotton lining to ensure comfort, elegance, and lightweight grace during festivals and family weddings.',
    image: '/src/assets/images/kids_traditional_1783348662154.jpg',
    additionalImages: [
      '/src/assets/images/kids_traditional_1783348662154.jpg'
    ],
    fabric: 'Premium Silk-Blend / Soft Cotton Lining',
    technique: 'Handcrafted Neck Embroidery',
    care: 'Gentle Hand Wash',
    delivery: 'Immediate Delivery (Ready-to-Wear)',
    featured: true
  },
  {
    id: 'WOM-FOR-01',
    name: 'Ivory Contemporary Gown',
    category: 'Women',
    style: 'Formal',
    price: '₹ 55,000',
    description: 'A stunning ivory contemporary cocktail gown featuring clean drapes and premium hand-embroidered bodice accents. Styled for modern receptions with a subtle royal trail that glides gracefully.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    fabric: 'Italian Crepe & Tulle',
    technique: 'Custom Draping & Beaded Embroidery',
    care: 'Dry Clean Only',
    delivery: '3-4 Weeks (Bespoke Fitting)',
    featured: false
  },
  {
    id: 'MEN-FOR-01',
    name: 'Royal Velvet Bandhgala Suit',
    category: 'Men',
    style: 'Formal',
    price: '₹ 28,500',
    description: 'An immaculate navy blue bandhgala tailored in premium royal velvet. Features customized buttons, precise double-vent structure, and a personalized satin lining to deliver a perfect, comfortable evening look.',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    fabric: 'Premium Royal Velvet',
    technique: 'Classic Indo-Western Structured Cut',
    care: 'Dry Clean Only',
    delivery: '2 Weeks (Tailored Fitted)',
    featured: false
  },
  {
    id: 'WOM-CAS-01',
    name: 'Pastel Mint Anarkali Set',
    category: 'Women',
    style: 'Casual',
    price: '₹ 12,200',
    description: 'A highly breathable pastel mint green Anarkali dress paired with floral block-printed dupatta. Effortlessly elegant and comfortable for daytime occasions or casual summer weddings.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    fabric: 'Organic Mulmul Cotton & Organza',
    technique: 'Hand Block Printing',
    care: 'Gentle Dry Wash',
    delivery: 'Immediate Delivery (Ready-to-Wear)',
    featured: false
  },
  {
    id: 'MEN-CAS-01',
    name: 'Linen Pastel Mint Kurta',
    category: 'Men',
    style: 'Casual',
    price: '₹ 4,800',
    description: 'A breathable linen kurta in a soothing pastel mint color. Perfectly designed for Raipur\'s summers, featuring coconut shell buttons, lightweight weave, and a relaxed, classic fit.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    fabric: '100% Pure Italian Linen',
    technique: 'Reinforced Tailoring',
    care: 'Machine Wash Cold',
    delivery: 'Immediate Delivery (Ready-to-Wear)',
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Shreya Pathak',
    role: 'Raipur Bride',
    content: 'Verma Fashion House made my dream wedding look come true! The attention to detail in their bespoke tailoring is unmatched. Every piece of zardosi on my lehenga felt like a work of art.',
    rating: 5
  },
  {
    id: '2',
    name: 'Rajesh Verma',
    role: 'Business Owner',
    content: 'I have been ordering my custom bandhgala and sherwanis here for years. They maintain the same outstanding fabric quality and pristine fitting that makes them Raipur\'s premier boutique.',
    rating: 5
  },
  {
    id: '3',
    name: 'Anjali Sharma',
    role: 'Mother of Two',
    content: 'A fantastic place for family shopping. The kids heritage ethnic wear is absolutely beautiful, and they used very soft organic lining so my children wore them comfortably all evening.',
    rating: 5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    image: '/src/assets/images/showroom_interior_1783348687036.jpg',
    title: 'Heritage Showroom Display',
    category: 'Store'
  },
  {
    id: 'g2',
    image: '/src/assets/images/hero_banner_lehenga_1783348621538.jpg',
    title: 'Crimson Couture Session',
    category: 'Couture'
  },
  {
    id: 'g3',
    image: '/src/assets/images/womens_saree_1783348649255.jpg',
    title: 'Intricate Saree Collection',
    category: 'Craft'
  },
  {
    id: 'g4',
    image: '/src/assets/images/craft_detail_1783348676434.jpg',
    title: 'Hands of the Artisans',
    category: 'Craft'
  },
  {
    id: 'g5',
    image: '/src/assets/images/mens_sherwani_1783348635538.jpg',
    title: 'Imperial Groom Showcase',
    category: 'Groom'
  },
  {
    id: 'g6',
    image: '/src/assets/images/kids_traditional_1783348662154.jpg',
    title: 'Joyful Kids Heritage',
    category: 'Kids'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What are your store hours and locations?',
    answer: 'Our flagship heritage showroom in Raipur is open Monday through Saturday from 10:00 AM to 9:00 PM. We are closed on Sundays to allow our staff to rest. We recommend booking an appointment for personalized styling sessions.'
  },
  {
    id: 'faq-02',
    question: 'What designer brands do you carry?',
    answer: 'We carry our own premium design line, handcrafted in-house by expert master tailors. Additionally, we collaborate with handloom weavers from Banaras, Chanderi, and Raipur to offer exclusive fabric selections.'
  },
  {
    id: 'faq-03',
    question: 'Do you offer bespoke tailoring services?',
    answer: 'Yes, we specialize in high-end bespoke tailoring. Our master tailors provide custom sizing, pattern adjustments, and fabric consultations to ensure a perfect fit for all our wedding, formal, and casual wear.'
  },
  {
    id: 'faq-04',
    question: 'What is your shipping and return policy?',
    answer: 'Since we are an informational showroom promoting physical store traffic, we do not ship standard online orders. For custom bridal orders, we offer hand-delivery options within Raipur and special shipping across India on request.'
  }
];

export const brandLogos = [
  { name: 'Heritage Silks', logo: '⚜️' },
  { name: 'Royal Weaves', logo: '👑' },
  { name: 'Raipur Artisans', logo: '🧵' },
  { name: 'Zari Couture', logo: '✨' },
  { name: 'Pure Linen Co.', logo: '🌿' }
];
