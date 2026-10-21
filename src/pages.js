// HairBloom 6 Main Pages Renderers

// ==========================================
// PAGE 1: HOME PAGE
// ==========================================
function getHomePageHTML() {
  const bestsellers = PRODUCTS_DATA.filter(p => p.isBestseller).slice(0, 4);

  return `
    <!-- Hero Banner with 3D Interactive Cosmetic Bottle -->
    <section style="padding: 3rem 0 5rem 0; background: radial-gradient(circle at 10% 20%, rgba(169, 189, 167, 0.2) 0%, rgba(247, 244, 236, 0.9) 60%);">
      <div class="container">
        <div class="hero-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 3.5rem; align-items: center;">
          
          <!-- Hero Copy -->
          <div class="hero-content">
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(36, 76, 58, 0.08); padding: 0.4rem 1rem; border-radius: var(--radius-full); margin-bottom: 1.5rem;">
              <span style="color: var(--muted-gold);">✦</span>
              <span style="font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--forest-green);">Botanical Clean Science & Analytics</span>
            </div>
            <h1 style="font-size: clamp(2.2rem, 5vw, 4.2rem); margin-bottom: 1.25rem; letter-spacing: -0.02em;">
              Your Hair.<br>Your Routine.<br><span style="color: var(--muted-gold); font-style: italic;">Your Best Hair Days.</span>
            </h1>
            <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 2.25rem; max-width: 520px;">
              Formulated with organic cold-pressed botanicals, biomimetic silk peptides, and clinical scalp stimulants. Tailored to your specific hair porosity, texture, and scalp biome.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" onclick="navigateTo('quiz')">
                Discover Your Hair Type
                <span>→</span>
              </button>
              <button class="btn btn-secondary" onclick="navigateTo('shop')">
                Shop Products
              </button>
            </div>

            <!-- Trust proof badges -->
            <div class="hero-proof-badges" style="display: flex; gap: 2rem; border-top: 1px solid var(--border-light); padding-top: 1.5rem; width: 100%;">
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--forest-green); font-family: 'Cormorant Garamond', serif;">98.4%</div>
                <div style="font-size: 0.8rem; color: var(--charcoal-light);">Reported Less Hair Shedding</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--forest-green); font-family: 'Cormorant Garamond', serif;">100%</div>
                <div style="font-size: 0.8rem; color: var(--charcoal-light);">Sulfate & Paraben Free</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--forest-green); font-family: 'Cormorant Garamond', serif;">30k+</div>
                <div style="font-size: 0.8rem; color: var(--charcoal-light);">Personalized Routines Delivered</div>
              </div>
            </div>
          </div>

            <!-- 3D 360 Multi-Image Rotating Circle Card Carousel -->
            <div style="position: relative;">
              <div class="carousel-3d-stage" id="carousel3dStage">
                
                <!-- Ambient Glow Halo -->
                <div style="position: absolute; width: 440px; height: 440px; border-radius: 50%; background: radial-gradient(circle, rgba(197, 166, 106, 0.25) 0%, rgba(169, 189, 167, 0.15) 50%, transparent 70%); filter: blur(35px); pointer-events: none; animation: pulseGlow 4s infinite ease-in-out;"></div>

                <!-- 3D Card Ring (Rotates in 3D Space) -->
                <div class="carousel-3d-ring" id="carousel3dRing">
                  <!-- Injected dynamically by JS -->
                </div>

                <!-- Floating 3D Carousel Top Controls -->
                <div style="position: absolute; top: 1.25rem; left: 1.25rem; right: 1.25rem; display: flex; justify-content: space-between; align-items: center; z-index: 20; pointer-events: none;">
                  <div style="pointer-events: auto; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(8px); padding: 0.35rem 0.9rem; border-radius: var(--radius-full); border: 1px solid var(--border-light); font-size: 0.78rem; font-weight: 700; color: var(--forest-green); display: flex; align-items: center; gap: 0.4rem; box-shadow: var(--shadow-sm);">
                    <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #4caf50; animation: pulseGlow 2s infinite;"></span>
                    <span>3D Circle Showcase</span>
                  </div>

                  <div style="pointer-events: auto; display: flex; gap: 0.5rem;">
                    <button onclick="rotateCircleCarousel(1)" class="action-btn" style="width: 36px; height: 36px; font-size: 0.9rem; box-shadow: var(--shadow-sm);" title="Rotate Left">
                      ◀
                    </button>
                    <button id="toggleCarouselSpinBtn" onclick="toggleCarouselAutoPlay()" class="action-btn" style="width: 36px; height: 36px; font-size: 0.85rem; box-shadow: var(--shadow-sm);" title="Pause / Play Auto Spin">
                      ⏸
                    </button>
                    <button onclick="rotateCircleCarousel(-1)" class="action-btn" style="width: 36px; height: 36px; font-size: 0.9rem; box-shadow: var(--shadow-sm);" title="Rotate Right">
                      ▶
                    </button>
                  </div>
                </div>

                <!-- Bottom Interaction Hint -->
                <div style="position: absolute; bottom: 1.2rem; background: rgba(25, 54, 41, 0.82); backdrop-filter: blur(10px); color: #fff; padding: 0.4rem 1.1rem; border-radius: var(--radius-full); font-size: 0.76rem; z-index: 20; pointer-events: none; display: flex; align-items: center; gap: 0.5rem;">
                  <span>⟵ Drag horizontally or click cards to spin 360° ⟶</span>
                </div>

              </div>

              <!-- Quick Subtitle -->
              <div style="text-align: center; margin-top: 0.75rem; font-size: 0.82rem; color: var(--charcoal-light);">
                Featured Formulations: <em>Click any card to inspect details & add to bag</em>
              </div>
            </div>

        </div>
      </div>
    </section>

    <!-- Featured Product Collections -->
    <section style="padding: 5rem 0;">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto 3.5rem auto;">
          <span class="badge badge-sage" style="margin-bottom: 0.8rem;">Targeted Botanical Solutions</span>
          <h2 style="font-size: 2.6rem; margin-bottom: 1rem;">Curated Hair Collections</h2>
          <p>Every strand requires bespoke nutrients. Explore our cold-pressed, biocompatible collections designed by cosmetic chemists.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
          ${[
            { title: 'Cleansing Wash', img: 'assets/images/1.jpg', cat: 'Shampoo', count: '3 Products' },
            { title: 'Nutrient Condition', img: 'assets/images/2.jpg', cat: 'Conditioner', count: '2 Products' },
            { title: 'Scalp Elixirs', img: 'assets/images/3.jpg', cat: 'Hair Oils', count: '3 Products' },
            { title: 'Intensive Masks', img: 'assets/images/4.jpg', cat: 'Hair Masks', count: '4 Products' },
            { title: 'Follicle Serums', img: 'assets/images/7.jpg', cat: 'Serums', count: '2 Products' },
            { title: 'Scalp Exfoliation', img: 'assets/images/5.jpg', cat: 'Scalp Care', count: '3 Products' }
          ].map(c => `
            <div onclick="navigateTo('shop', { category: '${c.cat}' })" style="background:#fff; border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--border-light); cursor:pointer; transition:transform var(--transition-smooth), box-shadow var(--transition-smooth);" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='var(--shadow-md)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
              <div style="height:150px; overflow:hidden;">
                <img src="${c.img}" alt="${c.title}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.08)';" onmouseout="this.style.transform='scale(1)';">
              </div>
              <div style="padding:1.2rem; text-align:center;">
                <h4 style="font-size:1.15rem; margin-bottom:0.25rem;">${c.title}</h4>
                <span style="font-size:0.8rem; color:var(--muted-gold); font-weight:600;">${c.count}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Quiz Promotion CTA Banner -->
    <section style="padding: 4rem 0;">
      <div class="container">
        <div class="quiz-promo-banner">
          <div class="quiz-promo-content" style="position:relative; z-index:2;">
            <span class="badge badge-gold" style="margin-bottom:1rem;">2-Minute Interactive Diagnosis</span>
            <h2 class="quiz-promo-title">
              Not sure which botanical routine your hair craves?
            </h2>
            <p class="quiz-promo-desc">
              Take our interactive Hair Assessment. We analyze your curl pattern, scalp sebum dynamics, porosity rating, and chemical treatment history to formulate your exact morning and evening routine.
            </p>
            <div class="quiz-banner-actions">
              <button class="btn btn-gold" onclick="navigateTo('quiz')">
                Start Free Hair Assessment
                <span>→</span>
              </button>
              <span class="quiz-banner-guarantee">
                <span style="color:#d4af37;">✓</span> 100% Tailored Formula
              </span>
            </div>
          </div>

          <!-- Interactive Diagnosis Card Preview -->
          <div class="quiz-promo-card">
            <div class="quiz-promo-card-header">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <div style="width:36px; height:36px; border-radius:50%; background:var(--muted-gold); color:#193629; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:1.1rem; flex-shrink:0;">🌿</div>
                <div>
                  <h4 style="font-size:1rem; margin:0; color:#fff; font-family:'Plus Jakarta Sans', sans-serif;">Smart Scalp & Hair Lab</h4>
                  <span style="font-size:0.75rem; color:rgba(255,255,255,0.65);">AI Botanical Diagnostic Engine</span>
                </div>
              </div>
              <span class="badge badge-gold" style="font-size:0.7rem; padding:0.25rem 0.6rem; flex-shrink:0;">Live Match</span>
            </div>

            <!-- Quiz Steps Mini Preview -->
            <div style="display:flex; flex-direction:column; gap:0.85rem; margin-bottom:1.5rem;">
              <div class="quiz-step-row" style="background:rgba(255,255,255,0.07); padding:0.85rem 1rem; border-radius:10px; display:flex; justify-content:space-between; align-items:center; border-left:3px solid var(--muted-gold);">
                <span style="font-size:0.85rem; color:rgba(255,255,255,0.9);">1. Porosity & Texture Scan</span>
                <span style="font-size:0.75rem; color:var(--muted-gold); font-weight:600; flex-shrink:0;">Customized</span>
              </div>
              <div class="quiz-step-row" style="background:rgba(255,255,255,0.07); padding:0.85rem 1rem; border-radius:10px; display:flex; justify-content:space-between; align-items:center; border-left:3px solid var(--sage-green);">
                <span style="font-size:0.85rem; color:rgba(255,255,255,0.9);">2. Scalp Sebum & pH Balance</span>
                <span style="font-size:0.75rem; color:var(--sage-green); font-weight:600; flex-shrink:0;">Optimized</span>
              </div>
              <div class="quiz-step-row" style="background:rgba(255,255,255,0.07); padding:0.85rem 1rem; border-radius:10px; display:flex; justify-content:space-between; align-items:center; border-left:3px solid #7bc59b;">
                <span style="font-size:0.85rem; color:rgba(255,255,255,0.9);">3. Botanical Prescription</span>
                <span style="font-size:0.75rem; color:#7bc59b; font-weight:600; flex-shrink:0;">Personalized</span>
              </div>
            </div>

            <!-- Bottom Metric Highlights -->
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem; text-align:center;">
              <div style="background:rgba(0,0,0,0.2); padding:0.75rem 0.5rem; border-radius:8px;">
                <div style="font-size:1.25rem; font-weight:700; color:var(--muted-gold);">98.4%</div>
                <div style="font-size:0.7rem; color:rgba(255,255,255,0.7);">Routine Satisfaction</div>
              </div>
              <div style="background:rgba(0,0,0,0.2); padding:0.75rem 0.5rem; border-radius:8px;">
                <div style="font-size:1.25rem; font-weight:700; color:#fff;">24,000+</div>
                <div style="font-size:0.7rem; color:rgba(255,255,255,0.7);">Diagnoses Completed</div>
              </div>
            </div>
          </div>

          <div style="position:absolute; right: -50px; top:-50px; opacity:0.18; pointer-events:none;">
            <svg width="450" height="450" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FAF7EE" d="M45,-68.2C58.9,-61.8,71.2,-50.2,78.5,-35.8C85.8,-21.4,88.1,-4.2,84.4,11.8C80.7,27.8,71,42.5,58.7,53.4C46.4,64.3,31.5,71.4,15.6,75.2C-0.3,79,-17.2,79.5,-32.8,74.1C-48.4,68.7,-62.7,57.4,-72.1,42.8C-81.5,28.2,-86.1,10.3,-84.3,-7.1C-82.5,-24.5,-74.3,-41.4,-61.8,-52.4C-49.3,-63.4,-32.5,-68.5,-16.4,-70.6C-0.3,-72.7,16,-71.8,31.1,-74.6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Best-Selling Products Grid -->
    <section style="padding: 5rem 0;">
      <div class="container">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:3rem; flex-wrap:wrap; gap:1.5rem;">
          <div>
            <span class="badge badge-sage" style="margin-bottom:0.6rem;">Clinical Clean Formulations</span>
            <h2 style="font-size:2.5rem;">Customer Favorites</h2>
          </div>
          <button class="btn btn-secondary" onclick="navigateTo('shop')">
            Explore All 12 Formulations →
          </button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 2rem;">
          ${bestsellers.map(renderProductCardHTML).join('')}
        </div>
      </div>
    </section>

    <!-- Before & After Real Results + Customer Reviews -->
    <section style="padding: 5rem 0; background: rgba(169, 189, 167, 0.12);">
      <div class="container">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 3.5rem auto;">
          <span class="badge badge-gold" style="margin-bottom: 0.8rem;">Real Verified Transformations</span>
          <h2 style="font-size: 2.6rem; margin-bottom: 1rem;">Documented Hair Journeys</h2>
          <p>Real members of our HairBloom community who tracked their scalp density, curl definition, and moisture balance.</p>
        </div>

        <div class="reviews-cards-grid">
          <div style="background:#fff; border-radius:var(--radius-md); padding:2rem; box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
            <div style="display:flex; gap:1rem; margin-bottom:1.25rem;">
              <img src="assets/images/13.jpg" alt="Reviewer" style="width:56px; height:56px; border-radius:50%; object-fit:cover;">
              <div>
                <h4 style="font-size:1.1rem; margin-bottom:0.2rem;">Elena Vance</h4>
                <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:600;">Type 3B Curly • 90 Days on HairBloom</div>
              </div>
            </div>
            <div style="color:var(--muted-gold); margin-bottom:0.75rem;">★★★★★</div>
            <h5 style="font-size:1.1rem; font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; margin-bottom:0.5rem;">"Restored my curl pattern from bleach damage"</h5>
            <p style="font-size:0.9rem; line-height:1.6;">"I fried my curl clumps with high heat and highlighting bleach. After 12 weeks of using the Phyto-Ceramide mask and Scalp Elixir, the ringlets bounced back with zero halo frizz."</p>
          </div>

          <div style="background:#fff; border-radius:var(--radius-md); padding:2rem; box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
            <div style="display:flex; gap:1rem; margin-bottom:1.25rem;">
              <img src="assets/images/15.jpg" alt="Reviewer" style="width:56px; height:56px; border-radius:50%; object-fit:cover;">
              <div>
                <h4 style="font-size:1.1rem; margin-bottom:0.2rem;">Dr. Soraya Morales</h4>
                <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:600;">Type 4A Coily • Dermatologist Verified</div>
              </div>
            </div>
            <div style="color:var(--muted-gold); margin-bottom:0.75rem;">★★★★★</div>
            <h5 style="font-size:1.1rem; font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; margin-bottom:0.5rem;">"True clinical efficacy without the toxic fillers"</h5>
            <p style="font-size:0.9rem; line-height:1.6;">"It is rare to find clean botanical haircare that actually stimulates microcirculation effectively. The rosemary peptides and baobab oil formula is second to none."</p>
          </div>

          <div style="background:#fff; border-radius:var(--radius-md); padding:2rem; box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
            <div style="display:flex; gap:1rem; margin-bottom:1.25rem;">
              <img src="assets/images/14.jpg" alt="Reviewer" style="width:56px; height:56px; border-radius:50%; object-fit:cover;">
              <div>
                <h4 style="font-size:1.1rem; margin-bottom:0.2rem;">Marcus Chen</h4>
                <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:600;">Type 1A Straight • Oily Scalp Reset</div>
              </div>
            </div>
            <div style="color:var(--muted-gold); margin-bottom:0.75rem;">★★★★★</div>
            <h5 style="font-size:1.1rem; font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; margin-bottom:0.5rem;">"The Apple Cider scrub balanced my roots"</h5>
            <p style="font-size:0.9rem; line-height:1.6;">"I was washing my hair twice a day because of greasy roots. The pre-wash detox dissolved product buildup without drying out my ends."</p>
          </div>
        </div>

        <div style="text-align:center;">
          <button class="btn btn-secondary" onclick="navigateTo('community')">
            Read All 450+ Community Testimonials →
          </button>
        </div>
      </div>
    </section>

    <!-- Subscription Box Showcase -->
    <section style="padding: 5rem 0;">
      <div class="container">
        <div class="subscription-promo-banner" style="background:var(--cream-card); border-radius:var(--radius-lg); border:1px solid var(--border-light); padding:clamp(2rem, 5vw, 4rem); display:grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap:3rem; align-items:center;">
          <div>
            <span class="badge badge-forest" style="margin-bottom:1rem;">Doorstep Routine Delivery</span>
            <h2 style="font-size:2.8rem; margin-bottom:1.25rem;">Subscribe & Save up to 28%</h2>
            <p style="font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
              Never run out of your essential wash-day formulas. Receive automatic deliveries tailored to your schedule, with free shipping, free full-size seasonal gifts, and total flexibility to skip or pause anytime.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:2rem;">
              <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.95rem;">
                <span style="color:var(--forest-green); font-weight:bold;">✔</span> Automatic doorstep deliveries every 30 or 90 days
              </div>
              <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.95rem;">
                <span style="color:var(--forest-green); font-weight:bold;">✔</span> Swap formulas seasonally based on weather changes
              </div>
              <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.95rem;">
                <span style="color:var(--forest-green); font-weight:bold;">✔</span> Free Bian Stone scalp massage comb with first box
              </div>
            </div>
            <button class="btn btn-primary" onclick="navigateTo('subscription')">
              Explore Subscription Plans →
            </button>
          </div>
          <div style="position:relative;">
            <img src="assets/images/17.jpg" alt="Subscription Box" style="width:100%; border-radius:var(--radius-md); box-shadow:var(--shadow-lg); object-fit:cover; max-height:450px;">
            <div style="position:absolute; bottom:1.5rem; right:1.5rem; background:rgba(255,255,255,0.92); backdrop-filter:blur(8px); padding:0.75rem 1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-light); font-size:0.85rem; font-weight:600; color:var(--forest-green);">
              ★ Free Gift Included ($28 Value)
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section style="padding: 4rem 0; background: var(--forest-green); color:#fff; text-align:center;">
      <div class="container" style="max-width:650px;">
        <span class="badge badge-gold" style="margin-bottom:1rem;">The Hair Health Gazette</span>
        <h2 style="color:#fff; font-size:2.4rem; margin-bottom:1rem;">Join the Clean Hair Movement</h2>
        <p style="color:rgba(255,255,255,0.8); margin-bottom:2rem; font-size:0.95rem;">
          Receive trichologist-approved hair care routines, early access to small-batch seasonal harvests, and 15% off your first botanical order.
        </p>
        <form onsubmit="event.preventDefault(); showToast('Thank you for subscribing! Your 15% code is BLOOM15'); this.reset();" style="display:flex; gap:0.75rem; max-width:480px; margin:0 auto; flex-wrap:wrap;">
          <input type="email" required placeholder="Enter your email address" style="flex:1; min-width:240px; padding:0.9rem 1.4rem; border-radius:var(--radius-full); border:none; outline:none; font-family:inherit; font-size:0.95rem;">
          <button type="submit" class="btn btn-gold" style="white-space:nowrap;">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}

