import { ExternalLink, PenLine } from "lucide-react";
import { ARTICLES, WRITING_PROJECTS } from "../data";
import SectionHeading from "./SectionHeading";

export default function WritingSection() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          id="writing-title"
          eyebrow="Writing"
          title="Ideas and Projects"
          intro="Essays on business and strategy, plus longer-form writing outside work."
        />

        <h3 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold mb-5">
          Essay previews
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              className="flex flex-col p-7 bg-[#111827] border border-white/[0.04] rounded-lg"
            >
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#8A96A6] font-bold">
                {art.category}
              </p>
              <h4 className="font-serif text-xl font-bold text-[#F8FAFC] mt-4 leading-snug">{art.title}</h4>
              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed flex-1">{art.summary}</p>
              {!art.content && (
                <p className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-[#94A3B8]">
                  Full essay coming soon
                </p>
              )}
            </article>
          ))}
        </div>

        <h3 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold mt-16 mb-5">
          Other writing
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WRITING_PROJECTS.map((w) => (
            <li key={w.id} className="p-7 bg-[#111827]/70 border border-white/[0.04] rounded-lg">
              <div className="flex items-center gap-2 text-[#8A96A6]">
                <PenLine size={14} aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold">{w.format}</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#F8FAFC] mt-3">
                {w.href ? (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#8A96A6]"
                  >
                    {w.name}
                    <ExternalLink size={13} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  w.name
                )}
              </h4>
              <p className="mt-2 text-sm text-[#CBD5E1] leading-relaxed">{w.description}</p>
              {w.status && <p className="mt-3 text-xs text-[#94A3B8]">{w.status}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
