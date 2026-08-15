Google Adsense integration (guidance)

This project includes placeholder components for ad slots. Real Adsense integration must be done carefully to follow Google policies and to avoid committing any private publisher or ad-slot IDs into the repository.

How to configure
1. Create a `.env` file at the project root (do not commit it).
   - Add your Adsense/Publisher ID and any ad slot IDs you need as environment variables, for example:
     REACT_APP_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX

2. The placeholder component `src/components/Adsense/AdsensePlaceholder.js` checks for `process.env.REACT_APP_ADSENSE_ID` and will show a friendly message if it's not set. Replace the placeholder markup with real Adsense code during build or via a small runtime loader that injects the script and ad slot.

Recommended pattern (safe)
- Keep publisher IDs and slot IDs in environment variables (in GitHub Actions, set them as repository secrets and inject to the build using the Actions workflow).
- Do not embed raw publisher or slot IDs in committed code.

Example GitHub Actions snippet (inject env at build time)
- name: Build
  run: npm run build
  env:
    REACT_APP_ADSENSE_ID: ${{ secrets.REACT_APP_ADSENSE_ID }}

After build, the static files in `build/` will contain the ad config.

Notes and policy
- Follow Google's Adsense placement and content policies.
- For testing locally, use non-personal ad units or set the environment variable locally.
- Some ad code requires injecting a script in index.html (public/index.html). If so, ensure you follow CSP and do not expose any secret keys.

If you want, I can implement an example build-time injection in the Actions workflow that reads REACT_APP_ADSENSE_ID from repository secrets and sets it during the build step (recommended). Say yes and I'll add it to the workflow file.