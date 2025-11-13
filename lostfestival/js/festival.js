// festival.js - populates festival cards on index & festivals pages, and detail page
(function(){
  // Utility to create a card node
  function createCard(f){
    const div = document.createElement('article');
    div.className = 'card reveal';
    div.innerHTML = `
      <img src="${f.image}" alt="${f.name}">
      <div class="card-body">
        <h3>${f.name} — ${f.state}</h3>
        <p>${f.short}</p>
  <p style="margin-top:10px"><a class="btn btn-outline" href="festival_details.html?slug=${encodeURIComponent(f.slug)}">View details</a></p>
      </div>
    `;
    return div;
  }

  // populate featured on index
  const featuredGrid = document.getElementById('featured-grid');
  if(featuredGrid){
    // pick first 3
    FESTIVALS.slice(0,3).forEach(f=> featuredGrid.appendChild(createCard(f)));
    revealObserver();
  }

  // populate all festivals
  const festivalGrid = document.getElementById('festival-grid');
  if(festivalGrid){
    function render(list){
      festivalGrid.innerHTML = '';
      if(list.length === 0){ festivalGrid.innerHTML = '<p class="muted">No festivals found.</p>'; return; }
      list.forEach(f => festivalGrid.appendChild(createCard(f)));
      revealObserver();
    }
    render(FESTIVALS);

    // search + filter
    const search = document.getElementById('search-input');
    const filterState = document.getElementById('filter-state');

    function filterAndRender(){
      const q = search.value.trim().toLowerCase();
      const state = filterState.value;
      let out = FESTIVALS.filter(f => (f.name.toLowerCase().includes(q) || f.short.toLowerCase().includes(q)));
      if(state) out = out.filter(f => f.state === state);
      render(out);
    }
    if(search) search.addEventListener('input', filterAndRender);
    if(filterState) filterState.addEventListener('change', filterAndRender);
  }

  // detail page
  const detailWrap = document.getElementById('detail-wrap');
  if(detailWrap){
    const params = new URLSearchParams(location.search);
    const slug = params.get('slug');
    const fest = FESTIVALS.find(f => f.slug === slug);
    if(!fest){
      detailWrap.innerHTML = `<div class="section-head"><h2>Festival not found</h2><p class="muted">Try browsing our <a href="festivals.html">festivals</a> list.</p></div>`;
    } else {
      detailWrap.innerHTML = `
        <section class="section">
          <div class="detail-hero" style="background-image:url('${fest.image}');height:44vh;background-size:cover;background-position:center;border-radius:12px;"></div>
          <div style="margin-top:18px">
            <h1>${fest.name}</h1>
            <p class="muted">${fest.state} • ${fest.month}</p>
            <p style="margin-top:12px">${fest.description}</p>
            <h4 style="margin-top:16px">How to reach</h4>
            <p>${fest.howToReach}</p>
            ${fest.audio ? `<h4>Audio Story</h4><audio controls src="${fest.audio}"></audio>` : ''}
            <p style="margin-top:18px"><a href="festivals.html" class="btn btn-outline">Back to all festivals</a></p>
          </div>
        </section>
      `;
    }
  }

  // intersection observer for reveal animations
  function revealObserver(){
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
      });
    }, {threshold:0.12});
    els.forEach(el=> io.observe(el));
  }

})();
