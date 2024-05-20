import Image, { StaticImageData } from "next/image";
import { getDictionary } from "./dictionaries/dictionaries";
import banner from "../../public/home.jpg";
import psychotherapie from "../../public/psychotherapie.jpg";
import paartherapie from "../../public/paartherapie.jpg";
import familientherapie from "../../public/familientherapie.jpg";
import schwangerschaftsberatung from "../../public/schwangerschaftsberatung.jpg";
import styles from "./page.module.css";
import React, { useEffect } from "react";
import Link from "next/link";

export default async function Page() {
  const {
    home: { welcome, offersNav, workFocus, offers },
  } = await getDictionary("de");

  const offerImages: Record<string, StaticImageData> = {
    banner,
    psychotherapie,
    paartherapie,
    familientherapie,
    schwangerschaftsberatung,
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Image
          src={offerImages[welcome.banner.image]}
          alt="Banner Bild"
          fill
          className={styles.imageContainer}
          priority
          placeholder="blur"
          quality={100}
        />
        <div className={styles.content}>
          <div className={styles.smallBox}>
            <h1>{welcome.banner.headline}</h1>
            {welcome.banner.sublines.map((subline) => (
              <p key={subline}>{subline}</p>
            ))}
          </div>
          <div className={styles.bigBox}>
            <div className={styles.bigBoxContent}>
              <h2>{welcome.title}</h2>
              <p>{welcome.text}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.bigBox} ${styles.greyBackground}`}>
          <h2>{offersNav.headline}</h2>
          <ul className={`${styles.offerNav} ${styles.bigBoxContent}`}>
            {offersNav.items.map((item) => (
              <Link key={item.title} href={`#${item.title}`}>
                <div className={styles.offerItemWrapper}>
                  <Image
                    src={offerImages[item.image]}
                    alt={item.imageAlt}
                    className={styles.offerNavImage}
                    width={164}
                    height={164}
                  />
                  <li>{item.title}</li>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.bigBox}>
          <div className={styles.bigBoxContent}>
            <h2>{workFocus.headline}</h2>
            <ul className={styles.workFocusLayout}>
              {workFocus.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{workFocus.text}</p>
          </div>
        </div>
      </section>
      {offers.map((offer) => (
        <>
          <section
            className={styles.section}
            key={offer.name}
            id={offer.banner.headline}
          >
            <Image
              src={offerImages[offer.banner.image]}
              alt="psychotherapie Bild"
              fill
              className={styles.imageContainer}
              placeholder="blur"
              quality={100}
            />

            <div className={styles.content}>
              <div className={styles.smallBox}>
                <h1>{offer.banner.headline}</h1>
                {offer.banner.sublines.map((subline) => (
                  <p key={subline}>{subline}</p>
                ))}
              </div>
              <div className={styles.bigBox}>
                <div className={styles.bigBoxContent}>
                  {offer.categories.map((category) => (
                    <>
                      <h2 key={category.headline}>{category.headline}</h2>
                      {category.sublines.map((subline) => (
                        <p key={subline}>{subline}</p>
                      ))}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ))}
    </div>
  );
}
