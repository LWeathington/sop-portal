const CACHE_NAME = 'spoton-portal-v1';
const CORE_FILES = [
  '/sop-portal/',
  '/sop-portal/index.html',
  '/sop-portal/styles.css',
  '/sop-portal/app.js',
  '/sop-portal/manifest.json',
  '/sop-portal/icons/icon-192.png',
  '/sop-portal/icons/icon-512.png',
];

// Install — cache core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache-first for core files, network-first for SOPs (markdown)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Don't cache Drive or external links
  if (url.origin !== self.location.origin) return;

  // For SOP markdown files — network first, fall back to cache
  if (url.pathname.includes('/sops/')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Everything else — cache first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (!res || res.status !== 200) return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return res;
      });
    })
  );
});
