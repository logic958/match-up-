// Basic service worker – can be empty for now
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());