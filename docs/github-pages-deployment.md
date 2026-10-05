# GitHub Pages deployment plan

1. [x] Confirm the GitHub repository target, using the repository documented in `plan.md` if it is still correct.
2. [x] Configure Vite to emit project-path URLs for GitHub Pages without changing the existing Vercel root-path build.
3. [x] Add a GitHub Actions workflow that builds the site and publishes `dist` to GitHub Pages.
4. [x] Verify both the GitHub Pages and default production builds.
5. [ ] Push the changes and confirm the Pages deployment.

The workspace is connected to the documented repository's `master` branch. Only the Pages workflow, Vite base-path setting, and this deployment note are staged; other pre-existing local differences remain untouched.
