import React, { useEffect, useState } from 'react';
import { Award, Users, ShieldCheck, Heart } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  targetNumber: number;
  suffix: string;
  label: string;
  subtitle: string;
}

function StatItem({ icon, targetNumber, suffix, label, subtitle }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetNumber / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-[#FDFCFB] border border-[#1A1A1A]/10 rounded-none transition-all duration-300">
      <div className="p-3.5 bg-[#F5F5F0] rounded-none text-[#E44D26] mb-4 border border-[#1A1A1A]/10">
        {icon}
      </div>
      <div className="font-serif-luxury text-4xl font-semibold tracking-tight text-[#1A1A1A] flex items-baseline">
        <span>{count.toLocaleString()}</span>
        <span className="text-[#E44D26] ml-0.5">{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-[0.15em] text-[#1A1A1A]/80 font-bold mt-2">
        {label}
      </div>
      <div className="text-xs text-[#1A1A1A]/50 mt-1">
        {subtitle}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats-section" className="py-16 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          <StatItem
            icon={<Award className="w-6 h-6" />}
            targetNumber={12}
            suffix="+"
            label="Years of Heritage"
            subtitle="Providing luxury tailoring in Raipur since 2014"
          />

          <StatItem
            icon={<Users className="w-6 h-6" />}
            targetNumber={10000}
            suffix="+"
            label="Happy Customers"
            subtitle="Trusted by local families & magnificent brides"
          />

          <StatItem
            icon={<Heart className="w-6 h-6" />}
            targetNumber={50}
            suffix="+"
            label="Premium Brands & Styles"
            subtitle="Exquisite collections handpicked by master tailors"
          />

        </div>
      </div>
    </section>
  );
}
