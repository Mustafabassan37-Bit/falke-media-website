import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getImagePath } from "@/lib/basePath";

const highlights = [
  "Smartphones, Tablets, Laptops, PCs & IT-Geräte",
  "B2B-Partner für Händler in ganz Europa",
  "Nachhaltige Aufbereitung & Wiederverwendung",
  "DSGVO-konforme, zertifizierte Datenlöschung",
  "Transparentes Grading-System (A+ bis C)",
  "Rückführung in den Wirtschaftskreislauf",
];

const stats = [
  { value: "50K+", label: "Geräte / Jahr" },
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "200+", label: "B2B-Partner" },
  { value: "15+", label: "Teammitglieder" },
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={getImagePath("/images/team-work.jpg")}
                alt="Falke-Media Team"
                width={600}
                height={380}
                className="object-cover w-full h-[280px] md:h-[380px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 md:w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={getImagePath("/images/iphone-repair.jpg")}
                alt="Refurbishing"
                width={200}
                height={140}
                className="object-cover w-full h-[100px] md:h-[130px]"
              />
            </div>
            <div className="absolute top-4 -left-3 bg-primary text-white rounded-xl px-4 py-3 shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-[10px] text-white/80">Jahre</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Falke 2.0:{" "}
              <span className="gradient-text">Used-IT Remarketing</span>
            </h2>
            <p className="text-gray text-sm mb-5 leading-relaxed">
              Wir bieten faire Preise für Ihre Geräte und sorgen mit unserer
              zertifizierten Datenlöschung dafür, dass Ihre persönlichen
              Informationen sicher entfernt werden. Durch den Verkauf Ihrer
              gebrauchten Business-Hardware leisten Sie einen großen Beitrag
              zum Umweltschutz. Smartphones, Tablets, Laptops, PCs sowie
              sonstige IT-Geräte werden wiederaufbereitet und dem
              Wirtschaftskreislauf zurückgeführt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Inline Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                >
                  <div className="text-xl md:text-2xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-gray mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
