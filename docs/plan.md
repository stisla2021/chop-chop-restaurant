# Chop Chop landing page, GitHub, and Vercel

Build the Chop Chop landing page from the design handoff as a Vite + TypeScript + Tailwind CSS v4 static site, then create a private GitHub repo under the jassehcodecamp org and deploy it to Vercel on the personal Hobby account (not the Tritech team).

## Links

- **Repository:** https://github.com/jassehcodecamp/chop-chop-restaurant-website
- **Deployed site:** https://2-chop-chop-restaurant-website.vercel.app/

## Checklist

- [x] Scaffold Vite vanilla-ts + Tailwind v4, `@theme` tokens, copy SVGs to `public/assets`
- [x] Implement all landing sections from comps with style-guide utilities and copy
- [x] Verify desktop/mobile layout, hovers, focus, and in-page nav
- [x] Init git, commit, create private repo under jassehcodecamp, push
- [x] Deploy to Vercel on personal Hobby scope (not Tritech) and confirm the live URL

## Context

The workspace started **handoff-only** ([design-handoff/style-guide.md](../design-handoff/style-guide.md), comps, and SVGs). The style guide is explicit: rebuild the page in **Tailwind with Vite**, using named `@theme` colours and utilities only (no hex in HTML).

## Stack

- **Vite + TypeScript** (`vanilla-ts`) — matches the CS200 Tailwind & Vite block; a SPA framework is unnecessary for one landing page. Markup stays in HTML; TypeScript is the entry (`src/main.ts`) and Vite config (`vite.config.ts`).
- **Tailwind CSS v4** via `@tailwindcss/vite`, with a custom palette in `@theme` after `--color-*: initial;`.
- **System font** as `--font-sans` (no Google Fonts).
- Copy and assets taken from the comps and [design-handoff/assets/](../design-handoff/assets/) as-is.

```css
@theme {
  --color-*: initial;
  --color-chop: #ea580c;
  --color-chop-dark: #c2410c;
  --color-chop-light: #fb923c;
  --color-chop-soft: #ffedd5;
  --color-ink: #1c1917;
  --color-ink-2: #44403c;
  --color-ink-3: #78716c;
  --color-surface: #ffffff;
  --color-cream: #fdf4e7;
  --color-line: #e7e5e4;
  --color-leaf: #15803d;
  --color-leaf-soft: #dcfce7;
  --color-on-dark: #fafaf9;
  --color-on-dark-soft: #a8a29e;
  --color-dark-line: #44403c;
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

## Page structure (one route)

Semantic sections in [index.html](../index.html), mobile-first (`sm:` / `lg:` only), inner width `max-w-6xl mx-auto px-5`. Copy typed from the comps, not rewritten.

- **Header:** logo + wordmark, nav (How it works, Popular, Areas), `Get the app` (header sizing `px-4 py-2`). Stacked on phone, row from `sm:`.
- **Hero** (`bg-cream`, `py-16 lg:py-24`): eyebrow, `h1` (`text-4xl lg:text-5xl`), lede `max-w-prose`, primary CTA + arrow link (`group` / `group-hover:translate-x-1`), `phone.svg` with real `alt`, floating stat card (`28 min`). Side-by-side from `lg:`.
- **How it works:** three steps with `step-1.svg` … `step-3.svg` (`h-20 w-20`, `alt=""`), stacked then `sm:` row.
- **Popular this week** (`bg-cream`): 6 cards (`dish-1.svg` … `dish-6.svg`, `aspect-3/2`, decorative `alt=""`). Badges: Popular (`chop-soft` / `chop-dark`), Spicy, Vegetarian (`leaf-soft` / `leaf`), Breakfast. Prices `D250`…`D75`. Grid 1 → 2 (`sm:`) → 3 (`lg:`) columns.
- **Where we deliver:** 6 area rows (Serrekunda 25 min … Lamin 45 min), same grid breakpoints.
- **Download band** (`bg-ink`): iPhone (filled) + Android (outline; hover lifts, border `on-dark`).
- **Footer** (`bg-ink`): brand blurb, three link columns, copyright rule. Footer links `chop-light` on hover; no lift.

Hovers, `duration-200`, `focus-visible` outlines, **no shadows**, **no `font-bold`**. Favicon from `logo.svg`.

## Repo layout

```
index.html
src/style.css          /* @import "tailwindcss"; @theme { ... } */
src/main.ts            /* CSS import only */
src/vite-env.d.ts
public/assets/         /* copies of handoff SVGs */
vite.config.ts
tsconfig.json
package.json
.gitignore
design-handoff/        /* keep as reference */
docs/plan.md           /* this plan */
```

Nav and CTAs use in-page anchors (`#how-it-works`, `#popular`, `#areas`, `#get-the-app`).

## GitHub (private, jassehcodecamp) and Vercel

After the page matches the comps in the browser (desktop and mobile viewports):

1. `git init` if needed, commit the site (not secrets).
2. Create the repo **in the `jassehcodecamp` organization**, private:

```bash
gh repo create jassehcodecamp/chop-chop-restaurant-website --private --source=. --remote=origin --push
```

This requires GitHub auth and permission to create repos in that org. If `gh` is logged in as a personal account without org access, we stop and you will need to grant access (or an org admin will).

3. Deploy with the Vercel CLI onto the **personal Hobby account**, not the Tritech team. If the CLI defaults to a team, switch scope to the personal account before linking (`vercel switch` / `--scope` with the personal slug). Do **not** use `--scope` for Tritech. Link GitHub `jassehcodecamp/chop-chop-restaurant-website` so later pushes auto-deploy. Framework: Vite; output: `dist`. Vercel must still be able to read the **private org repo** (GitHub App on `jassehcodecamp`), but the Vercel **project ownership** stays personal.

Hobby cannot auto-connect a **private org** GitHub repo. Deploys can still be created from the CLI onto `jassehomars-projects`.

## Verification

- Compare header, hero, steps, cards, areas, download band, and footer against [design-handoff/comp-desktop.png](../design-handoff/comp-desktop.png) and [design-handoff/comp-mobile.png](../design-handoff/comp-mobile.png).
- Exercise nav jumps, hover/focus on links and buttons, and both breakpoints.
- Confirm the live Vercel URL loads the same page.