// Product Card Component Helper
function renderProductCardHTML(p) {
  const isFav = state.favorites.includes(p.id);
  return `
    <div class="product-card" style="background:#fff; border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--border-light); transition:all var(--transition-smooth); display:flex; flex-direction:column; position:relative;" onmouseover="this.style.boxShadow='var(--shadow-md)'; this.style.transform='translateY(-4px)';" onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)';">
      
      <div style="position:relative; height:260px; overflow:hidden; background:#FAF8F3;">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">
        
        <!-- Badges -->
        <div style="position:absolute; top:0.8rem; left:0.8rem; display:flex; flex-direction:column; gap:0.4rem; align-items:flex-start;">
          ${p.isSulfateFree ? `<span class="badge badge-sage" style="font-size:0.7rem;">Sulfate-Free</span>` : ''}
          ${p.tag ? `<span class="badge badge-gold" style="font-size:0.7rem;">${p.tag}</span>` : ''}
        </div>

        <!-- Favorite Button -->
        <button onclick="toggleFavorite('${p.id}')" style="position:absolute; top:0.8rem; right:0.8rem; width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.9); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; color:${isFav ? '#e63946' : 'var(--charcoal)'}; font-size:1.1rem; box-shadow:var(--shadow-sm); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.15)';" onmouseout="this.style.transform='scale(1)';">
          ${isFav ? '♥' : '♡'}
        </button>

        <!-- Quick View Hover Overlay -->
        <button onclick="openQuickView('${p.id}')" style="position:absolute; bottom:0.8rem; left:50%; transform:translateX(-50%); background:rgba(36,76,58,0.9); color:#fff; padding:0.45rem 1rem; border-radius:var(--radius-full); font-size:0.75rem; font-weight:600; letter-spacing:0.04em; backdrop-filter:blur(4px); opacity:0; transition:opacity 0.2s ease;" class="quick-view-btn">
          Quick View
        </button>
      </div>

      <div style="padding:1.4rem; display:flex; flex-direction:column; flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted-gold); font-weight:700;">${p.category}</span>
          <div style="display:flex; align-items:center; gap:0.25rem; font-size:0.8rem; font-weight:600; color:var(--charcoal-light);">
            <span style="color:var(--muted-gold);">★</span> ${p.rating}
          </div>
        </div>

        <h3 style="font-size:1.25rem; margin-bottom:0.5rem; line-height:1.3; font-family:'Plus Jakarta Sans', sans-serif; font-weight:600;">${p.name}</h3>
        <p style="font-size:0.85rem; color:var(--charcoal-light); margin-bottom:1.25rem; line-height:1.5; flex:1;">${p.shortDesc}</p>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:1rem; margin-top:auto;">
          <div style="font-size:1.35rem; font-family:'Cormorant Garamond', serif; font-weight:700; color:var(--forest-green);">$${p.price}.00</div>
          <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">
            Add to Bag
          </button>
        </div>
      </div>

    </div>
  `;
}

