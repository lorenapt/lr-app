/* Service worker: rete prima, cache come riserva per i file dell'app */
var CACHE = "lr-v4";
var SHELL = ["./", "index.html", "style.css?v=4", "app.js?v=4", "manifest.webmanifest", "icon-192.png"];
self.addEventListener("install", function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); })); self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }));
  self.clients.claim();
});
self.addEventListener("fetch", function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); return r;
  }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match("index.html"); }); }));
});

/* Notifiche push */
self.addEventListener("push", function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(Promise.all([
    self.registration.showNotification(d.title || "LR Personal Training", { body: d.body || "", icon: "icon-192.png", tag: d.tag, data: { url: d.url || "./" } }),
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (cs) { cs.forEach(function (c) { c.postMessage({ type: "notif" }); }); })
  ]));
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  var url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (cs) {
    for (var i = 0; i < cs.length; i++) { if ("focus" in cs[i]) { cs[i].postMessage({ type: "open" }); return cs[i].focus(); } }
    return self.clients.openWindow(url);
  }));
});
