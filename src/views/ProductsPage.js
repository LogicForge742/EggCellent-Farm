import { api } from '../services/api.js';
import { Header } from '../components/Header.js';

export const ProductsPage = () => `
  ${Header('products')}

  <main class="products-page container">
    <section class="products-hero">
      <h1>Our Premium Products</h1>
      <p>Farm-fresh quality, delivered directly from our sustainable farm to your table.</p>
    </section>

    <div class="products-grid" id="products-container">
      <div class="loading-state">Loading our fresh products...</div>
    </div>
  </main>

  <footer class="main-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo logo-white" data-link>🐔 Eggcellent</a>
        <p>Providing premium poultry and farm-fresh products since 2015. Committed to sustainable farming and ethical standards.</p>
        <div class="social-links">
          <a href="#" class="social-icon">f</a>
          <a href="#" class="social-icon">t</a>
          <a href="#" class="social-icon">i</a>
          <a href="#" class="social-icon">l</a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/" data-link>Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="/products" data-link>Our Products</a></li>
          <li><a href="#services">Farm Services</a></li>
          <li><a href="/dashboard" data-link>Farmer Dashboard</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li>📍 456 Riverside Drive, Kapkwen, Bomet, Kenya</li>
          <li>📞 +254 713 156 139</li>
          <li>✉️ info@eggcellent.com</li>
          <li>🕒 Mon - Sat: 7am - 6pm</li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to get updates on fresh batches and seasonal offers.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your email address">
          <button type="submit" class="btn btn-primary">Join</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 Eggcellent Poultry Systems. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </div>
  </footer>
`;

import { cartService } from '../services/cart.js';

ProductsPage.init = async () => {
  const container = document.getElementById('products-container');
  if (!container) return;

  try {
    const products = await api.getProducts();
    container.innerHTML = products.map(product => `
      <div class="product-card card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-price">
            ${product.price ? `$${product.price.toFixed(2)}` : `$${product.pricePerTray.toFixed(2)} per tray`}
          </div>
          <button class="btn btn-primary btn-sm btn-block add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');

    // Attach click listeners
    container.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const product = products.find(p => p.id === productId);
        if (product) {
          cartService.addToCart(product);
          // Optional: Visual feedback
          const originalText = button.textContent;
          button.textContent = 'Added! ✓';
          button.classList.add('btn-success');
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('btn-success');
          }, 1500);
        }
      });
    });
  } catch (error) {
    container.innerHTML = '<div class="error-state">Error loading products. Please try again later.</div>';
    console.error(error);
  }
};
