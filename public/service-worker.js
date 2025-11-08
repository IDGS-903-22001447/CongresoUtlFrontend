const CACHE_NAME = 'congreso-utl-v1'
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
]

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('🔧 Installing Service Worker...')
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Caching assets')
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Some assets failed to cache:', err)
      })
    })
  )
  self.skipWaiting()
})

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('✅ Activating Service Worker...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch events
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // API calls - Network first with fallback
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone)
            })
          }
          return response
        })
        .catch((error) => {
          console.warn('Fetch failed, trying cache:', error)
          return caches.match(request).then((cached) => {
            if (cached) return cached
            return new Response(
              JSON.stringify({ error: 'Offline - no cached data' }),
              { status: 503, headers: { 'Content-Type': 'application/json' } }
            )
          })
        })
    )
  } else {
    // Static assets - Cache first
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) return response
        return fetch(request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone)
          })
          return response
        })
      }).catch(() => {
        return new Response('Offline', { status: 503 })
      })
    )
  }
})
