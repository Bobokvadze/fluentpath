// ქეშის ვერსია: გაზარდეთ, როცა ფაილების სია იცვლება (ძველი ქეში ავტომატურად წაიშლება)
const CACHE_NAME = 'fluentpath-cache-v4';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './data/config.json',
  './assets/icons/icon.svg',
  './assets/icons/badge.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png',
  './css/themes.css',
  './css/style.css',
  './css/responsive.css',
  './css/phase2.css',
  './css/phase3.css',
  './css/auth.css',
  './css/phase5.css',
  './css/vocab-grammar-polish.css?v=13',
  './js/storage.js',
  './js/ui.js',
  './js/progress.js',
  './js/dashboard.js',
  './js/learn.js',
  './js/vocabulary.js',
  './js/grammar-a.js',
  './js/grammar-b.js',
  './js/grammar-c.js',
  './js/grammar.js',
  './js/reading-a.js',
  './js/reading-b.js',
  './js/reading-c.js',
  './js/reading.js',
  './js/settings.js',
  './js/router.js',
  './js/app.js',
  './js/supabase-config.js',
  './js/auth.js',
  './js/listening-a.js',
  './js/listening-b.js',
  './js/listening-c.js',
  './js/listening.js',
  './js/writing-a.js',
  './js/writing-b.js',
  './js/writing-c.js',
  './js/writing.js',
  './js/ipa-dict.js',
  './js/flashcards.js',
  './js/quizzes.js',
  './js/audio-engine.js',
  './js/speaking.js',
  './js/vocab-grammar-polish.js?v=13'
];

// ვერსიით დაფიქსირებული (უცვლელი) გარე ბიბლიოთეკები — შეიძლება cache-first სტრატეგიით მოვემსახუროთ
const IMMUTABLE_CDN_PREFIX = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (url.href.startsWith(IMMUTABLE_CDN_PREFIX)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return cached || fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // სხვა გარე მოთხოვნებს (მაგ. Supabase API) არ ვეხებით — მათ შორის პირადი მონაცემებია
  if (url.origin !== self.location.origin) return;

  // საკუთარი ფაილები: ჯერ ქსელი (ყოველთვის უახლესი ვერსია), შემდეგ ქეში (ოფლაინ რეჟიმი)
  event.respondWith(
    fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }).catch(() => {
      return caches.match(request, { ignoreSearch: request.mode === 'navigate' }).then((cached) => {
        if (cached) return cached;
        if (request.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    })
  );
});
