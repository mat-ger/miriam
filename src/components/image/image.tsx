import Image from "next/image";
import styles from "./image.module.css";
import { basePath } from "../util";

export const ImageBg: React.FC<{
  src: string;
}> = ({ src }) => {
  return (
    <Image
      src={`${basePath}${src}`}
      alt={`${src}`}
      fill
      className={styles.parallaxImage}
      priority
      quality={100}
    />
  );
};
