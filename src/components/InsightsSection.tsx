import { useState } from "react";
import { ARTICLES } from "../data";
import { Article } from "../types";
import { BookOpen, X, Clock, Calendar, ArrowUpRight, Share2 } from "lucide-react";

export default function InsightsSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Premium essay contents representing Sanket's deep strategic thinking
  const getArticleEssayContent = (id: string) => {
    switch (id) {
      case "art-1":
        return [
          "The commercial graveyard is littered with high-growth companies that outgrew their administrative systems. When a business scales rapidly without predefined structural rails, the velocity itself becomes its core liability. System leaks expand exponentially, vendor alignments break, and regulatory exposures multiply.",
          "Good corporate governance is not a set of boring boxes to check when preparing for an IPO. Governance is the proactive installation of reporting structures, board dynamics, and clear decision maps that enable a business to operate under heavy stress. In a founder-dependent startup, governance marks the precise point where the developer's child evolves into an enduring market institution.",
          "Our advisory model counsels fast-growth businesses to establish their board dynamics and risk parameters on day one. By locking down capitalization equity agreements, establishing clear internal financial gates, and defining strict corporate parameters, founders protect their cap table and pave the road for painless institutional fundraising."
        ];
      case "art-2":
        return [
          "To most corporate directors, internal audits are associated with painful documentation reviews and audit compliance checklists. This represents a colossal waste of intellectual capital. A strategic internal audit does not just check compliance—it acts as an aggressive profit and margins optimization engine.",
          "An advanced auditing system dissects transaction trails, employee accountability loops, and logistics bottlenecks. It looks at how capital behaves under operational stress. Why are cash reserves leaking in regional centers? Which department structures are bottlenecking product deployment? Let the data speak.",
          "Through custom audits, we have re-aligned operations for heavy manufacturing and e-commerce companies alike. By identifying redundant processes, automating administrative layers, and checking vendor contract performance, the accounting ledger transforms into an active strategic advisory playbook."
        ];
      case "art-3":
        return [
          "Digital transformation is often ruined by over-engineered software and consultants who don't understand the physical operation. Founders of traditional manufacturing and logistics companies are told they must scrap their legacy structures and completely rebuild. This is both expensive and unnecessary.",
          "Bespoke technology inside a traditional organization should be introduced as a silent automated gear, not a cultural explosion. It must adapt to existing professional habits while resolving manual friction behind the scenes. Its core objective is to automate transaction validation, coordinate logistics logs, and generate real-time metrics dashboards for decision-makers.",
          "Through Smarkitals Technologies, we specialize in constructing bespoke enterprise software layers that sit quietly on top of traditional workflows. Our builds are highly modular, lightweight, and focused purely on accelerating process throughput and removing human error."
        ];
      default:
        return [
          "An enterprise stands on its systemic handoffs. If your processes require constant manual intervention from the core founder, the business is intrinsically fragile. Building a sustainable company requires documenting workflows, setting up robust checklines, and automating admin logs.",
          "To build processes that endure, founders should implement high-density operational metrics. This includes identifying core department latency and auditing output parity daily. By installing automatic checklists, the enterprise scales seamlessly while preserving capital.",
          "Ultimately, long-term market dominance is won by organizations that treat their operational procedures as proprietary technology. Standardize, audit, and automate. That is the ultimate roadmap to enterprise equity."
        ];
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="insights" className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]">
      {/* Background radial soft light */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">ESSAYS &amp; INTELLECT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            Ideas Worth Building
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" />
        </div>

        {/* 3-Column Luxury Grid for Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="flex flex-col justify-between p-8 bg-[#111827] border border-white/[0.03] hover:border-[#5F7082]/25 rounded-md hover:bg-[#111827]/80 transition-all duration-300 group"
            >
              <div>
                {/* Meta block */}
                <div className="flex items-center justify-between text-[#64748B] font-mono text-[9px] tracking-widest uppercase">
                  <span className="text-[#5F7082] font-bold">{art.category}</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock size={10} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold tracking-wide text-[#F8FAFC] mt-5 group-hover:text-[#5F7082] transition-colors duration-300 leading-snug">
                  {art.title}
                </h3>
                <p className="mt-3.5 text-xs md:text-sm text-[#CBD5E1] leading-relaxed font-sans line-clamp-3">
                  {art.summary}
                </p>
              </div>

              {/* Read Essay Button */}
              <button
                onClick={() => {
                  setSelectedArticle(art);
                  setIsCopied(false);
                }}
                className="mt-8 pt-5 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[#94A3B8] group-hover:text-white transition-colors duration-300 w-full cursor-pointer font-bold"
              >
                <span>READ FULL ESSAY</span>
                <ArrowUpRight size={13} className="text-[#64748B] group-hover:text-[#5F7082] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Cinematic Essay Reader Modal Overlay */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-md">
            <div className="w-full max-w-4xl max-h-[90vh] bg-[#0B101A] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200">
              
              {/* Luxury top border accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#5F7082]/40 via-[#5F7082]/25 to-transparent pointer-events-none" />

              {/* Close controls */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#CBD5E1] hover:text-white transition-colors cursor-pointer z-50"
                aria-label="Close reader"
              >
                <X size={18} />
              </button>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 font-sans">
                
                {/* Meta details */}
                <div className="flex flex-wrap gap-4 items-center mb-6 text-[9px] font-mono tracking-widest text-[#64748B] uppercase">
                  <span className="text-[#5F7082] font-bold">{selectedArticle.category}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5"><Calendar size={11} /> {selectedArticle.date}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5"><Clock size={11} /> {selectedArticle.readTime}</span>
                </div>

                {/* Main Essay Title */}
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#F8FAFC] tracking-tight leading-tight mb-4">
                  {selectedArticle.title}
                </h2>
                <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/50 to-transparent w-48 mb-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Summary card */}
                  <div className="lg:col-span-4 p-5 rounded bg-[#111827] border border-white/[0.04]">
                    <span className="font-mono text-[8px] text-[#64748B] tracking-widest uppercase block font-bold">CONSULTANT SUMMARY</span>
                    <p className="text-xs text-[#CBD5E1] font-sans italic mt-2.5 leading-relaxed">
                      &ldquo;{selectedArticle.summary}&rdquo;
                    </p>
                    <div className="mt-6 flex flex-col gap-2">
                      <span className="font-mono text-[8px] text-[#5F7082] tracking-widest uppercase font-bold">AUTHOR</span>
                      <span className="text-xs text-[#F8FAFC] font-serif font-bold">Sanket Kulshrestha</span>
                      <span className="text-[10px] text-[#94A3B8]">Founder &bull; Smarkitals Group</span>
                    </div>
                  </div>

                  {/* Right Column: Full reading text */}
                  <div className="lg:col-span-8 text-[#CBD5E1] text-xs md:text-sm leading-relaxed space-y-6 max-w-2xl font-sans">
                    {getArticleEssayContent(selectedArticle.id).map((para, i) => (
                      <p key={i}>
                        {para}
                      </p>
                    ))}
                    
                    {/* End sign */}
                    <div className="pt-8 border-t border-white/[0.05] flex items-center justify-between text-xs text-[#64748B]">
                      <span className="font-mono">SECURED DOCUMENT // END OF BRIEF</span>
                      <button 
                        onClick={handleCopyLink}
                        className="flex items-center gap-1.5 text-[#5F7082] hover:text-accent-light transition-colors uppercase font-mono tracking-widest text-[9.5px] font-bold cursor-pointer"
                      >
                        <Share2 size={12} />
                        <span>{isCopied ? "Copied!" : "Share Brief Link"}</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
              
              {/* Footer status line */}
              <div className="bg-[#111827] px-8 py-4 border-t border-white/[0.04] text-center flex justify-between items-center text-[10px] font-mono text-[#64748B] font-bold">
                <span>INTELLECTUAL ARCHIVE // SMARKITALS HOLDINGS</span>
                <span className="hidden sm:inline">ADVISORY NOTE B-0{ARTICLES.indexOf(selectedArticle) + 1}</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