// ==========================================
// PAGE 2: SHOP PRODUCTS CATALOG
// ==========================================
function getShopPageHTML() {
  return `
    <section style="padding: 3rem 0;">
      <div class="container">
        <!-- Shop Header & Breadcrumb -->
        <div style="margin-bottom: 2.5rem;">
          <div style="display: flex; gap: 0.5rem; font-size: 0.85rem; color: var(--charcoal-light); margin-bottom: 0.75rem;">
            <a href="javascript:void(0)" onclick="navigateTo('home')" style="text-decoration:underline;">Home</a>
            <span>/</span>
            <span style="color: var(--forest-green); font-weight: 600;">Shop All Formulations</span>
          </div>
          <h1 style="font-size: 3rem; margin-bottom: 0.75rem;">Botanical Hair Care Catalogue</h1>
          <p style="max-width: 650px;">Explore clinical scalp care, balancing washes, peptide treatments, and cold-pressed elixirs engineered for long-term strand integrity.</p>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="glass-panel" style="padding: 1.5rem; margin-bottom: 2.5rem;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; align-items: center;">
            
            <!-- Search Input -->
            <div style="position: relative;">
              <input type="text" id="shopSearchInput" placeholder="Search by name or ingredient..." value="${state.searchQuery}" style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border-radius: var(--radius-full); border: 1px solid var(--border-light); outline: none; font-family: inherit; font-size: 0.9rem;">
              <span style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--charcoal-light);">🔍</span>
            </div>

            <!-- Category Filter -->
            <div>
              <select id="shopCategoryFilter" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-full); border: 1px solid var(--border-light); outline: none; font-family: inherit; font-size: 0.9rem; background: #fff; cursor: pointer;">
                <option value="all">All Categories</option>
                <option value="Shampoo" ${state.activeFilterCategory === 'Shampoo' ? 'selected' : ''}>Shampoo & Wash</option>
                <option value="Conditioner" ${state.activeFilterCategory === 'Conditioner' ? 'selected' : ''}>Conditioners</option>
                <option value="Hair Oils" ${state.activeFilterCategory === 'Hair Oils' ? 'selected' : ''}>Hair Oils & Elixirs</option>
                <option value="Hair Masks" ${state.activeFilterCategory === 'Hair Masks' ? 'selected' : ''}>Restorative Masks</option>
                <option value="Scalp Care" ${state.activeFilterCategory === 'Scalp Care' ? 'selected' : ''}>Scalp Scrubs & Mists</option>
                <option value="Serums" ${state.activeFilterCategory === 'Serums' ? 'selected' : ''}>Density Serums</option>
              </select>
            </div>

            <!-- Hair Type Filter -->
            <div>
              <select id="shopHairTypeFilter" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-full); border: 1px solid var(--border-light); outline: none; font-family: inherit; font-size: 0.9rem; background: #fff; cursor: pointer;">
                <option value="all">Any Hair Texture</option>
                <option value="straight" ${state.activeHairTypeFilter === 'straight' ? 'selected' : ''}>Straight (1A-1C)</option>
                <option value="wavy" ${state.activeHairTypeFilter === 'wavy' ? 'selected' : ''}>Wavy (2A-2C)</option>
                <option value="curly" ${state.activeHairTypeFilter === 'curly' ? 'selected' : ''}>Curly (3A-3C)</option>
                <option value="coily" ${state.activeHairTypeFilter === 'coily' ? 'selected' : ''}>Coily / Kinky (4A-4C)</option>
              </select>
            </div>

            <!-- Sort By -->
            <div>
              <select id="shopSortFilter" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-full); border: 1px solid var(--border-light); outline: none; font-family: inherit; font-size: 0.9rem; background: #fff; cursor: pointer;">
                <option value="popularity">Sort: Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

          <!-- Quick Toggle Checkbox: Sulfate-Free Only -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-light); flex-wrap: wrap; gap: 1rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; color: var(--forest-green);">
              <input type="checkbox" id="sulfateFreeToggle" ${state.activeSulfateFreeOnly ? 'checked' : ''} style="accent-color: var(--forest-green); width: 17px; height: 17px;">
              🌿 Dedicated 100% Sulfate-Free Only
            </label>
            <div id="shopResultsCount" style="font-size: 0.85rem; color: var(--charcoal-light);">
              Showing ${PRODUCTS_DATA.length} products
            </div>
          </div>
        </div>

        <!-- Products Grid Container -->
        <div id="shopProductGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
          <!-- Dynamically populated -->
        </div>

      </div>
    </section>
  `;
}

function attachShopEventListeners() {
  const searchInput = document.getElementById('shopSearchInput');
  const catFilter = document.getElementById('shopCategoryFilter');
  const hairFilter = document.getElementById('shopHairTypeFilter');
  const sortFilter = document.getElementById('shopSortFilter');
  const sulfateToggle = document.getElementById('sulfateFreeToggle');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderShopGrid();
    });
  }

  if (catFilter) {
    catFilter.addEventListener('change', (e) => {
      state.activeFilterCategory = e.target.value;
      renderShopGrid();
    });
  }

  if (hairFilter) {
    hairFilter.addEventListener('change', (e) => {
      state.activeHairTypeFilter = e.target.value;
      renderShopGrid();
    });
  }

  if (sortFilter) {
    sortFilter.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderShopGrid();
    });
  }

  if (sulfateToggle) {
    sulfateToggle.addEventListener('change', (e) => {
      state.activeSulfateFreeOnly = e.target.checked;
      renderShopGrid();
    });
  }

  renderShopGrid();
}

function renderShopGrid() {
  const grid = document.getElementById('shopProductGrid');
  const countEl = document.getElementById('shopResultsCount');
  if (!grid) return;

  let filtered = PRODUCTS_DATA.filter(p => {
    // Category
    if (state.activeFilterCategory !== 'all' && p.category !== state.activeFilterCategory) {
      return false;
    }
    // Hair Type
    if (state.activeHairTypeFilter !== 'all' && !p.hairType.includes(state.activeHairTypeFilter) && !p.hairType.includes('all')) {
      return false;
    }
    // Sulfate Free
    if (state.activeSulfateFreeOnly && !p.isSulfateFree) {
      return false;
    }
    // Search Query (name or ingredients or description)
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.shortDesc.toLowerCase().includes(q);
      const matchIngr = p.ingredients.some(ing => ing.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchIngr) return false;
    }
    return true;
  });

  // Sorting
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // Popularity
    filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
  }

  if (countEl) countEl.textContent = `Showing ${filtered.length} products`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🌿</div>
        <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">No Formulations Found</h3>
        <p style="margin-bottom: 1.5rem;">Try adjusting your search criteria or resetting filters.</p>
        <button class="btn btn-secondary" onclick="state.searchQuery=''; state.activeFilterCategory='all'; state.activeHairTypeFilter='all'; state.activeSulfateFreeOnly=false; renderShopGrid();">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCardHTML).join('');
}

// ==========================================
// PAGE 3: HAIR TYPE QUIZ & DIAGNOSIS
// ==========================================
const QUIZ_QUESTIONS = [
  {
    stepTitle: 'Step 1 of 5: Hair Texture & Pattern',
    question: 'How would you describe your natural hair texture when air-dried without products?',
    sub: 'Select the pattern that mirrors your untreated hair geometry.',
    key: 'hairType',
    options: [
      { value: 'straight', label: 'Straight (1A - 1C)', desc: 'Lies flat from root to tip with natural gloss and minimal curl.', icon: '〰' },
      { value: 'wavy', label: 'Wavy (2A - 2C)', desc: 'Definite S-shaped bends, prone to mild frizz in humid climates.', icon: '🌊' },
      { value: 'curly', label: 'Curly (3A - 3C)', desc: 'Springy spirals and loops ranging from loose curls to corkscrews.', icon: '🌀' },
      { value: 'coily', label: 'Coily / Kinky (4A - 4C)', desc: 'Tight zig-zag or dense coils with high shrinkage and fragile cuticle.', icon: '✨' }
    ]
  },
  {
    stepTitle: 'Step 2 of 5: Scalp Sebum Dynamics',
    question: 'How does your scalp feel 48 hours after your last wash?',
    sub: 'This determines the gentle cleansing surfactants and botanical astringents you need.',
    key: 'scalpType',
    options: [
      { value: 'oily', label: 'Oily & Weighed Down', desc: 'Visible shine at roots, scalp feels greasy, needs frequent washing.', icon: '💧' },
      { value: 'dry', label: 'Dry & Tight', desc: 'Prone to tightness, mild flaking, rarely gets oily even after 5 days.', icon: '🍂' },
      { value: 'balanced', label: 'Balanced & Comfortable', desc: 'Neither excessively oily nor uncomfortably dry; easy to maintain.', icon: '⚖️' },
      { value: 'sensitive', label: 'Sensitive & Reactive', desc: 'Easily irritated, red, itchy, or reacts to conventional fragrances.', icon: '🌸' }
    ]
  },
  {
    stepTitle: 'Step 3 of 5: Primary Hair Concerns',
    question: 'What is your #1 hair priority right now?',
    sub: 'Choose the area where you desire the most visible clinical transformation.',
    key: 'concern',
    options: [
      { value: 'dryness', label: 'Moisture Deficiency & Dullness', desc: 'Rough cuticles, lacking slip, luster and softness.', icon: '✨' },
      { value: 'frizz', label: 'Unruly Frizz & Lack of Definition', desc: 'Hair swells in humidity; curls lose clumping structure.', icon: '☁️' },
      { value: 'breakage', label: 'Split Ends & Mechanical Breakage', desc: 'Snapping when brushing; bleached or heat-damaged cortex.', icon: '✂️' },
      { value: 'thinning', label: 'Thinning Follicles & Density Loss', desc: 'Widening part line, excess shower shedding, sluggish growth.', icon: '🌱' }
    ]
  },
  {
    stepTitle: 'Step 4 of 5: Porosity Assessment',
    question: 'How easily does your hair absorb water in the shower?',
    sub: 'Porosity measures how open or sealed your cuticle layer is.',
    key: 'porosity',
    options: [
      { value: 'low', label: 'Low Porosity (Takes Long to Wet)', desc: 'Water beads on strands; products sit on top rather than sinking in.', icon: '🛡️' },
      { value: 'medium', label: 'Normal / Medium Porosity', desc: 'Absorbs water and styling creams effortlessly; holds styles well.', icon: '🎯' },
      { value: 'high', label: 'High Porosity (Soaks & Dries Fast)', desc: 'Gets drenched immediately, dries rapidly, drinks moisture instantly.', icon: '🧽' },
      { value: 'unsure', label: 'Unsure / Need Guidance', desc: 'We will recommend an adaptable pH-balancing formulation.', icon: '❓' }
    ]
  },
  {
    stepTitle: 'Step 5 of 5: Desired Routine Complexity',
    question: 'How many minutes do you prefer spending on hair care each wash cycle?',
    sub: 'We will curate a routine that realistically fits your lifestyle.',
    key: 'complexity',
    options: [
      { value: 'minimal', label: 'Streamlined (5 - 10 mins)', desc: 'Cleanse, condition, and 1 leave-in booster. Quick and effortless.', icon: '⚡' },
      { value: 'balanced', label: 'Standard Ritual (15 - 20 mins)', desc: 'Wash, condition, scalp stimulating drops, and gentle styling seal.', icon: '🌿' },
      { value: 'indulgent', label: 'Full Luxury Spa (30+ mins)', desc: 'Pre-wash scalp exfoliation, steam mask, peptide drops, and massage.', icon: '👑' }
    ]
  }
];

