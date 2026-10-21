// 3D 360 Multi-Card Rotating Carousel State & Logic
let carouselRotation = 0;
let carouselTargetRotation = 0;
let isCarouselDragging = false;
let carouselStartX = 0;
let carouselAutoPlay = true;
let carouselAutoInterval = null;
let isCarouselHovered = false;

const CAROUSEL_PRODUCTS = [
  { id: 'hb-03', name: 'Rosemary & Baobab Elixir', tag: '#1 Bestseller', price: 42, image: 'assets/images/3.jpg', category: 'Hair Oils' },
  { id: 'hb-01', name: 'Botanical Balancing Wash', tag: 'Sulfate-Free', price: 32, image: 'assets/images/1.jpg', category: 'Shampoo' },
  { id: 'hb-02', name: 'Silk Peptide Conditioner', tag: 'Restorative', price: 34, image: 'assets/images/2.jpg', category: 'Conditioner' },
  { id: 'hb-04', name: 'Phyto-Ceramide Mask', tag: 'Intensive Repair', price: 46, image: 'assets/images/4.jpg', category: 'Hair Masks' },
  { id: 'hb-07', name: 'Golden Marula Serum', tag: 'Density Booster', price: 54, image: 'assets/images/7.jpg', category: 'Serums' },
  { id: 'hb-05', name: 'Apple Cider Exfoliant', tag: 'Detoxifying', price: 36, image: 'assets/images/5.jpg', category: 'Scalp Care' }
];

