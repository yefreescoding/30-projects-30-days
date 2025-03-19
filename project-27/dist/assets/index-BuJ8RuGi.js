(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();console.log("cositas");const d=document.getElementById("links_list"),s=document.getElementById("card"),g=[{id:"home",title:"Home",img:"/images/home-img.jpeg",desc:"Check out our latest offers and get ready to explore the world.",link:"https://www.google.com"},{id:"about",title:"About",img:"/images/about-img.jpeg",desc:"Want to know more about us? Here are some details and links.",link:"https://www.google.com"},{id:"contact",title:"Contact",img:"/images/contact-img.jpeg",desc:"Liked what you saw? Contact us and we will get back to you as soon as possible.",link:"https://www.google.com"},{id:"waitlist",title:"Waitlist",img:"/images/waitlist-img.jpeg",desc:"New and exciting offers? Check out our waitlist and get notified when we have something new to offer.",link:"https://www.google.com"}];let c;d.addEventListener("mouseover",a=>{const i=a.target.closest("a");if(!i)return;const n=i.dataset.link,o=g.find(e=>e.id===n);if(o){const{id:e,title:t,img:r,desc:u,link:m}=o;s.innerHTML=f(t,u,m,r),s.setAttribute("aria-hidden","false"),s.setAttribute("data-link",e),clearTimeout(c)}});function l(){c=setTimeout(()=>{s.setAttribute("aria-hidden","true")},200)}d.addEventListener("mouseleave",l);s.addEventListener("mouseleave",l);d.addEventListener("mouseenter",()=>clearTimeout(c));s.addEventListener("mouseenter",()=>clearTimeout(c));const f=(a,i,n,o)=>`
    <div class="image">
    <img
      loading="lazy"
      src="${o}"
      alt="${o} landscape of a mountain with a person in the background"
      />
    </div>
    <div class="content">
      <a href="#">
        <span class="title">
          ${a}
        </span>
      </a>
      <p class="desc">
        ${i}
      </p>
      <a class="action" href=${n}>
        Find out more
        <span aria-hidden="true"> → </span>
      </a>
    </div>`;
