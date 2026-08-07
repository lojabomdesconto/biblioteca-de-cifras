
document.addEventListener('DOMContentLoaded',()=>{
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
 const id=a.getAttribute('href');
 if(id.length>1){
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
 }
});
});
const obs=new IntersectionObserver(entries=>{
 entries.forEach(en=>{
  if(en.isIntersecting){
    en.target.style.opacity='1';
    en.target.style.transform='translateY(0)';
  }
 });
},{threshold:.15});
document.querySelectorAll('.card,.beneficio,.faq-item,.hero-image,img').forEach(el=>{
 el.style.opacity='0';
 el.style.transform='translateY(30px)';
 el.style.transition='all .6s ease';
 obs.observe(el);
});
document.querySelectorAll('.faq-item button').forEach(btn=>{
 btn.addEventListener('click',()=>{
   const body=btn.nextElementSibling;
   if(!body)return;
   body.style.display=body.style.display==='block'?'none':'block';
 });
});
});
