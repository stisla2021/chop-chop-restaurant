# GitHub Pages deployment plan

1. [x] Confirm the GitHub repository target: `stisla2021/chop-chop-restaurant`.
2. [x] Configure Vite to emit project-path URLs for GitHub Pages without changing the existing Vercel root-path build.
3. [x] Add a GitHub Actions workflow that builds the site and publishes `dist` to GitHub Pages.
4. [x] Verify both the GitHub Pages and default production builds.
5. [x] Push the changes to `stisla2021/chop-chop-restaurant` on `master`.
6. [ ] Verify the repository uses GitHub Actions as its Pages source, rerun the workflow, and confirm the built site and assets load.

The first workflow run built successfully but could not configure Pages because Pages was not enabled at that time. Pages now serves the repository's unbuilt source, and its root-relative assets return 404; configure GitHub Actions as the Pages source and verify the artifact deployment. The expected Pages URL is `https://stisla2021.github.io/chop-chop-restaurant/`. Only the Pages workflow, Vite base-path setting, and this deployment note are included in the deployment commits; unrelated existing local changes remain untouched.
