import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./image.module.css";
export const ImageBg: React.FC<{
  src: string | StaticImport;
}> = ({ src }) => {
  return (
    <Image
      src={src}
      alt="Banner Bild"
      fill
      className={styles.parallaxImage}
      priority
      placeholder="blur"
      quality={100}
    />
  );
};
