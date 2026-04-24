import { defineNuxtConfig } from "nuxt/config";
// Static Nuxt configuration for GitHub Pages.
// Set NUXT_APP_BASE_URL=/<repo-name>/ automatically in GitHub Actions for project pages.

const isProduction = process.env.NODE_ENV === "production";
export default defineNuxtConfig({
  ssr: true,
  app: {
    // baseURL: isProduction ? "/pciis-site-nuxt/" : "/",
    baseURL: "/pciis-site-nuxt/", //hardcode for now
    head: {
      htmlAttrs: { lang: "en" },
      title: "PCIIS | Small Business IT Support & Technical Solutions",
      meta: [
        {
          name: "description",
          content:
            "PCIIS provides practical IT support, software implementation, integrations, reporting, networking support, and technical marketing help for small businesses and organizations in northwest Ohio area.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  css: ["~/app/assets/css/main.css"],
});
