// Copia el sitio estático a ./dist, que es lo que publica Cloudflare Pages.
// Añade aquí cualquier archivo o carpeta nueva que deba publicarse.
import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

const OUT = "dist";
const ENTRIES = ["index.html", "css", "js", "fonts", "img", "images", "assets", "favicon.ico", "_headers", "_redirects", "robots.txt", "sitemap.xml"];

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const entry of ENTRIES) {
  if (existsSync(entry)) await cp(entry, `${OUT}/${entry}`, { recursive: true });
}

if (!existsSync(`${OUT}/index.html`)) {
  console.error("build: falta index.html");
  process.exit(1);
}
console.log(`build: sitio listo en ./${OUT}`);
