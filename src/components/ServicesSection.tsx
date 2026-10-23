import { Compass, Workflow, ShieldCheck, HeartHandshake, Plus, type LucideIcon } from "lucide-react";
import { SERVICES } from "../data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = { Compass, Workflow, ShieldCheck, HeartHandshake };

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="How I Can Help"
          intro="Four areas of work, each scoped to the size and stage of the organisation. Every engagement starts with understanding how the business runs today."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] ?? Plus;
            return (
              <article
                key={service.id}
                className="flex flex-col p-7 md:p-9 bg-[#111827] border border-white/[0.05] rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded bg-[#5F7082]/15 text-[#8A96A6] shrink-0">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#F8FAFC] leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm text-[#CBD5E1] leading-relaxed">
                  <span className="font-semibold text-[#F8FAFC]">Who it helps: </span>
                  {service.whoItHelps}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                  <div>
                    <h4 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold mb-3">
                      Problems addressed
                    </h4>
                    <ul className="space-y-2">
                      {service.problems.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm text-[#CBD5E1] leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#8A96A6] shrink-0" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold mb-3">
                      Typical deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex gap-2.5 text-sm text-[#CBD5E1] leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#8A96A6] shrink-0" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {service.note && (
                  <p className="mt-6 text-xs text-[#94A3B8] italic leading-relaxed">{service.note}</p>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-lg border border-white/[0.06] bg-[#111827]/60">
          <p className="text-sm text-[#CBD5E1] flex-1">
            Not sure which area fits? Describe the problem and we can work out the right scope together.
          </p>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3 rounded bg-[#5F7082] hover:bg-[#6D7E90] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
          >
            Discuss a Project
          </a>
        </div>
      </div>
    </section>
  );
}
