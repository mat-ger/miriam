import { PageContainer } from "@/components/page-container/page-container";
import { TeaserBanner } from "@/components/teaser-banner/teaser-banner";
import { TeaserNav } from "@/components/teaser-nav/teaser-nav";
import { FocusModule } from "@/components/workfocus/focus";
import { Offer, OfferCategory } from "@/components/offer/offer";
import { site } from "@/site";
import type { Metadata } from "next";

const services = [
  { name: "Systemische Psychotherapie", anchor: "Psychotherapie" },
  { name: "Systemische Paar- und Beziehungstherapie", anchor: "Beziehungstherapie" },
  { name: "Systemische Familientherapie", anchor: "Familientherapie" },
  { name: "Schwangerschaftsberatung", anchor: "Schwangerschaftsberatung" },
];

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@graph": [{
    "@id": `${site.url}/#praxis`,
    makesOffer: services.map(({ name, anchor }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        url: `${site.url}/#${anchor}`,
        provider: { "@id": `${site.url}/#praxis` },
      },
    })),
  }],
};

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
export default function Page() {
  return (
    <PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData).replace(/</g, "\\u003c") }}
      />
      <TeaserBanner
        image={"/banner_1024.jpg"}
        headline={"Miriam Gertz"}
        sublines={["Systemische Psychotherapeutin", "Psychologin"]}
        title={"Herzlich Willkommen"}
        text={
          "Als Psychotherapeutin in Wien begleite ich Erwachsene, Jugendliche, Paare, polyamore Beziehungskonstellationen und Familien in Krisen, herausfordernden Übergängen und Entwicklungsprozessen."
        }
      />
      <TeaserNav
        headline={"Mein Angebot"}
        items={[
          {
            title: "Psychotherapie",
            image: "/psychotherapie_320.jpg",
            imageAlt: "psychotherapie Symbolbild",
          },
          {
            title: "Beziehungstherapie",
            image: "/paartherapie_320.jpg",
            imageAlt: "Beziehungstherapie Symbolbild",
          },
          {
            title: "Familientherapie",
            image: "/familientherapie_320.jpg",
            imageAlt: "Familientherapie Symbolbild",
          },
          {
            title: "Schwangerschaftsberatung",
            image: "/schwangerschaftsberatung_320.jpg",
            imageAlt: "Schwangerschaftsberatung Symbolbild",
          },
        ]}
      />
      <FocusModule
        headline={"Arbeitsschwerpunkte"}
        items={[
          "Angst – Panik",
          "Belastende Lebenssituationen",
          "Beziehung(en) – Partnerschaft – Ehe",
          "Chronische Erkrankungen",
          "Depression",
          "Elternschaft – Co-Elternschaft – Patchwork",
          "Erschöpfung – Burnout",
          "Erwachsenwerden",
          "Familie",
          "Freundschaftskonflikte",
          "Geburt (Vorbereitung, Verarbeitung)",
          "Kinderwunsch",
          "Psychotische Störungen (Umgang mit psychotischen Erfahrungen)",
          "Schlafstörungen",
          "Schwangerschaft (Entscheidungen, Krisen, Begleitung)",
          "Schwangerschaftsverlust",
          "Selbstwert – Identität",
          "Sexualität",
          "Sinn – Sinnfindung",
          "Stress",
          "Trennung – Scheidung",
          "Übergangsphasen",
          "Verlust – Trauer",
        ]}
        text={
          "Dies ist nur eine Aufzählung meiner Schwerpunkte. Wenden Sie sich gern auch mit anderen Themen an mich und wir klären gemeinsam, ob eine Zusammenarbeit Ihrem Anliegen entsprechend sinnvoll ist. Ich arbeite im Einzel-, Paar- & Mehrpersonen-/Familiensetting."
        }
      />
      <Offer headline={"Psychotherapie"} image={"/psychotherapie_1024.jpg"}>
        <OfferCategory headline={"Systemische Psychotherapie"}>
          <p>
            <em>
              Systemische (Familien-)Therapie ist eine Form der Psychotherapie,
              die Gesundheit und Krankheit, Leiden und Wohlbefinden im
              Zusammenhang mit relevanten Beziehungen, mit dem Selbstbezug und
              den Lebenskonzepten von Menschen sieht. Wir verstehen
              Psychotherapie als Rahmen, in welchem Klient:innen unter
              Einbeziehung ihrer sozialen Lebenswelt in autonomer Weise gegebene
              Leidenszustände auflösen bzw. für sie passende Lösungen
              entwickeln.
            </em>
          </p>
          <p>
            <em>
              (Quelle: Homepage der Lehranstalt für Systemische
              Familientherapie, Mai 2024,{" "}
              <a href="https://www.lasf.at/ausbildung">
                https://www.lasf.at/ausbildung
              </a>
              )
            </em>
          </p>
          <p>
            Besonders wichtig ist es mir, Ihnen grundlegend mit{" "}
            <strong>Offenheit</strong> und <strong>Wertschätzung</strong> für
            Ihre Erfahrungen, Strategien und bisherigen Lösungsversuche zu
            begegnen.
          </p>
          <p>
            In der gemeinsamen Arbeit orientieren wir uns an Ihren Anliegen und
            Bedürfnissen. Daraus abgeleitete Ziele und Wünsche setzen als
            Wegweiser und Leuchtturm den Fokus der Therapie. Dabei ist es
            absolut in Ordnung, wenn Sie anfangs noch gar nicht so genau wissen,
            wohin Ihre Reise gehen soll, und auch, wenn Zielvorstellungen sich
            im Laufe der Zeit verändern.
          </p>
          <p>
            Methodisch arbeite ich hauptsächlich <strong>im Gespräch</strong>.
            Ergänzend biete ich - je nachdem was zu Ihnen und Ihrem Anliegen
            passt – symbolisierende, visualisierende und externalisierende
            Praktiken (Aufstellungen mit dem Systembrett, Timeline-Arbeiten,
            Zeichnen etc.) sowie ressourcenaktivierende und
            achtsamkeitsorientierte Imaginationsübungen an. Dabei sind eine
            konstruktivistische Grundhaltung und der narrative Ansatz besonders
            prägend für mein therapeutisches Angebot.
          </p>
        </OfferCategory>
        <OfferCategory headline={"Konstruktivismus"}>
          <p>
            Im Konstruktivismus (auch „Beobachtertheorie“ genannt) wird davon
            ausgegangen, dass wir Menschen die Welt unterschiedlich wahrnehmen –
            je nach dem, welche Bedeutung die Phänomene für uns haben. Das
            wiederum hängt von unseren Vorerfahrungen, der sozialen Position,
            der körperlichen Konstitution etc. ab. Bei Konflikten zwischen
            Einzelpersonen oder auch gesellschaftlichen Gruppen kann ziemlich
            deutlich werden, dass wir oft „in verschiedenen Welten“ leben – die
            uns allen jeweils „wirklich und wahr“ vorkommen.{" "}
            <strong>
              Wir brauchen ein Weltbild – wie eine Landkarte – , um uns zu
              orientieren und handlungsfähig zu sein.
            </strong>{" "}
            Psychotherapie ermöglicht es, sich mit dem eigenen Standort und der
            eigenen Landkarte, mit der Sie durchs Leben gehen,
            auseinanderzusetzen und sie gegebenenfalls zu aktualisieren. Darüber
            hinaus kann auch das Verständnis für die Karten der anderen wachsen.
          </p>
          <blockquote>
            <p>
              „The map is not the territory.”
              <br />
              {"\n"}(Alfred Korzybski)
            </p>
          </blockquote>
        </OfferCategory>
        <OfferCategory headline={"Narrativer Ansatz"}>
          <p>
            Die narrative Therapie (nach M. White, D. Epston, J. Freedman etc.)
            basiert auf der Beobachtung,{" "}
            <strong>
              dass wir Menschen unseren Leben durch Geschichten Bedeutung
              verleihen.
            </strong>{" "}
            Dabei gibt es über jedes Leben eine Vielzahl an Geschichten zu
            erzählen. Mit welchen Erzählungen wir unsere Identität eng
            verknüpfen und auf welche Art wir Geschichten, die andere über uns
            erzählen, annehmen, spielt eine große Rolle dafür, wie es uns geht.{" "}
            <strong>Diese Geschichten sind unsere Realität.</strong> Schwierige,
            vielleicht auch gewaltvolle Erfahrungen können als solche nicht
            aufgelöst werden. Das narrative Arbeiten ermöglicht jedoch, sie auf
            passende und ressourcen-aktivierende Weise in die eigene
            Lebensgeschichte einzuordnen und so zu mehr Ruhe zu kommen.
            <br />
            {"\n"}Relevant für die Art und Weise, wie wir uns erzählen, sind
            auch <strong>gesellschaftliche Diskurse</strong> über soziale
            Gruppen, zu denen wir gehören, und{" "}
            <strong>kulturelle Wertvorstellungen.</strong> Gern möchte ich Sie
            dabei begleiten, Ihre hilfreichen und stärkenden Geschichten
            (wieder) zu finden und lebendig werden zu lassen.
          </p>
          <blockquote>
            <p>
              „The person is not the problem. The problem is the problem.”
              <br />
              {"\n"}(Michael White)
            </p>
          </blockquote>
        </OfferCategory>
      </Offer>
      <Offer headline={"Beziehungstherapie"} image={"/paartherapie_1024.jpg"}>
        <OfferCategory headline={"Systemische Paar- und Beziehungstherapie"}>
          <p>
            Manchmal ist es schwierig, als Beziehungspartner:innen Veränderung
            in festgefahrene Konfliktmuster und Rollen zu bringen. Ich
            unterstütze Sie gern dabei, sich anders als bisher mit Ihren
            Mustern, Spannungen und Belastungen auseinanderzusetzen und dabei
            neue Handlungsspielräume und Wege zu entdecken.
          </p>
          <p>
            Themen für systemische Paar- und Beziehungstherapie können z.B.
            folgende sein:
          </p>
          <ul>
            <li>
              <p>Spannung und Streit</p>
            </li>
            <li>
              <p>
                Aushandlungen rund um Nähe – Distanz, Autonomie – Gemeinsamkeit
              </p>
            </li>
            <li>
              <p>
                aktuelle oder vergangene Loyalitätsbrüche und damit verbundene
                Kränkungen
              </p>
            </li>
            <li>
              <p>Problemstellungen in der Intimität und Sexualität</p>
            </li>
            <li>
              <p>
                Belastungen durch (unerfüllten/ unterschiedlichen) Kinderwunsch,
                fehlgeschlagene IVF-Behandlung(en)
              </p>
            </li>
            <li>
              <p>Bewältigung kritischer oder traumatischer Lebensereignisse</p>
            </li>
            <li>
              <p>
                Ungelöste Fragen der Gerechtigkeitsbalance zwischen den
                Partner:innen
              </p>
            </li>
            <li>
              <p>
                Ungelöste Entscheidungsfragen rund um eine gemeinsame Zukunft
              </p>
            </li>
            <li>
              <p>Umgang mit individuellen Leidenszuständen</p>
            </li>
            <li>
              <p>
                Fragen und Konflikte im Kontext von Elternschaft/ Co-Parenting
              </p>
            </li>
            <li>
              <p>
                Fragen rund um polyamore und offene Beziehungen, Aushandlung der
                gemeinsamen Beziehungsform
              </p>
            </li>
            <li>
              <p>etc.</p>
            </li>
          </ul>
          <p>
            Aus der Paartherapieforschung ist bekannt, dass die Erfolgschancen
            einer Therapie oder Beratung umso höher sind, je früher sich
            Beziehungspartner:innen dafür entscheiden, Unterstützung in Anspruch
            zu nehmen. Im Paar- und Mehrpersonensetting arbeite ich in Einheiten
            à 90 Min..
          </p>
          <p>
            Selbstverständlich sind Menschen aus Beziehungskonstellationen aller
            Art bei mir herzlich willkommen - ob monogam, polyamor, offen,
            patchwork, co-parenting oder ohne Label, cis und heterosexuell oder
            aus dem LGBTQIA+-Spektrum. Ich freue mich über Ihre Kontaktaufnahme!
          </p>
        </OfferCategory>
      </Offer>
      <Offer headline={"Familientherapie"} image={"/familientherapie_1024.jpg"}>
        <OfferCategory headline={"Systemische Familientherapie"}>
          <p>
            Üblicherweise wird Psychotherapie im Einzelsetting in Anspruch
            genommen. Ich möchte Sie einladen, zu überlegen, ob Ihre Probleme
            oder Symptome mit anderen wichtigen Menschen zusammenhängen und ob
            es Personen gibt, mit denen Sie gemeinsam Lösungen und neue
            Perspektiven entwickeln könnten.
          </p>
          <p>
            Familientherapie kann hilfreich sein, wenn Eltern sich unsicher
            fühlen in Bezug auf die Entwicklung des Kindes oder sich Sorgen um
            ihr Kind/ ihre Kinder machen. Ebenso kann der Ausgangspunkt sein,
            dass es aus Perspektive des Kindes Schwierigkeiten mit den Eltern
            oder der Beziehungssituation der Eltern gibt. Familientherapie
            bietet zudem einen anderen Gesprächsrahmen, wenn es häufig Streit
            zwischen Familienmitgliedern gibt oder kaum noch miteinander geredet
            wird. Ebenso kann sich das Anliegen auf die Bewältigung eines
            gemeinsamen Verlusts oder die Trauer über eine Krankheit beziehen.
            Wenn Sie unsicher sind, ob Ihr Thema passend für eine
            Familientherapie ist, wenden Sie sich gern an mich.
          </p>
          <p>
            Bei den Personen, die gemeinsam in Therapie kommen, kann es sich um
            Eltern und Kinder, um Geschwister oder anderweitig Verwandte oder
            auch um Konstellationen handeln, die nicht im herkömmlichen Sinn
            unter „Familie“ fallen.
            <br />
            {"\n"}Wichtig ist, dass Sie durch für Sie relevante Beziehungen
            miteinander verbunden sind.
          </p>
          <p>
            Wer bei einer Familientherapie persönlich anwesend ist, kann sich im
            Laufe der Sitzungen je nach Anliegen und Motivation der Einzelnen
            verändern.
          </p>
        </OfferCategory>
      </Offer>
      <Offer
        headline={"Schwangerschaftsberatung"}
        image={"/schwangerschaftsberatung_1024.jpg"}
      >
        <OfferCategory headline={"SCHWANGERSCHAFTS(KONFLIKT)BERATUNG"}>
          <p>
            Eine ungeplante oder ungewollte Schwangerschaft ist für viele
            Menschen eine große Herausforderung. Viele ungewollt Schwangere
            haben Gesprächsbedarf mit einem unbeteiligten, wertschätzenden
            Gegenüber, um sich über ihre Gedanken, Gefühle und Wünsche klar zu
            werden.
            <br />
            {"\n"}Zudem tauchen oft Fragen und Sorgen auf, zu denen
            Informationen gebraucht werden, um eine gute Entscheidung für sich
            finden zu können.
            <br />
            {"\n"}Ich unterstütze Sie gern neutral und offen dabei, Ihrer
            persönlichen Entscheidung näher zu kommen. Bei Bedarf gebe ich auch
            Informationen dazu, welche Möglichkeiten es zum
            Schwangerschaftsabbruch in Wien gibt bzw. welche
            Unterstützungsmöglichkeiten bei Fortführung einer Schwangerschaft
            zugänglich sind.
            <br />
            {"\n"}Bei akutem Zeitdruck zur Entscheidungsfindung bemühe ich mich,
            Ihnen einen möglichst zeitnahen Beratungstermin anzubieten.
            <br />
            {"\n"}Sie können die Beratung auch als Paar in Anspruch nehmen.
            Wichtig ist mir jedoch, dass die Entscheidung über Beendigung oder
            Fortführung einer Schwangerschaft bei der Frau bzw. schwangeren
            Person liegt.
          </p>
          <p>Psychotherapeutische Begleitung biete ich auch bei</p>
          <ul>
            <li>Krisen und Ängsten in gewollten Schwangerschaften</li>
            <li>kritischen Diagnosen im Rahmen der Pränataldiagnostik</li>
            <li>Schwangerschaftsverlust</li>
            <li>
              der Integration schwieriger und traumatischer Geburten und Krisen
              nach der Geburt
            </li>
            <li>Kinderwunschprozessen</li>
            <li>etc.</li>
          </ul>
        </OfferCategory>
      </Offer>
    </PageContainer>
  );
}
