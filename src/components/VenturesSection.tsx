import { useState } from "react";
import { VENTURES } from "../data";
import { Venture } from "../types";
import { 
  Building2, 
  Layers, 
  Binary, 
  Compass, 
  Target, 
  Activity, 
  Briefcase,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function VenturesSection() {
  const [activeVenture, setActiveVenture] = useState<Venture>(VENTURES[0]);

  // Icon selector based on venture id mapping to steel blue
  const getVentureIcon = (id: string, size = 20) => {
    switch (id) {
      case "smarkitals-strategist":
        return <Building2 size={size} className="text-[#5F7082]" />;
      case "smarkitals-technologies":
        return <Binary size={size} className="text-[#5F7082]" />;
      case "merceton":
        return <Layers size={size} className="text-[#5F7082]" />;
      case "bizpulse":
        return <Activity size={size} className="text-[#5F7082]" />;
      default:
        return <Briefcase size={size} className="text-[#5F7082]" />;
    }
  };

  return (
    <section id="ventures" className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]">
      {/* Background vectors */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading Editorial */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">CORPORATE PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            The Ventures
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" />
        </div>

        {/* Brand visual showcase with split columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Navigation/Toggle Column - 4 columns */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 bg-[#111827] border border-white/[0.04] rounded-md mb-2">
              <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase block font-semibold">CONGLOMERATE HQ</span>
              <p className="text-xs text-[#CBD5E1] font-sans mt-2.5 leading-relaxed">
                Sanket Kulshrestha directs Smarkitals Group of enterprises to unify regulatory integrity with next-gen business execution.
              </p>
            </div>

            {VENTURES.map((venture) => {
              const isActive = activeVenture.id === venture.id;
              return (
                <button
                  key={venture.id}
                  onClick={() => setActiveVenture(venture)}
                  className={`text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#5F7082]/[0.08] border-[#5F7082]/40"
                      : "bg-[#111827]/80 border-white/[0.03] hover:border-[#5F7082]/20 hover:bg-[#111827]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded transition-colors ${
                      isActive ? "bg-[#5F7082]/15" : "bg-white/[0.02] group-hover:bg-[#5F7082]/10"
                    }`}>
                      {getVentureIcon(venture.id, 18)}
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-sans font-bold text-sm tracking-wide ${isActive ? "text-white" : "text-[#94A3B8] group-hover:text-white"}`}>
                        {venture.name}
                      </h3>
                      <span className="font-mono text-[8px] text-[#64748B] tracking-wider uppercase block mt-0.5">
                        {venture.tagline}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={14} className={`text-[#64748B] transition-all ${
                    isActive ? "translate-x-1 text-[#5F7082]" : ""
                  }`} />
                </button>
              );
            })}

            {/* Inherent brand artwork link (Sanket as founder portrait) */}
            <div className="p-1 rounded bg-[#111827] mt-4 relative overflow-hidden aspect-[4/3] border border-white/[0.04]">
              <img
                src="/input_file_4.png"
                alt="Sanket Kulshrestha founder and operator"
                className="w-full h-full object-cover rounded opacity-35 filter contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B101A] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 flex flex-col pointer-events-none z-10">
                <span className="font-sans text-[10px] font-bold text-[#F8FAFC] tracking-wider">SANKET KULSHRESTHA</span>
                <span className="font-mono text-[8px] text-[#94A3B8] tracking-widest mt-0.5">FOUNDER &amp; MANAGING PARTNER</span>
              </div>
            </div>
          </div>

          {/* Focal details panel - 8 columns */}
          <div className="col-span-1 lg:col-span-8 flex flex-col justify-between p-8 md:p-10 bg-[#111827] border border-white/[0.04] rounded-xl relative overflow-hidden">
            
            {/* Top accent label */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[8.5px] text-[#5F7082]/50 tracking-widest uppercase select-none font-bold">
              SMARKITALS GROUP // {activeVenture.name.toUpperCase()}
            </div>

            <div className="relative z-10">
              
              {/* Header inside report panel */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-[#5F7082]/10 rounded-lg text-[#5F7082] shrink-0">
                  {getVentureIcon(activeVenture.id, 24)}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#F8FAFC] tracking-wide flex items-center gap-2">
                    {activeVenture.name}
                  </h3>
                  <p className="text-xs text-[#5F7082] font-mono tracking-widest uppercase mt-0.5">
                    {activeVenture.tagline}
                  </p>
                </div>
              </div>

              {/* Tagline sentence */}
              <p className="font-serif text-lg text-[#CBD5E1] font-light leading-relaxed mt-8 border-l border-[#5F7082]/30 pl-5 italic">
                &ldquo;{activeVenture.mission}&rdquo;
              </p>

              {/* Taxonomy details blocks in deep matte card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 p-6 rounded bg-[#0B101A]/60 border border-white/[0.02]">
                
                {/* Purpose Block */}
                <div className="flex gap-4">
                  <div className="p-1.5 rounded bg-white/[0.01] text-[#5F7082] shrink-0 h-fit mt-0.5">
                    <Target size={14} />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold">THE Purpose</h4>
                    <p className="text-xs text-[#CBD5E1] font-sans mt-1.5 leading-relaxed">
                      {activeVenture.purpose}
                    </p>
                  </div>
                </div>

                {/* Current Focus Block */}
                <div className="flex gap-4">
                  <div className="p-1.5 rounded bg-white/[0.01] text-[#5F7082] shrink-0 h-fit mt-0.5">
                    <Compass size={14} />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold">Current Focus</h4>
                    <p className="text-xs text-[#CBD5E1] font-sans mt-1.5 leading-relaxed">
                      {activeVenture.currentFocus}
                    </p>
                  </div>
                </div>

              </div>

              {/* Deep future vision block */}
              <div className="mt-6 flex gap-4 p-5 bg-[#5F7082]/[0.01] border border-[#5F7082]/20 rounded">
                <div className="p-1.5 rounded bg-[#5F7082]/10 text-[#5F7082] shrink-0 h-fit mt-0.5">
                  <Compass size={14} />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-[#5F7082] tracking-widest uppercase font-bold">Future Vision &amp; Scale</h4>
                  <p className="text-xs text-[#CBD5E1] font-sans mt-1.5 leading-relaxed">
                    {activeVenture.futureVision}
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom panel visualizer / call to action */}
            <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center sm:justify-between gap-4">
              <span className="font-mono text-[8.5px] text-[#64748B] tracking-widest uppercase font-bold">
                &copy; SMARKITALS HOLDINGS PVT. LTD. ALL REGISTERED RIGHTS RESERVED.
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2 hover:bg-[#5F7082]/10 hover:text-white hover:border-[#5F7082] text-xs text-[#5F7082] font-mono tracking-widest uppercase border border-[#5F7082]/30 rounded-sm transition-all duration-300"
              >
                <span>Engage Venture</span>
                <ExternalLink size={11} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
