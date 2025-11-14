// js/login.js - simple client-side demo auth handler
(function(){
  const form = document.getElementById('login-form');
  const msg = document.getElementById('login-msg');

  function showMessage(text, ok=true){
    msg.textContent = text;
    msg.style.color = ok ? '#059669' : '#ef4444';
  }

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.email.value.trim();
      const pass = form.password.value.trim();
      const remember = document.getElementById('remember').checked;

      if(!email || !pass){
        showMessage('Please enter both email and password.', false);
        // small shake animation on auth-card
        const card = form.closest('.auth-card');
        if(card){
          card.style.animation = 'shake 0.4s';
          setTimeout(()=> card.style.animation = '', 450);
        }
        return;
      }

      // Demo: pretend to authenticate
      showMessage('Signing you in...');
      setTimeout(()=>{
        showMessage('Welcome back — demo sign-in successful!');
        if(remember) localStorage.setItem('lostfestival_remember', email);
        // optionally redirect after short delay
        setTimeout(()=> location.href = 'index.html', 900);
      }, 900);
    });
  }

  // prefill remembered email
  try{
    const remembered = localStorage.getItem('lostfestival_remember');
    if(remembered){
      const el = document.getElementById('email');
      if(el) el.value = remembered;
      const rem = document.getElementById('remember');
      if(rem) rem.checked = true;
    }
  } catch(e){ /* ignore */ }

})();

/* small shake animation */
(function(){
  const style = document.createElement('style');
  style.textContent = `@keyframes shake{ 0%{ transform: translateX(0);} 25%{ transform: translateX(-6px);} 50%{ transform: translateX(6px);} 75%{ transform: translateX(-4px);} 100%{ transform: translateX(0);} }`;
  document.head.appendChild(style);
})();
