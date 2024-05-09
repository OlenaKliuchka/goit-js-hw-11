import"./assets/vendor-86291ea8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n="https://pixabay.com/api/",i={key:"43802528-015b222178f5679b6792a0cf2",q:"yellow+flower",image_type:"photo",orientation:"horizontal",safesearch:!0},d=s=>{const r=new URLSearchParams({key:i.key,q:i.q,orientation:i.orientation,image_type:i.image_type,safesearch:i.safesearch});return fetch(`${n}?${r}`).then(o=>{if(!o.ok)throw new Error(iziToast.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}));return o.json()})},m=s=>s.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,downloads:a,comments:c})=>`
      <div class="col">
        <div class="card shadow-sm">
        <a class="gallery-link" href="${o}">
          <img src="${r}" alt="${l}" class="gallery-img img-fluid" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-body-secondary">Likes: ${e}</small>
              <small class="text-body-thirdary">vVews: ${t}</small>
              <small class="text-body-fourthary">Comments: ${c}</small>
              <small class="text-body-fifthary">Downloads: ${a}</small>
            </div>
          </div>
        </div>
      </div>`).join("");document.querySelector(".js-search-form");const y=document.querySelector(".gallery");d().then(s=>{const r=m(s.hits);y.innerHTML=r}).catch(s=>{console.log(s)});
//# sourceMappingURL=commonHelpers.js.map
