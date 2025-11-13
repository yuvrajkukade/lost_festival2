 // main.js - small UI interactions (burger, scroll top)
(function(){
  // burger toggles
  const burgers = document.querySelectorAll('.burger');
  burgers.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = btn.nextElementSibling || document.getElementById('main-nav') || document.querySelector('.nav');
      if(nav) nav.classList.toggle('open');
    });
  });

  // show nav when class .open (small screens)
  const style = document.createElement('style');
  style.innerHTML = `.nav.open{display:flex;flex-direction:column;position:absolute;right:16px;top:64px;background:white;padding:12px;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.08)}`;
  document.head.appendChild(style);

  // scroll to top button
  const btnTop = document.getElementById('scroll-top');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 350) btnTop.style.display = 'block'; else btnTop.style.display = 'none';
  });
  btnTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // highlight active nav link (based on path)
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')){
      a.classList.add('active');
    }
  });
})();
