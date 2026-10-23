import { EXECUTIVES_META, PRINCIPLES } from "../data";

export default function ApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="relative py-20 md:py-28 bg-[#111827] text-[#F8FAFC] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-widest text-[#8A96A6] uppercase font-bold">
              How I work
            </span>
          </div>
          <h2
            id="approach-title"
            className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4 leading-tight"
          >
            {EXECUTIVES_META.headlines.primary}
          </h2>
          <p className="mt-6 font-serif text-lg md:text-xl font-light text-[#CBD5E1] leading-relaxed">
            {EXECUTIVES_META.headlines.sub}
          </p>
        </div>

        <ol className="lg:col-span-6 grid gap-4">
          {PRINCIPLES.map((p, i) => (
            <li
              key={p.title}
              className="p-6 rounded-lg bg-[#0B101A] border border-white/[0.05] flex gap-5"
            >
              <span className="font-mono text-sm text-[#8A96A6] font-bold" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#F8FAFC]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#CBD5E1] leading-relaxed">{p.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
