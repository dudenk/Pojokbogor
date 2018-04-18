importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pojokbogor",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0f5f495e8cbd2cde0b41.js",
    "revision": "5bab796d5a0b46051c5bdff32834b75a"
  },
  {
    "url": "/_nuxt/layouts/default.5c9dd1e87870e7699cc8.js",
    "revision": "984037ba55ef9450ca4bbf47f7c5c753"
  },
  {
    "url": "/_nuxt/manifest.563f41dd236292938682.js",
    "revision": "745c620486e54a5615e138240854de6e"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/baca/_slug.d735dcad5b6ad18c4e77.js",
    "revision": "64a1352832fcc17247b9ca25f3cca0fe"
  },
  {
    "url": "/_nuxt/pages/index.33dcfac183fc4e85ed16.js",
    "revision": "b205a8a0e59a79f55292861bd092be12"
  },
  {
    "url": "/_nuxt/pages/populer.e06034bece8aaebe5bb7.js",
    "revision": "bb24d5664b4505261070330ffdbe3ab7"
  },
  {
    "url": "/_nuxt/pages/topik/_slug.26f0936657ef26bae59e.js",
    "revision": "63f1d914befdf95a73cd4986ff805bd1"
  },
  {
    "url": "/_nuxt/pages/video/_slug.340691e9318b8860e383.js",
    "revision": "a5526fda854e41a4f94c62e15ab3e5b0"
  },
  {
    "url": "/_nuxt/pages/video/index.920ccd2528c9a131cc70.js",
    "revision": "3e9168ef5079eea061c8a25c14f6643c"
  },
  {
    "url": "/_nuxt/vendor.5bd91a7b58a752136b94.js",
    "revision": "9156b773eadcce8dd56bdad337cc1cbe"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

