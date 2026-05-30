import { useState } from "react";

interface SafeImageCardProps {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  className?: string;
  missingWarning?: string;
}

export default function SafeImageCard({
  src,
  alt,
  objectPosition = "center center",
  objectFit = "cover",
  className = "",
  missingWarning,
}: SafeImageCardProps) {
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (missingWarning) {
      console.warn(missingWarning);
    }
    setFailed(true);
  };

  if (failed || !src) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[#0B101A] ${className}`}
        role="img"
        aria-label={alt}
      >
        <p className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase">
          Image coming soon
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      onError={handleError}
      className={`h-full w-full bg-[#0B101A] ${className}`}
      style={{ objectFit, objectPosition }}
      referrerPolicy="no-referrer"
    />
  );
}
