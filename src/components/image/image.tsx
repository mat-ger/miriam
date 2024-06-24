import Image from "next/image";
import styles from "./image.module.css";
import { basePath } from "../util";

export const ImageBg: React.FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
    </div>
  );
};
