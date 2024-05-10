import"./assets/vendor-86291ea8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n="https://pixabay.com/api/",i={key:"43802528-015b222178f5679b6792a0cf2",q:"yellow+flower",image_type:"photo",orientation:"horizontal",safesearch:!0},d=s=>{const r=new URLSearchParams({key:i.key,q:i.q,orientation:i.orientation,image_type:i.image_type,safesearch:i.safesearch});return fetch(`${n}?${r}`).then(o=>{if(!o.ok)throw new Error(iziToast.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}));return o.json()})},m=s=>s.map(({webformatURL:r,largeImageURL:o,tags:c,likes:e,views:t,downloads:a,comments:l})=>`
  
  <li class="gallery-item">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${c}"></a>
            
            <div class = "card-img">
            <div class = "likes">
            <h2 class = "card-title">Likes</h2>
            <p class = image-text>${e}</p></div>
            
            <div class = "views">
            <h2 class = "card-title">Views</h2>
            <p class = image-text>${t}</p></div>

            <div class = "comments">
            <h2 class = "card-title">Comments</h2>
            <p class = image-text>${l}</p></div>
            
            <div class = "downloads">
            <h2 class = "card-title">Downloads</h2>
            <p class = image-text>${a}</p></div>
            </div>
            
            
          </ >`).join("");document.querySelector(".js-search-form");const u=document.querySelector(".gallery");d().then(s=>{const r=m(s.hits);u.innerHTML=r}).catch(s=>{console.log(s)});
//# sourceMappingURL=commonHelpers.js.map
