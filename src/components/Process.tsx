import { getImagePath } from "@/lib/basePath";

const steps = [
  {
    num: "01",
    title: "Ankauf",
    desc: "Bewertung & faire Preise",
    image: "/images/iphone-stack.jpg",
  },
  {
    num: "02",
    title: "Reinigung",
    desc: "Desinfektion & Aufbereitung",
    image: "/images/cleaning.jpg",
  },
  {
    num: "03",
    title: "Refurbishing",
    desc: "Reparatur & Funktionstest",
    image: "/images/iphone-repair.jpg",
  },
  {
    num: "04",
    title: "Grading",
    desc: "Qualität A+ bis C bewerten",
    image: "/images/quality-check.jpg",
  },
  {
    num: "05",
    title: "Versand",
    desc: "Verpackung & B2B-Lieferung",
    image: "/images/packaging.jpg",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Unser <span className="gradient-text">Refurbishing-Prozess</span>
          </h2>
          <p className="text-gray max-w-xl mx-auto">
            In 5 Schritten vom gebrauchten iPhone zum hochwertigen Refurbished-Gerät.
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden mb-3 aspect-[4/3]">
                <img
                  src={getImagePath(step.image)}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-dark/10" />
                <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold">
                  {step.num}
                </div>
              </div>
              {/* Text */}
              <h3 className="font-bold text-sm mb-0.5">{step.title}</h3>
              <p className="text-gray text-xs">{step.desc}</p>
              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-2.5 text-primary/30 text-xl z-10">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Grading Info Bar */}
        <div className="mt-10 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl p-6 border border-primary/10">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-1">Unser Grading-System</h3>
              <p className="text-gray text-sm">Transparente Bewertung jedes Geräts</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { grade: "A+", label: "Wie neu", desc: "Keine sichtbaren Gebrauchsspuren", color: "bg-emerald-500" },
                { grade: "A", label: "Sehr gut", desc: "Minimale Gebrauchsspuren", color: "bg-emerald-400" },
                { grade: "B", label: "Gut", desc: "Leichte Gebrauchsspuren", color: "bg-amber-400" },
                { grade: "C", label: "Akzeptabel", desc: "Deutliche Gebrauchsspuren", color: "bg-orange-400" },
              ].map((g) => (
                <div key={g.grade} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full ${g.color}`} />
                    <span className="font-bold text-sm">Grade {g.grade}</span>
                  </div>
                  <div className="text-xs font-medium text-foreground">{g.label}</div>
                  <div className="text-[11px] text-gray">{g.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
