import { PHILOSOPHY } from "../data";

export default function PhilosophySection() {
  return (
    <section className="relative min-h-[95vh] flex items-center py-24 md:py-32 bg-[#0B101A] overflow-hidden border-t border-b border-white/[0.04]">
      
      {/* Full-width cinematic image underlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/input_file_8.png"
          alt="Sanket Kulshrestha looking over modern office environment representing strategic vision"
          className="w-full h-full object-cover filter contrast-[1.05] grayscale brightness-[0.12]"
          referrerPolicy="no-referrer"
        />
        {/* Extreme dark professional gradients to blend the full-width image seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B101A] via-[#0B101A]/85 to-[#111827]/90 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#0B101A] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-[#0B101A] to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0B101A] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B101A] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Editorial header */}
        <div className="flex flex-col mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">FOUNDER PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            How I Think
          </h2>
          <p className="mt-4 text-[#CBD5E1] font-sans text-xs md:text-sm leading-relaxed">
            The core operating principles driving Smarkitals Group, directing our strategic risk modeling, automation projects, and advisory setups.
          </p>
        </div>

        {/* 6 core principles arranged in a professional matte-finish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PHILOSOPHY.map((item, index) => (
            <div
              key={item.title}
              className="p-8 rounded bg-[#111827]/85 border border-white/[0.04] hover:border-[#5F7082]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle top edge steel blue glow */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#5F7082]/20 to-transparent pointer-events-none" />
              
              {/* Index watermark */}
              <div className="absolute top-4 right-4 font-mono text-3xl font-bold text-white/[0.01] group-hover:text-[#5F7082]/[0.02] select-none transition-colors duration-300">
                0{index + 1}
              </div>

              <div>
                {/* Visual marker */}
                <div className="w-2 h-2 rounded-full bg-[#5F7082]/50 group-hover:bg-[#5F7082] relative transition-transform mb-5">
                  <div className="absolute inset-0 rounded-full bg-[#5F7082]/30 animate-pulse" />
                </div>

                <h3 className="font-serif text-lg font-bold tracking-wide text-[#F8FAFC] group-hover:text-[#5F7082] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-xs md:text-sm text-[#CBD5E1] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Axiom code metadata */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[9px] font-mono text-[#64748B] tracking-widest uppercase">
                PRINCIPLE // SK-{10 + index}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
