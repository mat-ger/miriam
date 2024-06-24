import { BigBox } from "@/components/big-box/big-box";
import { PageContainer } from "@/components/page-container/page-container";
import { TeaserBanner } from "@/components/teaser-banner/teaser-banner";
import { getDictionary } from "@/dictionaries/dictionaries";
import styles from "./page.module.css";
import { RemoteMdxComponent } from "@/components/markdown-renderer/markdown-renderer";

export default async function Page() {
  const { conditions } = await getDictionary("de");
  const { welcome, categories } = conditions;
  return (
    <PageContainer>
      <TeaserBanner welcome={welcome} />

      <BigBox>
        {categories.map((category) => (
          <div key={category.headline} className={styles.container}>
            <h2 key={category.headline}>{category.headline}</h2>
            {category.text && (
              <div className={styles.container}>
                {category.text.map((text) => (
                  <RemoteMdxComponent textKey={text} key={text} />
                ))}
              </div>
            )}
            {category.table && (
              <div className={styles.container}>
                {category.table.map((table) => (
                  <table className={styles.table} key={table.headline}>
                    <thead>
                      <tr>
                        <th>{table.headline}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.items.map((item) => (
                        <tr key={item.label}>
                          <td>{item.label}</td>
                          {item.value && item.type === "phone" ? (
                            <td>
                              <a href={`tel:${item.value}`}>{item.value}</a>
                            </td>
                          ) : item.type === "website" ? (
                            <td>
                              <a href={item.value} target="_blank">
                                {item.value}
                              </a>
                            </td>
                          ) : item.type === "openingHours" ? (
                            <td>{item.value}</td>
                          ) : (
                            <td>{item.value}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            )}
          </div>
        ))}
      </BigBox>
    </PageContainer>
  );
}
