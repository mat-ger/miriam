import { ResponsiveImage } from "./responsive-image";
import styles from "./image.module.css";

export const ImageBg: React.FC<{
  src: string;
  alt: string;
  priority?: boolean;
}> = ({ src, alt, priority = false }) => {
  return (
    <div className={styles.container}>
      <ResponsiveImage
        src={src}
        alt={alt}
        fill
        sizes="(prefers-reduced-motion: reduce) max(100vw, 75vh), max(116vw, 87vh)"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={styles.image}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
};
