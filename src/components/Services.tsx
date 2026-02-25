import {
  Smartphone,
  Sparkles,
  ShieldCheck,
  Truck,
  Wrench,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "IT-Geräte Ankauf",
    desc: "Smartphones, Tablets, Laptops, PCs & IT-Geräte – faire Preise, schnelle Bewertung.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Reinigung & Aufbereitung",
    desc: "Professionelle Reinigung, Desinfektion und kosmetische Aufbereitung aller Geräte.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Wrench,
    title: "Refurbishing & Grading",
    desc: "Technische Prüfung, Reparatur und transparentes Grading von A+ bis C.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Zertifizierte Datenlöschung",
    desc: "DSGVO-konforme Datenlöschung – Ihre persönlichen Daten werden sicher entfernt.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Truck,
    title: "B2B Handel & Versand",
    desc: "Zuverlässiger Partner für Großhändler und Shopbetreiber europaweit.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: BarChart3,
    title: "Remarketing",
    desc: "Wiederaufbereitete Geräte zurück in den Wirtschaftskreislauf – nachhaltig & profitabel.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Von Ankauf bis{" "}
            <span className="gradient-text">Remarketing</span>
          </h2>
          <p className="text-gray max-w-xl mx-auto">
            Der komplette IT-Remarketing-Prozess aus einer Hand – von Smartphones bis PCs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card group bg-white rounded-xl p-6 border border-gray-200/50 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-lg ${s.color} flex items-center justify-center shrink-0`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1">{s.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
