module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
  ** Headers of the page
  */
  head: {
    title: 'logistics-frontend',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},

  plugins: [
    "~/plugins/reststate-vuex",
    '~/plugins/vue-i18n',
    { src: "~/plugins/axios" }
  ],

  /*
  ** Build configuration
  */
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
    "@nuxtjs/toast",
  ],
  modules: [
    '@nuxtjs/axios',
    'vuetify-dialog/nuxt',
    '@nuxtjs/auth'
  ],

  axios: {
    host: '188.120.244.12',
    port: 5000,
    prefix: '/api/v3.0/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    proxy: true,
  },

  proxy: {
    '/api/': "http://188.120.244.12:5000/"
  },

  router: {
    middleware: ["auth"]
  },

  auth: {
    redirect: {
      login: "/auth/login",
      logout: "/",
      callback: "/auth/login",
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'auth_token' },
          user: { url: "/auth/status", method: "get", propertyName: "data" },
          logout: { url: "/auth/logout", method: "post" },
        }
      },
      watchLoggedIn: true,
      rewriteRedirects: true
    },
    plugins: [{ src: "~/plugins/axios" }]
  },

  toast: {
    duration: 3000
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

