import { Building2, Binary, LayoutDashboard, HeartHandshake, Briefcase, ExternalLink } from "lucide-react";
import { GROUP_INTRO, VENTURES } from "../data";
import type { Venture } from "../types";
import SectionHeading from "./SectionHeading";

function VentureIcon({ id }: { id: string }) {
  const props = { size: 20, "aria-hidden": true as const };
  switch (id) {
    case "smarkitals-strategist":
      return <Building2 {...props} />;
    case "smarkitals-technologies":
      return <Binary {...props} />;
    case "ngosutra":
      return <LayoutDashboard {...props} />;
    case "mel-milap":
      return <HeartHandshake {...props} />;
    default:
      return <Briefcase {...props} />;
  }
}

function StatusBadge({ status }: { status: Venture["status"] }) {
  const operating = status === "Operating";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold tracking-widest uppercase ${
        operating
          ? "border-emerald-400/30 text-emerald-300 bg-emerald-400/5"
          : "border-amber-300/30 text-amber-200 bg-amber-300/5"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${operating ? "bg-emerald-300" : "bg-amber-200"}`} aria-hidden="true" />
      {status}
    </span>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold mb-2.5">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-[#CBD5E1] leading-relaxed">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#8A96A6] shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function VenturesSection() {
  return (
    <section
      id="ventures"
      aria-labelledby="ventures-title"
      className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading id="ventures-title" eyebrow="Smarkitals Group" title="Ventures" intro={GROUP_INTRO} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {VENTURES.map((v) => (
            <article
              key={v.id}
              className="flex flex-col p-7 md:p-9 bg-[#111827] border border-white/[0.05] rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-2.5 rounded bg-[#5F7082]/15 text-[#8A96A6] shrink-0">
                    <VentureIcon id={v.id} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#F8FAFC] leading-snug">{v.name}</h3>
                    <p className="text-xs text-[#94A3B8] font-mono tracking-wider mt-1">
                      {v.entityType}
                      {v.parent && <> &middot; {v.parent}</>}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <StatusBadge status={v.status} />
                </div>
              </div>

              {v.role && (
                <p className="mt-5 text-sm text-[#CBD5E1]">
                  <span className="font-semibold text-[#F8FAFC]">My role: </span>
                  {v.role}
                </p>
              )}

              <p className="mt-3 text-sm md:text-base text-[#CBD5E1] leading-relaxed">{v.summary}</p>

              {(v.available || v.inDevelopment) && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {v.available && <ListBlock title="Available now" items={v.available} />}
                  {v.inDevelopment && (
                    <ListBlock
                      title={v.kind === "Initiative" ? "Intended focus" : v.available ? "In development" : "Planned scope"}
                      items={v.inDevelopment}
                    />
                  )}
                </div>
              )}

              {v.note && (
                <p className="mt-6 p-4 rounded bg-[#0B101A]/70 border border-white/[0.04] text-xs text-[#94A3B8] leading-relaxed">
                  {v.note}
                </p>
              )}

              {v.verifiedLink && (
                <a
                  href={v.verifiedLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start inline-flex items-center gap-2 text-sm text-[#CBD5E1] hover:text-white underline underline-offset-4 decoration-[#5F7082]"
                >
                  {v.verifiedLink.label}
                  <ExternalLink size={13} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
