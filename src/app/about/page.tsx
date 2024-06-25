import { getDictionary } from "@/dictionaries/dictionaries";
import Image from "next/image";
import styles from "./page.module.css";
import { BigBox } from "@/components/big-box/big-box";
import { basePath } from "@/components/util";
import { RemoteMdxComponent } from "@/components/markdown-renderer/markdown-renderer";

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
            src={`${basePath}/miriam-gertz_1024.jpg`}
            alt="Miriam Gertz"
            priority
            width={0}
            height={0}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.textSide}>
          {about.banner.sublines.map((text) => (
            <RemoteMdxComponent textKey={text} key={text} />
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
                    <span>{item.title}</span> {item.subtitle}{" "}
                    {item.link && <a href={item.link}>(Link)</a>}
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
