import{_ as l}from"./vendor.502a433f.js";const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};f();const u=["Real Madrid","Oviedo FC","Sevilla FC","Real Betis","CD Tenerife","UD Las Palmas","Barcelona FC","Real Sociedad"],i=l.shuffle(u),m=["0","1","2","3","2","1","0","1","2","3","1","0"],a=l.shuffle(m),d=document.querySelector(".btn");function h(){if(i.length!=0){const r=document.querySelector(".score-team1"),n=document.createElement("p");r.insertAdjacentElement("beforeend",n),n.textContent=`${i.shift()}: ${a.shift()} \u27A1`;const s=document.querySelector(".score-team2"),o=document.createElement("p");s.insertAdjacentElement("beforeend",o),o.textContent=`\u2B05${i.shift()}: ${a.shift()}`}else{d.remove();const r=document.querySelector(".container-futbol"),n=document.createElement("h4");r.insertAdjacentElement("afterend",n),n.textContent="\xA1LA JORNADA HA FINALIZADO!"}}d.addEventListener("click",h);
