import { NuxtConfig } from '@nuxt/types'
const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],
  head: {
    title: 'Nuxt + Vercel + Typescript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  serverMiddleware: ['~/server-middleware/log.js'],
}
export default config
