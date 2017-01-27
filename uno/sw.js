var CACHE_NAME = 'uno-cache-v1';
var urls = [
    '/',
    '/js/main.js'
];
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urls)
            })
    )
});