import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Only testimonials with a named company and a recorded source are published
const PUBLISHABLE = TESTIMONIALS.filter((t) => t.author && t.company && t.source);

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (PUBLISHABLE.length === 0) return null;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? PUBLISHABLE.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === PUBLISHABLE.length - 1 ? 0 : prev + 1));
  };

  const activeTest = PUBLISHABLE[activeIndex];

  return (
    <section
      aria-label="Testimonials"
      className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex p-4 rounded-full bg-[#111827]/85 border border-[#5F7082]/25 text-[#8A96A6] mb-8">
          <Quote size={20} className="transform rotate-180" aria-hidden="true" />
        </div>

        <figure aria-live="polite">
          <blockquote className="min-h-[160px] flex items-center justify-center font-serif text-lg md:text-2xl tracking-wide leading-relaxed font-light">
            &ldquo;{activeTest.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center">
            <span className="font-sans text-sm md:text-base font-bold text-white tracking-wider uppercase">
              {activeTest.author}
            </span>
            <span className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase mt-1">
              {activeTest.role}, {activeTest.company}
            </span>
          </figcaption>
        </figure>

        {PUBLISHABLE.length > 1 && (
          <div className="flex justify-center gap-4 mt-12 items-center">
            <button
              onClick={prevSlide}
              className="p-3 rounded bg-[#111827] hover:bg-[#5F7082] hover:text-white text-[#CBD5E1] border border-white/[0.03] hover:border-[#5F7082] transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {PUBLISHABLE.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex ? "bg-[#8A96A6] w-6" : "w-2 bg-white/20 hover:bg-white/30"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                  aria-current={idx === activeIndex}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded bg-[#111827] hover:bg-[#5F7082] hover:text-white text-[#CBD5E1] border border-white/[0.03] hover:border-[#5F7082] transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
