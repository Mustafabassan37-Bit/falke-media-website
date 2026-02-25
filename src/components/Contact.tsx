import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Nehmen Sie <span className="gradient-text">Kontakt</span> auf
          </h2>
          <p className="text-gray text-sm max-w-lg mx-auto">
            iPhones verkaufen oder kaufen? Wir machen Ihnen ein Angebot.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Contact Info - narrower */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-sm mb-4">Kontaktdaten</h3>
              <div className="space-y-3">
                {[
                  { icon: MapPin, label: "Musterstraße 1, 12345 Musterstadt" },
                  { icon: Phone, label: "+49 123 456 7890" },
                  { icon: Mail, label: "info@falke-media.de" },
                  { icon: MessageCircle, label: "WhatsApp: +49 123 456 7890" },
                  { icon: Clock, label: "Mo–Fr, 08:00 – 17:00 Uhr" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-gray">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-5 text-white">
              <h3 className="font-bold text-sm mb-2">Schnelles Angebot per WhatsApp</h3>
              <p className="text-white/70 text-xs mb-3">
                Fotos senden & sofort Angebot erhalten.
              </p>
              <a
                href="https://wa.me/491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary text-xs font-semibold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp öffnen
              </a>
            </div>
          </div>

          {/* Contact Form - wider */}
          <div className="md:col-span-3 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-sm mb-4">Nachricht senden</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1">Vorname</label>
                  <input
                    type="text"
                    placeholder="Max"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Nachname</label>
                  <input
                    type="text"
                    placeholder="Mustermann"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1">E-Mail</label>
                  <input
                    type="email"
                    placeholder="max@firma.de"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Firma</label>
                  <input
                    type="text"
                    placeholder="Ihre Firma GmbH"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Nachricht</label>
                <textarea
                  rows={3}
                  placeholder="Ihre Nachricht..."
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
