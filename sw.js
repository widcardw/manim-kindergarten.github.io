if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"7bced56238c07acd7cf9ed2a5a9c60d7"},{url:"about.html",revision:"da9d9edf0310868063078d6afb9e66b5"},{url:"assets/_...all_.63525a77.js",revision:null},{url:"assets/404.006d09c8.js",revision:null},{url:"assets/404.3358d18c.js",revision:null},{url:"assets/about.84bc28a6.js",revision:null},{url:"assets/about.f2535c3a.js",revision:null},{url:"assets/AnimateComponent.6d7387db.js",revision:null},{url:"assets/app.c8e3fd58.js",revision:null},{url:"assets/app.e50e176a.css",revision:null},{url:"assets/Back.c6a42d11.js",revision:null},{url:"assets/color.8632917d.js",revision:null},{url:"assets/color.f4842313.css",revision:null},{url:"assets/docs.329ef684.js",revision:null},{url:"assets/downloadPath.07ed8353.js",revision:null},{url:"assets/home.7c17496e.js",revision:null},{url:"assets/Logo.1465b54c.css",revision:null},{url:"assets/Logo.32e7a642.js",revision:null},{url:"assets/manim-cairo.27823fa8.js",revision:null},{url:"assets/manimgl.9d07050d.js",revision:null},{url:"assets/membership.095cfd4a.js",revision:null},{url:"assets/new_usage.80f21d8c.js",revision:null},{url:"assets/persuade2quit.73ca8493.js",revision:null},{url:"assets/PureCard.49de29e0.js",revision:null},{url:"assets/tools.0466e801.js",revision:null},{url:"assets/turn_to_grant.d69f0649.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"docs.html",revision:"e2e642a130720d7ef8064ed5f03d066c"},{url:"en/about.html",revision:"ca99f9f1f2d213db79403d49efbe8983"},{url:"index.html",revision:"dafc009ab4ac8fbcee5d2d1b2533103d"},{url:"membership.html",revision:"f96cdcf6122ef4e2b266d162e9a90752"},{url:"problems/manim-cairo.html",revision:"31412f62bb5d564d0715aa4b1ebdc7ac"},{url:"problems/manimgl.html",revision:"277573a211aee78d135abe6de531aed8"},{url:"problems/new_usage.html",revision:"5426f9d481572542b942a97decc695ac"},{url:"problems/persuade2quit.html",revision:"37e1fd954899b6b47308ebe53e5a9707"},{url:"tool/color.html",revision:"735a1f3fe17c89321d947ff578acd031"},{url:"tools.html",revision:"da6050e8d4c6e35d82b5f5496afe83f2"},{url:"safari-pinned-tab.svg",revision:"8fbde6c2c1152dbe7778dc42222ba70b"},{url:"pwa-192x192.png",revision:"23189652df344edf4e6ffb5094169d5e"},{url:"pwa-512x512.png",revision:"5aa59620900e4e858f073b96fb763c21"},{url:"manifest.webmanifest",revision:"db12b773408f75a2ea1505c1f5f91787"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
