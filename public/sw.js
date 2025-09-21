importScripts('/public/uv/uv.bundle.js');
importScripts('/public/uv/uv.config.js');
importScripts(__uv$config.sw || '/public/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
