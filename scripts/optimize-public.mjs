// Build-time image optimization for /public.
// Caps the longest side at ~1920px, re-encodes at quality ~78 preserving the
// original format (so references don't break), and overwrites a file ONLY when
// the result is smaller. Keeps Vercel's Image Optimizer out of the loop entirely
// (next.config sets images.unoptimized = true). Git is the backup.

import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = new URL("../public/", import.meta.url).pathname;
const MAX_SIDE = 1920;
const QUALITY = 78;
const RASTER = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  if (!RASTER.has(ext)) return null;

  const input = await readFile(file);
  const img = sharp(input, { failOn: "none" });
  const meta = await img.metadata();

  const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
  let pipeline = img;
  if (longest > MAX_SIDE) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? MAX_SIDE : undefined,
      height: meta.height > meta.width ? MAX_SIDE : undefined,
      withoutEnlargement: true,
    });
  }

  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  }

  const output = await pipeline.toBuffer();
  if (output.length < input.length) {
    await writeFile(file, output);
    return { file, before: input.length, after: output.length };
  }
  return null;
}

async function main() {
  let files;
  try {
    files = await walk(PUBLIC_DIR);
  } catch {
    return; // no public dir, nothing to do
  }

  let saved = 0;
  for (const file of files) {
    try {
      const result = await optimize(file);
      if (result) {
        saved += result.before - result.after;
        const rel = file.replace(PUBLIC_DIR, "");
        const kb = (n) => (n / 1024).toFixed(1) + "kb";
        process.stdout.write(`  ${rel}: ${kb(result.before)} -> ${kb(result.after)}\n`);
      }
    } catch (err) {
      process.stdout.write(`  skip ${file}: ${err.message}\n`);
    }
  }
  process.stdout.write(`optimize-public: saved ${(saved / 1024).toFixed(1)}kb\n`);
}

await (async () => {
  const stats = await stat(PUBLIC_DIR).catch(() => null);
  if (stats?.isDirectory()) await main();
})();
