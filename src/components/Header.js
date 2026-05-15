import { cartService } from '../services/cart.js';

export const Header = (activePage = '') => `
  <header class="landing-header">
    <nav class="landing-nav">
      <a href="/" class="logo" data-link>🐔 Eggcellent</a>
      <ul class="nav-links">
        <li><a href="/" class="${activePage === 'home' ? 'active' : ''}" data-link>Home</a></li>
        <li><a href="/#services" data-link>Services</a></li>
        <li><a href="/products" class="${activePage === 'products' ? 'active' : ''}" data-link>Products</a></li>
        <li><a href="/contact" class="${activePage === 'contact' ? 'active' : ''}" data-link>Contact</a></li>
      </ul>
      <div class="auth-btns">
        <a href="/checkout" class="cart-btn" data-link title="View Cart">
          🛒 <span id="cart-count">${cartService.getCount()}</span>
        </a>
        <a href="/login" class="btn btn-outline" data-link>Login</a>
        <a href="/signup" class="btn btn-primary" data-link>Sign Up</a>
      </div>
    </nav>
  </header>
`;

Header.init = () => {
  window.addEventListener('cart-updated', () => {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
      countEl.textContent = cartService.getCount();
    }
  });
};
