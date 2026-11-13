import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { load } from "cheerio";
import sharp from "sharp";

const output = path.join(process.cwd(), "out");
const runFile = promisify(execFile);
const baseUrl = "https://www.gertz.at";
const pages = [
  { route: "/", file: "index.html", title: "Psychotherapeutin", content: ["Arbeitsschwerpunkte", "Systemische Psychotherapie", "Schwangerschaftsberatung"] },
  { route: "/about", file: "about.html", title: "Über mich", content: ["PRAXISERFAHRUNG", "WORKSHOPS", "AUSBILDUNG"] },
  { route: "/conditions", file: "conditions.html", title: "Rahmenbedingungen", content: ["€ 120,-", "€ 33,70,-", "01 406 95 95", "0800 222 555"] },
  { route: "/contact", file: "contact.html", title: "Kontakt", content: ["Paletzgasse 32/4", "praxis@gertz.at", "Impressum"] },
];

for (const page of pages) {
  test(`static export: ${page.route}`, async () => {
    const html = await readFile(path.join(output, page.file), "utf8");
    const document = load(html);
    const text = document("main").text();
    assert.equal(document("html").attr("lang"), "de-AT");
    assert.equal(document("h1").length, 1);
    assert.equal(document("main").children().length, 1);
    assert.ok(document("title").text().includes(page.title));
    assert.ok(document('meta[name="description"]').attr("content"));
    assert.equal(new URL(document('link[rel="canonical"]').attr("href")).href, new URL(page.route, baseUrl).href);
    assert.equal(new URL(document('meta[property="og:url"]').attr("content")).href, new URL(page.route, baseUrl).href);
    for (const phrase of page.content) assert.ok(text.includes(phrase), `Missing content: ${phrase}`);
    assert.doesNotMatch(text, /[\x00-\x08]/);
    const structuredData = JSON.parse(document('script[type="application/ld+json"]').first().html());
    assert.ok(structuredData["@graph"].some((item) => item["@type"] === "MedicalBusiness" && item.address.postalCode === "1160" && item.email === "praxis@gertz.at"));
    assert.ok(structuredData["@graph"].some((item) => item["@type"] === "Person" && item.name === "Miriam Gertz"));
    for (const image of document("img[src]").toArray()) {
      const source = document(image).attr("src");
      if (source.startsWith("/")) await access(path.join(output, decodeURIComponent(source.slice(1))));
      assert.notEqual(document(image).attr("alt"), undefined);
    }
    for (const source of document("source[srcset]").toArray()) {
      for (const candidate of document(source).attr("srcset").split(",")) {
        const url = candidate.trim().split(/\s+/)[0];
        await access(path.join(output, url.slice(1)));
      }
    }
  });
}

test("existing offer anchors and emergency contacts remain available", async () => {
  const home = load(await readFile(path.join(output, "index.html"), "utf8"));
  for (const id of ["offer", "Psychotherapie", "Beziehungstherapie", "Familientherapie", "Schwangerschaftsberatung"]) {
    assert.equal(home(`[id="${id}"]`).length, 1);
  }
  const conditions = load(await readFile(path.join(output, "conditions.html"), "utf8"));
  for (const phone of ["014069595", "0131330", "0800222555", "0800112112"]) {
    assert.equal(conditions(`a[href="tel:${phone}"]`).length, 1);
  }
});

test("structured services correspond to visible offers and anchors", async () => {
  const home = load(await readFile(path.join(output, "index.html"), "utf8"));
  const graphs = home('script[type="application/ld+json"]').toArray().map((element) => JSON.parse(home(element).html()));
  const practice = graphs.flatMap((graph) => graph["@graph"] ?? []).find((item) => item.makesOffer);
  assert.equal(practice["@id"], `${baseUrl}/#praxis`);
  const expected = [
    ["Systemische Psychotherapie", "Psychotherapie"],
    ["Systemische Paar- und Beziehungstherapie", "Beziehungstherapie"],
    ["Systemische Familientherapie", "Familientherapie"],
    ["Schwangerschaftsberatung", "Schwangerschaftsberatung"],
  ];
  assert.equal(practice.makesOffer.length, expected.length);
  for (const [index, [name, anchor]] of expected.entries()) {
    const offer = practice.makesOffer[index];
    assert.equal(offer["@type"], "Offer");
    assert.equal(offer.itemOffered["@type"], "Service");
    assert.equal(offer.itemOffered.name, name);
    assert.equal(offer.itemOffered.url, `${baseUrl}/#${anchor}`);
    assert.equal(offer.itemOffered.provider["@id"], practice["@id"]);
    assert.equal(home(`[id="${anchor}"]`).length, 1);
    assert.ok(home(`[id="${anchor}"]`).text().includes(name));
  }
});

