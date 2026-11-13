import { AboutBanner, Career, CareerSection, TrainingDetails } from "@/components/content-blocks";
import { pageMetadata } from "@/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata("Über mich", "Erfahren Sie mehr über Miriam Gertz, Psychotherapeutin und Psychologin in Wien, ihre Erfahrung und Ausbildung.", "/about");

export default function Page() {
  return (
    <div className={styles.page}>
      <AboutBanner>
        <p>Mein Name ist Miriam Gertz<br />{"\n"}Ich bin <strong>Psychotherapeutin, Psychologin</strong> (MSc) und <strong>Familienplanungsberaterin</strong> (ÖGF).</p>
        <p>In 1160 Wien biete ich systemische Psychotherapie und Beratung an. Ich bin in Süddeutschland geboren, in Norddeutschland in Ostseenähe aufgewachsen, lebe seit 2011 in Wien West und bin Mutter zweier Kinder.</p>
      </AboutBanner>
      <Career>
        <CareerSection headline="PRAXISERFAHRUNG & TÄTIGKEITSBEREICHE">
          <ul>
            <li><strong>Hebammenzentrum Wien</strong> laufende Tätigkeit als psychologische Beraterin <a href="https://www.hebammenzentrum.at/verein/team">(Link)</a></li>
            <li><strong>Universität Wien</strong> laufende Tätigkeit als Lehrende im Fach Qualitative Forschungsmethoden in der Psychologie. <a href="https://psychologie.univie.ac.at/ueber-uns/mitarbeiterinnen/details/user/gertzm35/inum/1109/backpid/9734/">(Link)</a></li>
            <li><strong>Universitätsklinikum Tulln</strong> Praktikum in der Abteilung für stationäre Psychotherapie</li>
            <li><strong>Therapieambulanz AST</strong> Praktikum im therapeutischen Team</li>
            <li><strong>Verein LOK Leben ohne Krankenhaus</strong> Betreuung in einem sozialpsychiatrischen Beschäftigungsprojekt</li>
            <li><strong>Projekt miteinander.Bildung.leben (FH Campus Wien)</strong> psychosoziale Beratung und Begleitung sowie Bildungsberatung von Menschen mit Fluchterfahrung</li>
            <li><strong>pro:woman (Ambulatorium am Fleischmarkt)</strong> Entscheidungsberatung bei „Schwangerschaftskonflikten“, Begleitung durch den Schwangerschaftsabbruch, Nachbetreuung</li>
            <li><strong>FEM Frauengesundheitszentrum Wien</strong> Praktikum im Rahmen des Psychologiestudiums</li>
            <li><strong>Universität Wien (Psychologische Fakultät)</strong> Studienassistenz bei Prof. Dr. Slunecko und Dr.in Riegler</li>
            <li><strong>Weltweite Initiative für soziales Engagement e.V.</strong> Freiwilligendienst in psychosozialen und pädagogischen Projekten in Bolivien</li>
          </ul>
        </CareerSection>
        <CareerSection headline="WORKSHOPS & VORTRÄGE">
          <p>Ich halte gern und regelmäßig Workshops und bei Gelegenheit auch Vorträge. Fragen Sie mich bei Interesse gern an! Eine Auswahl bisheriger Tätigkeiten:</p>
          <ul>
            <li>Empowerment-Mädchenworkshops der Stadt Wien <a href="https://www.wien.gv.at/frauen/girl-power-workshops">(Link)</a></li>
            <li>Umgang mit sexualisierten Übergriffen im Kontext ehrenamtlicher Besuchsdienste (Verein Jung &amp; Alt – Generationen im Dialog)</li>
            <li>Reproduktive Selbstbestimmung in der Arbeit von Hebammen und verwandten Berufsfeldern (Hebammenzentrum Wien)</li>
            <li>Vortrag: „Zwischen Stigma-Management und Autonomieerleben: feministisch-psychologische Perspektiven auf Abtreibungserfahrungen im sozialen Kontext“ <a href="http://www.psygyn.at/tagungen/symposium.html">(Link)</a></li>
          </ul>
        </CareerSection>
        <CareerSection headline="PUBLIKATIONEN">
          <div className={styles.publications}>
            <p>Gertz, M. (2025). Abtreibungserfahrungen im Kontext einer umkämpften Geschlechterordnung. Eine kulturpsychologisch-systemische Betrachtung. Systemische Notizen. 2(2025).</p>
            <p>Gertz, M. (2019). Zwischen Stigmatisierung und Autonomieerleben. Abtreibung aus feministisch-psychologischer Perspektive, in: Frauenservice Wien (Hrsg.), Frauen.Wissen.Wien. Nr. 9: Schwangerschaftsabbruch im gesellschaftlichen Diskurs, S.61-77.</p>
            <p>Malzer-Gertz,M. &amp; Gertz, M. (2018). Schwierige Situationen in der Anfangsphase, in: Kirsten von Sydow, Ulrike Borst (Hrsg.), Systemische Therapie in der Praxis. Weinheim: Beltz.</p>
            <p>Malzer-Gertz, M. &amp; Gertz, M. (2018). Reguläre Therapiebeendigung und Behandlungsabbrüche, in: Kirsten von Sydow, Ulrike Borst (Hrsg.), Systemische Therapie in der Praxis. Weinheim: Beltz.</p>
          </div>
        </CareerSection>
        <CareerSection headline="AUSBILDUNG & WEITERBILDUNG">
          <ul>
            <li><strong>2026</strong> Abschluss Psychotherapeutisches Fachspezifikum (Lehranstalt für systemische Familientherapie Wien) <a href="http://www.LASF.at">(Link)</a></li>
            <li><strong>2022</strong> Abschluss Psychotherapeutisches Propädeutikum (APG Wien)</li>
            <li><strong>2019</strong> Abschluss Masterstudium Psychologie (Universität Wien)</li>
            <li><strong>2019</strong> Intensiv-Lehrgang zur Familienplanungsberaterin (ÖGF Wien)</li>
            <li><strong>2011/ 2012</strong> Bachelorstudium Internationale Entwicklung (Universität Wien, ohne Abschluss)</li>
          </ul>
        </CareerSection>
      </Career>
      <TrainingDetails>
        <p>Ich absolviere neben den Ausbildungskursen laufend Fortbildungen in verschiedenen Bereichen.</p>
        <h4>Themenbereiche bisheriger Fortbildungen:</h4>
        <p>Narrative Therapie, Kinderschutz, Geburtsvorbereitung, Entscheidungen und Verlustergebnisse rund um Schwangerschaft mit besonderer Berücksichtigung der Pränataldiagnostik, Beratung und Begleitung für Familien nach medizinisch assistierter Reproduktion, Frauengesundheit, Psychische Herausforderungen nach der Geburt, Schwangerschaftsabbruch, Erste Hilfe bei psychiatrischem Klientel, hypnosystemische Krisenintervention uvm.</p>
      </TrainingDetails>
    </div>
  );
}