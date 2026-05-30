import { useState } from "react";
import { ShieldCheck } from "lucide-react";

interface FunctionalPillar {
  name: string;
  type: "FOUNDATION" | "ENGINE" | "STRATEGIC";
  description: string;
  kpis: string[];
  auditingVector: string;
}

const PILLARS: FunctionalPillar[] = [
  {
    name: "Strategy",
    type: "STRATEGIC",
    description: "Aligning long-term corporate goals with tactical capitalization and operational realities, mitigating systemic market changes.",
    kpis: ["CAGR Sustainability Index", "Corporate asset prioritization", "Competitive vulnerability rating"],
    auditingVector: "Market entry & cap table stress checks"
  },
  {
    name: "Operations",
    type: "ENGINE",
    description: "Constructing transparent, standardized, and repeatable corporate operating systems that reduce dependency on manual efforts.",
    kpis: ["Process cycle-time index", "Interdepartmental latency rate", "Automated SOP execution percentage"],
    auditingVector: "SOP bottle-neck inspection & mapping"
  },
  {
    name: "Governance",
    type: "STRATEGIC",
    description: "Designing corporate bylaws, board oversight channels, and shareholder agreements to institutionalize key decisions.",
    kpis: ["Board accountability ratings", "Contractual symmetry mapping", "Strategic conflict mitigation factor"],
    auditingVector: "Oversight and shareholder sync audits"
  },
  {
    name: "Technology",
    type: "ENGINE",
    description: "Auditing enterprise stack architectures and developing bespoke internal tools to automate repetitive processes.",
    kpis: ["Automated auditing checks frequency", "ERP integration synchronization index", "Systemic human-error reduction rate"],
    auditingVector: "Technology pipeline vulnerability review"
  },
  {
    name: "Finance",
    type: "ENGINE",
    description: "Structuring capital budgets, liquid reserves, and cashflow systems to ensure the enterprise is secure from market stress.",
    kpis: ["Working capital utilization speed", "Burn rate safety runway", "Liquidity indexing stress limit"],
    auditingVector: "Cashflow buffer & budget allocation audit"
  },
  {
    name: "Compliance",
    type: "FOUNDATION",
    description: "Installing robust, automated regulatory systems to handle licensing maps, taxes, and statutory audits seamlessly.",
    kpis: ["Statutory discrepancy incidence", "Tax efficiency index score", "Licensing audit readiness percentage"],
    auditingVector: "Continuous statutory ledger alignment reviews"
  },
  {
    name: "Risk",
    type: "FOUNDATION",
    description: "Identifying vulnerabilities inside company operations, technology stacks, and financial models before they can cause damage.",
    kpis: ["Risk register update compliance score", "Threat vector response speed", "Insurance portfolio efficiency margin"],
    auditingVector: "Vulnerability forecasting & threat audits"
  },
  {
    name: "Audit",
    type: "FOUNDATION",
    description: "Continuous and deep evaluation of internal accounting logs, financial records, and core procedures to prevent errors.",
    kpis: ["Double-entry variance checks percentage", "Transaction latency auditing rate", "Leakage and human-error mitigation rate"],
    auditingVector: "Continuous operational ledger auditing"
  }
];

