// festival.js - populates festival cards on index & festivals pages, and detail page
(function(){
  // Utility to create a card node
  function createCard(f){
    const div = document.createElement('article');
    div.className = 'card reveal';
    div.innerHTML = `
      <img src="${f.image}" alt="${f.name}">
      <div class="card-body">
        <div class="card-meta">
          <span>📍 ${f.state}</span>
          <span>📅 ${f.month}</span>
        </div>
        <h3>${f.name}</h3>
        <p>${f.short}</p>
        <a class="btn btn-primary" href="festival_details.html?slug=${encodeURIComponent(f.slug)}" style="width: 100%; text-align: center; margin-top: 1rem;">Learn More</a>
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
      if(list.length === 0){ 
        festivalGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;"><p class="muted">No festivals found. Try adjusting your search.</p></div>'; 
        return; 
      }
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
      let out = FESTIVALS.filter(f => (f.name.toLowerCase().includes(q) || f.short.toLowerCase().includes(q) || f.state.toLowerCase().includes(q)));
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
      detailWrap.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <h1>Festival Not Found</h1>
          <p class="muted">We couldn't find that festival in our database. Try browsing our complete collection.</p>
          <a href="festivals.html" class="btn btn-primary" style="margin-top: 1rem;">Browse All Festivals</a>
        </div>
      `;
    } else {
      detailWrap.innerHTML = `
        <div class="detail-hero" style="background-image: url('${fest.image}'); background-size: cover; background-position: center;"></div>
        
        <div class="detail-content">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
              <h1>${fest.name}</h1>
              <p class="muted" style="font-size: 1.1rem; margin-top: 0.5rem;">${fest.state}</p>
            </div>
            <a href="festivals.html" class="btn btn-ghost">← Back</a>
          </div>

          <div class="detail-meta">
            <div class="detail-meta-item">
              <strong>📍 Location</strong>
              <p>${fest.state}</p>
            </div>
            <div class="detail-meta-item">
              <strong>📅 When</strong>
              <p>${fest.month}</p>
            </div>
            <div class="detail-meta-item">
              <strong>🎭 Type</strong>
              <p>Cultural Festival</p>
            </div>
          </div>

          <section style="margin: 2rem 0;">
            <h2>About the Festival</h2>
            <p>${fest.description}</p>
          </section>

          <section style="margin: 2rem 0;">
            <h2>🗺️ How to Reach</h2>
            <p>${fest.howToReach}</p>
          </section>

          ${fest.audio ? `
          <section style="margin: 2rem 0;">
            <h2>🎧 Audio Story</h2>
            <p class="muted" style="margin-bottom: 1rem;">Listen to stories and sounds from this festival.</p>
            <audio controls style="width: 100%; border-radius: 8px;">
              <source src="${fest.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </section>
          ` : ''}

          <div style="display: flex; gap: 1rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(15, 23, 36, 0.1);">
            <a href="festivals.html" class="btn btn-ghost" style="flex: 1; text-align: center;">← All Festivals</a>
            <a href="contact.html" class="btn btn-primary" style="flex: 1; text-align: center;">Share Your Story</a>
          </div>
        </div>
      `;
    }
  }

  // intersection observer for reveal animations
  function revealObserver(){
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ 
          e.target.style.animation = 'fadeInUp 0.6s ease-out forwards'; 
          io.unobserve(e.target); 
        }
      });
    }, {threshold:0.12});
    els.forEach(el=> io.observe(el));
  }

})();
