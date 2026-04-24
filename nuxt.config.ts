// Static Nuxt configuration for GitHub Pages.
// Set NUXT_APP_BASE_URL=/<repo-name>/ automatically in GitHub Actions for project pages.
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'PCIIS | Small Business IT Support & Technical Solutions',
      meta: [
        { name: 'description', content: 'PCIIS provides practical IT support, software implementation, integrations, reporting, networking support, and technical marketing help for small businesses and organizations in northwest Ohio.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true
    }
  },
  modules: ['@nuxtjs/seo']
})
