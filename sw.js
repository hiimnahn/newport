const CACHE_NAME = 'imnahn-portfolio-v1.0.2';
const urlsToCache = [
    '/',
    '/index.html',
    '/project-detail.html',
    '/src/css/styles.css',
    '/src/css/pixel-art.css',
    '/src/css/pixel-effects.css',
    '/src/css/project-styles.css',
    '/src/js/script.js',
    '/src/js/project-details.js',
    '/src/js/image-optimizer.js',
    '/src/js/pixel-effects.js',
    '/src/js/pixel-stars.js',
    '/src/js/image-modal.js',
    '/src/js/seo-optimizer.js',
    '/src/js/error-handler.js',
    '/src/img/fav/favicon.ico',
    '/src/img/fav/favicon-16x16.png',
    '/src/img/fav/favicon-32x32.png',
    '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and invalid URLs
    if (event.request.method !== 'GET' || 
        !event.request.url.startsWith('http') ||
        event.request.url.includes('/null')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    (response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            })
                            .catch((error) => {
                                console.log('Cache put error:', error);
                            });

                        return response;
                    }
                )
                .catch((error) => {
                    console.log('Fetch error:', error);
                    // Return offline fallback if available
                    return caches.match('/index.html');
                });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Push event - handle push notifications (if needed)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New update available!',
        icon: '/src/img/fav/favicon-32x32.png',
        badge: '/src/img/fav/favicon-16x16.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore',
                icon: '/src/img/fav/favicon-16x16.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/src/img/fav/favicon-16x16.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('imnahn Portfolio', options)
    );
});

// Message event - handle messages from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
}); 