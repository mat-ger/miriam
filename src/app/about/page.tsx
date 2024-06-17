import { getImage } from "@/components/image/image";
import { getDictionary } from "@/dictionaries/dictionaries";
import Image from "next/image";
import styles from "./page.module.css";
import { BigBox } from "@/components/big-box/big-box";

export default async function Page() {
  const { about } = await getDictionary("de");

  return (
    <div>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>{about.banner.headline}</h1>
      </div>
      <div className={styles.banner}>
        <div className={styles.imageContainer}>
          <Image
            src={getImage[about.banner.image]}
            alt="Miriam Gertz"
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
        <div className={styles.textSide}>
          {about.banner.sublines.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
      <BigBox>
        {about.cv.map((category) => (
          <div className={styles.bigBocContainer} key={category.headline}>
            <h2>{category.headline}</h2>
            <ul className={styles.list}>
              {category.items &&
                category.items.map((item) => (
                  <li key={item.title}>
                    <span>{item.title}</span> {item.subtitle}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </BigBox>

      <BigBox>
        <p>{about.text}</p>
        <h4>{about.subText.headline}</h4>
        <p className={styles.textBlock}>{about.subText.text}</p>
      </BigBox>
    </div>
  );
}
