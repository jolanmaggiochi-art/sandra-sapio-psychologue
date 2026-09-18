/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("node:path");
const fs = require("node:fs/promises");
const sharp = require("sharp");

const SOURCE_DIR = "/Users/jolanmaggiochi/Downloads/site internet SSA 2026";
const PUBLIC_IMAGES = path.resolve(__dirname, "..", "public", "images");
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

const TASKS = [
  {
    src: path.join(SOURCE_DIR, "Sandra Sapio 01.png"),
    out: "sandra-sapio.jpg",
    crop: { left: 78, top: 46, width: 470, height: 568 },
    width: 1000,
  },
  {
    src: path.join(SOURCE_DIR, "Sandra Sapio 01.png"),
    out: "pelote-laine.jpg",
    crop: { left: 78, top: 46, width: 884, height: 568 },
    width: 1400,
  },
  {
    src: path.join(SOURCE_DIR, "Sandra Sapio 15.png"),
    out: "pelote-mains.jpg",
    crop: { left: 78, top: 46, width: 845, height: 568 },
    width: 1400,
  },
];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processImage(task) {
  await ensureDir(PUBLIC_IMAGES);
  const exists = await fs
    .access(task.src)
    .then(() => true)
    .catch(() => false);
  if (!exists) {
    console.warn(`Skip (introuvable) : ${task.src}`);
    return;
  }
  let pipeline = sharp(task.src).rotate();
  if (task.crop) pipeline = pipeline.extract(task.crop);
  if (task.width) {
    pipeline = pipeline.resize({
      width: task.width,
      withoutEnlargement: true,
    });
  }
  const outPath = path.join(PUBLIC_IMAGES, task.out);
  await pipeline
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toFile(outPath);
  const stat = await fs.stat(outPath);
  console.log(`OK ${task.out} - ${(stat.size / 1024).toFixed(0)} Ko`);
}

async function generateOgImage() {
  const outPath = path.join(PUBLIC_DIR, "og-image.jpg");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbf8f1"/>
      <stop offset="1" stop-color="#f4efe2"/>
    </linearGradient>
    <radialGradient id="blob" cx="0.85" cy="0.2" r="0.6">
      <stop offset="0" stop-color="#c9d8ce" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#c9d8ce" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob2" cx="0.1" cy="0.85" r="0.5">
      <stop offset="0" stop-color="#a9c1b5" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#a9c1b5" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#blob)"/>
  <rect width="1200" height="630" fill="url(#blob2)"/>
  <text x="100" y="280" font-family="Georgia, 'Cormorant Garamond', serif" font-size="84" font-weight="500" fill="#2d2a24">Respirer.</text>
  <text x="100" y="370" font-family="Georgia, 'Cormorant Garamond', serif" font-size="84" font-weight="500" fill="#2d2a24">Comprendre.</text>
  <text x="100" y="460" font-family="Georgia, 'Cormorant Garamond', serif" font-size="84" font-weight="500" fill="#5c8273">Avancer.</text>
  <text x="100" y="540" font-family="-apple-system, system-ui, sans-serif" font-size="22" letter-spacing="6" fill="#6b655b">SANDRA SAPIO &#8226; PSYCHOLOGUE CLINICIENNE</text>
  <text x="100" y="575" font-family="-apple-system, system-ui, sans-serif" font-size="18" fill="#948c80">Mauguio &#8226; Montpellier &#8226; T&#233;l&#233;consultation</text>
</svg>`;
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outPath);
  const stat = await fs.stat(outPath);
  console.log(`OK og-image.jpg - ${(stat.size / 1024).toFixed(0)} Ko`);
}

async function generateAppleTouchIcon() {
  const outPath = path.join(PUBLIC_DIR, "apple-touch-icon.png");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="32" fill="#fbf8f1"/>
  <circle cx="90" cy="80" r="38" fill="none" stroke="#5c8273" stroke-width="3"/>
  <text x="90" y="148" font-family="Georgia, serif" font-size="44" font-weight="500" text-anchor="middle" fill="#2d2a24">SS</text>
</svg>`;
  await sharp(Buffer.from(svg))
    .resize(180, 180)
    .png()
    .toFile(outPath);
  console.log("OK apple-touch-icon.png");
}

async function generateFavicon() {
  const outPath = path.join(PUBLIC_DIR, "icon.svg");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#fbf8f1"/>
  <text x="16" y="22" font-family="Georgia, serif" font-size="16" font-weight="500" text-anchor="middle" fill="#5c8273">S</text>
</svg>`;
  await fs.writeFile(outPath, svg);
  console.log("OK icon.svg");
}

(async () => {
  for (const task of TASKS) {
    try {
      await processImage(task);
    } catch (e) {
      console.error(`Erreur ${task.out}`, e.message);
    }
  }
  await generateOgImage();
  await generateAppleTouchIcon();
  await generateFavicon();
})();
