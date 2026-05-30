import { MEDIA } from "../data";
import type { MediaItem } from "../types";
import { Mic, Users, Presentation, Calendar } from "lucide-react";
import SafeImageCard from "./SafeImageCard";
import PortraitBlurredFill from "./PortraitBlurredFill";

function usesBlurredPortrait(item: MediaItem) {
  return item.type === "Conversation" || item.type === "Panel";
}

function mediaImageHeight(type: string) {
  if (type === "Conversation") {
    return "h-[260px] md:h-[300px] lg:h-[390px]";
  }
  if (type === "Panel") {
    return "h-[260px] md:h-[300px] lg:h-[360px]";
  }
  return "h-[260px] md:h-[300px] lg:h-[360px]";
}

function MediaCardImage({ item }: { item: MediaItem }) {
  const src = item.imageUrl ?? "";

  if (usesBlurredPortrait(item)) {
    return (
      <PortraitBlurredFill
        src={src}
        alt={item.title}
        missingWarning={
          item.type === "Conversation"
            ? "strategic-advisor image not found"
            : undefined
        }
      />
    );
  }

  return (
    <SafeImageCard
      src={src}
      alt={item.title}
      objectPosition={item.objectPosition ?? "center center"}
      objectFit={item.objectFit ?? "cover"}
    />
  );
}

export default function MediaSection() {
  const getMediaLabel = (type: string) => {
    switch (type) {
      case "Workshop":
        return "Workshops";
      case "Conversation":
        return "Founder Conversations";
      case "Panel":
        return "Panel Discussions";
      case "Guest Session":
        return "Leadership Sessions";
      default:
        return "Business Discussions";
    }
  };

  const getMediaIcon = (type: string) => {
    switch (type) {
      case "Conversation":
        return <Mic size={14} className="text-[#5F7082]" />;
      case "Panel":
        return <Users size={14} className="text-[#5F7082]" />;
      case "Workshop":
      case "Guest Session":
      default:
        return <Presentation size={14} className="text-[#5F7082]" />;
    }
  };

  return (
    <section id="media" className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">
              PERSPECTIVES &amp; CONVERSATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            Insights &amp; Executive Exchanges
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {MEDIA.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between bg-[#111827] border border-white/[0.03] hover:border-[#5F7082]/20 rounded-lg overflow-hidden transition-colors duration-300"
            >
              <div
                className={`relative overflow-hidden rounded-t-lg bg-[#0B101A] ${mediaImageHeight(item.type)}`}
              >
                <MediaCardImage item={item} />

                {!usesBlurredPortrait(item) && (
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0B101A]/50 to-transparent pointer-events-none z-10" />
                )}

                <div className="absolute top-3 left-3 z-30 inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-medium tracking-widest text-[#5F7082] bg-[#0B101A]/95 rounded border border-[#5F7082]/25 uppercase font-bold">
                  {getMediaIcon(item.type)}
                  <span>{getMediaLabel(item.type)}</span>
                </div>

                <div className="absolute bottom-3 left-3 z-30 flex items-center text-[10px] font-mono tracking-wider text-[#CBD5E1]">
                  <Calendar size={11} className="text-[#5F7082] mr-1" />
                  {item.date}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold tracking-normal text-[#F8FAFC] group-hover:text-[#5F7082] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-[#CBD5E1] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono tracking-widest text-[#64748B] group-hover:text-[#CBD5E1] transition-colors font-bold">
                  <span>SMARKITALS ADVISORY ARCHIVE</span>
                  <span className="text-[#5F7082] font-bold">&bull; COMPLETED</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 bg-[#111827] border border-white/[0.03] rounded-lg flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[8.5px] text-[#64748B] select-none font-bold">
            RECORD REFERENCE // 2026
          </div>

          <div className="w-16 h-16 rounded-full border border-[#5F7082]/20 overflow-hidden shrink-0 bg-[#0B101A] shadow-xl">
            <SafeImageCard
              src="/hero-pic.png"
              alt="Sanket Kulshrestha"
              objectPosition="center top"
              objectFit="cover"
              className="brightness-95"
            />
          </div>

          <div>
            <p className="font-serif text-base md:text-lg text-[#CBD5E1] italic leading-relaxed">
              &ldquo;Governance is not about restricting speed; it is about reinforcing the chassis of the enterprise so that it scales at high velocities without structural failure.&rdquo;
            </p>
            <div className="mt-4 flex gap-2 items-center text-xs font-mono tracking-wider">
              <span className="text-[#F8FAFC] font-bold">Sanket Kulshrestha</span>
              <span className="text-[#64748B]">&bull;</span>
              <span className="text-[#5F7082] uppercase font-bold">FOUNDER DISCUSSION EXCERPT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
