import{a as y,S as g,i as h}from"./assets/vendor-09d7c26e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let w=1;const L="43687048-bb18a09d847445a540140347b",b=new URLSearchParams({page:w,per_page:9});async function E(t){const n=`https://pixabay.com/api/?key=${L}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&${b}`;try{const o=await y.get(n);if(console.log(o),o.status!==200)throw new Error("Network response was not ok");return o.data.hits}catch{throw new Error("An error occurred while fetching data.")}}const $=new g(".gallery a",{captionsData:"alt",captionDelay:250});function l(){return document.querySelector(".gallery")}function d(){return document.querySelector(".loader")}function v(t){const n=l(),o=t.map(a=>{const{largeImageURL:e,webformatURL:r,tags:s,likes:u,views:p,comments:m,downloads:f}=a;return`
      <li class="gallery-container">
        <a href="${e}" title="${s}">
          <img src="${r}" alt="${s}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${u}</p>
          <p class="card-text"><span>Views:</span> ${p}</p>
          <p class="card-text"><span>Comments:</span> ${m}</p>
          <p class="card-text"><span>Downloads:</span> ${f}</p>
        </div>
      </li>
    `});n.insertAdjacentHTML("beforeend",o.join("")),$.refresh()}function P(){const t=l();t.innerHTML=""}function x(){const t=d();t.style.display="block"}function i(){const t=d();t.style.display="none"}function c(t){h.error({title:"Error",message:t})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",async function(n){n.preventDefault(),P();const a=document.getElementById("search-input").value.trim();if(a!==""){x();try{const e=await E(a);i(),e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):v(e)}catch{i(),c("An error occurred while fetching data. Please try again later.")}}else c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
