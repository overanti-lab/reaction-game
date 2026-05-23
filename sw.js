const CACHE = 'reaction-game-v1';
const FILES = [
  '/reaction-game/',
  '/reaction-game/index.html',
  '/reaction-game/manifest.json',
  '/reaction-game/icon-192.png',
  '/reaction-game/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
