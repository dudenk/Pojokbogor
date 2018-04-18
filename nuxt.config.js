const axios = require('axios')
const _ = require('lodash')
module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: ['https']
  },
  head: {
    titleTemplate: '%s - PojokBogor.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Berita dan kabar pilihan terkini serta terbaru seputar peristiwa, kuliner, belanja, dan wisata di Bogor.' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '1975447592717295' },
      { hid: 'fb:pages', property: 'fb:pages', content: '377301039140344' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.png' }
    ],
    script: [
      { innerHTML: "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1878460509132439');fbq('track', 'PageView'); ", type: 'text/javascript' },
      { innerHTML: "_atrk_opts = { atrk_acct:'3v1Hk1ao6C52WR', domain:'pojoksatu.id',dynamic: true}; (function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = 'https://certify-js.alexametrics.com/atrk.js'; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();", type: 'text/javascript' },
      // { innerHTML: '{"@context":"http://schema.org","@type":"WebSite","url":"http://bogor.pojoksatu.id"}', type: 'application/ld+json' }
    ],
    noscript: [
      // { innerHTML: "<img height='1' width='1' src='https://www.facebook.com/tr?id=1878460509132439&ev=PageView&noscript=1'/>" }
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript']
  },
  css: [
    'vant/lib/vant-css/index.css',
    '@static/style.css'
  ],
  build: {
    vendor: ['moment', 'axios', 'vue-social-sharing']
  },
  plugins: [
    { src: '~/plugins/wp-mixin', ssr: true },
    { src: '~/plugins/social', ssr: true },
    // { src: '~/plugins/fb-sdk', ssr: false }
  ],
  modules: [
    'nuxt-device-detect',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-8641920503885775'
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-57456405-2'
    }]
  ],
  oneSignal: {
  init: {
      appId: '1eb37d5c-c31c-4626-9e35-51bb284ffd7e',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      },
      autoRegister: false,
      promptOptions: {
        /* actionMessage limited to 90 characters */
        actionMessage: "PojokBogor boleh mengirimkan berita pilihan terbaik untuk Anda",
        /* acceptButtonText limited to 15 characters */
        acceptButtonText: "Ya, Boleh",
        /* cancelButtonText limited to 15 characters */
        cancelButtonText: "Nanti Saja"
      }
    }
  },
  manifest: {
    name: 'Berita dan Kabar Pilihan di Bogor - PojokBogor.com',
    short_name: 'PojokBogor',
    description: 'Berita dan kabar pilihan terkini serta terbaru seputar peristiwa, kuliner, belanja, dan wisata di Bogor.',
    lang: 'id',
    icons: [{
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    }, {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    }, {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "/icons/icon-168x168.png",
      "sizes": "168x168",
      "type": "image/png"
    }, {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "/icons/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }, {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }],
  },
  axios: {
    baseURL: undefined,
    /**
     * Adds an interceptor to automatically set `withCredentials` config of axios
     * when requesting to baseUrl which allows passing authentication headers to backend.
     */
    proxyHeaders: false,
    credentials: false,
    /**
     * Adds interceptors to log all responses and requests
     */
    debug: false,
    /**
     * This option is a map from specific error codes to page which they should be redirect.
     *
     * For example if you want redirecting all `401` errors to `/login`
     */
    redirectError: {
      // 401: '/login'
    },
    /**
     * Function for manipulating axios requests.
     *
     * Useful for setting custom headers, for example based on the store state.
     * The second argument is the nuxt context.
     */
    requestInterceptor: (config, { store, req }) => {
      return config
    },
    /**
     * Function init(axios, ctx) to do additional things with axios.
     *
     * Example:
     *
     *    init (axios, ctx) {
     *      axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
     *    }
     */
    init: (axios, ctx) => {},
    /**
     * If you want to disable the default error handler for some reason,
     * you can do it so by setting the option `disableDefaultErrorHandler` to `true`.
     */
    disableDefaultErrorHandler: true
    /**
     * Function for custom global error handler.
     *
     * If you define a custom error handler, the default error handler provided by this package will be overridden.
     */
    // errorHandler: (errorReason, { error }) => {
    //   error('Request Error: ' + errorReason)
    // }
  },
  /*
  ** Customize the progress bar color
  */
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 360
    }
  },
  generate: {
    routes: function() {
      return axios.get('https://jabar.pojoksatu.id/wp-json/wp/v2/posts/')
      .then((res) => {
        return _.map(res.data, function(post, key) {
          return `/baca/${post.slug}`
        })
      })
    }
  },
  sitemap: {
    routes (callback) {
      axios.get('https://jabar.pojoksatu.id/wp-json/wp/v2/posts?categories=6&per_page=100')
      .then(res => {
        let routes = res.data.map(post => '/baca/' + post.slug)
        callback(null, routes)
      })
      .catch(callback)
    }
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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
