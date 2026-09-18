/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("node:path");
const fs = require("node:fs/promises");

const OUT_DIR = path.resolve(__dirname, "..", "out");

const FILES_TO_REMOVE = [
  "__next.__PAGE__.txt",
  "__next._full.txt",
  "__next._head.txt",
  "__next._index.txt",
  "__next._tree.txt",
  "index.txt",
];

async function exists(p) {
  return fs
    .access(p)
    .then(() => true)
    .catch(() => false);
}

async function rmFile(p) {
  if (await exists(p)) {
    await fs.unlink(p);
    console.log(`OK supprime ${path.relative(OUT_DIR, p)}`);
  }
}

const KEEP_FILES = new Set(["robots.txt"]);

async function rmTxtUnderRoutes(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !["_next", "images"].includes(entry.name)) {
      await rmTxtUnderRoutes(full);
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".txt") &&
      !KEEP_FILES.has(entry.name)
    ) {
      await rmFile(full);
    }
  }
}

(async () => {
  if (!(await exists(OUT_DIR))) {
    console.error("Aucun dossier out/ trouve. Lancez `pnpm build` d'abord.");
    process.exit(1);
  }

  for (const f of FILES_TO_REMOVE) {
    await rmFile(path.join(OUT_DIR, f));
  }

  await rmTxtUnderRoutes(OUT_DIR);

  console.log("Nettoyage termine. out/ pret pour deploiement FTP.");
})();