function initCircleCarousel() {
  const ring = document.getElementById('carousel3dRing');
  const stage = document.getElementById('carousel3dStage');
  if (!ring || !stage) return;

  const count = CAROUSEL_PRODUCTS.length;
  const radius = 310; // 3D cylinder orbit radius in px
  const angleStep = 360 / count;

  ring.innerHTML = CAROUSEL_PRODUCTS.map((prod, index) => {
    const angle = index * angleStep;
    return `
      <div class="carousel-3d-card" style="transform: rotateY(${angle}deg) translateZ(${radius}px);" onclick="openQuickView('${prod.id}')">
        <div class="carousel-3d-card-img-wrap">
          <img src="${prod.image}" alt="${prod.name}">
          <span class="badge badge-gold" style="position: absolute; top: 0.85rem; left: 0.85rem; font-size: 0.65rem; z-index: 2; padding: 0.2rem 0.55rem;">${prod.tag}</span>
        </div>
        <div class="carousel-3d-card-body">
          <div>
            <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--muted-gold); font-weight: 700; letter-spacing: 0.05em;">${prod.category}</div>
            <h4 style="font-size: 0.9rem; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; line-height: 1.3; margin: 0.2rem 0 0.5rem 0; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">${prod.name}</h4>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.4rem; border-top: 1px solid var(--border-light);">
            <span style="font-size: 1.15rem; font-family: 'Cormorant Garamond', serif; font-weight: 700; color: var(--forest-green);">$${prod.price}.00</span>
            <button class="btn btn-primary btn-sm" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;" onclick="event.stopPropagation(); addToCart('${prod.id}');">
              + Bag
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Drag interaction handlers
  stage.addEventListener('mousedown', (e) => {
    isCarouselDragging = true;
    carouselStartX = e.clientX;
    stage.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isCarouselDragging = false;
    if (stage) stage.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isCarouselDragging) return;
    const deltaX = e.clientX - carouselStartX;
    carouselTargetRotation += deltaX * 0.35;
    carouselStartX = e.clientX;
    updateRingTransform();
  });

  // Touch handlers for mobile
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isCarouselDragging = true;
      carouselStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isCarouselDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isCarouselDragging || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - carouselStartX;
    carouselTargetRotation += deltaX * 0.35;
    carouselStartX = e.touches[0].clientX;
    updateRingTransform();
  }, { passive: true });

  // Hover detection
  stage.addEventListener('mouseenter', () => {
    isCarouselHovered = true;
  });

  stage.addEventListener('mouseleave', () => {
    isCarouselHovered = false;
  });

  // Start smooth auto-rotation loop
  startCarouselLoop();
}

function updateRingTransform() {
  const ring = document.getElementById('carousel3dRing');
  if (ring) {
    ring.style.transform = `rotateY(${carouselRotation}deg)`;
  }
}

function rotateCircleCarousel(direction) {
  const step = 360 / CAROUSEL_PRODUCTS.length;
  carouselTargetRotation += direction * step;
}

function toggleCarouselAutoPlay() {
  carouselAutoPlay = !carouselAutoPlay;
  const btn = document.getElementById('toggleCarouselSpinBtn');
  if (btn) btn.textContent = carouselAutoPlay ? '⏸' : '▶';
}

function startCarouselLoop() {
  function loop() {
    requestAnimationFrame(loop);
    
    // Auto spin if not hovered and not dragged
    if (carouselAutoPlay && !isCarouselHovered && !isCarouselDragging) {
      carouselTargetRotation -= 0.25; // Gentle 360 turntable drift
    }

    // Smooth lerp
    carouselRotation += (carouselTargetRotation - carouselRotation) * 0.08;
    updateRingTransform();
  }
  loop();
}

// App State
const state = {
  currentPage: 'home', // 'home' | 'shop' | 'quiz' | 'dashboard' | 'subscription' | 'community'
  cart: [],
  favorites: [],
  products: [...PRODUCTS_DATA],
  reviews: [...INITIAL_REVIEWS],
  selectedProductForModal: null,
  activeFilterCategory: 'all',
  activeHairTypeFilter: 'all',
  activeScalpConcernFilter: 'all',
  activeSulfateFreeOnly: false,
  searchQuery: '',
  sortBy: 'popularity',
  
  // Hair Quiz State
  quizStep: 0,
  quizAnswers: {
    hairType: '',
    scalpType: '',
    concerns: [],
    porosity: '',
    complexity: ''
  },
  quizResult: null,

  // User Dashboard State
  userProfile: {
    name: 'Camille Laurent',
    membershipTier: 'Botanical Connoisseur',
    memberSince: 'March 2026',
    hairProfile: {
      type: 'Type 3A Loose Curls',
      porosity: 'Medium Porosity',
      scalp: 'Balanced / Sensitive',
      primaryGoal: 'Curl Definition & Follicle Longevity'
    },
    consistencyScore: 92,
    weeklyRoutine: [
      { day: 'Monday', step: 'Cleansing Wash + Nutrient Conditioner', completed: true },
      { day: 'Tuesday', step: 'Scalp Mist + 4 drops Rosemary Elixir', completed: true },
      { day: 'Wednesday', step: 'Rest & Silk Scarf Wrap', completed: true },
      { day: 'Thursday', step: 'Refreshing Hydration Spritz', completed: true },
      { day: 'Friday', step: 'Scalp Massage & Golden Marula Drops', completed: false },
      { day: 'Saturday', step: 'Phyto-Ceramide Intensive Repair Mask (20m)', completed: false },
      { day: 'Sunday', step: 'Detox Apple Cider Scalp Exfoliant', completed: false }
    ],
    journalEntries: [
      { date: 'Oct 12, 2026', note: 'Noticed significantly less shedding during shower detangling. Curls retain bounce into Day 3 without fuzziness.', mood: '✨ Great' },
      { date: 'Oct 05, 2026', note: 'Switched to cooling rinse after the Silk Peptide Conditioner. High sheen observed in direct sunlight.', mood: '🌿 Calm' },
      { date: 'Sep 27, 2026', note: 'Completed 30 days of Rosemary Scalp Stimulating Elixir. Follicles along temples look noticeably denser.', mood: '⭐ Milestone' }
    ],
    activeSubscription: {
      planName: 'The Complete Treatment',
      deliveryCycle: 'Monthly Delivery',
      nextDelivery: 'November 3, 2026',
      status: 'Active',
      price: '$86 / month'
    }
  }
};

// Initialize State from LocalStorage if present
function loadSavedState() {
  try {
    const savedCart = localStorage.getItem('hairbloom_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);

    const savedFavs = localStorage.getItem('hairbloom_favs');
    if (savedFavs) state.favorites = JSON.parse(savedFavs);

    const savedQuiz = localStorage.getItem('hairbloom_quiz_result');
    if (savedQuiz) {
      state.quizResult = JSON.parse(savedQuiz);
      if (state.quizResult.hairProfile) {
        state.userProfile.hairProfile = state.quizResult.hairProfile;
      }
    }

    const savedJournal = localStorage.getItem('hairbloom_journal');
    if (savedJournal) state.userProfile.journalEntries = JSON.parse(savedJournal);
  } catch (e) {
    console.warn('LocalStorage load error', e);
  }
}

function persistCart() {
  localStorage.setItem('hairbloom_cart', JSON.stringify(state.cart));
  updateCartBadge();
}

function persistQuizResult() {
  localStorage.setItem('hairbloom_quiz_result', JSON.stringify(state.quizResult));
}

// Notifications / Toast
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.75rem;">
      <span style="color:var(--muted-gold); font-size:1.2rem;">✦</span>
      <span>${message}</span>
    </div>
    <button onclick="this.parentElement.remove()" style="color:rgba(255,255,255,0.6); font-size:1.1rem; padding:0 0.5rem;">✕</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Navigation Handler
function navigateTo(pageId, extraParam = null, shouldScroll = true) {
  state.currentPage = pageId;

  // Persist current page to URL Hash and LocalStorage
  if (window.location.hash !== `#${pageId}`) {
    window.location.hash = pageId;
  }
  localStorage.setItem('hairbloom_active_page', pageId);

  // Update active nav class
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });

  // Close mobile nav drawer if open
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('mobile-open');

  // Render Page Content
  renderCurrentPage(pageId, extraParam);

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Listen to browser Back / Forward buttons & manual hash changes
window.addEventListener('hashchange', () => {
  const hashPage = window.location.hash.replace('#', '').trim();
  if (hashPage && hashPage !== state.currentPage) {
    navigateTo(hashPage, null, false);
  }
});

