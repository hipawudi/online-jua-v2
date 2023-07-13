const open = require('open')
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'dayjs-nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
    "@vueuse/motion/nuxt"
  ],
  devtools: { enabled: true },
  hooks: {
    listen(server, { host, port }) {
      open(`http://${host}:${port}`)
    }
  },
  dayjs: {
    locales: ['zh', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'zh',
    defaultTimezone: 'Asia/Hong_Kong',
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
      },
    }
  },
})
