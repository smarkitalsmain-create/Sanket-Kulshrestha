import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CONTACT, EXECUTIVES_META } from "../data";

const CINEMATIC_IMAGE = "/images/hero.webp";

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded bg-[#5F7082] hover:bg-[#6D7E90] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors ${className}`}
    >
      Discuss a Project
      <ArrowRight size={14} aria-hidden="true" />
    </a>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#services"
      className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/15 hover:border-[#8A96A6] text-[#CBD5E1] hover:text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
    >
      See Services
    </a>
  );
}

function DetailCard({ cta = true }: { cta?: boolean }) {
  return (
    <div className="max-w-2xl rounded-lg border border-white/[0.06] bg-[#0B101A]/85 backdrop-blur-sm px-6 py-5 md:px-8 md:py-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <div className="h-px w-12 bg-gradient-to-r from-[#5F7082]/50 to-transparent mb-4" aria-hidden="true" />
      <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#F8FAFC] font-semibold tracking-wide">
        {EXECUTIVES_META.name}
      </p>
      <ul className="mt-3 space-y-1">
        {EXECUTIVES_META.roles.map((r) => (
          <li key={r.org} className="text-xs md:text-sm text-[#CBD5E1] font-sans tracking-wide">
            {r.title}
            <span className="text-[#94A3B8] mx-2" aria-hidden="true">&mdash;</span>
            <span className="sr-only">, </span>
            {r.org}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs md:text-sm text-[#94A3B8] font-sans leading-relaxed">
        Based in {CONTACT.base}. {CONTACT.availability}.
      </p>
      {cta && <PrimaryCta className="mt-5" />}
    </div>
  );
}

function IntroCopy() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/40 bg-[#111827]/60 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8A96A6]" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase font-medium">
          Strategy &middot; Operations &middot; Controls
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight text-[#F8FAFC] font-semibold leading-[1.1]">
        {EXECUTIVES_META.name}
      </h1>
      <p className="mt-5 text-sm md:text-base text-[#CBD5E1] font-sans tracking-wide max-w-xl mx-auto leading-relaxed">
        {EXECUTIVES_META.positioning}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <PrimaryCta />
        <SecondaryCta />
      </div>
    </div>
  );
}

/** Static version for visitors who prefer reduced motion */
function StaticHero() {
  return (
    <section id="home" aria-label="Introduction" className="relative bg-[#0B101A] pt-32 pb-16">
      <div className="px-6 text-center">
        <IntroCopy />
      </div>
      <div className="relative mt-12 h-[60vh] overflow-hidden">
        <img
          src={CINEMATIC_IMAGE}
          alt="Sanket Kulshrestha in an office"
          className="w-full h-full object-cover object-top"
          width={1376}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B101A]/85 via-[#0B101A]/10 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 pb-8">
          <DetailCard cta={false} />
        </div>
      </div>
    </section>
  );
}

function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Intro fades out before the image is fully revealed
  const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.4, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.25], [0, -24]);
  const introVisibility = useTransform(scrollYProgress, (v) => (v >= 0.26 ? "hidden" : "visible"));

  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.35, 1], [0, 1, 1]);
  const imageScale = useTransform(scrollYProgress, [0.15, 0.4, 1], [0.92, 1, 1]);

  // Hidden (not just transparent) until shown so its link is not focusable while invisible
  const detailCardOpacity = useTransform(scrollYProgress, [0.35, 0.5, 1], [0, 1, 1]);
  const detailCardY = useTransform(scrollYProgress, [0.35, 0.5], [20, 0]);
  const detailCardVisibility = useTransform(scrollYProgress, (v) => (v <= 0.34 ? "hidden" : "visible"));

  return (
    <section
      id="home"
      aria-label="Introduction"
      ref={containerRef}
      className="relative h-[220vh] bg-[#0B101A]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0B101A]">
        <motion.div
          style={{ opacity: introOpacity, y: introY, visibility: introVisibility }}
          className="absolute inset-x-0 top-[22%] md:top-[20%] z-[5] px-6 text-center"
        >
          <IntroCopy />
          <p className="mt-10 font-mono text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase" aria-hidden="true">
            Scroll to explore
          </p>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.div
            style={{ opacity: imageOpacity, scale: imageScale }}
            className="relative w-full h-[65vh] md:h-[70vh] lg:h-[80vh] overflow-hidden origin-center"
          >
            <img
              src={CINEMATIC_IMAGE}
              alt="Sanket Kulshrestha in an office"
              className="w-full h-full object-cover object-top select-none"
              width={1376}
              height={768}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B101A]/85 via-[#0B101A]/10 to-transparent" aria-hidden="true" />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: detailCardOpacity, y: detailCardY, visibility: detailCardVisibility }}
          className="absolute inset-x-0 bottom-0 z-30 px-6 md:px-12 pb-8 md:pb-10"
        >
          <DetailCard />
        </motion.div>
      </div>
    </section>
  );
}

export default function SanketReveal() {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <StaticHero /> : <AnimatedHero />;
}
