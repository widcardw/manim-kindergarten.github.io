if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const a=s=>l(s,n),u={module:{uri:n},exports:o,require:a};e[n]=Promise.all(r.map((s=>u[s]||a(s)))).then((s=>(i(...s),o)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about.html",revision:"09c9d39d1a43f434f560df9fe9e68c29"},{url:"assets/_...all_.eb2f0859.js",revision:null},{url:"assets/404.1338fd6c.js",revision:null},{url:"assets/about.5eba2f47.js",revision:null},{url:"assets/about.dbd0fd5b.js",revision:null},{url:"assets/AnimateComponent.503505dd.js",revision:null},{url:"assets/app.6fdac389.js",revision:null},{url:"assets/app.e50e176a.css",revision:null},{url:"assets/Back.4b00bdb4.js",revision:null},{url:"assets/color.328a0879.js",revision:null},{url:"assets/color.f4842313.css",revision:null},{url:"assets/docs.c049afb0.js",revision:null},{url:"assets/downloadPath.e359be16.js",revision:null},{url:"assets/home.c139ad20.js",revision:null},{url:"assets/Logo.1465b54c.css",revision:null},{url:"assets/Logo.18492954.js",revision:null},{url:"assets/manim-cairo.a60a25cb.js",revision:null},{url:"assets/manimgl.5012bb6a.js",revision:null},{url:"assets/membership.41139bfa.js",revision:null},{url:"assets/new_usage.9c8ff83e.js",revision:null},{url:"assets/persuade2quit.5bf9ab5f.js",revision:null},{url:"assets/PureCard.f9e51232.js",revision:null},{url:"assets/tools.80150393.js",revision:null},{url:"assets/turn_to_grant.d69f0649.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"docs.html",revision:"d737616cbf7b52d8e765c0af09f101a2"},{url:"en/about.html",revision:"8d5324996c9195e2be33d3a39d17ca1d"},{url:"index.html",revision:"160d438edd93da13a3767fdc09adbb8d"},{url:"membership.html",revision:"58d102b87553bc8be3c1a7a3f7055536"},{url:"problems/manim-cairo.html",revision:"f7fd4bee29e6db44da0ce8d61d122fd6"},{url:"problems/manimgl.html",revision:"c8f9f581512db6ab37a7573e9bb53d0a"},{url:"problems/new_usage.html",revision:"18897839065647d6196a42000763e9fe"},{url:"problems/persuade2quit.html",revision:"ab72bd4426c7cde33e018f713e04fc01"},{url:"tool/color.html",revision:"f25be97b1de8aa2c79a3998b0235dd4a"},{url:"tools.html",revision:"e03e10d9874878d547515c865bdbb055"},{url:"safari-pinned-tab.svg",revision:"8fbde6c2c1152dbe7778dc42222ba70b"},{url:"pwa-192x192.png",revision:"23189652df344edf4e6ffb5094169d5e"},{url:"pwa-512x512.png",revision:"5aa59620900e4e858f073b96fb763c21"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
