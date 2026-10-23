interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, intro, id }: SectionHeadingProps) {
  return (
    <div className="flex flex-col mb-12 md:mb-16 max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="w-10 h-px bg-[#5F7082]" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-widest text-[#8A96A6] uppercase font-bold">
          {eyebrow}
        </span>
      </div>
      <h2 id={id} className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
        {title}
      </h2>
      <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" aria-hidden="true" />
      {intro && (
        <p className="mt-5 text-[#CBD5E1] font-sans text-sm md:text-base leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
