/* =====================================================
   Film Finder — Main Application Logic
   ===================================================== */

// ── State ────────────────────────────────────────────
let currentPage = "home";
let previousPage = "home";
let cart = JSON.parse(localStorage.getItem("filmfinder_cart") || "[]");

// ── Init ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedMovies();
  renderPopularItems();
  renderBrowseMovies(MOVIES);
  updateCartBadge();
  setupNavToggle();
});

// ── Navigation ───────────────────────────────────────
function showPage(pageId, data) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));

  // Update nav links
  document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
  const navLink = document.getElementById("nav-" + pageId);
  if (navLink) navLink.classList.add("active");

  // Show target page
  const target = document.getElementById("page-" + pageId);
  if (target) target.classList.add("active");

  previousPage = currentPage;
  currentPage = pageId;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Page-specific setup
  if (pageId === "movie" && data) renderMovieDetail(data);
  if (pageId === "item" && data) renderItemDetail(data);
  if (pageId === "cart") renderCart();
  if (pageId === "browse") renderBrowseMovies(MOVIES);
}

function setupNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ── Home Page ────────────────────────────────────────
function renderFeaturedMovies() {
  const container = document.getElementById("featured-movies");
  container.innerHTML = getFeaturedMovies().map(createMovieCard).join("");
}

function renderPopularItems() {
  const container = document.getElementById("popular-items");
  container.innerHTML = getPopularItems().map(createItemCard).join("");
}

function handleHeroSearch() {
  const query = document.getElementById("hero-search-input").value.trim();
  showPage("browse");
  if (query) {
    document.getElementById("browse-search").value = query;
    filterMovies();
  }
}

