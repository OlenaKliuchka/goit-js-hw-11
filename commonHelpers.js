import{i as n,S as h}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",c={key:"43802528-015b222178f5679b6792a0cf2",q:"house",image_type:"photo",orientation:"horizontal",safesearch:!0},y=(o="yellow")=>{const s=new URLSearchParams({key:c.key,q:o,orientation:c.orientation,image_type:c.image_type,safesearch:c.safesearch});return fetch(`${u}?${s}`).then(r=>{if(!r.ok)throw new Error(iziToast.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}));return r.json()})},f=o=>o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,downloads:a,comments:m})=>`
  
  <div class="gallery-item">
               <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${i}"
          />
        </a>
            <div class = "card-img">
            <div class = "likes">
            <h2 class = "card-title">Likes</h2>
            <p class = image-text>${e}</p></div>
            
            <div class = "views">
            <h2 class = "card-title">Views</h2>
            <p class = image-text>${t}</p></div>

            <div class = "comments">
            <h2 class = "card-title">Comments</h2>
            <p class = image-text>${m}</p></div>
            
            <div class = "downloads">
            <h2 class = "card-title">Downloads</h2>
            <p class = image-text>${a}</p></div>
            </div>
          </div>`).join(""),l=document.querySelector(".js-gallery"),g=document.querySelector(".js-search-form"),d=document.querySelector(".js-loader");function p(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(s===""){l.innerHTML="",o.target.reset(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"});return}l.innerHTML="",d.classList.remove("is-hidden"),y(s).then(r=>{r.total===0&&n.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),l.innerHTML=f(r.hits),new h(".gallery-list a",{captionsData:"alt",captionDelay:250})}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),d.classList.add("is-hidden")})}g.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
