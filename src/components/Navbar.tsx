import { useState, useEffect } from "react";
import { Menu, X, Linkedin, ArrowRight } from "lucide-react";
import { CONTACT } from "../data";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Ventures", href: "#ventures" },
  { name: "About", href: "#about" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const solid = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#0B101A]/95 border-b border-white/[0.06] py-3.5 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        <a href="#home" className="flex flex-col select-none group min-w-0">
          <span className="whitespace-nowrap font-serif text-base md:text-lg tracking-wider font-extrabold text-white group-hover:text-[#8A96A6] transition-colors">
            SANKET KULSHRESTHA
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#94A3B8] uppercase font-bold">
            Strategy &bull; Operations &bull; Controls
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-[12px] font-sans font-semibold tracking-widest text-[#CBD5E1] hover:text-white transition-colors uppercase"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-4">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-white transition-colors p-1"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#5F7082] hover:bg-[#6D7E90] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
          >
            Discuss a Project
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="xl:hidden text-[#CBD5E1] hover:text-white transition-colors p-2 -mr-2"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden absolute top-full left-0 w-full max-h-[calc(100vh-64px)] overflow-y-auto bg-[#111827] border-b border-white/[0.08] px-6 py-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-sans tracking-widest text-[#CBD5E1] hover:text-white py-3 uppercase font-bold"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-px bg-white/[0.08] w-full" aria-hidden="true" />

          <div className="flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3.5 rounded bg-[#5F7082] text-white text-xs font-mono tracking-widest uppercase font-bold"
            >
              Discuss a Project
              <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#CBD5E1] hover:text-white py-1"
            >
              <Linkedin size={16} className="text-[#8A96A6]" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