function getQuizPageHTML() {
  if (state.quizResult) {
    return getQuizResultsHTML();
  }

  const q = QUIZ_QUESTIONS[state.quizStep];
  const progressPercent = Math.round(((state.quizStep + 1) / QUIZ_QUESTIONS.length) * 100);

  return `
    <section style="padding: 4rem 0;">
      <div class="container" style="max-width: 800px;">
        
        <!-- Progress Indicator -->
        <div style="margin-bottom: 2.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.85rem; font-weight: 600; color: var(--forest-green);">
            <span>${q.stepTitle}</span>
            <span>${progressPercent}% Complete</span>
          </div>
          <div style="width: 100%; height: 8px; background: rgba(36, 76, 58, 0.1); border-radius: var(--radius-full); overflow: hidden;">
            <div style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, var(--sage-green), var(--forest-green)); transition: width 0.3s ease;"></div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="glass-panel" style="padding: clamp(2rem, 4vw, 3.5rem); box-shadow: var(--shadow-md);">
          <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: 0.5rem; line-height: 1.25;">${q.question}</h2>
          <p style="margin-bottom: 2rem; font-size: 0.95rem;">${q.sub}</p>

          <!-- Choices Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
            ${q.options.map(opt => {
              const isSelected = state.quizAnswers[q.key] === opt.value;
              return `
                <div onclick="selectQuizAnswer('${q.key}', '${opt.value}')" style="background: ${isSelected ? 'var(--forest-green)' : '#fff'}; color: ${isSelected ? '#fff' : 'inherit'}; border: 1.5px solid ${isSelected ? 'var(--forest-green)' : 'var(--border-light)'}; border-radius: var(--radius-md); padding: 1.5rem; cursor: pointer; transition: all 0.2s ease;" onmouseover="if(!${isSelected}) this.style.borderColor='var(--muted-gold)';" onmouseout="if(!${isSelected}) this.style.borderColor='var(--border-light)';">
                  <div style="font-size: 2rem; margin-bottom: 0.75rem;">${opt.icon}</div>
                  <h4 style="color: ${isSelected ? '#fff' : 'var(--forest-green)'}; font-size: 1.2rem; margin-bottom: 0.4rem;">${opt.label}</h4>
                  <p style="color: ${isSelected ? 'rgba(255,255,255,0.85)' : 'var(--charcoal-light)'}; font-size: 0.85rem; line-height: 1.5;">${opt.desc}</p>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Navigation -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 1.5rem;">
            ${state.quizStep > 0 ? `
              <button class="btn btn-secondary btn-sm" onclick="prevQuizStep()">← Back</button>
            ` : `<div></div>`}

            <button class="btn btn-primary" onclick="nextQuizStep()" ${!state.quizAnswers[q.key] ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
              ${state.quizStep === QUIZ_QUESTIONS.length - 1 ? 'Analyze & Generate Routine →' : 'Continue →'}
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- Additional Section 1: The Trichological Science & Methodology -->
    <section style="padding: 4rem 0; background: rgba(169, 189, 167, 0.12); border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
      <div class="container" style="max-width: 1000px;">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 3rem auto;">
          <span class="badge badge-gold" style="margin-bottom: 0.6rem;">Clinical Methodology</span>
          <h2 style="font-size: 2.3rem; margin-bottom: 0.75rem;">How Our Diagnostic Engine Formulates Your Routine</h2>
          <p style="font-size: 0.95rem; color: var(--charcoal-light);">We cross-reference your structural cuticle characteristics with botanical actives to formulate a regimen that targets roots, strands, and ends.</p>
        </div>

        <div class="diagnostic-pillars-grid">
          <!-- Pillar 1 -->
          <div class="glass-panel" style="padding: 2rem; border-radius: var(--radius-md); background: #fff;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(36, 76, 58, 0.1); color: var(--forest-green); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.25rem;">🔬</div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--forest-green);">1. Cuticle Porosity Analysis</h4>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--charcoal-light);">Evaluates how readily your hair absorbs and locks in hydration, preventing hygral fatigue and protein moisture imbalance.</p>
          </div>

          <!-- Pillar 2 -->
          <div class="glass-panel" style="padding: 2rem; border-radius: var(--radius-md); background: #fff;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(197, 166, 106, 0.15); color: var(--muted-gold); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.25rem;">🧪</div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--forest-green);">2. Scalp Sebum & Microbiome</h4>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--charcoal-light);">Measures natural follicular sebum cycles to pair balancing cleansers without stripping essential acid mantle layers.</p>
          </div>

          <!-- Pillar 3 -->
          <div class="glass-panel" style="padding: 2rem; border-radius: var(--radius-md); background: #fff;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(169, 189, 167, 0.25); color: var(--forest-dark); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.25rem;">🌿</div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--forest-green);">3. Synergistic Phyto-Actives</h4>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--charcoal-light);">Prescribes concentrated clinical botanicals like Rosemary, Silk Peptides, and Phyto-Ceramides at therapeutic potencies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Section 2: Diagnosis FAQ & Routine Guarantee -->
    <section style="padding: 4.5rem 0;">
      <div class="container" style="max-width: 900px;">
        <div style="text-align: center; max-width: 600px; margin: 0 auto 3rem auto;">
          <span class="badge badge-sage" style="margin-bottom: 0.6rem;">Common Questions</span>
          <h2 style="font-size: 2.3rem; margin-bottom: 0.75rem;">Hair Diagnostic FAQ</h2>
          <p style="font-size: 0.95rem; color: var(--charcoal-light);">Everything you need to know about our assessment and 60-day botanical guarantee.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <details style="background: #fff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.25rem 1.75rem; cursor: pointer; transition: all 0.2s ease;" open>
            <summary style="font-size: 1.05rem; font-weight: 600; color: var(--forest-green); outline: none;">How accurate is the online diagnostic test?</summary>
            <p style="margin-top: 0.75rem; font-size: 0.9rem; line-height: 1.65; color: var(--charcoal-light);">Our algorithm was formulated alongside clinical trichologists and vetted across 24,000+ client evaluations. It accurately predicts formula match rate with an average 98.4% user satisfaction.</p>
          </details>

          <details style="background: #fff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.25rem 1.75rem; cursor: pointer; transition: all 0.2s ease;">
            <summary style="font-size: 1.05rem; font-weight: 600; color: var(--forest-green); outline: none;">What if my hair type or concerns change seasonally?</summary>
            <p style="margin-top: 0.75rem; font-size: 0.9rem; line-height: 1.65; color: var(--charcoal-light);">You can retake this diagnostic anytime from your account dashboard or swap formulas inside your subscription portal as seasons, humidity, or color treatments evolve.</p>
          </details>

          <details style="background: #fff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.25rem 1.75rem; cursor: pointer; transition: all 0.2s ease;">
            <summary style="font-size: 1.05rem; font-weight: 600; color: var(--forest-green); outline: none;">What is HairBloom’s 60-Day Botanical Guarantee?</summary>
            <p style="margin-top: 0.75rem; font-size: 0.9rem; line-height: 1.65; color: var(--charcoal-light);">If your customized prescribed routine doesn't measurably improve your scalp balance, curl definition, or strand density within 60 days, we reformulate or refund your entire order.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Additional Section 3: Visual Diagnostic Transformation Showcase (Image Section) -->
    <section style="padding: 5rem 0; background: linear-gradient(180deg, rgba(247, 244, 236, 0.4), #fff); overflow: hidden;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 0.6rem;">Real Prescriptions • Real Proof</span>
            <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Clinical Transformation Gallery</h2>
            <p style="color: var(--charcoal-light); font-size: 0.95rem;">Clients with matched diagnostic routines after 30 to 90 days of botanical nourishment.</p>
          </div>
          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <span class="badge badge-sage">Verified Photographic Logs</span>
          </div>
        </div>

        <div class="quiz-gallery-grid">
          <!-- Card 1 -->
          <div class="quiz-showcase-card">
            <div class="quiz-showcase-img-wrap">
              <img src="assets/images/1.jpg" alt="Curly Hair Hydration Transformation" class="quiz-showcase-img">
              <div class="quiz-showcase-badge">3B Curls • 60 Days</div>
            </div>
            <div class="quiz-showcase-content">
              <div style="font-size: 0.75rem; color: var(--muted-gold); font-weight: 700; text-transform: uppercase; margin-bottom: 0.3rem;">Moisture Restored</div>
              <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--forest-green);">From Brittle Hygral Fatigue to Defined Spiral Clumps</h4>
              <p style="font-size: 0.85rem; color: var(--charcoal-light); line-height: 1.55; margin-bottom: 1rem;">Prescribed: Rosemary Scalp Elixir & Phyto-Ceramide Restorative Butter.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 0.75rem; font-size: 0.8rem; font-weight: 600; color: var(--forest-green);">
                <span>Density Improvement</span>
                <span style="color: var(--muted-gold);">+42% Retained Length</span>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="quiz-showcase-card">
            <div class="quiz-showcase-img-wrap">
              <img src="assets/images/2.jpg" alt="Scalp Barrier Revival" class="quiz-showcase-img">
              <div class="quiz-showcase-badge">Fine 1A • 30 Days</div>
            </div>
            <div class="quiz-showcase-content">
              <div style="font-size: 0.75rem; color: var(--muted-gold); font-weight: 700; text-transform: uppercase; margin-bottom: 0.3rem;">Scalp pH Rebalanced</div>
              <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--forest-green);">Excess Sebum Overproduction Reset Without Stripping</h4>
              <p style="font-size: 0.85rem; color: var(--charcoal-light); line-height: 1.55; margin-bottom: 1rem;">Prescribed: Clarifying Apple Cider Rinse & Botanical Moisture Wash.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 0.75rem; font-size: 0.8rem; font-weight: 600; color: var(--forest-green);">
                <span>Wash Frequency</span>
                <span style="color: var(--muted-gold);">Every 3 Days (from daily)</span>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="quiz-showcase-card">
            <div class="quiz-showcase-img-wrap">
              <img src="assets/images/3.jpg" alt="Coily Density Regeneration" class="quiz-showcase-img">
              <div class="quiz-showcase-badge">4C Coils • 90 Days</div>
            </div>
            <div class="quiz-showcase-content">
              <div style="font-size: 0.75rem; color: var(--muted-gold); font-weight: 700; text-transform: uppercase; margin-bottom: 0.3rem;">Follicle Density Boost</div>
              <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--forest-green);">Edges Re-densified & Tensile Elasticity Tripled</h4>
              <p style="font-size: 0.85rem; color: var(--charcoal-light); line-height: 1.55; margin-bottom: 1rem;">Prescribed: Baobab Scalp Stimulant, Peptide Mask, Bamboo Detangler.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 0.75rem; font-size: 0.8rem; font-weight: 600; color: var(--forest-green);">
                <span>Breakage Reduction</span>
                <span style="color: var(--muted-gold);">-78% Shedding In Brush</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function selectQuizAnswer(key, value) {
  state.quizAnswers[key] = value;
  renderCurrentPage('quiz');
}

