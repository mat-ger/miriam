import Image from "next/image";
import { getDictionary } from "./dictionaries/dictionaries";
import home from "../../public/home.jpg";
import styles from "./page.module.css";

export default async function Page() {
  const dict = await getDictionary("de");

  return (
    <section className={styles.container}>
      <div className={styles.backgroundLayer}>
        <Image src={home} alt="Banner Bild" fill />
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <h1>{dict.welcome.banner.headline}</h1>
          {dict.welcome.banner.sublines.map((subline) => (
            <p key={subline}>{subline}</p>
          ))}
        </div>
        <div className={styles.box}>
          <h1>{dict.welcome.banner.headline}</h1>
          {dict.welcome.banner.sublines.map((subline) => (
            <p key={subline}>{subline}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
