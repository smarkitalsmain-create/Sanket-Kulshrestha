import { useState, useEffect } from "react";
import { Menu, X, Calendar, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Ventures", href: "#ventures" },
    { name: "Insights", href: "#insights" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B101A]/90 border-b border-white/[0.06] py-3.5 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand signature */}
        <a href="#home" className="flex flex-col select-none group">
          <span className="font-serif text-base md:text-lg tracking-wider font-extrabold text-white group-hover:text-[#5F7082] transition-colors">
            SANKET KULSHRESTHA
          </span>
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#94A3B8] group-hover:text-white transition-colors uppercase font-bold">
            STRATEGY &bull; GOVERNANCE &bull; ADVISORY
          </span>
        </a>

        {/* Links list - Desktop view */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11.5px] font-sans font-semibold tracking-widest text-[#CBD5E1] hover:text-[#5F7082] transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA consultations - Desktop view */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sanketkulshrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748B] hover:text-[#5F7082] transition-colors cursor-pointer"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#5F7082]/30 hover:border-[#5F7082] bg-[#5F7082]/5 hover:bg-[#5F7082]/10 text-[#5F7082] hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-300"
          >
            <Calendar size={13} />
            <span>Consultation</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#CBD5E1] hover:text-white transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111827] border-b border-white/[0.08] shadow-3xl px-6 py-8 flex flex-col gap-6 backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-sans tracking-widest text-[#CBD5E1] hover:text-[#5F7082] py-1.5 transition-colors uppercase font-bold"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="h-px bg-white/[0.08] w-full" />

          {/* Call-to-actions in mobile */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/sanketkulshrestha/"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs font-bold text-[#94A3B8] hover:text-white transition-colors py-1 cursor-pointer"
            >
              <Linkedin size={16} className="text-[#5F7082]" />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded border border-[#5F7082]/40 bg-[#5F7082]/5 text-[#5F7082] text-xs font-mono tracking-widest uppercase font-bold"
            >
              <Calendar size={15} />
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