function nextQuizStep() {
  if (state.quizStep < QUIZ_QUESTIONS.length - 1) {
    state.quizStep++;
    renderCurrentPage('quiz');
  } else {
    // Generate Diagnostic Result
    calculateQuizDiagnosis();
  }
}

function prevQuizStep() {
  if (state.quizStep > 0) {
    state.quizStep--;
    renderCurrentPage('quiz');
  }
}

function calculateQuizDiagnosis() {
  const ans = state.quizAnswers;
  
  // Recommendations mapping
  let primaryProductIds = ['hb-01', 'hb-02'];
  if (ans.concern === 'thinning') {
    primaryProductIds.push('hb-03', 'hb-07');
  } else if (ans.hairType === 'curly' || ans.hairType === 'coily') {
    primaryProductIds.push('hb-06', 'hb-04');
  } else if (ans.scalpType === 'oily') {
    primaryProductIds.push('hb-05');
  } else {
    primaryProductIds.push('hb-09', 'hb-04');
  }

  const recommendedProducts = PRODUCTS_DATA.filter(p => primaryProductIds.includes(p.id));

  state.quizResult = {
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    hairProfile: {
      type: `${ans.hairType.toUpperCase()} Texture Profile`,
      scalp: `${ans.scalpType.toUpperCase()} Scalp Biome`,
      porosity: `${ans.porosity.toUpperCase()} Porosity Index`,
      primaryGoal: `${ans.concern.toUpperCase()} Targeted Recovery`
    },
    recommendations: recommendedProducts,
    morningRoutine: 'Apply 2-3 drops of Golden Elixir along temples, brush with wooden bristle comb to distribute sebum.',
    eveningRoutine: 'Spritz Botanical Mist, massage scalp for 3 minutes, sleep with mulberry silk pillowcase or bonnet.'
  };

  state.userProfile.hairProfile = state.quizResult.hairProfile;
  persistQuizResult();
  showToast('Hair diagnostic profile generated successfully!');
  renderCurrentPage('quiz');
}

function restartQuiz() {
  state.quizResult = null;
  state.quizStep = 0;
  state.quizAnswers = { hairType: '', scalpType: '', concerns: [], porosity: '', complexity: '' };
  localStorage.removeItem('hairbloom_quiz_result');
  renderCurrentPage('quiz');
}

