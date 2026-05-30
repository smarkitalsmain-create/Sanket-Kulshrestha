import { useEffect, useState } from "react";
import { METRICS } from "../data";
import { Activity, ShieldAlert, Award, Grid, HelpCircle } from "lucide-react";

export default function MetricsSection() {
  const [counts, setCounts] = useState<number[]>(METRICS.map(() => 0));

  // High-performance numerical ticking animation for counters
  useEffect(() => {
    const duration = 2000; // ms
    const steps = 50;
    const intervalTime = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const nextCounts = METRICS.map((item) => {
        const target = item.value;
        const progress = currentStep / steps;
        if (progress >= 1) return target;
        return Math.floor(target * progress);
      });
      
      setCounts(nextCounts);
      if (currentStep >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Icon mapping for aesthetics with steel blue color
  const getMetricIcon = (index: number) => {
    switch (index) {
      case 0: return <Award size={16} className="text-[#5F7082]" />;
      case 1: return <Activity size={16} className="text-[#5F7082]" />;
      case 2: return <ShieldAlert size={16} className="text-[#5F7082]" />;
      case 3: return <Grid size={16} className="text-[#5F7082]" />;
      default: return <HelpCircle size={16} className="text-[#5F7082]" />;
    }
  };

  return (
    <section className="relative py-16 bg-[#111827] border-b border-white/[0.04] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
        {METRICS.map((item, idx) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center p-6 bg-[#0B101A]/35 border border-white/[0.02] rounded hover:border-[#5F7082]/10 transition-colors"
          >
            {/* Round icon label */}
            <div className="p-2.5 bg-white/[0.02] rounded-full mb-4 inline-flex">
              {getMetricIcon(idx)}
            </div>

            {/* Custom counter display */}
            <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
              {counts[idx]}
              <span className="text-[#5F7082] font-sans font-semibold text-2xl ml-0.5 select-none md:text-3xl">
                {item.suffix}
              </span>
            </span>

            {/* Title label */}
            <h4 className="mt-2.5 font-mono text-[9px] text-[#64748B] tracking-widest uppercase font-bold">
              {item.label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
