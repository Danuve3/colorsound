(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let i;document.addEventListener("touchstart",o=>{i=o.touches[0].clientY});document.addEventListener("touchmove",o=>{o.touches[0].clientY-i>0&&o.preventDefault();const n=document.elementFromPoint(o.touches[0].clientX,o.touches[0].clientY);if(n&&n.classList.contains("item")){const r=n.getAttribute("data-sound"),e=document.getElementById("sound"+r);e.currentTime=0,e.play()}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".item").forEach(n=>{n.addEventListener("mouseover",function(){const r=n.getAttribute("data-sound"),e=document.getElementById("sound"+r);e.currentTime=0,e.play()})}),document.getElementById("start").addEventListener("click",function(){const n=document.getElementById("overlay");n.style.display="none"})});
