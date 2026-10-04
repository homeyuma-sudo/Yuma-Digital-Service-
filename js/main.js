const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");

if(menuButton&&nav){
  menuButton.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Tutup menu":"Buka menu");
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
    menuButton.setAttribute("aria-label","Buka menu");
  }));
}

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible");});
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const contactDialog=document.querySelector("#contactDialog");
const contactOpeners=document.querySelectorAll("[data-contact-open]");
const contactCloser=document.querySelector("[data-contact-close]");

const contactDialog=document.querySelector("#contactDialog");
const contactOpeners=document.querySelectorAll("[data-contact-open]");
const contactCloser=document.querySelector("[data-contact-close]");
contactOpeners.forEach(button=>button.addEventListener("click",()=>{if(contactDialog?.showModal)contactDialog.showModal();}));
contactCloser?.addEventListener("click",()=>contactDialog?.close());
contactDialog?.addEventListener("click",(event)=>{if(event.target===contactDialog)contactDialog.close();});
