const UPLOADED_LOGOS = [
  { name: "Jubilant Foodworks", src: "/input_file_11.png" },
  { name: "Schneider Electric", src: "/input_file_12.png" },
  { name: "Burger Singh", src: "/input_file_13.png" },
  { name: "Centrient Pharmaceuticals", src: "/input_file_14.png" },
  { name: "Rosmerta", src: "/input_file_15.png" },
  { name: "Trident Group", src: "/input_file_16.png" },
  { name: "Akshaya Patra", src: "/input_file_17.png" },
  { name: "Pinnacle Industries", src: "/input_file_18.png" },
  { name: "Zivame", src: "/input_file_19.png" },
  { name: "Kapiva", src: "/input_file_20.png" },
  { name: "Half Light Coffee Roasters", src: "/input_file_21.png" },
  { name: "Jaipur Watch Company", src: "/input_file_22.png" },
  { name: "Experion", src: "/input_file_23.png" },
  { name: "OfBusiness", src: "/input_file_24.png" },
  { name: "4700 BC Gourmet Popcorn", src: "/input_file_25.png" },
  { name: "Samvardhana Motherson", src: "/input_file_26.png" },
  { name: "Clovia", src: "/input_file_27.png" },
  { name: "Spinny", src: "/input_file_28.png" },
  { name: "Cars24", src: "/input_file_29.png" },
  { name: "HCL Technologies", src: "/input_file_30.png" },
  { name: "Dixon Technologies", src: "/input_file_31.png" },
  { name: "Rahul Mishra", src: "/input_file_32.png" },
  { name: "Reliance Retail", src: "/input_file_33.png" },
  { name: "Sabyasachi Calcutta", src: "/input_file_34.png" },
  { name: "boAt", src: "/input_file_35.png" },
];

export default function BrandsSection() {
  // Duplicate the array multiple times to ensure continuous marquee loop without gaps
  const marqueeList = [...UPLOADED_LOGOS, ...UPLOADED_LOGOS, ...UPLOADED_LOGOS];

  return (
    <section className="relative py-14 bg-[#111827] border-t border-b border-white/[0.04] overflow-hidden">
      {/* Smooth glass-edge fading gradients on sides */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex flex-col items-center text-center">
        <h3 className="font-sans text-sm md:text-base font-semibold tracking-wider text-[#94A3B8] uppercase">
          Organizations &amp; Brands Associated Through Projects And Engagements
        </h3>
      </div>

      {/* Endless, slow corporate marquee */}
      <div className="flex w-full overflow-hidden select-none relative py-4">
        <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap min-w-full items-center">
          {marqueeList.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="inline-flex items-center justify-center shrink-0 object-contain pointer-events-auto"
            >
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className="h-9 md:h-11 w-auto max-w-[140px] md:max-w-[180px] object-contain filter grayscale brightness-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none ease-in-out"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