export default function ImpactSection() {
  const [selectedPillar, setSelectedPillar] = useState<FunctionalPillar>(PILLARS[7]); // Defaults to Audit

  return (
    <section className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] overflow-hidden">
      {/* Background gradients */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">STRUCTURAL INDEX</span>
            <span className="w-10 h-px bg-[#5F7082]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4 max-w-3xl">
            Building Businesses Across Functions
          </h2>
          <p className="mt-4 text-[#CBD5E1] font-sans text-xs md:text-sm max-w-xl leading-relaxed">
            The core engine of Smarkitals advisory, coordinating institutional protection with process acceleration parameters.
          </p>
        </div>

        {/* Structural Graphic & Impact breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Concentric handle wheel on the left - 6 columns */}
          <div className="col-span-1 lg:col-span-6 flex items-center justify-center relative">
            
            {/* Main Interactive Concentric SVG Frame */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] shrink-0 select-none">
              
              {/* Outer Glow ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.02] bg-radial-gradient(transparent_40%,rgba(10,10,10,0.85)_100%) pointer-events-none" />
              
              {/* Decorative orbit line */}
              <div className="absolute inset-16 rounded-full border border-dashed border-white/5 pointer-events-none" />
              
              {/* Concentric center core labeled with selected pillar details */}
              <div className="absolute inset-[36%] rounded-full bg-[#111827] border border-[#5F7082]/20 flex flex-col items-center justify-center text-center p-3 z-30 shadow-md">
                <span className="font-mono text-[8px] text-[#5F7082] tracking-widest uppercase font-bold">ENGINE CORE</span>
                <span className="font-serif text-xs md:text-sm font-bold text-white tracking-wider mt-1 block truncate max-w-full">
                  {selectedPillar.name.toUpperCase()}
                </span>
                <span className="font-mono text-[7px] text-[#64748B] uppercase mt-0.5 tracking-wider font-bold">
                  {selectedPillar.type}
                </span>
              </div>

              {/* 8 clickable orbital handles */}
              {PILLARS.map((p, idx) => {
                // Arrange 8 icons at equal angles around the concentric wheel radius
                const angle = (idx * 360) / 8;
                const radians = (angle * Math.PI) / 180;
                // Coordinates offset from the absolute center
                const radius = 37; // radius in percentage
                const topVal = 50 + radius * Math.sin(radians);
                const leftVal = 50 + radius * Math.cos(radians);

                const isSelected = selectedPillar.name === p.name;

                return (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPillar(p)}
                    style={{
                      top: `${topVal}%`,
                      left: `${leftVal}%`,
                    }}
                    className={`absolute w-12 h-12 md:w-14 md:h-14 -mt-6 -ml-6 md:-mt-7 md:-ml-7 rounded-full border flex items-center justify-center transition-all duration-300 z-20 group relative cursor-pointer font-bold ${
                      isSelected
                        ? "bg-[#5F7082] text-white border-[#5F7082]/50 shadow-sm"
                        : "bg-[#111827] text-[#94A3B8] border-white/10 hover:border-[#5F7082]/40 hover:text-white"
                    }`}
                  >
                    {/* Character handle abbreviation */}
                    <div className="absolute font-sans text-[8.5px] select-none uppercase">
                      {p.name.substring(0, 3)}
                    </div>

                    {/* Small tag visible on hover over handle */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#111827] border border-white/10 text-[9px] font-mono tracking-wider text-[#5F7082] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-40 font-bold">
                      {p.name}
                    </span>
                  </button>
                );
              })}

              {/* Underlying visual connecting cross section */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 z-10 pointer-events-none" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 z-10 pointer-events-none" />

            </div>

          </div>

          {/* Impact deep-dive card on the right - 6 columns */}
          <div className="col-span-1 lg:col-span-6">
            <div className="p-8 md:p-10 bg-[#111827] border border-white/[0.04] rounded-lg transition-all duration-500 relative">
              {/* Top neon indicator strip */}
              <div className="absolute top-0 left-0 w-32 h-[3px] bg-[#5F7082] pointer-events-none" />

              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-[#5F7082] tracking-widest uppercase font-bold">
                    {selectedPillar.type} PILLAR
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] bg-white/5 px-2 py-0.5 rounded border border-white/5 font-semibold">
                    PROCESS 0{PILLARS.indexOf(selectedPillar) + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide font-bold mt-4">
                  {selectedPillar.name} Impact
                </h3>
                <p className="mt-3 text-[#CBD5E1] font-sans text-xs md:text-sm leading-relaxed">
                  {selectedPillar.description}
                </p>

                <div className="h-px bg-white/[0.08] my-6" />

                {/* KPI metrics list */}
                <h4 className="font-mono text-[9px] text-[#64748B] tracking-widest uppercase mb-3.5 font-bold">
                  GOVERNANCE METRICS &amp; KEY VARIABLES
                </h4>

                <ul className="space-y-3">
                  {selectedPillar.kpis.map((kpi, idx) => (
                    <li key={idx} className="flex gap-3 text-xs md:text-sm font-sans text-[#CBD5E1] items-center">
                      <div className="w-1.5 h-1.5 bg-[#5F7082] rounded-full shrink-0" />
                      <span>{kpi}</span>
                    </li>
                  ))}
                </ul>

                {/* Audit verification target */}
                <div className="mt-8 p-4 bg-[#0B101A]/60 border border-white/5 rounded flex gap-3 items-start">
                  <ShieldCheck size={16} className="text-[#5F7082] mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-mono text-[8.5px] text-[#64748B] tracking-widest font-bold uppercase">Auditable Pipeline Target</h5>
                    <p className="text-xs text-[#CBD5E1] font-sans mt-1 leading-normal">
                      {selectedPillar.auditingVector}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
