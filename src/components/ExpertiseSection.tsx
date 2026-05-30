import { useState } from "react";
import { EXPERTISE } from "../data";
import { 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  Scale, 
  Cpu, 
  Coins, 
  Lightbulb, 
  Briefcase, 
  Award, 
  LineChart, 
  RefreshCw,
  Plus,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ExpertiseItem } from "../types";

// Icon mapping dictionary
const iconMap: { [key: string]: any } = {
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Zap,
  Scale,
  Cpu,
  Coins,
  Lightbulb,
  Briefcase,
  Award,
  LineChart,
  RefreshCw
};

export default function ExpertiseSection() {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem>(EXPERTISE[0]);

  return (
    <section id="expertise" className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]">
      {/* Visual background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#111827]/45 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="col-span-1 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#5F7082]" />
              <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">CAPABILITIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
              Pillars of Advisory
            </h2>
            <p className="mt-4 text-[#CBD5E1] font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
              Synthesizing procedural rigor with entrepreneurial action. Sanket Kulshrestha counsels enterprises across twelve core commercial disciplines to install structure and accelerate valuation.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-5 lg:text-right hidden lg:block">
            <span className="font-mono text-[9.5px] text-[#5F7082] uppercase tracking-widest font-bold">
              SELECT AN ELEMENT TO EXPLORE DETAILS
            </span>
          </div>
        </div>

        {/* Dynamic Split Layout: Interactive Deck on the left, active deep-dive on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Deck of 12 capability cards - 7 columns */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPERTISE.map((item) => {
              const IconComp = iconMap[item.iconName] || Plus;
              const isSelected = selectedExpertise.id === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedExpertise(item)}
                  className={`text-left p-6 rounded-lg border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? "bg-[#5F7082]/[0.05] border-[#5F7082]/40"
                      : "bg-[#111827]/90 border-white/[0.04] hover:border-[#5F7082]/20 hover:bg-[#111827]"
                  }`}
                >
                  {/* Selected indicator line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#5F7082] transition-transform duration-300 ${
                    isSelected ? "scale-y-100" : "scale-y-0"
                  }`} />

                  {/* Corner light dot */}
                  <div className={`absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isSelected ? "bg-[#5F7082]" : "bg-transparent group-hover:bg-[#5F7082]/30"
                  }`} />

                  <div className="flex gap-4 items-start">
                    <div className={`p-2.5 rounded transition-colors duration-300 ${
                      isSelected ? "bg-[#5F7082]/10 text-[#5F7082]" : "bg-[#0B101A] text-[#64748B] group-hover:text-[#5F7082] group-hover:bg-[#5F7082]/5"
                    }`}>
                      <IconComp size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-sans font-semibold text-sm tracking-wide transition-colors ${
                        isSelected ? "text-white" : "text-[#94A3B8] group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-[#CBD5E1] font-sans text-xs mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom reveal arrow */}
                  <div className="flex items-center gap-1.5 mt-4 text-[9px] font-mono tracking-widest text-[#64748B] group-hover:text-[#5F7082] uppercase select-none font-bold">
                    <span>EXPLORE PARAMETERS</span>
                    <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Focal presentation of Selected Capability Details - 5 columns */}
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-8 md:p-10 bg-[#111827] border border-white/[0.04] rounded-xl relative overflow-hidden shadow-md">
              
              {/* Luxury steel blue gradient top bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#5F7082]/40 via-[#5F7082]/25 to-transparent pointer-events-none" />
              
              {/* Watermark background icon (Steel Blue mapped) */}
              <div className="absolute -bottom-8 -right-8 opacity-[0.015] text-[#5F7082] select-none pointer-events-none">
                {selectedExpertise && (() => {
                  const IconComp = iconMap[selectedExpertise.iconName] || Plus;
                  return <IconComp size={220} />;
                })()}
              </div>

              <div className="relative z-10 flex flex-col">
                <div className="inline-flex items-center gap-2 text-[#5F7082] bg-[#5F7082]/5 px-3 py-1.5 rounded border border-[#5F7082]/15 max-w-fit mb-6">
                  {(() => {
                    const IconComp = iconMap[selectedExpertise.iconName] || Plus;
                    return <IconComp size={14} />;
                  })()}
                  <span className="font-mono text-[9px] tracking-widest uppercase font-bold">ACTIVE Pillar</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-[#F8FAFC] tracking-wide font-bold mb-3">
                  {selectedExpertise.title}
                </h3>
                <p className="text-[#CBD5E1] font-sans text-xs md:text-sm leading-relaxed mb-6">
                  {selectedExpertise.description}
                </p>

                <div className="h-px bg-white/[0.08] mb-6" />

                {/* Sub-parameters Checklist */}
                <h4 className="font-mono text-[9px] text-[#64748B] tracking-widest uppercase mb-4 font-extrabold flex items-center gap-2">
                  <Sparkles size={10} className="text-[#5F7082]" />
                  <span>ADVISORY METRICS &amp; TASKS</span>
                </h4>

                <ul className="space-y-4">
                  {selectedExpertise.details.map((detail, index) => (
                    <li key={index} className="flex gap-3 text-xs md:text-sm font-sans text-[#CBD5E1] items-start">
                      <span className="text-[#5F7082] font-mono text-xs font-semibold mt-0.5 select-none">
                        0{index + 1}.
                      </span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Action consultation link */}
                <a
                  href="#contact"
                  className="mt-8 py-3 px-6 rounded bg-[#5F7082] hover:bg-[#6D7E90] font-sans font-bold text-xs text-white tracking-widest uppercase text-center transition-colors duration-300"
                >
                  Consult on {selectedExpertise.title}
                </a>

                {/* Micro SLA note */}
                <span className="text-[9px] text-[#64748B] font-mono text-center mt-3.5 tracking-wider font-semibold">
                  AUDIT PARITY GUARANTEED UNDER SANKET KULSHRESTHA SERVICE DIRECTIVES
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
