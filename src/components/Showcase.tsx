import Image from "next/image";

const images = [
  { src: "/images/iphone-stack.jpg", alt: "iPhone Großhandel", label: "Großhandel" },
  { src: "/images/iphone-repair.jpg", alt: "iPhone Reparatur", label: "Refurbishing" },
  { src: "/images/warehouse.jpg", alt: "Lager & Logistik", label: "Logistik" },
  { src: "/images/quality-check.jpg", alt: "Qualitätskontrolle", label: "Qualität" },
  { src: "/images/packaging.jpg", alt: "Verpackung & Versand", label: "Versand" },
  { src: "/images/team-work.jpg", alt: "Unser Team", label: "Team" },
];

export default function Showcase() {
  return (
    <section className="py-14 md:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ein Blick in unsere <span className="gradient-text">Arbeit</span>
          </h2>
          <p className="text-white/50 text-sm">
            Von der Anlieferung bis zum Versand – Qualität in jedem Schritt.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {images.map((img) => (
            <div
              key={img.label}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/70 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
