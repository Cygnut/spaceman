import{M as p,T as l,a as w,S as g,b as L,P as b,c as z,G as S,O as v,d as P,A as O,e as A,W as G,f as R,g as H}from"./vendor.e3f77be8.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};W();const C=new p({map:new l().load("./images/moon.jpg"),normalMap:new l().load("./images/normal.jpg")});function u(t,o){const r=new w(t,C);if(o)for(const[i,e]of Object.entries(o))r.position[i]=e;return r}function E(){const t=new w(new g(.25,24,24),new p({color:16777215})),[o,r,i]=Array(3).fill().map(()=>L.randFloatSpread(100));return t.position.set(o,r,i),t}class T{constructor(o,r,i,e=!1){if(!e)return;const n=new b(16777215);n.position.set(5,5,5),o.add(n),o.add(new z(n),new S(200,50)),this.controls=new v(r,i.domElement)}update(){this.controls&&this.controls.update()}}const a=new P;a.add(new O(16777215));a.background=new l().load("./images/space.jpg");const s=new A(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=30;s.position.x=-3;const d=new G({canvas:document.querySelector("#bg")});d.setPixelRatio(window.devicePixelRatio);d.setSize(window.innerWidth,window.innerHeight);d.render(a,s);const j=new T(a,s,d,!1),m=u(new g(3,32,32),{x:4});a.add(m);const h=u(new R(10,3,16,100),{x:-10,z:30});a.add(h);const y=u(new H(6,1,100,16),{x:-20,z:60});a.add(y);Array(200).fill().forEach(()=>a.add(E()));const f=(t,o,r,i)=>{t.rotation.x+=o,t.rotation.y+=r,t.rotation.z+=i},x=()=>{const t=document.body.getBoundingClientRect().top;f(m,.05,.075,.05),s.position.z=t*-.01,s.position.x=t*-2e-4,s.rotation.y=t*-2e-4};document.body.onscroll=x;x();const q=(t,o)=>{const r=window.innerWidth,i=window.innerHeight;t.setSize(r,i),o.aspect=r/i,o.updateProjectionMatrix()};window.addEventListener("resize",()=>q(d,s));const M=()=>{requestAnimationFrame(M),f(h,.01,.005,.01),f(y,.1,.5,.1),m.rotation.x+=.005,j.update(),d.render(a,s)};M();