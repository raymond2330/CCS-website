# CCS Website

A modern, responsive website for the College of Computer Studies, built with Next.js 15, React 19 and Tailwind CSS v4.

**Live site:** https://raymond2330.github.io/CCS-website/

---

## Table of Contents

- [Running it locally](#running-it-locally)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [How the deployment works](#how-the-deployment-works)
- [Adding images and PDFs](#adding-images-and-pdfs)
- [Troubleshooting](#troubleshooting)
- [Using a custom domain](#using-a-custom-domain)
- [Editing content](#editing-content)
- [Project structure](#project-structure)

---

## Running it locally

You need [Node.js](https://nodejs.org/) 18 or newer and [Git](https://git-scm.com/).

```sh
git clone https://github.com/raymond2330/CCS-website.git
cd CCS-website
npm install
npm run dev
```

Open <http://localhost:3000>.

### Available commands

| Command           | What it does                                                       |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Development server with hot reload, at `localhost:3000`             |
| `npm run build`   | Builds the static site into the `out/` folder                       |
| `npm start`       | Serves the already-built `out/` folder, to preview the real output  |
| `npm run preview` | `build` + `start` in one step                                       |
| `npm run lint`    | Runs ESLint                                                         |

> **Note:** this project builds to static HTML, so `npm start` serves the `out/`
> folder with a plain file server rather than running a Next.js server.

---

## Deploying to GitHub Pages

You only do **steps 1 and 2 once**. After that, every push to `main` deploys automatically.

### Step 1 — Turn on GitHub Pages

1. Go to your repository on GitHub: <https://github.com/raymond2330/CCS-website>
2. Click **Settings** (top menu of the repo).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** → **Source**, open the dropdown and choose
   **GitHub Actions**.

   > This is the important part. Do **not** pick "Deploy from a branch" — this
   > project is built by a workflow, not served from raw repo files.

5. There is nothing to save; the choice applies immediately.

### Step 2 — Check that Actions are allowed

1. Still in **Settings**, click **Actions** → **General** in the left sidebar.
2. Under **Actions permissions**, make sure **Allow all actions and reusable
   workflows** is selected.
3. Scroll down to **Workflow permissions** and confirm **Read and write
   permissions** is selected, then click **Save**.

### Step 3 — Push your code

```sh
git add .
git commit -m "Set up GitHub Pages deployment"
git push origin main
```

### Step 4 — Watch it deploy

1. Open the **Actions** tab of your repository.
2. You will see a run named **Deploy to GitHub Pages**. Click it.
3. It runs two jobs, `build` then `deploy`. A full run takes roughly 2–4 minutes
   (most of that is uploading images and PDFs).
4. When both jobs show a green check, the `deploy` job displays the live URL.

Your site is at:

```
https://raymond2330.github.io/CCS-website/
```

> The first deploy can take an extra minute or two to become reachable while
> GitHub provisions the site. If you get a 404 immediately after the first
> successful run, wait a moment and refresh.

### Deploying again later

Just push to `main`:

```sh
git add .
git commit -m "Describe your change"
git push origin main
```

The workflow runs on its own and updates the live site.

You can also deploy without pushing: go to **Actions** → **Deploy to GitHub
Pages** → **Run workflow** → pick `main` → **Run workflow**.

---

## How the deployment works

Three pieces make this work. It is worth knowing what they do, because breaking
any one of them breaks the site in a way that is confusing to debug.

### 1. Static export — `next.config.ts`

GitHub Pages only serves files; it cannot run a Node.js server. So the config
sets `output: "export"`, which makes `npm run build` write a complete static
site into `out/` instead of producing a server app.

### 2. The base path — `next.config.ts` and the workflow

The site is served from a **subfolder**, `https://raymond2330.github.io/CCS-website/`,
not from the domain root. Every link and asset therefore needs the
`/CCS-website` prefix, or it will 404.

The workflow supplies this by setting `NEXT_PUBLIC_BASE_PATH=/CCS-website`
before building. `next.config.ts` reads that variable and applies it. Locally
the variable is unset, so `npm run dev` stays at plain `localhost:3000`.

To build a Pages-identical copy on your own machine:

```sh
NEXT_PUBLIC_BASE_PATH=/CCS-website npm run build
```

### 3. `.nojekyll` — `public/.nojekyll`

GitHub Pages runs Jekyll over uploaded files by default, and Jekyll **deletes
every folder whose name starts with an underscore**. Next.js puts all of its
JavaScript and CSS in `_next/`, so without this empty marker file the site
would load with no styling and no interactivity.

Do not delete `public/.nojekyll`.

---

## Adding images and PDFs

Put files under `public/`, then reference them by the path **after** `public`.
For example `public/images/CCS/logo.png` is referenced as `/images/CCS/logo.png`.

Because of the base path described above, how you write that reference matters:

**For images — use the `Image` component. Nothing extra needed.**

```tsx
import Image from "next/image"

<Image src="/images/CCS/logo.png" alt="CCS logo" width={40} height={40} />
```

The custom loader in `lib/image-loader.ts` adds the base path automatically.

**For anything else — `<a href>`, `<video>`, `<source>` — wrap it in `assetPath()`.**

Raw HTML tags do not go through Next.js, so they need the prefix added by hand:

```tsx
import { assetPath } from "@/lib/asset-path"

<a href={assetPath("/pdfs/Computer Science/Curriculum.pdf")}>Download</a>
```

Forgetting `assetPath()` is the single most common way to break the deployed
site while everything still looks fine locally.

### Program PDFs and artwork

Each program's downloads are listed under `resources` in `lib/programs.ts`,
with the path and file size shown on the page. To add or replace a PDF, drop it
in `public/pdfs/<Program Name>/` and update that list.

Program artwork is original illustration generated in GIMP from
`design/program-art/` (not photos, so nothing implies it shows our own labs or
rooms). See the README in that folder for how to edit or regenerate it.

---

## Troubleshooting

**The page loads but has no styling, and nothing is clickable.**
`public/.nojekyll` is missing. Restore it, commit, and push.

**Images or PDFs return 404 on the live site but work locally.**
Something references a path without the base path. Images should use
`next/image`; raw tags should use `assetPath()`. See
[Adding images and PDFs](#adding-images-and-pdfs).

**The Actions tab shows a red X on the `build` job.**
Click the run, then the failed step, and read the log. Usually it is a
TypeScript or ESLint error. Reproduce it locally with:

```sh
npm run lint
NEXT_PUBLIC_BASE_PATH=/CCS-website npm run build
```

**The `deploy` job fails with a permissions error.**
Re-check [Step 2](#step-2--check-that-actions-are-allowed) — Pages source must
be **GitHub Actions**, and workflow permissions must be **Read and write**.

**I pushed but no workflow ran.**
The workflow only triggers on the `main` branch. Confirm with
`git branch --show-current`.

---

## Using a custom domain

If you point a custom domain at the site, or rename the repo to
`raymond2330.github.io`, the site is served from the **root** and the base path
must be removed:

1. In `.github/workflows/deploy.yml`, set the base path to empty:

   ```yaml
   env:
     NEXT_PUBLIC_BASE_PATH: ""
   ```

2. For a custom domain, add a `public/CNAME` file containing only your domain:

   ```
   www.example.com
   ```

3. Commit and push, then set the domain under **Settings → Pages → Custom domain**.

---

## Editing content

| What                                              | Where                  |
| ------------------------------------------------- | ---------------------- |
| Program text, specializations, careers, downloads | `lib/programs.ts`      |
| Faculty and staff                                 | `lib/faculty.ts`       |
| News, events, organizations, contact details      | `lib/site-data.ts`     |
| Colors (navy, brand blue, gold) and dark mode     | `app/globals.css`      |

All program pages come from one template, `app/[program]/page.tsx`, so
they always share the same layout.

---

## Project structure

```
CCS-website/
├── .github/workflows/deploy.yml   Builds and publishes to GitHub Pages
├── app/                           Pages (Next.js App Router)
│   ├── layout.tsx                 Shared shell: nav, footer, fonts, theme
│   ├── page.tsx                   Home page
│   ├── [program]/page.tsx         Template for every program page
│   └── faculty-staff/             Faculty directory
├── components/                    Shared building blocks (nav, footer, page hero, cards…)
├── design/program-art/            GIMP masters and generator for program artwork (not deployed)
├── lib/
│   ├── programs.ts  faculty.ts  site-data.ts   Site content
│   ├── asset-path.ts              Adds the base path to raw asset URLs
│   └── image-loader.ts            Base path for next/image on static export
├── public/                        Static files, served as-is
│   ├── .nojekyll                  Stops GitHub Pages from deleting _next/
│   ├── images/  pdfs/
└── next.config.ts                 Static export + base path configuration
```

Built output goes to `out/`, which is git-ignored — GitHub Actions rebuilds it
on every deploy.
