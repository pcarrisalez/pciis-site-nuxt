import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,

      botDetection: boolean,

      pageMetaRobots: any,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      strictNuxtContentPaths: any,

      isNuxtContentDocumentDriven: boolean,

      componentDirs: Array<string>,
   },
  }
  interface SharedPublicRuntimeConfig {
   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      excludeLinks: Array<{

      }>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "seo-utils": {
      canonicalQueryWhitelist: Array<string>,

      canonicalLowercase: boolean,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,

      botDetection: boolean,

      pageMetaRobots: any,
   },
  }
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["nuxtseo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["nuxt-site-config", Exclude<NuxtConfig["site"], boolean>])[],
  }
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["nuxtseo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     * @see https://www.npmjs.com/package/nuxt-site-config
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     * @see https://www.npmjs.com/package/nuxt-site-config
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["W:/GPT Code Projects/pciis-site-nuxt/pciis-site-nuxt/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["nuxt-site-config", Exclude<NuxtConfig["site"], boolean>])[],
  }
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }