import { MapPin, Globe } from "lucide-react";

export default function PresenceSection() {
  const offices = [
    {
      role: "Headquarters",
      city: "Delhi NCR",
      coordinates: "28.6139° N, 77.2090° E",
      desc: "Directed as the core governance of Smarkitals Group and strategic consulting initiatives.",
      vibe: "Administrative & Strategic Core"
    },
    {
      role: "Strategic Office",
      city: "Jaipur",
      coordinates: "26.9124° N, 75.7873° E",
      desc: "Focused on execution support, tech planning, and custom corporate venture advisory engagements.",
      vibe: "Advisory & Execution Hub"
    }
  ];

  return (
    <section id="presence" className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]">
      {/* Background accents */}
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">LOCATIONS</span>
            <span className="w-8 h-px bg-[#5F7082]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            Presence
          </h2>
          <p className="mt-3 text-xs text-[#CBD5E1] font-sans max-w-xl leading-relaxed">
            Operating dynamically from strategic trade corridors in Northern and Western India to advise family-run concerns and fast-scaling enterprises.
          </p>
        </div>

        {/* Presence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office) => (
            <div 
              key={office.city}
              className="p-8 bg-[#111827] border border-white/[0.05] hover:border-[#5F7082]/20 rounded-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner coordinates */}
              <span className="absolute top-4 right-6 font-mono text-[9px] text-[#64748B] group-hover:text-[#5F7082] transition-colors">
                {office.coordinates}
              </span>

              <div className="flex gap-4 items-start relative z-10">
                <div className="p-3 rounded bg-[#5F7082]/10 text-[#5F7082] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#5F7082] uppercase tracking-widest block font-bold">
                    {office.role}
                  </span>
                  <h3 className="text-2xl font-serif text-[#F8FAFC] tracking-widest font-bold mt-1">
                    {office.city}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] font-sans mt-3 leading-relaxed">
                    {office.desc}
                  </p>
                  <div className="h-px bg-white/[0.05] my-4" />
                  <div className="flex items-center gap-2 font-mono text-[9px] text-[#64748B] tracking-wider">
                    <Globe size={10} />
                    <span>{office.vibe}</span>
                  </div>
                </div>
              </div>

              {/* Sophisticated design line */}
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#5F7082]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Stewardship Footnote */}
        <div className="mt-16 text-center max-w-lg mx-auto">
          <p className="font-mono text-[9px] text-[#64748B] tracking-widest uppercase font-bold">
            SECURED EXECUTIVE NETWORKS &bull; TELE ADVISORY CO-ORDINATE SYSTEM
          </p>
        </div>

      </div>
    </section>
  );
}
