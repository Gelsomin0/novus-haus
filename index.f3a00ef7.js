const e=document.getElementById("menu-btn"),n=document.getElementById("nav-list"),t=e.querySelector("i");e.addEventListener("click",(e=>{n.classList.toggle("open");const i=n.classList.contains("open");t.setAttribute("class",i?"ri-close-line":"ri-menu-line")})),n.addEventListener("click",(e=>{n.classList.remove("open"),t.setAttribute("class","ri-menu-line")}));const i=ScrollReveal({distance:"50px",origin:"bottom",duration:1e3});i.reveal(".header__container h1"),i.reveal(".header__container p",{delay:500}),i.reveal(".header__container form",{delay:1e3}),i.reveal(".header__container a",{delay:1500});new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination"}});
//# sourceMappingURL=index.f3a00ef7.js.map
