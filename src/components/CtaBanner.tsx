import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              iPhones verkaufen? Angebot in <span className="text-accent">24 Stunden</span>
            </h2>
            <p className="text-white/70 text-sm">
              Senden Sie uns Fotos per WhatsApp – wir bewerten Ihre Geräte und machen Ihnen ein faires Angebot. Egal ob 10 oder 10.000 Geräte.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Angebot
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Kontakt
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
