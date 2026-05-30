import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const CINEMATIC_IMAGE = "/input_file_0.png";

export default function SanketReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Intro — fades out early; fully hidden before image is complete
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25],
    [1, 0.4, 0]
  );
  const introY = useTransform(scrollYProgress, [0, 0.25], [0, -24]);
  const introVisibility = useTransform(scrollYProgress, (v) =>
    v >= 0.26 ? "hidden" : "visible"
  );

  // Image reveal
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 1],
    [0, 1, 1]
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0.15, 0.4, 1],
    [0.92, 1, 1]
  );

  // Executive detail card
  const detailCardOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.5, 1],
    [0, 1, 1]
  );
  const detailCardY = useTransform(scrollYProgress, [0.35, 0.5], [20, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[240vh] bg-[#0B101A]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0B101A]">
        {/* Landing intro — lowest layer; image covers it during reveal */}
        <motion.div
          style={{
            opacity: introOpacity,
            y: introY,
            visibility: introVisibility,
          }}
          className="absolute inset-x-0 top-[22%] md:top-[20%] z-[5] px-6 text-center pointer-events-none"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/40 bg-[#111827]/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5F7082]/60" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase font-medium">
                Strategic Advisory
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans tracking-tight text-[#F8FAFC] font-semibold leading-[1.1]">
              Sanket Kulshrestha
            </h1>
            <p className="mt-5 text-sm md:text-base text-[#94A3B8] font-sans tracking-wide max-w-xl mx-auto leading-relaxed">
              Strategy, governance &amp; operational leadership for founders and
              growing enterprises.
            </p>
            <p className="mt-10 font-mono text-[10px] tracking-[0.25em] text-[#64748B] uppercase">
              Scroll to explore
            </p>
          </div>
        </motion.div>

        {/* Image layer — above intro, below detail card */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            style={{ opacity: imageOpacity, scale: imageScale }}
            className="relative w-full h-[65vh] md:h-[70vh] lg:h-[80vh] overflow-hidden origin-center"
          >
            <img
              src={CINEMATIC_IMAGE}
              alt="Sanket Kulshrestha — executive advisory"
              className="w-full h-full object-cover object-top select-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B101A]/85 via-[#0B101A]/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Executive detail card — above image, below navbar */}
        <motion.div
          style={{ opacity: detailCardOpacity, y: detailCardY }}
          className="absolute inset-x-0 bottom-0 z-30 px-6 md:px-12 pb-8 md:pb-10 pointer-events-none"
        >
          <div className="max-w-2xl rounded-lg border border-white/[0.06] bg-[#0B101A]/80 backdrop-blur-sm px-6 py-5 md:px-8 md:py-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            <div className="h-px w-12 bg-gradient-to-r from-[#5F7082]/50 to-transparent mb-4" />
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase font-semibold mb-2">
              Executive Brief &middot; S. Kulshrestha
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#F8FAFC] font-semibold tracking-wide">
              Sanket Kulshrestha
            </h2>
            <div className="mt-3 space-y-1">
              <p className="text-xs md:text-sm text-[#CBD5E1] font-sans tracking-wide">
                Managing Partner
                <span className="text-[#64748B] mx-2">&mdash;</span>
                Smarkitals Strategist LLP
              </p>
              <p className="text-xs md:text-sm text-[#CBD5E1] font-sans tracking-wide">
                Founder &amp; CEO
                <span className="text-[#64748B] mx-2">&mdash;</span>
                Smarkitals Technologies India Pvt Ltd
              </p>
            </div>
            <p className="mt-4 text-xs md:text-sm text-[#94A3B8] font-sans leading-relaxed">
              Steward of a 40-year family consulting legacy, helping founders and
              businesses create structure, clarity and scalable execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