// ── Browse Page ──────────────────────────────────────
function renderBrowseMovies(movies) {
  const container = document.getElementById("browse-movies");
  const noResults = document.getElementById("no-results");

  if (movies.length === 0) {
    container.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");
  container.innerHTML = movies.map(createMovieCard).join("");
}

function filterMovies() {
  const query = document.getElementById("browse-search").value.toLowerCase();
  const genre = document.getElementById("genre-filter").value;
  const sort = document.getElementById("sort-filter").value;

  let filtered = MOVIES.filter((m) => {
    const matchesQuery =
      !query ||
      m.title.toLowerCase().includes(query) ||
      m.genre.toLowerCase().includes(query) ||
      m.director.toLowerCase().includes(query) ||
      m.starring.some((s) => s.toLowerCase().includes(query));
    const matchesGenre = !genre || m.genre === genre;
    return matchesQuery && matchesGenre;
  });

  // Sort
  if (sort === "newest") {
    filtered = [...filtered].sort((a, b) => b.year - a.year);
  } else if (sort === "az") {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  renderBrowseMovies(filtered);
}

// ── Movie Detail Page ────────────────────────────────
function renderMovieDetail(movie) {
  const items = getItemsForMovie(movie.id);
  const content = document.getElementById("movie-detail-content");

  content.innerHTML = `
    <div class="movie-detail">
      <div class="movie-detail-header" style="background:${movie.posterColor}">
        <div class="movie-detail-poster">
          <div class="movie-emoji-large">${movie.poster}</div>
        </div>
        <div class="movie-detail-info">
          <span class="movie-genre-tag">${movie.genre}</span>
          <h1 class="movie-detail-title">${movie.title}</h1>
          <div class="movie-meta">
            <span class="movie-year">${movie.year}</span>
            <span class="movie-rating">⭐ ${movie.rating}</span>
          </div>
          <p class="movie-director">Directed by <strong>${movie.director}</strong></p>
          <p class="movie-starring">Starring: ${movie.starring.join(", ")}</p>
          <p class="movie-description">${movie.description}</p>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Shop Items from This Film</h2>
        <p class="items-count">${items.length} item${items.length !== 1 ? "s" : ""} available</p>
        <div class="items-grid">
          ${items.map(createItemCard).join("")}
        </div>
      </div>
    </div>
  `;

  // Back button
  document.getElementById("movie-back-btn").onclick = () => showPage(previousPage);
}

// ── Item Detail Page ─────────────────────────────────
function renderItemDetail(item) {
  const movie = getMovieById(item.movieId);
  const content = document.getElementById("item-detail-content");
  const inStockHtml = item.inStock
    ? `<span class="badge badge-success">In Stock</span>`
    : `<span class="badge badge-danger">Out of Stock</span>`;
  const salePriceHtml = item.originalPrice
    ? `<span class="price-original">${formatPrice(item.originalPrice)}</span>`
    : "";
  const discountHtml =
    item.originalPrice
      ? `<span class="badge badge-sale">${Math.round((1 - item.price / item.originalPrice) * 100)}% OFF</span>`
      : "";

  content.innerHTML = `
    <div class="item-detail">
      <div class="item-detail-top">
        <div class="item-detail-visual" style="background:${item.color}20; border: 2px solid ${item.color}40;">
          <div class="item-emoji-large">${item.emoji}</div>
        </div>
        <div class="item-detail-info">
          <div class="item-breadcrumb">
            <a href="#" onclick="openMovieDetail(${movie.id}); return false;">${movie.title}</a>
            &rsaquo; ${item.name}
          </div>
          <span class="item-type-tag">${item.type}</span>
          ${discountHtml}
          <h1 class="item-detail-name">${item.name}</h1>
          <p class="item-character">As worn by <strong>${item.character}</strong></p>
          <p class="item-scene">Featured in: <em>${item.scene}</em></p>
          <p class="item-detail-desc">${item.description}</p>

          <div class="item-pricing">
            <span class="item-price-large">${formatPrice(item.price)}</span>
            ${salePriceHtml}
            ${inStockHtml}
          </div>

          <div class="item-actions">
            ${
              item.inStock
                ? `<button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>`
                : `<button class="btn btn-disabled" disabled>Out of Stock</button>`
            }
            <button class="btn btn-secondary" onclick="openMovieDetail(${movie.id})">See All ${movie.title} Items</button>
          </div>

          <div class="item-tags">
            ${item.tags.map((t) => `<span class="tag">#${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  // Back button
  document.getElementById("item-back-btn").onclick = () => showPage(previousPage);
}

// ── Cart Page ────────────────────────────────────────
function renderCart() {
  const content = document.getElementById("cart-content");

  if (cart.length === 0) {
    content.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Discover items from your favorite films!</p>
        <button class="btn btn-primary" onclick="showPage('browse')">Browse Films</button>
      </div>
    `;
    return;
  }

  const total = cart.reduce((sum, entry) => {
    const item = getItemById(entry.id);
    return sum + (item ? item.price * entry.qty : 0);
  }, 0);

  content.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items">
        ${cart.map((entry) => {
          const item = getItemById(entry.id);
          if (!item) return "";
          const movie = getMovieById(item.movieId);
          return `
            <div class="cart-item">
              <div class="cart-item-emoji" style="background:${item.color}20">${item.emoji}</div>
              <div class="cart-item-info">
                <p class="cart-item-movie">${movie ? movie.title : ""}</p>
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-character">${item.character}</p>
              </div>
              <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                <span class="qty-value">${entry.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
              </div>
              <div class="cart-item-price">${formatPrice(item.price * entry.qty)}</div>
              <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
            </div>
          `;
        }).join("")}
      </div>
      <div class="cart-summary">
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-row">
          <span>Subtotal (${cart.reduce((s, e) => s + e.qty, 0)} items)</span>
          <span>${formatPrice(total)}</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span class="free-shipping">Free</span>
        </div>
        <div class="summary-total">
          <span>Total</span>
          <span>${formatPrice(total)}</span>
        </div>
        <button class="btn btn-primary btn-full" onclick="checkout()">Proceed to Checkout</button>
        <button class="btn btn-secondary btn-full" onclick="showPage('browse')">Continue Shopping</button>
      </div>
    </div>
  `;
}

// ── Cart Logic ───────────────────────────────────────
function addToCart(itemId) {
  const existing = cart.find((e) => e.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: itemId, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast("Added to cart! 🛒");
}

function removeFromCart(itemId) {
  cart = cart.filter((e) => e.id !== itemId);
  saveCart();
  updateCartBadge();
  renderCart();
}

function changeQty(itemId, delta) {
  const entry = cart.find((e) => e.id === itemId);
  if (!entry) return;
  entry.qty = Math.max(1, entry.qty + delta);
  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem("filmfinder_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const total = cart.reduce((s, e) => s + e.qty, 0);
  badge.textContent = total;
  badge.classList.toggle("hidden", total === 0);
}

function checkout() {
  showToast("Thank you for your order! 🎉");
  cart = [];
  saveCart();
  updateCartBadge();
  setTimeout(() => {
    showPage("home");
  }, 1500);
}

// ── Card Templates ────────────────────────────────────
function createMovieCard(movie) {
  return `
    <div class="movie-card" onclick="openMovieDetail(${movie.id})">
      <div class="movie-poster" style="background:${movie.posterColor}">
        <span class="movie-emoji">${movie.poster}</span>
        <span class="movie-rating-badge">⭐ ${movie.rating}</span>
      </div>
      <div class="movie-card-body">
        <span class="movie-genre">${movie.genre}</span>
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-year-small">${movie.year} · ${movie.director}</p>
        <p class="movie-items-count">${getItemsForMovie(movie.id).length} items to shop</p>
      </div>
    </div>
  `;
}

function createItemCard(item) {
  const movie = getMovieById(item.movieId);
  const saleBadge = item.originalPrice
    ? `<span class="item-sale-badge">${Math.round((1 - item.price / item.originalPrice) * 100)}% OFF</span>`
    : "";
  const outOfStock = !item.inStock
    ? `<div class="out-of-stock-overlay">Out of Stock</div>`
    : "";
  return `
    <div class="item-card ${!item.inStock ? "out-of-stock" : ""}" onclick="openItemDetail(${item.id})">
      <div class="item-visual" style="background:${item.color}15; border-bottom: 3px solid ${item.color}40;">
        <div class="item-emoji">${item.emoji}</div>
        ${saleBadge}
        ${outOfStock}
      </div>
      <div class="item-card-body">
        <span class="item-type">${item.type}</span>
        <h3 class="item-name">${item.name}</h3>
        ${movie ? `<p class="item-movie-name">from <em>${movie.title}</em></p>` : ""}
        <p class="item-character-small">${item.character}</p>
        <div class="item-price-row">
          <span class="item-price">${formatPrice(item.price)}</span>
          ${item.originalPrice ? `<span class="item-original-price">${formatPrice(item.originalPrice)}</span>` : ""}
        </div>
      </div>
    </div>
  `;
}

// ── Navigation Helpers ────────────────────────────────
function openMovieDetail(movieId) {
  const movie = getMovieById(movieId);
  if (movie) showPage("movie", movie);
}

function openItemDetail(itemId) {
  const item = getItemById(itemId);
  if (item) showPage("item", item);
}

// ── Toast ─────────────────────────────────────────────
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2500);
}

// ── Scroll behavior ───────────────────────────────────
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
