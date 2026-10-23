/* JAGUAR Chess service worker: تخزين للّعب بدون إنترنت بعد أول فتح */
const VER='jaguar-v1';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png','three.min.js'];
const HOSTS=['cdnjs.cloudflare.com','cdn.jsdelivr.net','unpkg.com','fonts.googleapis.com','fonts.gstatic.com'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VER).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(r=>{ const cp=r.clone(); caches.open(VER).then(c=>c.put('index.html',cp)); return r; }).catch(()=>caches.match('index.html').then(r=>r||caches.match('./'))));
    return;
  }
  const same=url.origin===self.location.origin, ext=HOSTS.includes(url.hostname);
  if(!same&&!ext) return;
  e.respondWith(caches.match(req).then(hit=>{
    if(hit) return hit;
    return fetch(req).then(r=>{ if(r&&(r.ok||r.type==='opaque')){ const cp=r.clone(); caches.open(VER).then(c=>c.put(req,cp)); } return r; });
  }));
});
