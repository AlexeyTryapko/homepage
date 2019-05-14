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
    "url": "assets/images/avatar.jpg",
    "revision": "b0758e9cb95291a3777a2e5d9ecfc34b"
  },
  {
    "url": "assets/images/header-img.jpg",
    "revision": "fbe0857a32338c66f91c353e4f64552f"
  },
  {
    "url": "css/style.css",
    "revision": "35fa4eea3e5db47d892c00fb2316fec3"
  },
  {
    "url": "index.html",
    "revision": "0dc22205a2cb5809ac16279b945ddd29"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
