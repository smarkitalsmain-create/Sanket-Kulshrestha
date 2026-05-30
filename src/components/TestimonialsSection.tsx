import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] overflow-hidden">
      {/* Background visual detail */}

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Quote indicator mark */}
        <div className="inline-flex p-4 rounded-full bg-[#111827]/85 border border-[#5F7082]/25 text-[#5F7082] mb-8 select-none">
          <Quote size={20} className="transform rotate-180 animate-pulse" />
        </div>

        {/* Dynamic Typography slider */}
        <div className="min-h-[160px] flex items-center justify-center">
          <blockquote className="font-serif text-lg md:text-2xl tracking-wide leading-relaxed font-light">
            &ldquo; {activeTest.quote} &rdquo;
          </blockquote>
        </div>

        {/* Author / Corporate context */}
        <div className="mt-8 flex flex-col items-center">
          <span className="font-sans text-sm md:text-base font-bold text-white tracking-wider uppercase">
            {activeTest.author}
          </span>
          <span className="font-mono text-[9px] text-[#5F7082] tracking-widest uppercase mt-1">
            {activeTest.role}
          </span>
        </div>

        {/* Slide controls */}
        <div className="flex justify-center gap-4 mt-12 items-center">
          <button
            onClick={prevSlide}
            className="p-3 rounded bg-[#111827] hover:bg-[#5F7082] hover:text-white text-[#CBD5E1] border border-white/[0.03] hover:border-[#5F7082] transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          
          {/* Indicator dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "bg-[#5F7082] w-6" : "bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded bg-[#111827] hover:bg-[#5F7082] hover:text-white text-[#CBD5E1] border border-white/[0.03] hover:border-[#5F7082] transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
