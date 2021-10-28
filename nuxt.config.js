const config = {
  head: {
    title: 'MDM',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MDM Front Test' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  ssr: false,

  server: {
    host: '0',
  },

  css: ['~/assets/styles/global.scss'],

  styleResources: {
    scss: ['~/assets/styles/index.scss'],
  },

  plugins: ['~/plugins/tools.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
  ],

  modules: [],

  serverMiddleware: [
    { path: '/server-middleware', handler: '~/server-middleware/api.js' },
  ],

  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },

  googleFonts: {
    families: {
      'Material+Icons': true,
      Poppins: [800],
      Lato: {
        wght: [400, 700],
        ital: [400],
      },
    },
  },
}

export default config