test("text formatting remains present on all pages", async () => {
  const home = load(await readFile(path.join(output, "index.html"), "utf8"));
  assert.ok(home("em").toArray().some((element) => home(element).text().includes("Systemische (Familien-)Therapie")));
  assert.ok(home("strong").toArray().some((element) => home(element).text() === "Wertschätzung"));
  assert.equal(home("blockquote").length, 2);
  assert.ok(home("li p").toArray().some((element) => home(element).text() === "Spannung und Streit"));

  const about = load(await readFile(path.join(output, "about.html"), "utf8"));
  assert.ok(about("strong").toArray().some((element) => about(element).text() === "Psychotherapeutin, Psychologin"));
  assert.ok(about("main p br").length > 0);

  const conditions = load(await readFile(path.join(output, "conditions.html"), "utf8"));
  assert.equal(conditions('ol[start="5"]').length, 1);
  assert.ok(conditions("h3").toArray().some((element) => conditions(element).text() === "Kostenzuschuss durch österreichische Krankenkassen"));
  assert.ok(conditions("table a").toArray().some((element) => conditions(element).attr("href")?.includes("oegk.at")));

  const contact = load(await readFile(path.join(output, "contact.html"), "utf8"));
  assert.ok(contact("strong").toArray().some((element) => contact(element).text() === "Urheberrechtshinweis:"));
});

test("publications appear before education", async () => {
  const about = load(await readFile(path.join(output, "about.html"), "utf8"));
  const sections = about("main section").toArray();
  const publications = sections.findIndex((section) => about(section).children("h2").text() === "PUBLIKATIONEN");
  const education = sections.findIndex((section) => about(section).children("h2").text() === "AUSBILDUNG & WEITERBILDUNG");
  assert.ok(publications >= 0 && publications < education);
  const entries = about(sections[publications]).find("p").toArray().map((entry) => about(entry).text());
  assert.deepEqual(entries, [
    "Gertz, M. (2025). Abtreibungserfahrungen im Kontext einer umkämpften Geschlechterordnung. Eine kulturpsychologisch-systemische Betrachtung. Systemische Notizen. 2(2025).",
    "Gertz, M. (2019). Zwischen Stigmatisierung und Autonomieerleben. Abtreibung aus feministisch-psychologischer Perspektive, in: Frauenservice Wien (Hrsg.), Frauen.Wissen.Wien. Nr. 9: Schwangerschaftsabbruch im gesellschaftlichen Diskurs, S.61-77.",
    "Malzer-Gertz,M. & Gertz, M. (2018). Schwierige Situationen in der Anfangsphase, in: Kirsten von Sydow, Ulrike Borst (Hrsg.), Systemische Therapie in der Praxis. Weinheim: Beltz.",
    "Malzer-Gertz, M. & Gertz, M. (2018). Reguläre Therapiebeendigung und Behandlungsabbrüche, in: Kirsten von Sydow, Ulrike Borst (Hrsg.), Systemische Therapie in der Praxis. Weinheim: Beltz.",
  ]);
});

test("internal links and fragments resolve to exported content", async () => {
  for (const page of pages) {
    const document = load(await readFile(path.join(output, page.file), "utf8"));
    for (const anchor of document("a[href]").toArray()) {
      const href = document(anchor).attr("href");
      const target = new URL(href, new URL(page.route, baseUrl));
      if (target.origin !== baseUrl) continue;
      const destination = pages.find((candidate) => candidate.route === target.pathname);
      assert.ok(destination, `Unknown internal link: ${href}`);
      if (target.hash) {
        const targetPage = load(await readFile(path.join(output, destination.file), "utf8"));
        const id = decodeURIComponent(target.hash.slice(1));
        assert.ok(targetPage("[id]").toArray().some((element) => targetPage(element).attr("id") === id), `Missing anchor: ${href}`);
      }
    }
  }
});

