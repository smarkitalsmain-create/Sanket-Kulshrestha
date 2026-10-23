import { motion } from "motion/react";
import { TIMELINE, EXECUTIVES_META, CONTACT } from "../data";
import { Building2, Binary, ShieldCheck, MapPin, Milestone } from "lucide-react";
import SafeImageCard from "./SafeImageCard";

const PORTRAIT_IMAGE = "/images/portrait.webp";

const profileRoles = [
  {
    text: "Managing Partner",
    sub: "Smarkitals Strategist LLP",
    icon: Building2,
  },
  {
    text: "Founder",
    sub: "Smarkitals Technologies India Pvt Ltd",
    icon: Binary,
  },
  {
    text: "Internal audit & risk advisory",
    sub: "Deloitte · SS Kothari Mehta & Co.",
    icon: ShieldCheck,
  },
  {
    text: CONTACT.base,
    sub: CONTACT.availability,
    icon: MapPin,
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
          alt="Portrait of Sanket Kulshrestha"
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
      aria-label="About"
      className="relative py-20 md:py-28 lg:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]"
    >
      <div className="w-[95vw] max-w-[1800px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Mobile — single portrait, then full-width story */}
        <div className="lg:hidden">
          <FadeBlock className="flex flex-col mb-12">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#5F7082]" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-widest text-[#8A96A6] uppercase font-bold">
                ABOUT
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
              About Sanket
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
              <span className="w-10 h-px bg-[#5F7082]" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-widest text-[#8A96A6] uppercase font-bold">
                ABOUT
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
              About Sanket
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
        <p className="font-mono text-[10px] tracking-widest text-[#8A96A6] uppercase font-bold mb-3">
          Background
        </p>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F8FAFC] tracking-tight leading-snug">
          Built Inside Businesses. Not Outside Them.
        </h3>
        <p className="mt-5 font-serif text-lg md:text-xl font-light text-[#CBD5E1] leading-relaxed max-w-3xl">
          An audit and risk background, now applied to helping businesses{" "}
          <span className="font-semibold text-[#F8FAFC] border-b border-[#5F7082]/50 pb-0.5">
            plan, run and grow
          </span>
          .
        </p>
      </FadeBlock>

      <FadeBlock className="mt-6 space-y-4 text-[#CBD5E1] font-sans text-sm md:text-base leading-relaxed max-w-3xl">
        {EXECUTIVES_META.biography.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </FadeBlock>

      <FadeBlock className="mt-10 pt-10 border-t border-white/[0.04]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileRoles.map((role) => {
            const Icon = role.icon;
            return (
              <li
                key={role.text}
                className="p-4 bg-[#111827] border border-white/[0.04] rounded-md flex items-center gap-3"
              >
                <div className="p-2 rounded bg-[#5F7082]/15 text-[#8A96A6] shrink-0">
                  <Icon size={16} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#F8FAFC] font-sans text-sm font-semibold tracking-wide">{role.text}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{role.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </FadeBlock>

      <div className="mt-20 md:mt-24 pt-16 border-t border-white/[0.05]">
        <FadeBlock className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] border border-white/[0.04] rounded-full mb-3">
            <Milestone size={11} className="text-[#8A96A6]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-bold">
              Experience
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-[#F8FAFC] font-bold tracking-wide">
            Timeline
          </h3>
        </FadeBlock>

        <FadeBlock className="mb-10 p-6 bg-[#111827] border border-white/[0.04] rounded-lg max-w-3xl">
          <p className="font-mono text-[10px] text-[#8A96A6] uppercase tracking-widest font-bold">
            Family history &middot; {EXECUTIVES_META.legacy.label}
          </p>
          <p className="text-sm text-[#CBD5E1] font-sans mt-2.5 leading-relaxed">
            {EXECUTIVES_META.legacy.history}
          </p>
        </FadeBlock>

        <div className="relative pl-8 md:pl-10 max-w-3xl">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.06]" aria-hidden="true" />
          <ol className="space-y-8">
          {TIMELINE.map((evt) => (
            <li key={evt.year}>
              <FadeBlock>
                <div className="relative">
                  <div className="absolute -left-8 md:-left-10 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#5F7082] bg-[#0B101A]" aria-hidden="true" />
                  <div className="p-5 bg-[#111827] border border-white/[0.03] rounded-lg">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <span className="font-serif text-xl font-bold text-[#8A96A6] tracking-wider">
                        {evt.year}
                      </span>
                      <h4 className="font-sans text-xs font-bold text-[#F8FAFC] uppercase tracking-widest">
                        {evt.title}
                      </h4>
                    </div>
                    <p className="text-[#CBD5E1] font-sans text-sm leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>
              </FadeBlock>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </>
  );
}
