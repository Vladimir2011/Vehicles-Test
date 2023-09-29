import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    [
      '@nuxt/image',
      {
        quality: 80,
        format: ['jpg', 'png', 'jpeg'],
        dir: 'public/images'
      }
    ],
    '@nuxt/devtools',
    '@formkit/nuxt',
    '@vueuse/nuxt'
  ],

  ssr: true,

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: './locales',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        file: 'en.json'
      }
    ]
  },

  css: [resolve('./assets/scss/app.scss')],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: {
    timeline: {
      enabled: true
    }
  }
})
