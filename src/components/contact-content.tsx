import { site } from "@/site";
import styles from "@/app/contact/page.module.css";

export function PracticeAddress() {
  return (
    <div className={styles.textAdress}>
      <h2>Praxis</h2>
      <p>{site.street}, {site.postalCode} {site.city} (<a href="http://therapiepraxishernals.at/" target="_blank" rel="noopener noreferrer">Therapie Praxis Hernals</a>)</p>
    </div>
  );
}

export function LegalContact() {
  return (
    <>
      <p>{site.name}, MSc</p>
      <p>{site.street}, {site.postalCode} {site.city}, {site.country}</p>
      <p>Tel.: {site.telephoneHref}</p>
      <p>E-Mail: {site.email}</p>
    </>
  );
}