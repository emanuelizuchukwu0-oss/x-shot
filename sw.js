// sw.js - Minimal service worker for PWA installability
self.addEventListener('fetch', () => {
  // This can be empty. The handler just needs to exist
  // for Chrome on Android to recognize the app as installable.
});