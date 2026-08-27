/**
 * Generates neutral placeholder photos so the layout can be reviewed before
 * real photography exists. Run: npm run placeholders
 *
 * Delete this script (and the devDependency on sharp) once every image in
 * public/images has been replaced with a real photo.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { portfolio } from "../src/content.ts";

const TONES = [
  ["#e8e0d5", "#b9ab99"],
  ["#ded4c8", "#a89681"],
  ["#e4dcd2", "#b0a08c"],
  ["#d8cec2", "#9d8d79"],
  ["#ece5db", "#c0b3a1"],
  ["#d2c8bb", "#948572"],
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(width, height, label, tone) {
  const [bg, fg] = tone;
  const short = Math.min(width, height);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${fg}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <circle cx="${width / 2}" cy="${height * 0.42}" r="${short * 0.16}" fill="${bg}" opacity="0.45"/>
  <text x="${width / 2}" y="${height * 0.62}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${short * 0.035}"
        letter-spacing="${short * 0.008}" fill="#ffffff" opacity="0.85">${esc(label.toUpperCase())}</text>
  <text x="${width / 2}" y="${height * 0.68}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${short * 0.024}"
        fill="#ffffff" opacity="0.6">${width} × ${height}</text>
</svg>`);
}

const jobs = [
  { path: "public/images/hero.jpg", w: 2000, h: 1250, label: "Hero image" },
  { path: "public/images/portrait.jpg", w: 1000, h: 1250, label: "Portrait" },
];

for (const category of portfolio.categories) {
  category.images.forEach((image, i) => {
    jobs.push({
      path: `public${image.src}`,
      w: 1000,
      h: 1250,
      label: `${category.title} ${i + 1}`,
    });
  });
}

await mkdir("public/images/portfolio", { recursive: true });

// This script only ever FILLS IN missing images. It has no overwrite mode on
// purpose: hero.jpg and any real photo live in these same slots, and a flag
// that quietly replaces them with a grey gradient is a trap. To regenerate a
// placeholder, delete the file first.
let made = 0;
let kept = 0;
for (const [i, job] of jobs.entries()) {
  if (existsSync(job.path)) {
    kept += 1;
    continue;
  }
  await sharp(svg(job.w, job.h, job.label, TONES[i % TONES.length]))
    .jpeg({ quality: 80 })
    .toFile(job.path);
  made += 1;
}

console.log(
  `Generated ${made} placeholder image(s); left ${kept} existing file(s) alone.`,
);
