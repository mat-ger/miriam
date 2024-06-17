import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./image.module.css";
import banner from "../../../public/home.jpg";
import psychotherapie from "../../../public/psychotherapie.jpg";
import paartherapie from "../../..//public/paartherapie.jpg";
import familientherapie from "../../../public/familientherapie.jpg";
import schwangerschaftsberatung from "../../../public/schwangerschaftsberatung.jpg";
import miriam from "../../../public/miriam-gertz-psychotherapeutin-wien.jpg";
import praxis from "../../../public/praxis.jpeg";
import phone from "../../../public/phone.png";
import mail from "../../../public/email.png";

export const getImage: Record<string, StaticImageData> = {
  banner,
  psychotherapie,
  paartherapie,
  familientherapie,
  schwangerschaftsberatung,
  miriam,
  praxis,
  phone,
  mail,
};

export type ImageTypes = keyof typeof getImage;

export const ImageBg: React.FC<{
  src: ImageTypes;
}> = ({ src }) => {
  return (
    <Image
      src={getImage[src]}
      alt="Banner Bild"
      fill
      className={styles.parallaxImage}
      priority
      placeholder="blur"
      quality={100}
    />
  );
};
