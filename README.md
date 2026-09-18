# Site Sandra Sapio - Psychologue clinicienne

Site vitrine de Sandra Sapio, psychologue clinicienne a Mauguio (Montpellier) et en teleconsultation.

> Domaine de production : `https://sandra-sapio-psychologue.com`
> Hebergeur : LWS (Apache, FTP)

## Stack

- **Next.js 16** (App Router) en **export statique** (`output: 'export'`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (configuration via `@theme` dans `src/app/globals.css`)
- **next/font** pour Cormorant Garamond + Inter
- **Sharp** pour l'optimisation des images
- **pnpm** comme gestionnaire de paquets

## Demarrage local

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Construire le site pour LWS

```bash
pnpm build
```

Cette commande :
1. Lance `next build` qui genere le dossier `out/`
2. Nettoie les fichiers RSC `*.txt` inutiles pour un deploiement Apache statique

Le dossier `out/` contient alors :

- `index.html`, `pour-qui/index.html`, `pourquoi/index.html`, `mentions-legales/index.html`, `404.html`
- `sitemap.xml`, `robots.txt`, `.htaccess`
- `og-image.jpg`, `apple-touch-icon.png`, `icon.svg`
- `images/` (photos optimisees JPG)
- `_next/` (CSS et JS hashes pour le client)

## Deploiement sur LWS (FTP)

### Avec FileZilla

1. Connectez-vous au FTP LWS (informations dans le panneau LWS).
2. Naviguez vers la racine du site (souvent `/htdocs` ou `/www`).
3. **Uploadez tout le contenu** du dossier `out/` (et non le dossier `out` lui-meme).
4. Verifiez que le fichier `.htaccess` est bien transfere (il peut etre cache par defaut dans FileZilla : menu *Serveur* > *Forcer l'affichage des fichiers caches*).

### Avec lftp (ligne de commande)

```bash
lftp -u USER,PASSWORD ftp.sandra-sapio-psychologue.com <<EOF
mirror -R --delete --parallel=4 out/ /
bye
EOF
```

> Adaptez `USER`, `PASSWORD` et le chemin distant en fonction de votre configuration LWS.

## SEO - points cles configures

- **Metadata par page** : title, description, canonical, Open Graph, Twitter Card, robots.
- **JSON-LD structure** :
  - `Psychologist` + `MedicalBusiness` + `LocalBusiness` (schema combine sur l'accueil) avec adresse, geo, langues, specialites.
  - `Person` Sandra Sapio (jobTitle, alumniOf Paris Cite).
  - `WebSite` (le site lui-meme).
  - `BreadcrumbList` sur chaque sous-page.
- **Sitemap** : `sitemap.xml` genere automatiquement.
- **Robots** : `robots.txt` autorise tout, reference le sitemap.
- **Performance** : `next/font` (subset latin, `display: swap`), photos pre-optimisees < 70 Ko, classes Tailwind purge automatique.
- **Accessibilite** : `lang="fr"`, hierarchie H1/H2 stricte, alt textes descriptifs, skip link, focus visibles, support `prefers-reduced-motion`.

### Verifier le SEO apres deploiement

- [Rich Results Test (Google)](https://search.google.com/test/rich-results) sur `https://sandra-sapio-psychologue.com`
- [Google Search Console](https://search.google.com/search-console) : ajouter le domaine, soumettre `sitemap.xml`.
- [PageSpeed Insights](https://pagespeed.web.dev) : viser 95+ sur Performance, SEO, Accessibilite.
- [Schema Markup Validator](https://validator.schema.org/) : tester chaque page.

## Ajouter / mettre a jour les images

Pour optimiser de nouvelles photos (cabinet de Mauguio par exemple) :

1. Placer les images sources dans un dossier (ex. `/Users/.../photos-cabinet/`).
2. Adapter le tableau `TASKS` dans `scripts/optimize-images.cjs`.
3. Lancer :
   ```bash
   pnpm optimize:images
   ```

Les fichiers seront generes dans `public/images/`.

## Structure du projet

```
sandra.sapio/
- next.config.ts        Configuration Next.js (export statique)
- src/
  - app/
    - layout.tsx        Layout racine + JSON-LD global
    - page.tsx          Accueil
    - pour-qui/
    - pourquoi/
    - mentions-legales/
    - sitemap.ts        Sitemap.xml automatique
    - robots.ts         Robots.txt automatique
    - globals.css       Design system (Tailwind v4 + animations)
  - components/         Header, Footer, DoctolibCTA, JsonLd, icons, etc.
  - lib/
    - site.ts           Constantes (adresse, Doctolib, mentions legales)
    - seo.ts            Metadata helpers
    - schema.ts         JSON-LD helpers (Psychologist, Person, WebSite)
- public/
  - .htaccess           Headers de securite + cache + redirections (Apache LWS)
  - images/             Photos pre-optimisees
  - og-image.jpg        Preview reseaux sociaux 1200x630
  - apple-touch-icon.png, icon.svg
- scripts/
  - optimize-images.cjs Pre-optimisation Sharp
  - clean-out.cjs       Nettoyage post-build
  - screenshot.cjs      Captures Playwright (dev)
```

## A faire plus tard (optionnel)

- Ajouter de **vraies photos du cabinet de Mauguio** (placeholder actuellement absent : la photo de Sandra et la photo "pelote de laine" sont les visuels principaux).
- Verifier les **coordonnees GPS exactes** de l'Espace Holistik (actuellement valeur approximative dans `src/lib/schema.ts`).
- Ajouter un **profil LinkedIn** dans `src/lib/site.ts` (`social.linkedin`) pour enrichir les `sameAs` du JSON-LD.
- Si Sandra dispose d'un **logo vectoriel SVG**, le placer dans `public/images/logo.svg` et l'integrer dans `Logo.tsx` (a la place du texte actuel).

## Commandes utiles

| Commande | Description |
| --- | --- |
| `pnpm dev` | Serveur de dev local (port 3000) |
| `pnpm build` | Build statique + nettoyage |
| `pnpm preview` | Sert le build local pour verification |
| `pnpm optimize:images` | Re-optimise les images sources |
| `pnpm lint` | Verification ESLint |
