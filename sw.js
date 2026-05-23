const CACHE = 'reaction-game-v2';
const FILES = [
  '/reaction-game/index.html',
  '/reaction-game/manifest.json',
  '/reaction-game/icon-192.png',
  '/reaction-game/icon-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
