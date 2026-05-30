import { useState } from "react";

interface PortraitBlurredFillProps {
  src: string;
  alt: string;
  missingWarning?: string;
}

export default function PortraitBlurredFill({
  src,
  alt,
  missingWarning,
}: PortraitBlurredFillProps) {
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (missingWarning) {
      console.warn(missingWarning);
    }
    setFailed(true);
  };

  if (failed || !src) {
    return (
      <div className="relative z-[2] flex h-full w-full items-center justify-center bg-[#0B101A]">
        <p className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase">
          Image coming soon
        </p>
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center blur-[22px] scale-[1.12] opacity-35 pointer-events-none select-none"
        referrerPolicy="no-referrer"
        onError={handleError}
      />
      <div
        className="absolute inset-0 bg-[rgba(11,16,26,0.45)] pointer-events-none z-[1]"
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        className="relative z-[2] h-full w-full object-contain object-center select-none"
        referrerPolicy="no-referrer"
        onError={handleError}
      />
    </>
  );
}
