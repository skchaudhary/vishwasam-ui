Deployment & Publishing (GitHub Pages)

This project is configured to deploy automatically to GitHub Pages when changes are merged or pushed to the `main` branch.

What the workflow does
- On push to `main`, the GitHub Actions workflow at `.github/workflows/deploy.yml`:
  - checks out the repository
  - installs Node dependencies (npm ci)
  - runs `npm run build` to produce an optimized production build in `build/`
  - copies the repository `CNAME` file (if present) into `build/` so GitHub Pages serves the custom domain
  - publishes the `build/` directory to the `gh-pages` branch using `peaceiris/actions-gh-pages` (via `GITHUB_TOKEN`)

How to verify
1. Confirm the workflow exists in the repository: `.github/workflows/deploy.yml`.
2. Push or merge a change to `main`. In the repository Actions tab on GitHub, confirm the "Deploy to GitHub Pages" workflow runs and completes successfully.
3. After a successful run, the site will be published to GitHub Pages and the repository's Pages settings will use the `gh-pages` branch. The CNAME in the repository root will be copied into the published site so the configured custom domain will be used.

Notes & troubleshooting
- The workflow uses the automatically provided `GITHUB_TOKEN`. No additional secret is required for standard Pages publishing.
- If DNS for your domain (example: bharwaliya.com) is already configured at your domain registrar (GoDaddy), DNS changes can take time to propagate. Use `dig` or an online DNS lookup to confirm the A/ALIAS/CNAME records point to GitHub Pages.
- To test a production build locally:
  - Run `npm run build` then serve the build directory (e.g., `npx serve build` or `python -m http.server 8000 --directory build`).

Optional local publish (alternative)
- If you prefer not to use Actions, you can install the `gh-pages` package and use its npm scripts. That approach requires adding `homepage` in `package.json` and running `npm run deploy` manually or from CI.

Optional: Inject Adsense env
- If you want to show Adsense on the site, set `REACT_APP_ADSENSE_ID` as a secret in the repository and inject it into the build step like this:

  - name: Build
    run: npm run build
    env:
      REACT_APP_ADSENSE_ID: ${{ secrets.REACT_APP_ADSENSE_ID }}

Next steps and recommendations
- Add a simple health check or smoke-test job to the workflow to validate the site serves expected content after publishing.
- Enable HTTPS enforcement for the custom domain in the Pages settings once the domain is correctly configured and a certificate is provisioned by GitHub.
- Keep the `CNAME` file in the repository root to preserve the custom domain on each deployment.
