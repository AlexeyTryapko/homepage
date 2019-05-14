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
    "url": "assets/images/art.jpg",
    "revision": "d4b0da904a63c57a271d24e89c52feeb"
  },
  {
    "url": "assets/images/avatar.png",
    "revision": "ffc9508677709d0955832ea0d99d1725"
  },
  {
    "url": "assets/images/header-img.jpg",
    "revision": "fbe0857a32338c66f91c353e4f64552f"
  },
  {
    "url": "css/style.css",
    "revision": "4614bdf82c23252ad9192cb3c5a82292"
  },
  {
    "url": "index.html",
    "revision": "aef5d13891db3b640e2cf3a81eaabfb7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
