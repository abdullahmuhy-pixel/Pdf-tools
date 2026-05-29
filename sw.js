// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  BUMP `BUILD` BEFORE EVERY `git push`
//     One value change here forces every visitor's browser to detect the new
//     SW, install it, nuke the old cache, and pull fresh assets — guaranteed.
//     Format: YYYYMMDD-N  (increment N if you push more than once per day)
// ─────────────────────────────────────────────────────────────────────────────
const BUILD = '20260529-1';
const CACHE  = `pdf-tools-${BUILD}`;

// CDN libs to pre-cache (index.html is intentionally NOT here — always fetched fresh)
const PRECACHE = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5.0.4/dist/tesseract.min.js',
  'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js',
];

// ── Install ───────────────────────────────────────────────────────────────────
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(
        PRECACHE.map(url =>
          cache.add(url).catch(() => console.warn('SW: failed to cache', url))
        )
      )
    )
  );
});

// ── Activate ──────────────────────────────────────────────────────────────────
// Delete every cache that doesn't match the current BUILD, then claim all tabs.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // 1. Never intercept sw.js itself
  if (url.pathname.endsWith('sw.js')) return;

  // 2. HTML / navigation → NETWORK-FIRST, never cached
  //    Key fix: users always load the latest HTML after every deploy.
  if (
    request.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname.endsWith('/index.html')
  ) {
    e.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 3. Everything else → cache-first, background-update
  e.respondWith(
    caches.match(request).then(cached => {
      const networkFetch = fetch(request)
        .then(response => {
          if (response.ok && request.method === 'GET') {
            caches.open(CACHE).then(c => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => null);
      return cached || networkFetch;
    })
  );
});