function getQuizResultsHTML() {
  const res = state.quizResult;
  return `
    <section style="padding: 4rem 0;">
      <div class="container" style="max-width: 960px;">
        
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, var(--forest-green), #1b3d2e); border-radius: var(--radius-lg); padding: 3.5rem 2.5rem; color:#fff; text-align:center; margin-bottom: 3rem; box-shadow: var(--shadow-lg);">
          <span class="badge badge-gold" style="margin-bottom: 1rem;">Clinical Diagnostic Result</span>
          <h1 style="color:#fff; font-size: clamp(2.2rem, 4vw, 3.2rem); margin-bottom: 1rem;">Your Personalized Botanical Formulation</h1>
          <p style="color: rgba(255,255,255,0.85); max-width: 620px; margin: 0 auto 2rem auto;">
            Based on your answers, our algorithmic trichology matrix has customized your ideal wash cadence, active botanicals, and restorative peptides.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-gold" onclick="addAllQuizRoutineToCart()">
              Shop Full Routine (Add All to Bag)
            </button>
            <button class="btn btn-secondary" style="border-color:#fff; color:#fff;" onclick="restartQuiz()">
              Retake Quiz
            </button>
          </div>
        </div>

        <!-- Diagnostic Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 3.5rem;">
          <div style="background:#fff; padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--border-light); text-align:center;">
            <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:700; text-transform:uppercase; margin-bottom:0.25rem;">Hair Geometry</div>
            <div style="font-size:1.15rem; font-weight:600; color:var(--forest-green);">${res.hairProfile.type}</div>
          </div>
          <div style="background:#fff; padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--border-light); text-align:center;">
            <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:700; text-transform:uppercase; margin-bottom:0.25rem;">Scalp Biome</div>
            <div style="font-size:1.15rem; font-weight:600; color:var(--forest-green);">${res.hairProfile.scalp}</div>
          </div>
          <div style="background:#fff; padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--border-light); text-align:center;">
            <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:700; text-transform:uppercase; margin-bottom:0.25rem;">Cuticle Porosity</div>
            <div style="font-size:1.15rem; font-weight:600; color:var(--forest-green);">${res.hairProfile.porosity}</div>
          </div>
          <div style="background:#fff; padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--border-light); text-align:center;">
            <div style="font-size:0.8rem; color:var(--muted-gold); font-weight:700; text-transform:uppercase; margin-bottom:0.25rem;">Primary Target</div>
            <div style="font-size:1.15rem; font-weight:600; color:var(--forest-green);">${res.hairProfile.primaryGoal}</div>
          </div>
        </div>

        <!-- Suggested Daily Ritual -->
        <div class="glass-panel" style="padding: 2.5rem; margin-bottom: 3.5rem;">
          <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Suggested Daily & Wash Protocol</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div style="background:#fff; padding:1.5rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
              <h4 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--forest-green);">☀️ Morning Routine</h4>
              <p style="font-size:0.9rem; line-height:1.6;">${res.morningRoutine}</p>
            </div>
            <div style="background:#fff; padding:1.5rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
              <h4 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--forest-green);">🌙 Evening Protocol</h4>
              <p style="font-size:0.9rem; line-height:1.6;">${res.eveningRoutine}</p>
            </div>
          </div>
        </div>

        <!-- Recommended Products Grid -->
        <div style="margin-bottom: 3rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <span class="badge badge-sage">Targeted Prescriptions</span>
              <h2 style="font-size: 2.2rem;">Your Recommended Regimen</h2>
            </div>
            <button class="btn btn-primary" onclick="addAllQuizRoutineToCart()">Add Entire Bundle to Bag</button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
            ${res.recommendations.map(renderProductCardHTML).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}

function addAllQuizRoutineToCart() {
  if (!state.quizResult || !state.quizResult.recommendations) return;
  state.quizResult.recommendations.forEach(prod => {
    addToCart(prod.id, 1);
  });
  showToast('Entire personalized routine bundle added to your cart!');
  toggleCartDrawer(true);
}

// ==========================================
// PAGE 4: MY HAIR DASHBOARD
// ==========================================
function getDashboardPageHTML() {
  const u = state.userProfile;
  const completedSteps = u.weeklyRoutine.filter(r => r.completed).length;
  const totalSteps = u.weeklyRoutine.length;
  const routinePercent = Math.round((completedSteps / totalSteps) * 100);

  return `
    <section style="padding: 3rem 0 5rem 0;">
      <div class="container">
        
        <!-- Welcome Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="badge badge-forest">${u.membershipTier}</span>
              <span style="font-size: 0.85rem; color: var(--charcoal-light);">Member since ${u.memberSince}</span>
            </div>
            <h1 style="font-size: 2.8rem; margin-bottom: 0.25rem;">Welcome back, ${u.name}</h1>
            <p>Your weekly botanical consistency analytics and personalized hair progress studio.</p>
          </div>
          <button class="btn btn-secondary" onclick="navigateTo('quiz')">
            Update Hair Diagnosis
          </button>
        </div>

        <!-- Analytics Metric Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
          
          <div style="background:#fff; border-radius:var(--radius-md); padding:1.75rem; border:1px solid var(--border-light); box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--charcoal-light);">Weekly Consistency</span>
              <span style="color:var(--forest-green); font-size:1.2rem;">📊</span>
            </div>
            <div style="font-size:2.4rem; font-weight:700; color:var(--forest-green); font-family:'Cormorant Garamond', serif; line-height:1;">
              ${routinePercent}%
            </div>
            <div style="margin-top:0.75rem; width:100%; height:6px; background:var(--sage-light); border-radius:var(--radius-full); overflow:hidden;">
              <div style="width:${routinePercent}%; height:100%; background:var(--forest-green);"></div>
            </div>
            <div style="font-size:0.8rem; color:var(--charcoal-light); margin-top:0.5rem;">
              ${completedSteps} of ${totalSteps} daily steps logged
            </div>
          </div>

          <div style="background:#fff; border-radius:var(--radius-md); padding:1.75rem; border:1px solid var(--border-light); box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--charcoal-light);">Scalp Health Index</span>
              <span style="color:var(--muted-gold); font-size:1.2rem;">🌿</span>
            </div>
            <div style="font-size:2.4rem; font-weight:700; color:var(--muted-gold); font-family:'Cormorant Garamond', serif; line-height:1;">
              94 / 100
            </div>
            <div style="font-size:0.8rem; color:#2e7d32; margin-top:0.8rem; font-weight:600;">
              ↑ +8% improvement vs last month
            </div>
            <div style="font-size:0.8rem; color:var(--charcoal-light); margin-top:0.25rem;">
              Reduced flaking and sebum stability
            </div>
          </div>

          <div style="background:#fff; border-radius:var(--radius-md); padding:1.75rem; border:1px solid var(--border-light); box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--charcoal-light);">Active Plan</span>
              <span style="color:var(--forest-green); font-size:1.2rem;">📦</span>
            </div>
            <div style="font-size:1.5rem; font-weight:700; color:var(--forest-green); font-family:'Cormorant Garamond', serif; line-height:1.2;">
              ${u.activeSubscription.planName}
            </div>
            <div style="font-size:0.85rem; color:var(--charcoal-light); margin-top:0.5rem;">
              Next ship: <strong>${u.activeSubscription.nextDelivery}</strong>
            </div>
            <div style="font-size:0.8rem; color:var(--muted-gold); margin-top:0.25rem; font-weight:600;">
              ${u.activeSubscription.deliveryCycle}
            </div>
          </div>

          <div style="background:#fff; border-radius:var(--radius-md); padding:1.75rem; border:1px solid var(--border-light); box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--charcoal-light);">Hair Profile</span>
              <span style="color:var(--forest-green); font-size:1.2rem;">✨</span>
            </div>
            <div style="font-size:1.2rem; font-weight:600; color:var(--forest-green);">
              ${u.hairProfile.type}
            </div>
            <div style="font-size:0.85rem; color:var(--charcoal-light); margin-top:0.25rem;">
              ${u.hairProfile.porosity} • ${u.hairProfile.scalp}
            </div>
            <div style="font-size:0.75rem; color:var(--muted-gold); margin-top:0.4rem; font-weight:600;">
              Target: ${u.hairProfile.primaryGoal}
            </div>
          </div>

        </div>

        <!-- Main Dashboard Split: Routine Checklist vs Progress Tracker -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2.5rem; margin-bottom: 3.5rem;">
          
          <!-- Weekly Routine Checklist -->
          <div class="glass-panel" style="padding: 2rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
              <h3 style="font-size: 1.6rem;">Weekly Ritual Schedule</h3>
              <span class="badge badge-sage">Interactive Checklist</span>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">Mark tasks as completed to track your habit consistency score.</p>
            
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              ${u.weeklyRoutine.map((item, index) => `
                <div style="display:flex; align-items:center; justify-content:space-between; padding:0.9rem 1.2rem; background:#fff; border-radius:var(--radius-sm); border:1px solid var(--border-light); transition:background 0.2s;">
                  <div style="display:flex; align-items:center; gap:0.75rem;">
                    <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleRoutineStep(${index})" style="accent-color:var(--forest-green); width:18px; height:18px; cursor:pointer;">
                    <div>
                      <div style="font-size:0.8rem; font-weight:700; color:var(--muted-gold); text-transform:uppercase;">${item.day}</div>
                      <div style="font-size:0.95rem; font-weight:500; text-decoration:${item.completed ? 'line-through' : 'none'}; color:${item.completed ? 'var(--charcoal-light)' : 'var(--charcoal)'};">${item.step}</div>
                    </div>
                  </div>
                  <span style="font-size:0.8rem; color:${item.completed ? '#2e7d32' : 'var(--charcoal-light)'}; font-weight:600;">
                    ${item.completed ? '✓ Done' : 'Pending'}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Hair Journal & Progress Log -->
          <div class="glass-panel" style="padding: 2rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
              <h3 style="font-size: 1.6rem;">Hair Journal & Notes</h3>
              <span class="badge badge-gold">Observational Log</span>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">Record strand elasticity, shedding changes, and styling milestones.</p>
            
            <!-- Quick Add Note Form -->
            <form onsubmit="handleJournalSubmit(event)" style="margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.75rem;">
              <textarea id="journalNoteInput" required placeholder="Write a new observation (e.g. Curls felt extra soft after deep conditioning)..." style="width:100%; height:80px; padding:0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-light); font-family:inherit; font-size:0.9rem; outline:none; resize:none;"></textarea>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <select id="journalMoodInput" style="padding:0.5rem 1rem; border-radius:var(--radius-full); border:1px solid var(--border-light); font-family:inherit; font-size:0.85rem; background:#fff;">
                  <option value="✨ Great">✨ Great Bounce</option>
                  <option value="🌿 Calm">🌿 Balanced</option>
                  <option value="⭐ Milestone">⭐ Noticeable Growth</option>
                  <option value="⚠️ Needs Moisture">⚠️ Needs Moisture</option>
                </select>
                <button type="submit" class="btn btn-primary btn-sm">+ Log Note</button>
              </div>
            </form>

            <!-- Entries List -->
            <div style="display:flex; flex-direction:column; gap:0.75rem; max-height:280px; overflow-y:auto; padding-right:0.5rem;">
              ${u.journalEntries.map(e => `
                <div style="background:#fff; padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                    <span style="font-size:0.75rem; font-weight:700; color:var(--forest-green);">${e.date}</span>
                    <span style="font-size:0.75rem; padding:0.15rem 0.6rem; border-radius:var(--radius-full); background:var(--sage-light); color:var(--forest-dark); font-weight:600;">${e.mood}</span>
                  </div>
                  <p style="font-size:0.85rem; color:var(--charcoal); margin:0;">${e.note}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Before & After Comparison Showcase -->
        <div class="glass-panel" style="padding: 2.5rem; margin-bottom: 3.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <h3 style="font-size: 1.8rem;">Before & After Visual Progress</h3>
              <p style="font-size: 0.9rem;">Manually recorded strand density & follicle progression over your 90-day cycle.</p>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="showToast('Photo upload simulation: In production, connects to secure customer gallery.')">
              📷 Upload Progress Photo
            </button>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:2rem;">
            <div style="text-align:center;">
              <img src="assets/images/21.jpg" alt="Day 1" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
              <h4 style="font-size:1.1rem; margin-top:0.75rem;">Day 1: Baseline</h4>
              <p style="font-size:0.85rem;">Dry cuticles, moderate shedding, curl clumping breakdown.</p>
            </div>
            <div style="text-align:center;">
              <img src="assets/images/22.jpg" alt="Day 45" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
              <h4 style="font-size:1.1rem; margin-top:0.75rem;">Day 45: Transition</h4>
              <p style="font-size:0.85rem;">Improved root strength, decreased scalp flaking, softer texture.</p>
            </div>
            <div style="text-align:center;">
              <img src="assets/images/23.jpg" alt="Day 90" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
              <h4 style="font-size:1.1rem; margin-top:0.75rem; color:var(--forest-green);">Day 90: Current State</h4>
              <p style="font-size:0.85rem;">Dense follicle roots, vibrant ringlet definition, zero frizz.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

function toggleRoutineStep(index) {
  state.userProfile.weeklyRoutine[index].completed = !state.userProfile.weeklyRoutine[index].completed;
  renderCurrentPage('dashboard');
  showToast('Routine checklist updated!');
}

function handleJournalSubmit(e) {
  e.preventDefault();
  const noteInput = document.getElementById('journalNoteInput');
  const moodInput = document.getElementById('journalMoodInput');
  if (!noteInput || !noteInput.value.trim()) return;

  const newEntry = {
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    note: noteInput.value.trim(),
    mood: moodInput ? moodInput.value : '✨ Great'
  };

  state.userProfile.journalEntries.unshift(newEntry);
  localStorage.setItem('hairbloom_journal', JSON.stringify(state.userProfile.journalEntries));
  showToast('Hair journal observation saved!');
  renderCurrentPage('dashboard');
}

// ==========================================
// PAGE 5: SUBSCRIPTION PLANS
// ==========================================
let subscriptionBillingCycle = 'monthly'; // 'monthly' | 'quarterly'

function getSubscriptionPageHTML() {
  return `
    <section style="padding: 4rem 0;">
      <div class="container">
        
        <!-- Subscription Header -->
        <div style="text-align: center; max-width: 720px; margin: 0 auto 3.5rem auto;">
          <span class="badge badge-sage" style="margin-bottom: 0.8rem;">Doorstep Hair Delivery</span>
          <h1 style="font-size: clamp(2.4rem, 4vw, 3.6rem); margin-bottom: 1rem;">Botanical Subscriptions</h1>
          <p style="font-size: 1.1rem; line-height: 1.7;">
            Clean hair routines delivered seamlessly to your door. Experience 100% sulfate-free, botanical formulas with up to 28% subscriber savings and total flexibility.
          </p>

          <!-- Frequency Toggle -->
          <div style="display: inline-flex; align-items: center; background: #fff; padding: 0.4rem; border-radius: var(--radius-full); border: 1px solid var(--border-light); margin-top: 2rem; box-shadow: var(--shadow-sm);">
            <button onclick="setSubscriptionCycle('monthly')" style="padding: 0.6rem 1.6rem; border-radius: var(--radius-full); font-weight: 600; font-size: 0.9rem; transition: all 0.2s; background: ${subscriptionBillingCycle === 'monthly' ? 'var(--forest-green)' : 'transparent'}; color: ${subscriptionBillingCycle === 'monthly' ? '#fff' : 'var(--charcoal)'};">
              Monthly Delivery
            </button>
            <button onclick="setSubscriptionCycle('quarterly')" style="padding: 0.6rem 1.6rem; border-radius: var(--radius-full); font-weight: 600; font-size: 0.9rem; transition: all 0.2s; background: ${subscriptionBillingCycle === 'quarterly' ? 'var(--forest-green)' : 'transparent'}; color: ${subscriptionBillingCycle === 'quarterly' ? '#fff' : 'var(--charcoal)'};">
              Quarterly Box (Save Extra 10%)
            </button>
          </div>
        </div>

        <!-- Plan Comparison Cards (Strictly Aligned, Identical Heights & Straight Headers) -->
        <div class="subscription-cards-grid">
          ${SUBSCRIPTION_PLANS.map(plan => {
            const price = subscriptionBillingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly;
            const cadence = subscriptionBillingCycle === 'monthly' ? '/ month' : '/ quarter';
            const isPop = plan.isPopular;

            return `
              <div class="subscription-plan-card" style="background: #ffffff; border-radius: var(--radius-lg); border: ${isPop ? '2.5px solid var(--forest-green)' : '1px solid var(--border-light)'}; box-shadow: ${isPop ? '0 16px 40px rgba(36, 76, 58, 0.16)' : 'var(--shadow-sm)'}; display: flex; flex-direction: column; position: relative; height: 100%;">
                
                <!-- Fixed Height Top Accent / Popular Badge Slot (Matches Exactly Across All 3 Cards) -->
                <div style="height: 38px; display: flex; align-items: center; justify-content: center; background: ${isPop ? 'var(--forest-green)' : 'transparent'}; border-top-left-radius: calc(var(--radius-lg) - 2px); border-top-right-radius: calc(var(--radius-lg) - 2px);">
                  ${isPop ? `
                    <span style="color: #fff; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap;">
                      ★ Most Recommended Choice
                    </span>
                  ` : ''}
                </div>

                <div class="subscription-card-body" style="padding: 1.8rem 1.6rem 2rem 1.6rem; display: flex; flex-direction: column; flex: 1;">
                  
                  <!-- Top Badge & Discount -->
                  <div class="subscription-badge-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; gap: 0.5rem; flex-wrap: nowrap;">
                    <span class="badge ${isPop ? 'badge-forest' : 'badge-sage'}" style="font-size: 0.72rem; padding: 0.3rem 0.65rem; white-space: nowrap; flex-shrink: 0;">
                      ${plan.badge}
                    </span>
                    <span class="badge badge-gold" style="font-size: 0.72rem; padding: 0.3rem 0.65rem; white-space: nowrap; flex-shrink: 0;">
                      Save ${plan.savePercentage}%
                    </span>
                  </div>

                  <!-- Plan Title (Fixed Height for Alignment) -->
                  <h3 style="font-size: 1.95rem; height: 38px; margin-bottom: 0.35rem; color: var(--forest-green); display: flex; align-items: center;">
                    ${plan.name}
                  </h3>

                  <!-- Subtitle (Fixed Height for Alignment) -->
                  <p style="font-size: 0.88rem; height: 44px; margin-bottom: 1.5rem; color: var(--charcoal-light); line-height: 1.5; display: flex; align-items: flex-start;">
                    ${plan.tagline}
                  </p>
                  
                  <!-- Pricing Block (Identical Alignment Across Cards) -->
                  <div style="display: flex; align-items: baseline; gap: 0.4rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-light); margin-bottom: 1.75rem; height: 75px;">
                    <span style="font-size: 3.2rem; font-family: 'Cormorant Garamond', serif; font-weight: 700; color: var(--forest-green); line-height: 1;">$${price}</span>
                    <span style="font-size: 0.95rem; color: var(--charcoal-light); font-weight: 500;">${cadence}</span>
                  </div>

                  <!-- What's Included (Fixed Min-Height for Straight Alignment) -->
                  <div style="margin-bottom: 1.75rem; min-height: 190px;">
                    <div style="font-size: 0.78rem; font-weight: 700; color: var(--forest-green); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.85rem;">
                      What's Included:
                    </div>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem;">
                      ${plan.productsIncluded.map(item => `
                        <li style="font-size: 0.85rem; display: flex; align-items: flex-start; gap: 0.5rem; line-height: 1.4;">
                          <span style="color: var(--muted-gold); font-size: 0.95rem; line-height: 1.2;">✦</span>
                          <span style="color: var(--charcoal); font-weight: 500;">${item}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <!-- Subscriber Perks (Fixed Min-Height for Straight Alignment) -->
                  <div style="margin-bottom: 2rem; border-top: 1px solid var(--border-light); padding-top: 1.25rem; min-height: 160px;">
                    <div style="font-size: 0.78rem; font-weight: 700; color: var(--forest-green); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.75rem;">
                      Subscriber Perks:
                    </div>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.55rem;">
                      ${plan.features.map(feat => `
                        <li style="font-size: 0.83rem; display: flex; align-items: center; gap: 0.5rem; color: var(--charcoal-light);">
                          <span style="color: var(--forest-green); font-size: 0.9rem;">✔</span>
                          <span>${feat}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <!-- CTA Button -->
                  <button class="btn ${isPop ? 'btn-primary' : 'btn-secondary'}" style="width: 100%; margin-top: auto; padding: 0.9rem;" onclick="chooseSubscriptionPlan('${plan.id}', '${plan.name}', ${price})">
                    Select ${plan.name} →
                  </button>

                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- NEW SECTION 1: How HairBloom Subscriptions Work (3-Step Botanical Roadmap) -->
        <div style="margin-bottom: 5.5rem;">
          <div style="text-align: center; max-width: 650px; margin: 0 auto 3.5rem auto;">
            <span class="badge badge-sage" style="margin-bottom: 0.8rem;">Effortless Routine Care</span>
            <h2 style="font-size: 2.6rem; margin-bottom: 0.75rem;">How Your Subscription Works</h2>
            <p>From custom formulation to your shower shelf in three seamless steps with zero commitments.</p>
          </div>

          <div class="subscription-steps-grid">
            
            <!-- Step 1 -->
            <div style="background: #fff; padding: 2.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); position: relative; display: flex; flex-direction: column;">
              <div style="font-size: 2.8rem; font-family: 'Cormorant Garamond', serif; font-weight: 700; color: var(--muted-gold); line-height: 1; margin-bottom: 1rem;">
                01
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.6rem; color: var(--forest-green);">Choose Your Formula Plan</h3>
              <p style="font-size: 0.88rem; color: var(--charcoal-light); line-height: 1.6; margin-bottom: 1.5rem; flex: 1;">
                Select from our Essential, Complete, or Bespoke Concierge tiers. Every set is tailored to your hair porosity, curl pattern, and scalp sebum balance.
              </p>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--forest-green); display: flex; align-items: center; gap: 0.4rem;">
                <span>✦</span> Formulations customized to hair type
              </div>
            </div>

            <!-- Step 2 -->
            <div style="background: #fff; padding: 2.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); position: relative; display: flex; flex-direction: column;">
              <div style="font-size: 2.8rem; font-family: 'Cormorant Garamond', serif; font-weight: 700; color: var(--muted-gold); line-height: 1; margin-bottom: 1rem;">
                02
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.6rem; color: var(--forest-green);">Fresh Cold-Pressed Delivery</h3>
              <p style="font-size: 0.88rem; color: var(--charcoal-light); line-height: 1.6; margin-bottom: 1.5rem; flex: 1;">
                Receive fresh, small-batch bottles delivered automatically every 30 or 90 days in 100% recyclable, climate-neutral eco-packaging with free priority shipping.
              </p>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--forest-green); display: flex; align-items: center; gap: 0.4rem;">
                <span>✦</span> Carbon-neutral doorstep dispatch
              </div>
            </div>

            <!-- Step 3 -->
            <div style="background: #fff; padding: 2.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); position: relative; display: flex; flex-direction: column;">
              <div style="font-size: 2.8rem; font-family: 'Cormorant Garamond', serif; font-weight: 700; color: var(--muted-gold); line-height: 1; margin-bottom: 1rem;">
                03
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.6rem; color: var(--forest-green);">Total Flexibility & Control</h3>
              <p style="font-size: 0.88rem; color: var(--charcoal-light); line-height: 1.6; margin-bottom: 1.5rem; flex: 1;">
                Going on vacation or hair needs changing with the seasons? Adjust products, swap scents, delay shipments by 30 days, or cancel anytime with one click.
              </p>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--forest-green); display: flex; align-items: center; gap: 0.4rem;">
                <span>✦</span> 100% pause, skip, or cancel control
              </div>
            </div>

          </div>
        </div>

        <!-- NEW SECTION 2: What's Inside The Unboxing Box & Subscriber Perks Grid -->
        <div style="background: linear-gradient(135deg, var(--forest-green), #183a2b); border-radius: var(--radius-lg); padding: clamp(2.5rem, 5vw, 4.5rem); color: #fff; margin-bottom: 5.5rem; box-shadow: var(--shadow-lg); position: relative; overflow: hidden;">
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3.5rem; align-items: center;">
            
            <!-- Left Info -->
            <div>
              <span class="badge badge-gold" style="margin-bottom: 1rem;">The HairBloom Unboxing Experience</span>
              <h2 style="color: #fff; font-size: clamp(2.2rem, 3.8vw, 3.2rem); margin-bottom: 1.25rem; line-height: 1.2;">
                More Than Just Haircare.<br><span style="font-style: italic; color: var(--muted-gold-light);">A Luxurious Self-Care Ritual.</span>
              </h2>
              <p style="color: rgba(255,255,255,0.85); font-size: 1rem; line-height: 1.7; margin-bottom: 2rem;">
                Every seasonal subscriber delivery arrives thoughtfully wrapped in recyclable botanical tissue, complete with full-size formulations, travel minis, and seasonal scalp tools.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 2.25rem;">
                <div style="background: rgba(255,255,255,0.08); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.15);">
                  <div style="font-size: 1.25rem; margin-bottom: 0.35rem;">🎁</div>
                  <div style="font-weight: 600; font-size: 0.92rem; color: #fff; margin-bottom: 0.2rem;">Free Welcome Gift</div>
                  <div style="font-size: 0.78rem; color: rgba(255,255,255,0.7);">Bian Stone scalp comb included in box 1 ($28 value).</div>
                </div>

                <div style="background: rgba(255,255,255,0.08); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.15);">
                  <div style="font-size: 1.25rem; margin-bottom: 0.35rem;">🚚</div>
                  <div style="font-weight: 600; font-size: 0.92rem; color: #fff; margin-bottom: 0.2rem;">Free Priority Shipping</div>
                  <div style="font-size: 0.78rem; color: rgba(255,255,255,0.7);">Complimentary nationwide delivery on every subscription.</div>
                </div>

                <div style="background: rgba(255,255,255,0.08); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.15);">
                  <div style="font-size: 1.25rem; margin-bottom: 0.35rem;">✨</div>
                  <div style="font-weight: 600; font-size: 0.92rem; color: #fff; margin-bottom: 0.2rem;">Seasonal Sample Sachets</div>
                  <div style="font-size: 0.78rem; color: rgba(255,255,255,0.7);">Preview upcoming lab-exclusive hair masks & serums.</div>
                </div>

                <div style="background: rgba(255,255,255,0.08); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.15);">
                  <div style="font-size: 1.25rem; margin-bottom: 0.35rem;">🛡️</div>
                  <div style="font-weight: 600; font-size: 0.92rem; color: #fff; margin-bottom: 0.2rem;">30-Day Guarantee</div>
                  <div style="font-size: 0.78rem; color: rgba(255,255,255,0.7);">Love your results or receive a full routine reformulation.</div>
                </div>
              </div>

              <button class="btn btn-gold" onclick="window.scrollTo({ top: 380, behavior: 'smooth' })">
                Choose Your Plan Above ↑
              </button>
            </div>

            <!-- Right Visual Showcase -->
            <div style="position: relative; text-align: center;">
              <div style="position: relative; display: inline-block; width: 100%; max-width: 440px;">
                <img src="assets/images/17.jpg" alt="HairBloom Unboxing Experience" style="width: 100%; height: 420px; object-fit: cover; border-radius: var(--radius-md); box-shadow: 0 20px 45px rgba(0,0,0,0.3); border: 2px solid rgba(255,255,255,0.2);">
                
                <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; background: rgba(25, 54, 41, 0.92); backdrop-filter: blur(10px); padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid rgba(169, 189, 167, 0.3); text-align: left; font-size: 0.82rem; color: #fff;">
                  <strong style="color: var(--muted-gold-light);">Subscriber Milestone:</strong> Over 30,000 seasonal boxes delivered with a 98.4% satisfaction rate.
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Subscription Management Demo Controls -->
        <div class="glass-panel" style="padding: 2.5rem; margin-bottom: 5rem;">
          <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Active Subscription Control Center</h3>
          <p style="margin-bottom: 2rem; font-size: 0.95rem;">HairBloom puts you in total command. Manage your upcoming shipment with one click.</p>
          
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; justify-content: space-between; background: #fff; padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--muted-gold); text-transform: uppercase;">Current Subscription</div>
              <h4 style="font-size: 1.3rem; margin-top: 0.2rem;">${state.userProfile.activeSubscription.planName}</h4>
              <div style="font-size: 0.85rem; color: var(--charcoal-light); margin-top: 0.2rem;">Next Box Dispatches: <strong>${state.userProfile.activeSubscription.nextDelivery}</strong></div>
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-secondary btn-sm" onclick="showToast('Upcoming shipment skipped by 30 days!')">
                Skip Next Shipment
              </button>
              <button class="btn btn-secondary btn-sm" onclick="showToast('Subscription paused. You will not be billed.')">
                Pause Routine
              </button>
              <button class="btn btn-primary btn-sm" onclick="showToast('Shipment scheduled immediately for tomorrow!')">
                Ship Now
              </button>
            </div>
          </div>
        </div>

        <!-- Subscription FAQ Section -->
        <div style="max-width: 800px; margin: 0 auto;">
          <h2 style="font-size: 2.2rem; text-align: center; margin-bottom: 2.5rem;">Frequently Asked Questions</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${[
              { q: 'Can I swap products if my hair needs change?', a: 'Yes! You can adjust your formulas in your dashboard before any dispatch date as your hair texture or seasonal weather changes.' },
              { q: 'Is there a minimum commitment or cancellation penalty?', a: 'None at all. You can cancel, pause, or change your frequency anytime with zero hidden fees.' },
              { q: 'How does the free gift Bian Stone comb work?', a: 'Every new subscriber receives our artisanal jade or bian stone follicle stimulation comb inside their inaugural box.' },
              { q: 'Are all subscription formulas safe for color-treated hair?', a: 'Yes, 100%. All HairBloom shampoos, conditioners, and treatments are sulfate-free, paraben-free, and color-preserving.' }
            ].map(faq => `
              <div style="background: #fff; padding: 1.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--forest-green);">${faq.q}</h4>
                <p style="font-size: 0.9rem; margin: 0; line-height: 1.6;">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}

function setSubscriptionCycle(cycle) {
  subscriptionBillingCycle = cycle;
  renderCurrentPage('subscription');
}

function chooseSubscriptionPlan(planId, name, price) {
  state.userProfile.activeSubscription.planName = name;
  state.userProfile.activeSubscription.price = `$${price} / ${subscriptionBillingCycle}`;
  showToast(`Subscribed to ${name}! Your routine has been saved.`);
  navigateTo('dashboard');
}

// ==========================================
// PAGE 6: COMMUNITY, REVIEWS & ABOUT
// ==========================================
function getCommunityPageHTML() {
  return `
    <section style="padding: 4rem 0;">
      <div class="container">
        
        <!-- About & Brand Mission Banner -->
        <div class="about-hero-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
          <div class="about-hero-content">
            <span class="badge badge-sage" style="margin-bottom: 0.8rem;">Our Botanical Philosophy</span>
            <h1 style="font-size: clamp(2.2rem, 4vw, 3.6rem); margin-bottom: 1.25rem;">Rooted in Nature.<br><span style="font-style: italic; color: var(--muted-gold);">Proven by Hair Science.</span></h1>
            <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
              HairBloom was founded in our botanical laboratory with a single conviction: healthy hair starts at the scalp biome. We replace aggressive sulfates, silicones, and synthetic parabens with cold-pressed plant extracts, biomimetic silk proteins, and pure essential oils.
            </p>
            <div class="about-hero-features" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; width: 100%;">
              <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <strong style="color: var(--forest-green);">100% Ingredient Transparency:</strong> Full disclosure of every botanic extract.
              </div>
              <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <strong style="color: var(--forest-green);">Responsible Packaging:</strong> Recycled glass and ocean-bound post-consumer resin.
              </div>
              <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <strong style="color: var(--forest-green);">Cruelty-Free & Leaping Bunny Certified:</strong> Never tested on animals.
              </div>
            </div>
          </div>
          <div>
            <img src="assets/images/24.jpg" alt="HairBloom Botanical Laboratory" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); object-fit: cover; max-height: 480px;">
          </div>
        </div>

        <!-- Community Testimonials Header -->
        <div style="text-align: center; max-width: 650px; margin: 0 auto 3.5rem auto;">
          <span class="badge badge-gold" style="margin-bottom: 0.8rem;">Member Verified Feedback</span>
          <h2 style="font-size: 2.8rem; margin-bottom: 0.5rem;">Voices of Our Community</h2>
          <p>Read authentic experiences from individuals who rebuilt their hair routines with HairBloom.</p>
        </div>

        <!-- Reviews Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 5rem;">
          ${state.reviews.map(rev => `
            <div style="background: #fff; padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
              <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.25rem;">
                <img src="${rev.avatar}" alt="${rev.author}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover;">
                <div>
                  <h4 style="font-size: 1.15rem; margin-bottom: 0.15rem;">${rev.author}</h4>
                  <div style="font-size: 0.8rem; color: var(--muted-gold); font-weight: 600;">${rev.hairType}</div>
                  <div style="font-size: 0.75rem; color: var(--charcoal-light);">${rev.date}</div>
                </div>
              </div>
              <div style="color: var(--muted-gold); margin-bottom: 0.5rem; font-size: 1rem;">★★★★★</div>
              <h5 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; font-family: 'Plus Jakarta Sans', sans-serif;">"${rev.title}"</h5>
              <p style="font-size: 0.9rem; line-height: 1.6; color: var(--charcoal-light); margin-bottom: 1rem; flex: 1;">${rev.content}</p>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--forest-green); border-top: 1px solid var(--border-light); padding-top: 0.75rem; margin-top: auto;">
                Verified Purchase: <em>${rev.productName}</em>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Submit Review & Contact Form Split -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 3rem; margin-bottom: 5rem;">
          
          <!-- Submit Review Form -->
          <div class="glass-panel" style="padding: 2.5rem;">
            <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Share Your Hair Journey</h3>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">Tell our community about your results and favourite formulas.</p>
            
            <form onsubmit="handleReviewSubmit(event)" style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <label style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 0.3rem;">Your Full Name</label>
                <input type="text" id="revName" required placeholder="Elena Vance" style="width: 100%; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none;">
              </div>
              <div>
                <label style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 0.3rem;">Hair Texture / Pattern</label>
                <input type="text" id="revType" required placeholder="e.g. Type 3A Curly, Medium Porosity" style="width: 100%; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none;">
              </div>
              <div>
                <label style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 0.3rem;">Product Reviewed</label>
                <select id="revProduct" style="width: 100%; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; background: #fff; outline: none;">
                  ${PRODUCTS_DATA.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
              </div>
              <div>
                <label style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 0.3rem;">Review Title</label>
                <input type="text" id="revTitle" required placeholder="e.g. Incredible shine in just one wash!" style="width: 100%; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none;">
              </div>
              <div>
                <label style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 0.3rem;">Your Experience & Results</label>
                <textarea id="revContent" required placeholder="Describe your observations, how you use the product, and changes you observed..." style="width: 100%; height: 100px; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none; resize: none;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit Testimonial</button>
            </form>
          </div>

          <!-- Contact & Concierge Support -->
          <div class="glass-panel" style="padding: 2.5rem;">
            <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Get in Touch</h3>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">Have questions regarding formulation compatibility? Our botanical specialists are here to assist.</p>
            
            <div style="margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; gap: 0.75rem; align-items: center;">
                <span style="color: var(--forest-green); font-size: 1.2rem;">📍</span>
                <span style="font-size: 0.9rem;">HairBloom Botanical Studio, 450 Botanica Way, Suite 800</span>
              </div>
              <div style="display: flex; gap: 0.75rem; align-items: center;">
                <span style="color: var(--forest-green); font-size: 1.2rem;">✉️</span>
                <span style="font-size: 0.9rem;">concierge@hairbloomstudio.com</span>
              </div>
              <div style="display: flex; gap: 0.75rem; align-items: center;">
                <span style="color: var(--forest-green); font-size: 1.2rem;">📞</span>
                <span style="font-size: 0.9rem;">+1 (800) 424-7256 (M-F 9am-6pm EST)</span>
              </div>
            </div>

            <form onsubmit="event.preventDefault(); showToast('Your inquiry has been received! We reply within 24 hours.'); this.reset();" style="display: flex; flex-direction: column; gap: 1rem;">
              <input type="text" required placeholder="Your Name" style="padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none;">
              <input type="email" required placeholder="Email Address" style="padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none;">
              <textarea required placeholder="How can our trichology team assist you?" style="height: 100px; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.9rem; outline: none; resize: none;"></textarea>
              <button type="submit" class="btn btn-secondary">Send Message</button>
            </form>
          </div>

        </div>

        <!-- Google Maps Studio Location Section -->
        <div class="glass-panel" style="padding: 2rem; margin-bottom: 5rem; border-radius: var(--radius-lg); overflow: hidden;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 0.4rem;">Flagship Sanctuary</span>
              <h3 style="font-size: 1.75rem; margin: 0;">Visit HairBloom Botanical Studio & Lab</h3>
            </div>
            <div style="font-size: 0.85rem; color: var(--charcoal-light); display: flex; align-items: center; gap: 0.5rem;">
              <span>🕒 Open Mon - Sat: 9:00 AM - 7:00 PM EST</span>
            </div>
          </div>
          
          <div style="position: relative; width: 100%; height: 380px; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-light);">
            <iframe 
              title="HairBloom Botanical Studio Location"
              src="https://maps.google.com/maps?q=450+Botanica+Way+Miami+FL+33139&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border: 0; filter: contrast(1.02) saturate(1.05);" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </section>
  `;
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('revName').value;
  const type = document.getElementById('revType').value;
  const prod = document.getElementById('revProduct').value;
  const title = document.getElementById('revTitle').value;
  const content = document.getElementById('revContent').value;

  const newReview = {
    id: `rev-${Date.now()}`,
    author: name,
    hairType: type,
    rating: 5,
    title: title,
    content: content,
    date: 'Just now',
    verified: true,
    avatar: 'assets/images/25.jpg',
    productName: prod
  };

  state.reviews.unshift(newReview);
  showToast('Thank you for sharing your experience!');
  renderCurrentPage('community');
}
