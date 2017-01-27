var CACHE_NAME = 'uno-cache-v1';
var urls = [
    '/uno/',
    '/uno/js/main.js'
];
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urls)
            }
        )
    )
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (respond) {
                if (respond)
                    return respond;
                return fetch(event.request)
            }
        )
    )
});