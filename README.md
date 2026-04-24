# PCIIS Nuxt GitHub Pages Site

A modern static Nuxt site based on the older PCIIS content and current resume skills.

## Fast local start

```bash
npm install
npm run dev
```

## Generate static files

```bash
npm run generate
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload these files or push them with Git.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to the `main` branch.
6. Watch the **Actions** tab until the workflow finishes.

## If this is a user site

If the repository is named `yourusername.github.io`, edit `.github/workflows/deploy.yml` and change:

```yaml
NUXT_APP_BASE_URL: /${{ github.event.repository.name }}/
```

to:

```yaml
NUXT_APP_BASE_URL: /
```

## Suggested GitHub Copilot Agent prompt

Use this in VS Code Copilot Chat with Agent mode:

```text
You are modernizing an older static business website into a Nuxt 3 static SPA for GitHub Pages. Preserve the core PCIIS message: practical IT support, network/software consultation, implementation, maintenance, databases, reports, websites, technical marketing support, and small business troubleshooting. Remove outdated pre-2010 presentation details, tables, old browser scripts, ASP form handling, old tracking/widget scripts, and obsolete copy. Use the resume skills: SQL Server, REST APIs, JavaScript/TypeScript, Vue, .NET, MS Access, SaaS implementation, integration troubleshooting, documentation, reporting, client onboarding, and process improvement. Add plausible service sections for virus removal, third-party integration, networking support, phone/device app support, and support for lawyers, small grocery/retail, restaurants, nonprofits, and marketing teams. Keep the site static, accessible, responsive, deployable through GitHub Pages Actions, and easy to maintain.
```

## Notes

The old ASP contact form will not work on GitHub Pages because Pages is static hosting. This version uses `mailto:` and `tel:` links. A future upgrade can use Formspree, Basin, Netlify Forms, or another static-friendly form endpoint.
