
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

//contador
const DAYS = 24 * 3600 * 1000;

const countdowns = [{
    id: "mcReset",
    timestamp: new Date("April 18, 2022 10:25:00").getTime(),
    interval: 3 * DAYS
  },
];

setInterval(() => {
  const now = new Date().getTime();
  countdowns.forEach(c => {
    while (c.timestamp < now) c.timestamp += c.interval; // set target to future date
    const tSecs = Math.floor((c.timestamp - now) / 1000);
    const secs = tSecs % 60;
    const tMins = (tSecs - secs) / 60;
    const mins = tMins % 60;
    const tHours = (tMins - mins) / 60;
    const hours = tHours % 24;
    const days = (tHours - hours) / 24;
    document.getElementById('dia').innerHTML = `${days}`;
    document.getElementById('hora').innerHTML = `${hours}`;
    document.getElementById('minuto').innerHTML = `${mins}`;
    document.getElementById('segundo').innerHTML = `${secs}`;
  });
}, 1000);
