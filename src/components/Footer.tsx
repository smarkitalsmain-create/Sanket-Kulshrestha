import { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, Phone, Mail, ArrowUpCircle } from "lucide-react";

export default function Footer() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for the invisible bottom trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowEasterEgg(true);
        }
      },
      { threshold: 0.8 }
    );

    const currentTrigger = triggerRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] pt-20 pb-12 overflow-hidden z-20">
      
      {/* Decorative top backlight */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Main upper footer details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Signature Statement - 7 columns */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-4">
            <span className="font-serif text-lg tracking-wider font-extrabold text-[#F8FAFC]">
              SANKET KULSHRESTHA
            </span>
            <blockquote className="font-serif text-xl md:text-2xl font-light text-[#CBD5E1] leading-normal max-w-xl italic">
              &ldquo;Helping Businesses Build Strong Foundations For Sustainable Growth.&rdquo;
            </blockquote>
          </div>

          {/* Column 2: Social coordinates links - 5 columns */}
          <div className="col-span-1 md:col-span-5 flex flex-col md:items-end gap-6 text-left md:text-right">
            <div>
              <h4 className="font-mono text-[8.5px] text-[#64748B] tracking-widest uppercase font-bold mb-3">
                DIRECT CONTACT
              </h4>
              
              <div className="flex flex-wrap md:justify-end gap-3.5">
                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/sanketkulshrestha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#111827] hover:bg-[#5F7082] hover:text-white rounded border border-white/5 hover:border-[#5F7082] text-[#CBD5E1] transition-all flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold"
                  title="LinkedIn"
                >
                  <Linkedin size={14} />
                  <span className="text-[10px]">LinkedIn</span>
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/sanket.as_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#111827] hover:bg-[#5F7082] hover:text-white rounded border border-white/5 hover:border-[#5F7082] text-[#CBD5E1] transition-all flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold"
                  title="Instagram"
                >
                  <Instagram size={14} />
                  <span className="text-[10px]">Instagram</span>
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/918118880629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#111827] hover:bg-[#5F7082] hover:text-white rounded border border-white/5 hover:border-[#5F7082] text-[#CBD5E1] transition-all flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold"
                  title="WhatsApp"
                >
                  <Phone size={14} />
                  <span className="text-[10px]">WhatsApp</span>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:Sanket.kulshrestha@smarkitals.in"
                  className="p-3 bg-[#111827] hover:bg-[#5F7082] hover:text-white rounded border border-white/5 hover:border-[#5F7082] text-[#CBD5E1] transition-all flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold"
                  title="Direct Mail"
                >
                  <Mail size={14} />
                  <span className="text-[10px]">Email</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#5F7082] font-mono text-[10px] tracking-widest uppercase transition-all mt-2 cursor-pointer self-start md:self-auto"
            >
              <span>BACK TO TOP</span>
              <ArrowUpCircle size={14} />
            </button>
          </div>

        </div>

        {/* Dynamic Stewardship Statement (Revealed near page bottom) */}
        <div
          className={`border-t border-dashed border-[#5F7082]/20 py-8 text-center transition-all duration-700 ease-out origin-bottom ${
            showEasterEgg
              ? "opacity-100 translate-y-0 scale-y-100"
              : "opacity-0 translate-y-4 scale-y-90 pointer-events-none"
          }`}
        >
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <span className="font-mono text-[8.5px] text-[#5F7082] tracking-widest uppercase font-black mb-3">
              EXECUTIVE VISION &bull; STEWARDSHIP STATEMENT
            </span>
            <p className="font-serif text-base md:text-lg text-white font-medium italic tracking-wide leading-relaxed">
              &ldquo;Businesses are not built in spreadsheets. They are built through people, systems, and execution.&rdquo;
            </p>
            <div className="mt-4 flex flex-col gap-0.5 font-sans">
              <span className="text-[10px] text-[#5F7082] font-serif font-black tracking-widest uppercase">
                SIGNED,
              </span>
              <span className="text-sm font-serif font-semibold text-white tracking-widest uppercase mt-1">
                Sanket Kulshrestha
              </span>
            </div>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="h-px bg-white/[0.04]" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-[#64748B] text-[10px] font-mono tracking-wider">
          <span>
            &copy; {new Date().getFullYear()} SANKET KULSHRESTHA. Smarkitals Group. All Rights Reserved.
          </span>
          <span className="text-[#5F7082]/60 uppercase font-semibold">
            Advisory Roots Est. 1985 &bull; Built For The Next 40 Years
          </span>
        </div>

      </div>

      {/* Invisible Observer anchor tag at absolute footer bottom */}
      <div ref={triggerRef} className="absolute bottom-1.5 inset-x-0 h-4 pointer-events-none opacity-0" />
    </footer>
  );
}
