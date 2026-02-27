import Link from "next/link";
import FalkeLogo from "./FalkeLogo";

const quickLinks = [
  { label: "Startseite", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Prozess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <FalkeLogo className="w-10 h-10" />
              <div className="flex items-baseline gap-0.5">
                <span className="text-white font-bold text-xl">Falke</span>
                <span className="text-primary-light font-bold text-xl">
                  -Media
                </span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Maximieren Sie den Wert Ihrer Used-IT. Faire Preise,
              zertifizierte Datenlöschung und nachhaltige Rückführung
              in den Wirtschaftskreislauf.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quicklinks</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontakt Info</h3>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Max-Planck-Str. 7, 59423 Unna</li>
              <li>Mo–Fr, 08:00 – 17:00 Uhr</li>
              <li>+49 152 01452386</li>
              <li>sahin@prs-germany.de</li>
              <li>USt-IdNr: DE292047594</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Falke-Media. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
