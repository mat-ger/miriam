import Image from "next/image";
import { ResponsiveImage } from "@/components/image/responsive-image";
import { BigBox } from "@/components/big-box/big-box";
import { LegalContact, PracticeAddress } from "@/components/contact-content";
import { PageContainer } from "@/components/page-container/page-container";
import { site } from "@/site";
import { pageMetadata } from "@/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata("Kontakt & Praxis", "Kontaktieren Sie Miriam Gertz für systemische Psychotherapie und Beratung in 1160 Wien.", "/contact");

export default function Page() {
  return (
    <PageContainer>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>Kontakt &amp; Praxis</h1>
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.imageContainer}>
          <ResponsiveImage src="/praxis_1024.jpg" alt="Praxis von Miriam Gertz" loading="eager" fetchPriority="high" width={1024} height={768} sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: "contain", width: "100%", height: "auto" }} />
        </div>
        <div className={styles.adressContainer}>
          <div className={styles.textContainer}>
            <h2>{site.name}</h2>
            <p>{site.title}</p>
            <p>Systemische Therapie</p>
          </div>
          <div>
            <a href={`tel:${site.telephoneHref}`} className={styles.adreessLine}>
              <Image src="/phone.png" alt="" width={20} height={20} /> {site.telephone}
            </a>
            <a href={`mailto:${site.email}`} className={styles.adreessLine}>
              <Image src="/email.png" alt="" width={20} height={20} /> {site.email}
            </a>
          </div>
        </div>
      </div>
      <PracticeAddress />
      <BigBox>
        <h2>Impressum</h2>
        <h4>Für den Inhalt verantwortlich:</h4>
        <LegalContact />
        <p><strong>Unternehmensgegenstand:</strong> Psychotherapie und Beratung</p>
        <p><strong>Berufsrecht:</strong> Psychotherapiegesetz einsehbar unter www.ris.bka.gv.at</p>
        <p><strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz</p>
        <p><strong>Berufsbezeichnung:</strong> Psychotherapeutin</p>
        <p><strong>Verleihungsstaat:</strong> Österreich</p>
        <p><strong>Grundlegende Richtung:</strong> Diese Website stellt das Dienstleistungsangebot von Miriam Gertz vor. Zusätzlich werden Informationen zum Thema Psychotherapie für Klient:innen und Interessierte zur Verfügung gestellt.</p>
        <p><strong>Urheberrechtshinweis:</strong> Alle Inhalte dieser Webseite (Bilder, Texte) unterliegen dem Urheberrecht. Bitte fragen Sie mich bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werde ich die unerlaubte Nutzung von Teilen der Inhalte meiner Seite rechtlich verfolgen.</p>
        <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitte Ich Sie mich zu kontaktieren.</p>
        <p><strong>Bildernachweis:</strong></p>
        <p>Die Fotos auf dieser Webseite sind urheberrechtlich geschützt.</p>
        <p>Die Bilderrechte liegen bei:</p>
        <p>Porträtfoto: Corinna Radakovits // showyourselfphoto.com</p>
        <p>Symbolfotos: iStock</p>
        <p>Alle Texte sind urheberrechtlich geschützt.</p>
        <p><strong>Links/ Haftungsausschluss:</strong></p>
        <p>Für alle verlinkten Verweise und deren Inhalte wird keine Haftung übernommen.</p>
      </BigBox>
    </PageContainer>
  );
}