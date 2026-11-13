import type { PropsWithChildren } from "react";
import { ResponsiveImage } from "@/components/image/responsive-image";
import { BigBox } from "@/components/big-box/big-box";
import aboutStyles from "@/app/about/page.module.css";
import conditionsStyles from "@/app/conditions/page.module.css";
import richTextStyles from "./content-blocks.module.css";

export function ContentSection({ headline, children }: PropsWithChildren<{ headline: string }>) {
  return (
    <section className={conditionsStyles.container}>
      <h2>{headline}</h2>
      <div className={richTextStyles.container}>{children}</div>
    </section>
  );
}

export function InfoTable({ headline, items }: {
  headline: string;
  items: { label: string; value: string; type: string }[];
}) {
  return (
    <table className={conditionsStyles.table}>
      <thead><tr><th colSpan={2}>{headline}</th></tr></thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={`${item.label}-${index}`}>
            <td>{item.label}</td>
            <td>
              {item.type === "phone" ? <a href={`tel:${item.value.replace(/\s/g, "")}`}>{item.value}</a>
                : item.type === "website" ? <a href={item.value} target="_blank" rel="noopener noreferrer">{item.value}</a>
                : item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AboutBanner({ children }: PropsWithChildren) {
  return (
    <>
      <div className={aboutStyles.headlineContainer}><h1 className={aboutStyles.headline}>Über mich</h1></div>
      <div className={aboutStyles.banner}>
        <div className={aboutStyles.imageContainer}>
          <ResponsiveImage src="/miriam-gertz_1024.jpg" alt="Miriam Gertz" loading="eager" fetchPriority="high" width={682} height={1024} sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: "contain", width: "100%", height: "auto" }} />
        </div>
        <div className={`${aboutStyles.textSide} ${richTextStyles.container}`}>{children}</div>
      </div>
    </>
  );
}

export function Career({ children }: PropsWithChildren) {
  return <BigBox>{children}</BigBox>;
}

export function CareerSection({ headline, children }: PropsWithChildren<{ headline: string }>) {
  return <section className={`${aboutStyles.bigBocContainer} ${aboutStyles.careerContent}`}><h2>{headline}</h2>{children}</section>;
}

export function TrainingDetails({ children }: PropsWithChildren) {
  return <BigBox><div className={aboutStyles.trainingDetails}>{children}</div></BigBox>;
}