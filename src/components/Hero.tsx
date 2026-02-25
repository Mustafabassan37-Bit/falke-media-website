import { ArrowRight, Shield, Recycle, Award, Star, MessageCircle, Smartphone, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-dark"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Falke-Media Remarketing
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Maximieren Sie den Wert Ihrer{" "}
              <span className="gradient-text">Used-IT</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg mb-6 max-w-lg leading-relaxed">
              Faire Preise für Ihre gebrauchten Smartphones, Tablets, Laptops, PCs
              und IT-Geräte. Zertifizierte Datenlöschung, nachhaltige Aufbereitung
              und Rückführung in den Wirtschaftskreislauf.
            </p>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Shield, text: "Zertifizierte Datenlöschung" },
                { icon: Star, text: "Grading A+ bis C" },
                { icon: Recycle, text: "Nachhaltig & Umweltschonend" },
                { icon: Award, text: "50.000+ Geräte/Jahr" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10"
                >
                  <item.icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-white/70 text-xs">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Angebot anfordern
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all backdrop-blur-sm border border-white/10"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Abstract Visual (no photo) */}
          <div className="hidden md:flex flex-col gap-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-white/50 text-xs">Geräte / Jahr</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">A+</div>
                <div className="text-white/50 text-xs">Premium Grading</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-white/50 text-xs">B2B-Partner</div>
              </div>
            </div>

            {/* Circular economy flow */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-semibold text-sm">Nachhaltige IT-Kreislaufwirtschaft</span>
              </div>
              <div className="flex items-center gap-2">
                {["Ankauf", "Datenlöschung", "Aufbereitung", "Grading", "Remarketing"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold text-primary-light">
                        {i + 1}
                      </div>
                      <span className="text-[10px] text-white/50 mt-1 whitespace-nowrap">{step}</span>
                    </div>
                    {i < 4 && (
                      <div className="w-4 h-px bg-primary/30 mb-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature cards row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl p-4 border border-primary/20">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-primary-light" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">DSGVO-konform</div>
                <div className="text-white/40 text-xs">Zertifizierte Datenlöschung aller Geräte</div>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm rounded-2xl p-4 border border-accent/20">
                <div className="flex items-center gap-1.5 mb-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">15+ Prüfpunkte</div>
                <div className="text-white/40 text-xs">Jedes Gerät wird umfassend getestet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
