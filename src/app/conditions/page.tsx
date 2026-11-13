import { PageContainer } from "@/components/page-container/page-container";
import { TeaserBanner } from "@/components/teaser-banner/teaser-banner";
import { BigBox } from "@/components/big-box/big-box";
import { ContentSection, InfoTable } from "@/components/content-blocks";
import { pageMetadata } from "@/metadata";
export const metadata = pageMetadata(
  "Rahmenbedingungen",
  "Informationen zu Erstgespräch, Kosten, Kostenzuschüssen und Rahmenbedingungen der Psychotherapie in Wien.",
  "/conditions",
);
export default function Page() {
  return (
    <PageContainer>
      <TeaserBanner
        image={"/rahmenbedingungen_1024.jpg"}
        headline={"Rahmenbedingungen"}
        sublines={[]}
      />
      <BigBox>
        <ContentSection headline={"Verschwiegenheit"}>
          <p>
            Verschwiegenheit ist eine unverzichtbare Grundlage für die
            Psychotherapie und in §15 des Psychotherapiegesetzes als
            Berufspflicht festgehalten. Ihre persönlichen Themen sind bei mir
            sicher aufgehoben.
          </p>
        </ContentSection>
        <ContentSection headline={"Erstgespräch und Setting"}>
          <p>
            Nachdem Sie mich per Mail oder Telefon kontaktiert haben,
            vereinbaren wir einen Termin für ein Erstgespräch. Das Erstgespräch
            dient dem gegenseitigen Kennenlernen und der Klärung des Rahmens.
            Sie bekommen einen Einblick in meine Arbeitsweise und können alle
            Fragen stellen, die Sie zu Psychotherapie haben. Wir sprechen über
            Ihr Anliegen sowie ihre Erwartungen und Wünsche an die
            Psychotherapie und ich werde Ihnen rückmelden, ob sich Ihre
            Vorstellungen mit dem treffen, was ich anbieten kann. Zudem klären
            wir das mögliche psychotherapeutische Setting (Einzel-, Paar- oder
            Familientherapie, Häufigkeit der Sitzungen, Höhe des Honorars,
            Bezahlung des Honorars, Absageregelung). Nach dem Erstgespräch
            können Sie in Ruhe entscheiden, ob Sie an einer Zusammenarbeit mit
            mir interessiert sind.
          </p>
          <p>
            Das Erstgespräch bedeutet bereits den Einstieg in die Psychotherapie
            und wird zum gleichen Honorar wie eine reguläre Sitzung verrechnet.
            Folgegespräche sind in Ausnahmefällen auch per Videotelefonie
            möglich.
          </p>
        </ContentSection>
        <ContentSection headline={"Absageregelung"}>
          <p>
            Vereinbarte Termine sind verbindlich. Sollten Sie einen Termin nicht
            einhalten können, sagen Sie diesen so früh wie möglich und bitte bis
            spätestens 48 Stunden im Voraus ab. Ansonsten wird der Termin zum
            vollen Tarif in Rechnung gestellt.
          </p>
        </ContentSection>
        <ContentSection headline={"Dauer & Frequenz"}>
          <p>
            Die Häufigkeit der Sitzungen und die Dauer der Psychotherapie werden
            individuell vereinbart. Im Rahmen der ersten Gespräche treffen wir
            eine Vereinbarung, die bei Bedarf jederzeit angepasst werden kann.
            <br />
            {"\n"}Die Psychotherapiesitzungen finden in der Regel entweder
            wöchentlich oder 14-tägig statt. Paar- und Beziehungstherapie findet
            üblicherweise in einem Abstand von 3-5 Wochen statt.
          </p>
        </ContentSection>
        <ContentSection headline={"Kosten"}>
          <InfoTable
            headline={"Psychotherapie (Einzelsetting)"}
            items={[
              {
                label: "Einheit à 50 Min. ",
                value: "€ 120,-",
                type: "",
              },
              {
                label: "Einheit à 90 Min.",
                value: "€ 200,-",
                type: "",
              },
            ]}
          />
          <InfoTable
            headline={"Paar- und Familientherapie (Mehrpersonensetting)"}
            items={[
              {
                label: "Einheit à 90 Min.",
                value: "€ 180,- bis € 240,-",
                type: "",
              },
              {
                label: "",
                value: "Selbsteinschätzung",
                type: "",
              },
            ]}
          />
          <p>
            Sozialtarife sind bei freien Plätzen auf Anfrage möglich. Ich bin
            eingetragene Wahltherapeutin für alle österreichischen
            Krankenkassen. Auch wenn Sie als Student:in aus einem EU-Land in
            Österreich leben und z. B. in Deutschland versichert sind, ist eine
            Kostenrückerstattung häufig möglich. Ob die Kosten vollständig oder
            teilweise übernommen werden, klären Sie bitte direkt mit Ihrer
            Krankenkasse.
          </p>
          <h3>
            <strong>Kostenzuschuss durch österreichische Krankenkassen</strong>
          </h3>
          <p>
            Bei Vorliegen einer krankheitswertigen Diagnose ist ein
            Kostenzuschuss durch die österreichischen Krankenkassen möglich. Sie
            begleichen mein Honorar zunächst selbst und können anschließend eine
            Teilrefundierung bei Ihrer Krankenkasse beantragen. Dabei
            unterstütze ich Sie gerne. Falls bereits eine Diagnose (z. B. von
            einer Fachärztin oder Ihrem Hausarzt) vorliegt, kann diese eventuell
            verwendet werden. Andernfalls besprechen wir gemeinsam, ob eine
            krankheitswertige Diagnose zur Beschreibung Ihrer Symptome sinnvoll
            und passend ist.
          </p>
          <p>
            Wenn Sie keine Rückerstattung beantragen möchten, ist keine Diagnose
            erforderlich. Kosten für Paartherapien werden von den Krankenkassen
            nicht übernommen.
          </p>
          <h3>
            <strong>Ablauf der Teilrefundierung:</strong>
          </h3>
          <ol>
            <li>
              Nach dem Erstgespräch und vor der zweiten Sitzung holen Sie bei
              Ihrer Hausärztin bzw. Ihrem Hausarzt eine{" "}
              <strong>Zuweisung</strong> zur psychotherapeutischen Behandlung
              ein. Dabei wird auch abgeklärt, ob körperliche Ursachen für Ihre
              Beschwerden vorliegen könnten.
            </li>
            <li>
              Das <strong>Honorar</strong> ist nach jeder Sitzung vollständig
              von Ihnen zu begleichen. Die Rechnung erhalten Sie per E-Mail.
            </li>
            <li>
              Sobald Sie einreichen wollen, schicken sie die bisherigen
              Rechnungen gemeinsam mit der ärztlichen Zuweisung an Ihre
              Krankenkasse. Die ersten zehn Therapieeinheiten sind in der Regel
              bewilligungsfrei. Den Kostenzuschuss bekommen Sie von Ihrer
              Krankenkasse.
            </li>
            <li>
              <strong>Ab der elften Einheit</strong> ist zusätzlich ein{" "}
              <strong>Antrag auf Kostenzuschuss</strong> erforderlich, den ich
              für Sie ausfülle. Die Inhalte besprechen wir gemeinsam.
            </li>
          </ol>
          <p>
            Achtung! Der Antrag muss vor der elften Therapieeinheit bei der
            Krankenkasse eingelangt sein. Eine nachträgliche Bewilligung ist
            nicht möglich. Jede Krankenkasse verwendet dafür ein eigenes
            Formular. Eine Übersicht finden Sie hier:{" "}
            <a href="https://www.psychotherapie-wlp.at/mitgliederservice/krankenkassen/formular-center">
              https://www.psychotherapie-wlp.at/mitgliederservice/krankenkassen/formular-center
            </a>
          </p>
          <ol start={5}>
            <li>
              <p>
                Bitte behalten Sie die Anzahl Ihrer bewilligten
                Therapieeinheiten im Blick und erinnern Sie mich bei Bedarf
                rechtzeitig an einen <strong>Verlängerungsantrag</strong>.
              </p>
            </li>
            <li>
              <p>
                Rechnungen können bis zu 42 Monate nach der Behandlung bei Ihrer
                Krankenkasse eingereicht werden.
              </p>
            </li>
          </ol>
          <h3>
            <strong>Private Krankenversicherungen</strong>
          </h3>
          <p>
            Private Krankenversicherungen übernehmen oder bezuschussen die
            Kosten einer Psychotherapie häufig nach entsprechender
            Antragstellung. Bitte informieren Sie sich rechtzeitig bei Ihrer
            Versicherung über die Voraussetzungen und den Umfang der
            Kostenübernahme.
          </p>
          <h3>
            <strong>Höhe der Kostenzuschüsse der Krankenkassen</strong> (Stand:
            August 2026)
          </h3>
          <p>Bitte überprüfen Sie die Zahlen selbst auf Aktualität.</p>
          <table>
            <thead>
              <tr>
                <th>Versicherungsträger</th>
                <th>Kostenzuschuss für Psychotherapie </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  ÖGK -{" "}
                  <a href="https://www.oegk.at/cdscontent/?contentid=10007.870222&amp;portal=oegkportal">
                    Link
                  </a>
                </td>
                <td> € 33,70,-</td>
              </tr>
              <tr>
                <td>
                  BVAEB -{" "}
                  <a href="https://www.bvaeb.at/cdscontent/?contentid=10007.840357">
                    Link
                  </a>{" "}
                </td>
                <td> € 50,20,-</td>
              </tr>
              <tr>
                <td>
                  SVS -{" "}
                  <a href="https://www.svs.at/cdscontent/?contentid=10007.816743&amp;portal=svsportal">
                    Link
                  </a>{" "}
                </td>
                <td> € 50,-</td>
              </tr>
              <tr>
                <td>
                  KFA -{" "}
                  <a href="https://www.kfawien.at/cdscontent/content_print.xhtml?contentid=10007.812228&amp;viewmode=content&amp;print=true">
                    Link
                  </a>{" "}
                </td>
                <td> € 39,-</td>
              </tr>
            </tbody>
          </table>
        </ContentSection>
        <ContentSection headline={"Notfallkontakte"}>
          <p>
            Wenn Sie akut über Suizid nachdenken, sich oder andere verletzen
            wollen, Gewalt erfahren oder sich dringende Sorgen um Ihnen bekannte
            Personen machen, dann nehmen Sie so schnell wie möglich
            professionelle Hilfe in Anspruch. Folgende Einrichtungen helfen
            Ihnen in akuten Krisen:
          </p>
          <InfoTable
            headline={"Kriseninterventionszentrum Wien"}
            items={[
              {
                label: "Tel",
                value: "01 406 95 95",
                type: "phone",
              },
              {
                label: "Öffnungszeiten",
                value: "Mo–Fr 8–17 Uhr & Anrufbeantworter",
                type: "openingHours",
              },
              {
                label: "anonyme eMail-Beratung",
                value: "https://kriseninterventionszentrum.at",
                type: "website",
              },
            ]}
          />
          <InfoTable
            headline={"Sozialpsychiatrischer Notdienst/ PSD"}
            items={[
              {
                label: "Tel",
                value: "01 31330",
                type: "phone",
              },
              {
                label: "Öffnungszeiten",
                value: "täglich 0–24 Uhr",
                type: "openingHours",
              },
              {
                label: "Homepage",
                value: "https://psd-wien.at",
                type: "website",
              },
            ]}
          />
          <InfoTable
            headline={"für Kinder und Jugendliche "}
            items={[
              {
                label: "Homepage",
                value: "https://bittelebe.at",
                type: "website",
              },
            ]}
          />
          <InfoTable
            headline={"Frauenhelpline "}
            items={[
              {
                label: "Tel",
                value: "0800 222 555",
                type: "phone",
              },
              {
                label: "Öffnungszeiten",
                value: "täglich 0–24 Uhr",
                type: "openingHours",
              },
              {
                label: "Homepage",
                value: "https://frauenhelpline.at",
                type: "website",
              },
            ]}
          />
          <InfoTable
            headline={"Verbrechensopfer-Notruf"}
            items={[
              {
                label: "Tel",
                value: "0800 112 112",
                type: "phone",
              },
              {
                label: "Öffnungszeiten",
                value: "täglich 0–24 Uhr",
                type: "openingHours",
              },
              {
                label: "Homepage",
                value: "https://opfer-notruf.at",
                type: "website",
              },
            ]}
          />
        </ContentSection>
      </BigBox>
    </PageContainer>
  );
}
