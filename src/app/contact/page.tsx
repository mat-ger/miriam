import { BigBox } from "@/components/big-box/big-box";
import { PageContainer } from "@/components/page-container/page-container";
import { TeaserBanner } from "@/components/teaser-banner/teaser-banner";
import { getDictionary } from "@/dictionaries/dictionaries";
import styles from "./page.module.css";
import { getImage } from "@/components/image/image";
import Image from "next/image";

export default async function Page() {
  const { contact } = await getDictionary("de");
  return (
    <PageContainer>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>{contact.banner.headline}</h1>
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={getImage["praxis"]}
            alt="Praxis Bild"
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "contain",
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.adressContainer}>
          <div className={styles.textContainer}>
            <h2>Miriam Gertz</h2>
            <p>Psychotherapeutin</p>
            <p>in Ausbildung unter Supervision</p>
            <p>Systemische Familientherapie</p>
          </div>
          <div>
            <div className={styles.adreessLine}>
              <Image src={getImage["phone"]} alt="phone icon" width={30} />
              <a href={"tel:+436703542978"}>+43 670 3542978</a>
            </div>
            <div className={styles.adreessLine}>
              <Image src={getImage["mail"]} alt="phone icon" width={30} />
              <a href={"mailto:praxis@gertz.at"}>praxis@gertz.at</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textAdress}>
        <h2>Praxis</h2>
        <p>Rosensteingasse 82/2, 1170 Wien (Therapiezentrum Rosensteingasse)</p>
        <p>Trauttmansdorffgasse 3a, 1130 Wien (Therapieambulanz AST)</p>
      </div>

      <BigBox>
        <h2>Impressum</h2>
        <h4>Für den Inhalt verantwortlich:</h4>
        <p>Miriam Gertz, MSc</p>
        <p>Geblergasse 70, 1170 Wien, Österreich</p>
        <p>Tel.: +436703542978</p>
        <p>E-Mail: praxis@gertz.at</p>
        <p>
          <b>Unternehmensgegenstand:</b> Psychotherapie und Beratung
        </p>
        <p>
          <b>Berufsrecht:</b> Psychotherapiegesetz einsehbar unter
          www.ris.bka.gv.at
        </p>
        <p>
          <b>Aufsichtsbehörde/Gewerbebehörde: </b>Bundesministerium für
          Soziales, Gesundheit, Pflege und Konsumentenschutz
        </p>
        <p>
          <b>Berufsbezeichnung:</b> Psychotherapeutin in Ausbildung unter
          Supervision
        </p>
        <p>
          <b>Verleihungsstaat: </b>Österreich
        </p>
        <p>
          <b>Grundlegende Richtung: </b>Diese Website stellt das
          Dienstleistungsangebot von Miriam Gertz vor. Zusätzlich werden
          Informationen zum
        </p>
        <p>
          Thema Psychotherapie für Klient:innen und Interessierte zur Verfügung
          gestellt.
        </p>
        <p>
          <b>Urheberrechtshinweis:</b> Alle Inhalte dieser Webseite (Bilder,
          Texte) unterliegen dem Urheberrecht. Bitte fragen Sie mich bevor Sie
          die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten
          wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
          notwendig, werde ich die unerlaubte Nutzung von Teilen der Inhalte
          meiner Seite rechtlich verfolgen.
        </p>
        <p>
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
          verletzen, bitte Ich Sie mich zu kontaktieren.
        </p>
        <p>
          <b>Bildernachweis: </b>
        </p>
        <p>Die Fotos auf dieser Webseite sind urheberrechtlich geschützt. </p>
        <p>Die Bilderrechte liegen bei:</p>
        <p>Porträtfoto: Corinna Radakovits // showyourselfphoto.com </p>
        <p>
          Raumfoto: Therapiezentrum Rosensteingasse // tz-rosensteingasse.at
        </p>
        <p>Symbolfotos: iStock</p>
        <p>Alle Texte sind urheberrechtlich geschützt.</p>
        <p>
          <b>Links/ Haftungsausschluss:</b>
        </p>
        <p>
          Für alle verlinkten Verweise und deren Inhalte wird keine Haftung
          übernommen.
        </p>
      </BigBox>
    </PageContainer>
  );
}
