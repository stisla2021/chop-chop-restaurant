# GitHub Pages deployment plan

1. [x] Confirm the GitHub repository target: `stisla2021/chop-chop-restaurant`.
2. [x] Configure Vite to emit project-path URLs for GitHub Pages without changing the existing Vercel root-path build.
3. [x] Add a GitHub Actions workflow that builds the site and publishes `dist` to GitHub Pages.
4. [x] Verify both the GitHub Pages and default production builds.
5. [ ] Push the changes and confirm the Pages deployment.

The repository's default branch is `master` and has no commits yet. The expected Pages URL is `https://stisla2021.github.io/chop-chop-restaurant/`. Only the Pages workflow, Vite base-path setting, and this deployment note are included in the deployment commits; unrelated existing local changes remain untouched.
