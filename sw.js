/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "5e7de366885701e23fec0886b28b83a7"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "bdceaa3b2dcf87f1feea706e5494edcc"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "013752143b8c85696a2c65671637db54"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "fa495d0b0cc09e5ce36e05c7884b8ba9"
  },
  {
    "url": "assets/icons/favicon.ico",
    "revision": "9f447881aae3e952972bef4e7c7fd2e9"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "f844438c574ee80df4a98d24ca55c5c9"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "80d3eec3b39df13f6d0dfe87b4d86f70"
  },
  {
    "url": "assets/images/art.jpg",
    "revision": "d4b0da904a63c57a271d24e89c52feeb"
  },
  {
    "url": "assets/images/avatar.jpg",
    "revision": "b0758e9cb95291a3777a2e5d9ecfc34b"
  },
  {
    "url": "assets/images/header-img.jpg",
    "revision": "fbe0857a32338c66f91c353e4f64552f"
  },
  {
    "url": "assets/images/preview.png",
    "revision": "7e1d5a8190bf63a1a35af9baf87739bf"
  },
  {
    "url": "css/style.css",
    "revision": "35fa4eea3e5db47d892c00fb2316fec3"
  },
  {
    "url": "index.html",
    "revision": "a7615168d72773a5f42515b8ddd65141"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