test("crawl files contain all canonical URLs", async () => {
  const robots = await readFile(path.join(output, "robots.txt"), "utf8");
  const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
  assert.ok(robots.includes(`${baseUrl}/sitemap.xml`));
  for (const page of pages) assert.ok(sitemap.includes(new URL(page.route, baseUrl).toString()));
});

test("responsive images match their source and declared widths", async () => {
  const variants = JSON.parse(await readFile(path.join(process.cwd(), "src/image-variants.json"), "utf8"));
  const manifest = JSON.parse(await readFile(path.join(process.cwd(), "src/generated/image-manifest.json"), "utf8"));
  for (const [name, image] of Object.entries(variants)) {
    const source = await sharp(path.join(process.cwd(), image.source)).metadata();
    const sourceWidth = source.orientation >= 5 && source.orientation <= 8 ? source.height : source.width;
    for (const [index, width] of image.widths.entries()) {
      assert.ok(width <= sourceWidth, `${name}: image would be enlarged`);
      const variant = manifest[image.aliases[0]][index];
      assert.equal(variant.width, width);
      assert.match(variant.src, new RegExp(`^/_images/${name}-[a-f0-9]{12}-${width}\\.webp$`));
      for (const alias of image.aliases) assert.deepEqual(manifest[alias], manifest[image.aliases[0]]);
      const generated = await sharp(path.join(output, variant.src.slice(1))).metadata();
      assert.equal(generated.width, width, `${name}: incorrect width`);
    }
  }
  assert.ok(variants.startseite.widths.includes(3840));
  assert.equal(variants.praxis.source, "public/praxis_1024.jpg");
});

test("image variants are cached, versioned and cleaned safely", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "miriam-images-"));
  const script = path.join(process.cwd(), "scripts/optimize-images.mjs");
  const manifestPath = path.join(directory, "src/generated/image-manifest.json");
  const imagePath = path.join(directory, "src/original.jpg");
  const imageDirectory = path.join(directory, "public/_images");
  const generate = () => runFile(process.execPath, [script], { cwd: directory });
  const createImage = (background) => sharp({ create: { width: 16, height: 16, channels: 3, background } }).jpeg().toFile(imagePath);
  try {
    await mkdir(path.join(directory, "src"), { recursive: true });
    await mkdir(imageDirectory, { recursive: true });
    await createImage("red");
    await writeFile(path.join(directory, "src/image-variants.json"), JSON.stringify({ fixture: { source: "src/original.jpg", aliases: ["/fixture_1024.jpg"], widths: [8, 16] } }));
    await writeFile(path.join(imageDirectory, "fixture_1024-8.webp"), "old variant");
    await writeFile(path.join(imageDirectory, "unrelated.txt"), "keep");
    await generate();
    const first = JSON.parse(await readFile(manifestPath, "utf8"))["/fixture_1024.jpg"];
    const firstFile = path.join(directory, "public", first[0].src.slice(1));
    const modified = (await stat(firstFile)).mtimeMs;
    assert.ok(!(await readdir(imageDirectory)).includes("fixture_1024-8.webp"));
    await generate();
    assert.equal((await stat(firstFile)).mtimeMs, modified);
    assert.deepEqual(JSON.parse(await readFile(manifestPath, "utf8"))["/fixture_1024.jpg"], first);
    await createImage("blue");
    await generate();
    const second = JSON.parse(await readFile(manifestPath, "utf8"))["/fixture_1024.jpg"];
    assert.notEqual(second[0].src, first[0].src);
    assert.ok(!(await readdir(imageDirectory)).includes(path.basename(first[0].src)));
    await writeFile(path.join(directory, "src/image-variants.json"), "{}");
    await generate();
    assert.ok(!(await readdir(imageDirectory)).includes(path.basename(second[0].src)));
    assert.equal(await readFile(path.join(imageDirectory, "unrelated.txt"), "utf8"), "keep");
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});