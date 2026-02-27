const STATIC_CACHE = "udaan-static-v1";
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".ico"];
const PRE_CACHE_ASSETS = [
  "/udaan_logo.png?v=20260227",
  "/profile.png",
  "/call.png",
  "/wp.png",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      Promise.all(
        PRE_CACHE_ASSETS.map((assetUrl) =>
          cache.add(new Request(assetUrl, { cache: "reload" })).catch(() => undefined)
        )
      )
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== STATIC_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isImageRequest = IMAGE_EXTENSIONS.some((extension) =>
    requestUrl.pathname.toLowerCase().endsWith(extension)
  );

  if (!isSameOrigin || !isImageRequest) {
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: false }).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }

        const responseClone = response.clone();
        void caches.open(STATIC_CACHE).then((cache) => cache.put(request, responseClone));
        return response;
      });
    })
  );
});
