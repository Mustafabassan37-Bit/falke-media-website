import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "AGB | Falke-Media",
};

export default function AGB() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-gray text-sm mb-8">
            der Firma Falke Media, Ibrahim Sahin, Max-Planck-Str. 7, 59423 Unna
            (nachfolgend &bdquo;Falke Media&ldquo; oder &bdquo;Ankäufer&ldquo;)
          </p>

          <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed">
            {/* § 1 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 1 Geltungsbereich
              </h2>
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend
                &bdquo;AGB&ldquo;) gelten für alle Geschäftsbeziehungen
                zwischen Falke Media und dem Verkäufer (nachfolgend
                &bdquo;Verkäufer&ldquo; oder &bdquo;Kunde&ldquo;), soweit
                nicht etwas anderes ausdrücklich schriftlich vereinbart ist.
              </p>
              <p>
                (2) Falke Media richtet sich ausschließlich an gewerbliche
                Kunden (B2B) im Sinne des § 14 BGB. Mit Abgabe eines
                Angebots oder einer Bestellung bestätigt der Verkäufer,
                dass er als Unternehmer handelt.
              </p>
              <p>
                (3) Abweichende, entgegenstehende oder ergänzende
                Geschäftsbedingungen des Verkäufers werden nicht
                Vertragsbestandteil, es sei denn, Falke Media stimmt ihrer
                Geltung ausdrücklich schriftlich zu.
              </p>
              <p>
                (4) Diese AGB gelten auch für alle zukünftigen
                Geschäftsbeziehungen, selbst wenn sie nicht nochmals
                ausdrücklich vereinbart werden.
              </p>
            </section>

            {/* § 2 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 2 Vertragsgegenstand
              </h2>
              <p>
                (1) Falke Media kauft gebrauchte IT-Geräte an, darunter
                insbesondere Smartphones, Tablets, Laptops, PCs sowie
                sonstige IT-Hardware (nachfolgend &bdquo;Geräte&ldquo;).
              </p>
              <p>
                (2) Die angekauften Geräte werden von Falke Media einer
                zertifizierten Datenlöschung, Aufbereitung, Prüfung und
                einem Grading unterzogen und anschließend im Rahmen des
                Remarketing weiterveräußert.
              </p>
            </section>

            {/* § 3 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 3 Angebot und Vertragsschluss
              </h2>
              <p>
                (1) Die Preisangaben von Falke Media stellen unverbindliche
                Richtpreise dar und sind freibleibend. Ein verbindliches
                Angebot wird erst nach Prüfung und Bewertung der Geräte
                durch Falke Media abgegeben.
              </p>
              <p>
                (2) Der Vertrag kommt zustande, wenn Falke Media dem
                Verkäufer nach Prüfung der Geräte ein verbindliches Angebot
                unterbreitet und der Verkäufer dieses annimmt, oder wenn
                Falke Media die Annahme eines Angebots des Verkäufers
                schriftlich bestätigt.
              </p>
              <p>
                (3) Falke Media behält sich das Recht vor, Angebote
                jederzeit zurückzuziehen, sofern der Verkäufer diese noch
                nicht angenommen hat.
              </p>
            </section>

            {/* § 4 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 4 Zustandsbewertung und Grading
              </h2>
              <p>
                (1) Alle eingehenden Geräte werden von Falke Media einer
                umfassenden optischen und technischen Prüfung unterzogen.
                Die Bewertung erfolgt nach dem internen Grading-System von
                Falke Media (Grade A+ bis C).
              </p>
              <p>
                (2) Die Bewertung umfasst unter anderem: optischen Zustand,
                Funktionalität aller Komponenten (Display, Kamera, Akku,
                Sensoren, Anschlüsse), Software-Zustand sowie das Vorliegen
                von Sperren (iCloud, Google-Account, MDM, IMEI-Blacklist
                etc.).
              </p>
              <p>
                (3) Weicht der tatsächliche Zustand der Geräte von der
                Beschreibung des Verkäufers ab, ist Falke Media berechtigt,
                den Ankaufpreis entsprechend anzupassen oder vom Ankauf
                zurückzutreten.
              </p>
              <p>
                (4) Die Bewertung durch Falke Media ist maßgeblich und
                verbindlich. Der Verkäufer wird über etwaige Abweichungen
                informiert und erhält ein angepasstes Angebot.
              </p>
            </section>

            {/* § 5 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 5 Preise und Zahlung
              </h2>
              <p>
                (1) Alle Preise verstehen sich in Euro netto zuzüglich der
                gesetzlichen Umsatzsteuer, sofern nicht anders angegeben.
              </p>
              <p>
                (2) Die Zahlung erfolgt nach Prüfung und endgültiger
                Annahme der Geräte durch Falke Media. Die Auszahlung
                erfolgt per Banküberweisung auf das vom Verkäufer
                angegebene Konto innerhalb von 14 Werktagen nach
                Vertragsschluss.
              </p>
              <p>
                (3) Falke Media ist zur Aufrechnung mit Gegenforderungen
                berechtigt, sofern diese unbestritten oder rechtskräftig
                festgestellt sind.
              </p>
            </section>

            {/* § 6 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 6 Eigentumsübergang und Gefahrtragung
              </h2>
              <p>
                (1) Das Eigentum an den verkauften Geräten geht mit
                Annahme und vollständiger Zahlung des Kaufpreises durch
                Falke Media auf Falke Media über.
              </p>
              <p>
                (2) Die Gefahr des zufälligen Untergangs und der
                zufälligen Verschlechterung der Geräte geht mit
                Übergabe an Falke Media bzw. an den von Falke Media
                beauftragten Transportdienstleister auf Falke Media über.
              </p>
              <p>
                (3) Bei Versand durch den Verkäufer trägt dieser das
                Versandrisiko bis zum Eingang der Geräte bei Falke Media.
                Falke Media empfiehlt eine versicherte Versandart.
              </p>
            </section>

            {/* § 7 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 7 Zusicherungen des Verkäufers
              </h2>
              <p>
                (1) Der Verkäufer sichert zu, dass er alleiniger und
                uneingeschränkter Eigentümer der angebotenen Geräte ist
                und diese frei von Rechten Dritter sind.
              </p>
              <p>
                (2) Der Verkäufer sichert zu, dass die Geräte nicht
                gestohlen, unterschlagen oder auf sonstige rechtswidrige
                Weise erlangt wurden.
              </p>
              <p>
                (3) Der Verkäufer sichert zu, dass die Geräte nicht mit
                Aktivierungssperren (z.B. iCloud-Sperre, Google-Account-
                Sperre, MDM-Profile) versehen sind, es sei denn, dies
                wurde ausdrücklich mitgeteilt.
              </p>
              <p>
                (4) Der Verkäufer sichert zu, dass keine IMEI-Sperre
                oder Blacklisting vorliegt.
              </p>
              <p>
                (5) Der Verkäufer haftet für die Richtigkeit seiner
                Angaben zum Zustand der Geräte. Bei Verletzung der
                vorstehenden Zusicherungen haftet der Verkäufer für alle
                daraus resultierenden Schäden und stellt Falke Media von
                Ansprüchen Dritter frei.
              </p>
            </section>

            {/* § 8 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 8 Datenlöschung
              </h2>
              <p>
                (1) Falke Media führt bei allen angekauften Geräten eine
                zertifizierte Datenlöschung gemäß den Anforderungen der
                DSGVO und geltenden datenschutzrechtlichen Vorschriften
                durch.
              </p>
              <p>
                (2) Der Verkäufer ist verpflichtet, vor der Übergabe der
                Geräte an Falke Media alle persönlichen Daten, Konten
                und Aktivierungssperren eigenständig zu entfernen. Falke
                Media übernimmt keine Haftung für Datenverlust oder
                -missbrauch, der vor der Übergabe an Falke Media
                entstanden ist.
              </p>
              <p>
                (3) Auf Wunsch stellt Falke Media dem Verkäufer ein
                Löschzertifikat aus, das die ordnungsgemäße und
                unwiderrufliche Datenlöschung bestätigt.
              </p>
              <p>
                (4) Nach erfolgter Datenlöschung durch Falke Media ist
                eine Wiederherstellung der gelöschten Daten
                ausgeschlossen. Falke Media haftet nicht für Daten, die
                vom Verkäufer vor Übergabe nicht gesichert wurden.
              </p>
            </section>

            {/* § 9 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 9 Gewährleistung und Haftung
              </h2>
              <p>
                (1) Falke Media haftet nach den gesetzlichen Bestimmungen,
                sofern der Verkäufer Schadensersatzansprüche geltend macht,
                die auf Vorsatz oder grober Fahrlässigkeit beruhen. Bei
                leichter Fahrlässigkeit haftet Falke Media nur bei
                Verletzung wesentlicher Vertragspflichten
                (Kardinalpflichten).
              </p>
              <p>
                (2) Die Haftung bei Verletzung von Kardinalpflichten ist
                auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p>
                (3) Die vorstehenden Haftungsbeschränkungen gelten nicht
                bei Verletzung von Leben, Körper und Gesundheit, für
                Ansprüche nach dem Produkthaftungsgesetz sowie bei arglistig
                verschwiegenen Mängeln.
              </p>
              <p>
                (4) Falke Media übernimmt keine Gewährleistung für
                versteckte Mängel an weiterverkauften Geräten, die bei der
                Prüfung nicht erkennbar waren, sofern die Prüfung mit
                branchenüblicher Sorgfalt durchgeführt wurde.
              </p>
            </section>

            {/* § 10 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 10 Rücktritt und Rückgabe
              </h2>
              <p>
                (1) Ein gesetzliches Widerrufsrecht besteht bei B2B-
                Geschäften nicht. Der Ankauf durch Falke Media ist nach
                Annahme und Bestätigung verbindlich.
              </p>
              <p>
                (2) Falke Media ist berechtigt, vom Vertrag zurückzutreten,
                wenn:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  der Zustand der Geräte wesentlich von der Beschreibung
                  des Verkäufers abweicht,
                </li>
                <li>
                  Aktivierungssperren, IMEI-Sperren oder sonstige
                  Einschränkungen vorliegen, die nicht mitgeteilt wurden,
                </li>
                <li>
                  der Verdacht besteht, dass die Geräte aus rechtswidrigen
                  Quellen stammen,
                </li>
                <li>
                  der Verkäufer seine Zusicherungen gemäß § 7 verletzt hat.
                </li>
              </ul>
              <p>
                (3) Im Falle eines Rücktritts durch Falke Media werden die
                Geräte auf Kosten des Verkäufers zurückgesandt, sofern die
                Rücktrittsgründe in der Sphäre des Verkäufers liegen.
              </p>
            </section>

            {/* § 11 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 11 Versand und Transport
              </h2>
              <p>
                (1) Sofern nicht anders vereinbart, erfolgt der Versand
                der Geräte an Falke Media auf Kosten und Risiko des
                Verkäufers.
              </p>
              <p>
                (2) Bei größeren Mengen kann Falke Media eine Abholung
                durch einen beauftragten Logistikpartner anbieten. Die
                Kosten hierfür werden individuell vereinbart.
              </p>
              <p>
                (3) Der Verkäufer hat die Geräte transportsicher zu
                verpacken. Falke Media haftet nicht für Transportschäden,
                die auf unsachgemäße Verpackung zurückzuführen sind.
              </p>
            </section>

            {/* § 12 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 12 Vertraulichkeit
              </h2>
              <p>
                (1) Beide Parteien verpflichten sich, alle im Rahmen der
                Geschäftsbeziehung erlangten vertraulichen Informationen
                vertraulich zu behandeln und nicht an Dritte weiterzugeben.
              </p>
              <p>
                (2) Diese Verpflichtung gilt nicht für Informationen, die
                öffentlich bekannt sind, von Dritten rechtmäßig erlangt
                wurden oder aufgrund gesetzlicher Verpflichtungen
                offengelegt werden müssen.
              </p>
            </section>

            {/* § 13 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 13 Compliance und Sorgfaltspflichten
              </h2>
              <p>
                (1) Falke Media führt bei jedem Ankauf eine
                Identitätsprüfung des Verkäufers durch. Der Verkäufer ist
                verpflichtet, sich auf Verlangen gegenüber Falke Media
                auszuweisen.
              </p>
              <p>
                (2) Falke Media ist berechtigt, die IMEI-Nummern der
                angekauften Geräte in einschlägigen Datenbanken zu
                überprüfen. Geräte mit gesperrter IMEI werden nicht
                angekauft.
              </p>
              <p>
                (3) Falke Media behält sich vor, bei Verdacht auf Hehlerei
                oder sonstige Straftaten die zuständigen Behörden zu
                informieren.
              </p>
            </section>

            {/* § 14 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 14 Datenschutz
              </h2>
              <p>
                Die Erhebung und Verarbeitung personenbezogener Daten im
                Rahmen der Geschäftsbeziehung erfolgt gemäß den geltenden
                datenschutzrechtlichen Bestimmungen, insbesondere der
                DSGVO. Einzelheiten können unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung
                </Link>{" "}
                entnommen werden.
              </p>
            </section>

            {/* § 15 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 15 Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                (1) Für alle Rechtsbeziehungen zwischen Falke Media und
                dem Verkäufer gilt ausschließlich das Recht der
                Bundesrepublik Deutschland unter Ausschluss des
                UN-Kaufrechts (CISG).
              </p>
              <p>
                (2) Gerichtsstand für alle Streitigkeiten aus oder im
                Zusammenhang mit der Geschäftsbeziehung ist Unna, sofern
                der Verkäufer Kaufmann, juristische Person des öffentlichen
                Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>

            {/* § 16 */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                § 16 Salvatorische Klausel
              </h2>
              <p>
                (1) Sollten einzelne Bestimmungen dieser AGB unwirksam oder
                undurchführbar sein oder werden, so wird dadurch die
                Wirksamkeit der übrigen Bestimmungen nicht berührt.
              </p>
              <p>
                (2) An die Stelle der unwirksamen oder undurchführbaren
                Bestimmung tritt diejenige wirksame und durchführbare
                Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen
                oder undurchführbaren Bestimmung am nächsten kommt.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-500 text-xs">
                Stand: Februar 2026 &middot; Falke Media, Ibrahim Sahin,
                Max-Planck-Str. 7, 59423 Unna
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