// Render Pages Switcher
function renderCurrentPage(pageId, extraParam) {
  const container = document.getElementById('mainContent');
  if (!container) return;

  switch (pageId) {
    case 'home':
      container.innerHTML = getHomePageHTML();
      setTimeout(() => {
        initCircleCarousel();
      }, 50);
      break;

    case 'shop':
      if (extraParam && extraParam.category) {
        state.activeFilterCategory = extraParam.category;
      }
      container.innerHTML = getShopPageHTML();
      attachShopEventListeners();
      break;
    case 'quiz':
      container.innerHTML = getQuizPageHTML();
      break;
    case 'dashboard':
      container.innerHTML = getDashboardPageHTML();
      break;
    case 'subscription':
      container.innerHTML = getSubscriptionPageHTML();
      break;
    case 'community':
      container.innerHTML = getCommunityPageHTML();
      break;
    default:
      container.innerHTML = getHomePageHTML();
  }
}

// Cart Drawer Operations
function toggleCartDrawer(open = null) {
  const overlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');
  const isOpen = overlay.classList.contains('open');
  const target = open !== null ? open : !isOpen;

  if (target) {
    renderCartDrawerItems();
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity
    });
  }

  persistCart();
  showToast(`Added "${product.name}" to your cart.`);
  toggleCartDrawer(true);
}

function updateCartQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    state.cart[itemIndex].quantity += delta;
    if (state.cart[itemIndex].quantity <= 0) {
      state.cart.splice(itemIndex, 1);
    }
  }
  persistCart();
  renderCartDrawerItems();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  persistCart();
  renderCartDrawerItems();
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('headerCartCount');
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
  const mobileBadge = document.getElementById('mobileDrawerCartCount');
  if (mobileBadge) {
    mobileBadge.textContent = totalCount;
    mobileBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

function renderCartDrawerItems() {
  const listEl = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');

  if (!listEl) return;

  if (state.cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--charcoal-light);">
        <div style="font-size:3rem; margin-bottom:1rem; opacity:0.6;">🌿</div>
        <h4 style="font-size:1.3rem; margin-bottom:0.5rem;">Your Botanical Bag is Empty</h4>
        <p style="font-size:0.9rem; margin-bottom:1.5rem;">Discover scalp treatments, nourishing masks and clean formulas crafted for your hair type.</p>
        <button class="btn btn-primary btn-sm" onclick="toggleCartDrawer(false); navigateTo('shop');">Browse Products</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (shippingEl) shippingEl.textContent = '$0.00';
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  listEl.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div style="display:flex; gap:1rem; padding-bottom:1rem; border-bottom:1px solid var(--border-light); align-items:center;">
        <img src="${item.image}" alt="${item.name}" style="width:72px; height:72px; object-fit:cover; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
        <div style="flex:1;">
          <h5 style="font-size:0.95rem; font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; line-height:1.3; margin-bottom:0.25rem;">${item.name}</h5>
          <div style="font-size:0.85rem; color:var(--muted-gold); font-weight:600; margin-bottom:0.5rem;">$${item.price} each</div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <div style="display:flex; align-items:center; border:1px solid var(--border-light); border-radius:var(--radius-full); padding:0.15rem 0.6rem; background:#fff;">
              <button onclick="updateCartQuantity('${item.id}', -1)" style="padding:0.2rem 0.4rem; font-weight:bold; color:var(--forest-green);">-</button>
              <span style="font-size:0.85rem; font-weight:600; padding:0 0.5rem;">${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.id}', 1)" style="padding:0.2rem 0.4rem; font-weight:bold; color:var(--forest-green);">+</button>
            </div>
            <button onclick="removeCartItem('${item.id}')" style="font-size:0.75rem; color:#b25e5e; margin-left:auto; text-decoration:underline;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const shipping = subtotal > 65 ? 0 : 5.95;
  const grandTotal = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE (Orders > $65)' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  currentModalQty = 1;

  const modalContainer = document.getElementById('quickViewContent');
  const modalOverlay = document.getElementById('quickViewModalOverlay');

  modalContainer.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
      
      <!-- Left Column: Gallery & Badges -->
      <div style="background: radial-gradient(circle at 50% 50%, #ffffff 0%, #FAF8F3 100%); padding: 3rem 2.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; border-right: 1px solid var(--border-light);">
        <div style="position: relative; width: 100%; max-width: 320px;">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 380px; object-fit: cover; border-radius: var(--radius-md); box-shadow: 0 16px 36px rgba(36, 76, 58, 0.12); border: 1px solid var(--border-light);">
          
          <div style="position: absolute; top: 1rem; left: 1rem; display: flex; flex-direction: column; gap: 0.4rem;">
            ${product.isSulfateFree ? `<span class="badge badge-sage" style="font-size: 0.72rem; box-shadow: var(--shadow-sm);">🌿 100% Sulfate-Free</span>` : ''}
            ${product.tag ? `<span class="badge badge-gold" style="font-size: 0.72rem; box-shadow: var(--shadow-sm);">${product.tag}</span>` : ''}
          </div>
        </div>

        <div style="display: flex; gap: 1.5rem; margin-top: 1.5rem; font-size: 0.8rem; color: var(--charcoal-light);">
          <span>🧪 Dermatologist Tested</span>
          <span>🐰 Leaping Bunny</span>
        </div>
      </div>

      <!-- Right Column: Product Intelligence -->
      <div style="padding: 2.8rem 2.5rem; display: flex; flex-direction: column;">
        
        <!-- Category & Rating -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted-gold); font-weight: 700;">${product.category}</span>
          <div style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.85rem; font-weight: 600; color: var(--charcoal-light);">
            <span style="color: var(--muted-gold); font-size: 1rem;">★★★★★</span>
            <span>${product.rating}</span>
            <span style="color: var(--charcoal-light); opacity: 0.7;">(${product.reviewsCount} reviews)</span>
          </div>
        </div>

        <!-- Title & Price -->
        <h2 style="font-size: 2.2rem; line-height: 1.2; margin-bottom: 0.75rem;">${product.name}</h2>
        <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
          <div style="font-size: 1.8rem; color: var(--forest-green); font-weight: 700; font-family: 'Cormorant Garamond', serif;">$${product.price}.00</div>
          <span style="font-size: 0.82rem; color: #2e7d32; background: rgba(46, 125, 50, 0.1); padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-weight: 600;">In Stock • Ships in 24h</span>
        </div>

        <!-- Interactive Tabs -->
        <div class="modal-tabs">
          <button class="modal-tab-btn active" id="tabBtnOverview" onclick="switchModalTab('overview')">Overview</button>
          <button class="modal-tab-btn" id="tabBtnIngredients" onclick="switchModalTab('ingredients')">Botanical Ingredients</button>
          <button class="modal-tab-btn" id="tabBtnUsage" onclick="switchModalTab('usage')">Ritual & Usage</button>
        </div>

        <!-- Tab Content 1: Overview -->
        <div id="tabContentOverview" style="display: block; margin-bottom: 1.5rem;">
          <p style="font-size: 0.92rem; line-height: 1.65; margin-bottom: 1.25rem; color: var(--charcoal-light);">${product.description}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;">
            ${product.benefits.slice(0, 4).map(b => `
              <div style="font-size: 0.82rem; display: flex; align-items: center; gap: 0.4rem; color: var(--forest-dark);">
                <span style="color: var(--muted-gold); font-weight: bold;">✦</span>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab Content 2: Ingredients -->
        <div id="tabContentIngredients" style="display: none; margin-bottom: 1.5rem;">
          <p style="font-size: 0.85rem; color: var(--charcoal-light); margin-bottom: 0.85rem;">100% transparent botanical deck. Clean, biocompatible bio-actives:</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; max-height: 160px; overflow-y: auto;">
            ${product.ingredients.map(ing => `
              <span style="background: var(--cream-card); border: 1px solid var(--border-light); padding: 0.3rem 0.75rem; border-radius: var(--radius-full); font-size: 0.78rem; font-weight: 500; color: var(--forest-dark);">${ing}</span>
            `).join('')}
          </div>
        </div>

        <!-- Tab Content 3: Usage Instructions -->
        <div id="tabContentUsage" style="display: none; margin-bottom: 1.5rem;">
          <div style="background: var(--cream-card); padding: 1.2rem; border-radius: var(--radius-sm); border-left: 3px solid var(--forest-green); font-size: 0.88rem; line-height: 1.6; color: var(--charcoal);">
            <strong>Daily Protocol:</strong> ${product.usage}
          </div>
        </div>

        <!-- Actions: Quantity & Add to Cart -->
        <div style="display: flex; gap: 1rem; align-items: center; margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--border-light);">
          <div style="display: flex; align-items: center; border: 1.5px solid var(--border-light); border-radius: var(--radius-full); padding: 0.35rem 0.85rem; background: #fff;">
            <button onclick="decrementModalQty()" style="padding: 0.2rem 0.5rem; font-weight: bold; color: var(--forest-green); font-size: 1.1rem;">-</button>
            <span id="modalQtyDisplay" style="font-size: 0.95rem; font-weight: 700; padding: 0 0.8rem;">1</span>
            <button onclick="incrementModalQty()" style="padding: 0.2rem 0.5rem; font-weight: bold; color: var(--forest-green); font-size: 1.1rem;">+</button>
          </div>

          <button class="btn btn-primary" style="flex: 1;" onclick="addModalProductToBag('${product.id}')">
            Add to Bag • <span id="modalTotalPrice">$${product.price}.00</span>
          </button>

          <button class="action-btn" onclick="toggleFavorite('${product.id}')" title="Save to Wishlist" style="width: 48px; height: 48px;">
            ${state.favorites.includes(product.id) ? '♥' : '♡'}
          </button>
        </div>

      </div>

    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modalOverlay = document.getElementById('quickViewModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

let currentModalQty = 1;
let currentModalProduct = null;

function switchModalTab(tabKey) {
  const tabs = ['overview', 'ingredients', 'usage'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const content = document.getElementById(`tabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) btn.classList.remove('active');
    if (content) content.style.display = 'none';
  });

  const activeBtn = document.getElementById(`tabBtn${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}`);
  const activeContent = document.getElementById(`tabContent${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}`);
  if (activeBtn) activeBtn.classList.add('active');
  if (activeContent) activeContent.style.display = 'block';
}

function incrementModalQty() {
  currentModalQty++;
  updateModalQtyUI();
}

function decrementModalQty() {
  if (currentModalQty > 1) {
    currentModalQty--;
    updateModalQtyUI();
  }
}

function updateModalQtyUI() {
  const display = document.getElementById('modalQtyDisplay');
  const total = document.getElementById('modalTotalPrice');
  if (display) display.textContent = currentModalQty;
  if (total && currentModalProduct) {
    total.textContent = `$${(currentModalProduct.price * currentModalQty).toFixed(2)}`;
  }
}

function addModalProductToBag(productId) {
  addToCart(productId, currentModalQty);
  closeQuickView();
}

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter(id => id !== productId);
    showToast('Removed from wishlist');
  } else {
    state.favorites.push(productId);
    showToast('Added to wishlist');
  }
  localStorage.setItem('hairbloom_favs', JSON.stringify(state.favorites));
  if (state.currentPage === 'shop') {
    renderShopGrid();
  }
}

