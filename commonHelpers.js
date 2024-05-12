import{S as h,i as y}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();function g(t){const a=`https://pixabay.com/api/?key=43687048-bb18a09d847445a540140347b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error("An error occurred while fetching data.")})}const L=new h(".gallery a",{captionsData:"alt",captionDelay:250});function l(){return document.querySelector(".gallery")}function d(){return document.querySelector(".loader")}function w(t){const o=l(),a=t.map(r=>{const{largeImageURL:e,webformatURL:n,tags:s,likes:u,views:p,comments:f,downloads:m}=r;return`
      <li class="gallery-container">
        <a href="${e}" title="${s}">
          <img src="${n}" alt="${s}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${u}</p>
          <p class="card-text"><span>Views:</span> ${p}</p>
          <p class="card-text"><span>Comments:</span> ${f}</p>
          <p class="card-text"><span>Downloads:</span> ${m}</p>
        </div>
      </li>
    `});o.insertAdjacentHTML("beforeend",a.join("")),L.refresh()}function b(){const t=l();t.innerHTML=""}function E(){const t=d();t.style.display="block"}function i(){const t=d();t.style.display="none"}function c(t){y.error({title:"Error",message:t})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",function(o){o.preventDefault(),b();const r=document.getElementById("search-input").value.trim();r!==""?(E(),g(r).then(e=>{i(),e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):w(e)}).catch(e=>{i(),c("An error occurred while fetching data. Please try again later.")})):c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
