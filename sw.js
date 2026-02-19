const CACHE_NAME = "yaqeen-app-v1";

const urlsToCache = [
  "index.html",
  "quran.json",
  "script.js",
  "style.css",
  "Images/adam.jpg",
  "Images/noah.jpg",
  "Images/youssef.jpg",
  "Images/mosa.jpg",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
  );
});