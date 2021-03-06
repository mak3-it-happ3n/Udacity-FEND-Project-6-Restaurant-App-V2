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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "f410a03f3c3684d52776eccf5717f40b"
  },
  {
    "url": "data/restaurants.json",
    "revision": "500a3defff288a163f63f80b48025716"
  },
  {
    "url": "img/1.jpg",
    "revision": "cc074688becddd2725114187fba9471c"
  },
  {
    "url": "img/10.jpg",
    "revision": "2bd68efbe70c926de6609946e359faa2"
  },
  {
    "url": "img/2.jpg",
    "revision": "759b34e9a95647fbea0933207f8fc401"
  },
  {
    "url": "img/3.jpg",
    "revision": "81ee36a32bcfeea00db09f9e08d56cd8"
  },
  {
    "url": "img/4.jpg",
    "revision": "23f21d5c53cbd8b0fb2a37af79d0d37f"
  },
  {
    "url": "img/5.jpg",
    "revision": "0a166f0f4e10c36882f97327b3835aec"
  },
  {
    "url": "img/6.jpg",
    "revision": "eaf1fec4ee66e121cadc608435fec72f"
  },
  {
    "url": "img/7.jpg",
    "revision": "bd0ac197c58cf9853dc49b6d1d7581cd"
  },
  {
    "url": "img/8.jpg",
    "revision": "6e0e6fb335ba49a4a732591f79000bb4"
  },
  {
    "url": "img/9.jpg",
    "revision": "ba4260dee2806745957f4ac41a20fa72"
  },
  {
    "url": "index.html",
    "revision": "e920c1d0aa99576aafa3e47e745374d5"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "0a5919955b520f1c6d55648c747f68cf"
  },
  {
    "url": "js/main.js",
    "revision": "88059019ba0574b7b912f85dd2a8f686"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "359209fd9f1e84cc6830533ae21b96fa"
  },
  {
    "url": "own-service-worker.js",
    "revision": "929b7779bc13483a223f57a86047593d"
  },
  {
    "url": "restaurant.html",
    "revision": "909d965596d154fa5cd9d97535a2cdb3"
  },
  {
    "url": "workbox-config.js",
    "revision": "05ebfa92cb858354774f4511fb422086"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
