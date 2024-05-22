import{a as y,S as g,i as h}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const w="43687048-bb18a09d847445a540140347b";async function L(t){const o=`https://pixabay.com/api/?key=${w}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;try{const n=await y.get(o);if(console.log(n),n.status!==200)throw new Error("Network response was not ok");return n.data.hits}catch{throw new Error("An error occurred while fetching data.")}}const b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function l(){return document.querySelector(".gallery")}function d(){return document.querySelector(".loader")}function E(t){const o=l(),n=t.map(a=>{const{largeImageURL:e,webformatURL:r,tags:s,likes:u,views:p,comments:f,downloads:m}=a;return`
      <li class="gallery-container">
        <a href="${e}" title="${s}">
          <img src="${r}" alt="${s}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${u}</p>
          <p class="card-text"><span>Views:</span> ${p}</p>
          <p class="card-text"><span>Comments:</span> ${f}</p>
          <p class="card-text"><span>Downloads:</span> ${m}</p>
        </div>
      </li>
    `});o.insertAdjacentHTML("beforeend",n.join("")),b.refresh()}function $(){const t=l();t.innerHTML=""}function v(){const t=d();t.style.display="block"}function i(){const t=d();t.style.display="none"}function c(t){h.error({title:"Error",message:t})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",async function(o){o.preventDefault(),$();const a=document.getElementById("search-input").value.trim();if(a!==""){v();try{const e=await L(a);i(),e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):E(e)}catch{i(),c("An error occurred while fetching data. Please try again later.")}}else c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
