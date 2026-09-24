# Cloudflare Pages

El sitio es estático. `bun run build` copia `index.html`, `css/`, `js/`, `fonts/`, `_headers` (y `img/`,
`images/`, `assets/`, `_redirects` si existen) a `dist/`, que es lo que publica Pages.

## Crear el proyecto (una vez, desde el dashboard)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autoriza GitHub y elige el repo **`dani3669/mestre_test`**.
3. Configuración de build:

| Campo | Valor |
|-------|-------|
| **Project name** | `mestre-test` |
| **Production branch** | `main` (o la rama por defecto del repo) |
| **Framework preset** | None |
| **Build command** | `bun install && bun run build` |
| **Build output directory** | `dist` |
| **Root directory** | vacío |

4. Variable de entorno (Settings → Environment variables): `BUN_VERSION` = `1.3.11`.
5. **Save and Deploy**. Cada push a `main` publica en producción y cada rama genera una URL de preview.

## Desde la terminal (alternativa)

```bash
bun install
bunx wrangler login
bunx wrangler pages project create mestre-test --production-branch main
bun run deploy
```

## Local

```bash
bun install
bun run dev        # build + wrangler pages dev (sirve dist/ con _headers)
```

## Dominio propio

Proyecto de Pages → **Custom domains** → añade el dominio. Cloudflare indica los registros DNS.
