(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();let u;document.addEventListener("touchstart",t=>{u=t.touches[0].clientY});document.addEventListener("touchmove",t=>{t.touches[0].clientY-u>0&&t.preventDefault();const o=document.elementFromPoint(t.touches[0].clientX,t.touches[0].clientY);if(o&&o.classList.contains("item")){const s=o.getAttribute("data-sound"),e=document.getElementById("sound"+s);e.currentTime=0,e.play()}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".item").forEach(o=>{o.addEventListener("mouseover",function(){const s=o.getAttribute("data-sound"),e=document.getElementById("sound"+s);e.currentTime=0,e.play()})}),document.getElementById("start").addEventListener("click",function(){const o=document.getElementById("overlay");o.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){const t=document.body;t.requestFullscreen&&(t.addEventListener("click",function(){t.requestFullscreen()}),document.getElementById("start").addEventListener("click",function(){t.requestFullscreen()}))});