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
const whatsappContact=document.querySelector("#whatsappContact");
const emailContact=document.querySelector("#emailContact");
const waNumber=["62","8114230770"].join("");
const emailAddress=["yumaabdansyakur","gmail.com"].join("@");
if(whatsappContact)whatsappContact.href="https://wa.me/"+waNumber;
if(emailContact)emailContact.href="mailto:"+emailAddress;
contactOpeners.forEach(button=>button.addEventListener("click",()=>contactDialog?.showModal()));
contactCloser?.addEventListener("click",()=>contactDialog?.close());
contactDialog?.addEventListener("click",(event)=>{if(event.target===contactDialog)contactDialog.close();});
