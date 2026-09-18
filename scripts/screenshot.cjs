/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("playwright");

const BASE = process.argv[2] || "http://localhost:4567";

const PAGES = [
  { path: "/", out: "home" },
  { path: "/pour-qui/", out: "pour-qui" },
  { path: "/pourquoi/", out: "pourquoi" },
  { path: "/mentions-legales/", out: "mentions-legales" },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const { path, out } of PAGES) {
    const url = `${BASE}${path}`;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const file = `/tmp/screenshot-${out}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`OK ${out} -> ${file}`);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: "/tmp/screenshot-home-mobile.png", fullPage: true });
  console.log("OK home-mobile -> /tmp/screenshot-home-mobile.png");

  await browser.close();
})();
