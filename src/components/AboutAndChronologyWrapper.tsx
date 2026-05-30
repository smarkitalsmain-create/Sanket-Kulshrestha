import { motion } from "motion/react";
import { TIMELINE, EXECUTIVES_META } from "../data";
import { Award, ShieldAlert, Cpu, Sparkles, Milestone } from "lucide-react";
import SafeImageCard from "./SafeImageCard";

const PORTRAIT_IMAGE = "/hero-pic.png";

const profileRoles = [
  {
    text: "Founder & Operator",
    sub: "by Practice",
    icon: Sparkles,
    desc: "Directing strategic growth and corporate building for Smarkitals businesses.",
  },
  {
    text: "Strategic Risk Advisor",
    sub: "by Profession",
    icon: ShieldAlert,
    desc: "Advising leadership on systems vulnerabilities, process optimization, and mitigation structures.",
  },
  {
    text: "Managing Partner",
    sub: "by Legacy",
    icon: Cpu,
    desc: "Leading Smarkitals Strategist LLP consulting practices and operational hand-offs.",
  },
  {
    text: "Business Execution Consultant",
    sub: "by Philosophy",
    icon: Award,
    desc: "Converting founder visions into resilient SOPs, aligned teams, and flawless operational execution.",
  },
];

function FadeBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Integrated founder backdrop — dissolves into page, no card chrome */
function IntegratedPortrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="founder-portrait-atmosphere relative h-full w-full">
        <SafeImageCard
          src={PORTRAIT_IMAGE}
          alt="Sanket Kulshrestha — executive portrait"
          objectPosition="center top"
          objectFit="cover"
          className="h-full w-full opacity-100 saturate-[0.96] brightness-[1.05] contrast-[1.08]"
        />
        {/* Light cool harmonization — subject stays readable */}
        <div
          className="absolute inset-0 bg-[#1a2433]/15 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[rgba(11,16,26,0.12)] mix-blend-multiply pointer-events-none"
          aria-hidden
        />
        {/* Soft edge dissolve — edges only, center preserved */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(11,16,26,0.15)] via-transparent to-[rgba(11,16,26,0.40)] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(11,16,26,0.35)] via-transparent to-[rgba(11,16,26,0.22)] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[rgba(11,16,26,0.28)] via-transparent to-[rgba(11,16,26,0.38)] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_32%_38%,transparent_0%,rgba(11,16,26,0.45)_88%)] opacity-40 pointer-events-none"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function AboutAndChronologyWrapper() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]"
    >
      <div className="w-[95vw] max-w-[1800px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Mobile — single portrait, then full-width story */}
        <div className="lg:hidden">
          <FadeBlock className="flex flex-col mb-12">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#5F7082]" />
              <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">
                BIOGRAPHY
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
              About the Founder
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" />
          </FadeBlock>

          <IntegratedPortrait className="h-[min(72vh,520px)] w-full mb-12" />

          <StoryContent />
        </div>

        {/* Desktop — editorial split: massive sticky anchor + full-width narrative */}
        <div className="hidden lg:block">
          <FadeBlock className="flex flex-col mb-14">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#5F7082]" />
              <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">
                BIOGRAPHY
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
              About the Founder
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" />
          </FadeBlock>

          <div className="grid grid-cols-[36%_1fr] gap-10 xl:gap-14">
            {/* Left — atmospheric founder layer (not a card) */}
            <aside className="relative lg:-ml-2">
              <div className="sticky top-[120px]">
                <IntegratedPortrait className="w-full h-[160vh] min-h-[140vh] max-h-[180vh]" />
              </div>
            </aside>

            {/* Right — full content width, unchanged typography scale */}
            <div className="min-w-0 w-full">
              <StoryContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryContent() {
  return (
    <>
      <FadeBlock>
        <p className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold mb-3">
          About
        </p>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F8FAFC] tracking-tight leading-snug">
          Built Inside Businesses. Not Outside Them.
        </h3>
        <p className="mt-5 font-serif text-lg md:text-xl font-light text-[#CBD5E1] leading-relaxed max-w-3xl">
          A systems-driven consultant merging the analytical depth of{" "}
          <span className="font-semibold text-[#F8FAFC] border-b border-[#5F7082]/50 pb-0.5">
            advisory controls
          </span>{" "}
          with agile{" "}
          <span className="font-semibold text-[#F8FAFC] border-b border-[#5F7082]/50 pb-0.5">
            venture execution
          </span>
          .
        </p>
      </FadeBlock>

      <FadeBlock className="mt-6 space-y-4 text-[#CBD5E1] font-sans text-xs md:text-sm leading-relaxed max-w-3xl">
        {EXECUTIVES_META.biography.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </FadeBlock>

      <FadeBlock className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-10 border-t border-white/[0.04]">
        {profileRoles.map((role) => {
          const Icon = role.icon;
          return (
            <div
              key={role.text}
              className="p-4 bg-[#111827] border border-white/[0.04] hover:border-[#5F7082]/20 rounded-md transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#5F7082]/10 text-[#5F7082] shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-sans text-sm font-semibold tracking-wide">
                    {role.text}
                  </h4>
                  <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase block">
                    {role.sub}
                  </span>
                </div>
              </div>
              <p className="text-[#CBD5E1] font-sans text-xs mt-2 leading-relaxed">
                {role.desc}
              </p>
            </div>
          );
        })}
      </FadeBlock>

      <div className="mt-20 md:mt-24 pt-16 border-t border-white/[0.05]">
        <FadeBlock className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] border border-white/[0.04] rounded-full mb-3">
            <Milestone size={11} className="text-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#94A3B8] uppercase font-bold">
              THE TIMELINE
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-[#F8FAFC] font-bold tracking-wide">
            Chronology of Growth
          </h3>
          <p className="text-xs md:text-sm text-[#CBD5E1] mt-2 max-w-xl leading-relaxed">
            An evolving narrative of strategy, custom development, and systematic
            enterprise transformation.
          </p>
        </FadeBlock>

        <FadeBlock className="mb-10 p-6 bg-[#111827] border border-white/[0.04] rounded-lg max-w-3xl">
          <span className="font-mono text-[9px] text-[#5F7082] uppercase tracking-widest font-bold block">
            Family Advisory Roots &bull; Est. 1985
          </span>
          <p className="text-[11px] md:text-xs text-[#CBD5E1] font-sans mt-2.5 leading-relaxed">
            {EXECUTIVES_META.legacy.history}
          </p>
          <div className="h-px bg-white/[0.05] my-4" />
          <span className="font-mono text-[10px] font-bold text-[#F8FAFC] tracking-widest uppercase block text-center border border-[#5F7082]/20 py-2 rounded bg-[#5F7082]/5">
            {EXECUTIVES_META.legacy.tagline}
          </span>
        </FadeBlock>

        <div className="relative pl-8 md:pl-10 max-w-3xl">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.06]" />
          <div className="space-y-8">
            {TIMELINE.map((evt) => (
              <FadeBlock key={evt.year}>
                <div className="relative">
                  <div className="absolute -left-8 md:-left-10 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#5F7082] bg-[#0B101A]" />
                  <div className="p-5 bg-[#111827] border border-white/[0.03] rounded-lg hover:border-[#5F7082]/15 transition-colors duration-300">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <span className="font-serif text-xl font-bold text-[#5F7082] tracking-wider">
                        {evt.year}
                      </span>
                      <h4 className="font-sans text-xs font-bold text-[#F8FAFC] uppercase tracking-widest">
                        {evt.title}
                      </h4>
                    </div>
                    <p className="text-[#CBD5E1] font-sans text-xs md:text-sm leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>
              </FadeBlock>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
