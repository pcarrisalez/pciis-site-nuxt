import { defineNuxtConfig } from "nuxt/config";
// Static Nuxt configuration for GitHub Pages.
// Set NUXT_APP_BASE_URL=/<repo-name>/ automatically in GitHub Actions for project pages.

const baseURL = process.env.NUXT_APP_BASE_URL || "/";
const gtmId = "GTM-NMK382Z5";

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL,
    // baseURL: "/pciis-site-nuxt/", //hardcode for now
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
      script: [
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
          tagPosition: "head",
        },
      ],

      noscript: [
        {
          innerHTML: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          tagPosition: "bodyOpen",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
});
