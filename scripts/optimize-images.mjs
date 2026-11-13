import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const variants = JSON.parse(await readFile(path.join(root, "src/image-variants.json"), "utf8"));
const outputDirectory = path.join(root, "public/_images");
const manifestDirectory = path.join(root, "src/generated");
const manifestPath = path.join(manifestDirectory, "image-manifest.json");
await mkdir(outputDirectory, { recursive: true });
await mkdir(manifestDirectory, { recursive: true });

const tasks = [];
const manifest = {};
const expectedFiles = new Set();
const generatedNames = new Set();
let previousManifest = {};
try {
  previousManifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const previousFiles = new Set(Object.values(previousManifest).flat().map((variant) => variant.src)
  .filter((src) => /^\/_images\/[a-z0-9_-]+-[a-f0-9]{12}-\d+\.webp$/.test(src))
  .map((src) => path.basename(src)));
for (const [name, { source, widths }] of Object.entries(variants)) {
  const input = path.join(root, source);
  const metadata = await sharp(input).metadata();
  const sourceWidth = metadata.orientation >= 5 && metadata.orientation <= 8 ? metadata.height : metadata.width;
  const version = createHash("sha256")
    .update(await readFile(input))
    .update(JSON.stringify({ format: "webp", quality: 78, sharp: sharp.versions.sharp, vips: sharp.versions.vips }))
    .digest("hex").slice(0, 12);
  const files = [];
  generatedNames.add(name);
  for (const alias of variants[name].aliases) generatedNames.add(path.parse(alias).name);
  for (const width of widths) {
    if (!sourceWidth || width > sourceWidth) throw new Error(`${name}: ${width}px exceeds source width ${sourceWidth}px`);
    const filename = `${name}-${version}-${width}.webp`;
    const destination = path.join(outputDirectory, filename);
    expectedFiles.add(filename);
    files.push({ width, src: `/_images/${filename}` });
    tasks.push(async () => {
      try {
        await access(destination);
        return;
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      const temporary = `${destination}.${process.pid}.tmp`;
      try {
        await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(temporary);
        await rename(temporary, destination);
      } finally {
        await unlink(temporary).catch((error) => { if (error.code !== "ENOENT") throw error; });
      }
    });
  }
  for (const alias of variants[name].aliases) manifest[alias] = files;
}

await Promise.all(Array.from({ length: 3 }, async () => {
  let task;
  while ((task = tasks.shift())) await task();
}));

for (const filename of await readdir(outputDirectory)) {
  const match = filename.match(/^(.*?)(?:-[a-f0-9]{12})?-(\d+)\.webp$/);
  if (!expectedFiles.has(filename) && (previousFiles.has(filename) || (match && generatedNames.has(match[1])))) {
    await unlink(path.join(outputDirectory, filename));
  }
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);