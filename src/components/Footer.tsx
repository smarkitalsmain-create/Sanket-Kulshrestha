import { Linkedin, Instagram, Phone, Mail, ArrowUp } from "lucide-react";
import { CONTACT, EXECUTIVES_META } from "../data";

const links = [
  { label: "LinkedIn", href: CONTACT.linkedin, icon: Linkedin, external: true },
  { label: "Instagram", href: CONTACT.instagram, icon: Instagram, external: true },
  { label: "WhatsApp", href: CONTACT.whatsapp, icon: Phone, external: true },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail, external: false }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] pt-16 pb-10 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 flex flex-col gap-3">
            <span className="font-serif text-lg tracking-wider font-extrabold text-[#F8FAFC]">
              SANKET KULSHRESTHA
            </span>
            <p className="text-sm text-[#CBD5E1]">{EXECUTIVES_META.positioning}</p>
            <p className="text-sm text-[#94A3B8]">
              {CONTACT.base} &middot; {CONTACT.availability}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col md:items-end gap-5">
            <ul className="flex flex-wrap md:justify-end gap-3">
              {links.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-3 bg-[#111827] hover:bg-[#5F7082] rounded border border-white/10 hover:border-[#5F7082] text-[#CBD5E1] hover:text-white transition-colors flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase font-semibold"
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{label}</span>
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white font-mono text-[11px] tracking-widest uppercase transition-colors"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="h-px bg-white/[0.06]" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center text-[#94A3B8] text-[11px] font-mono tracking-wider">
          <span>&copy; {new Date().getFullYear()} Sanket Kulshrestha &middot; Smarkitals Group</span>
          <span className="uppercase">{EXECUTIVES_META.legacy.label}</span>
        </div>
      </div>
    </footer>
  );
}
