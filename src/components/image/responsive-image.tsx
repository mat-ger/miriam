import Image, { type ImageProps } from "next/image";
import manifest from "@/generated/image-manifest.json";

export function ResponsiveImage({ src, sizes, alt, ...props }: Omit<ImageProps, "src"> & { src: string }) {
  const variants = (manifest as Record<string, { src: string; width: number }[]>)[src];
  const srcSet = variants?.map((variant) => `${variant.src} ${variant.width}w`).join(", ");

  return (
    <picture>
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <Image src={src} alt={alt} sizes={sizes} {...props} />
    </picture>
  );
}