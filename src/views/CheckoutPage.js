import { Header } from '../components/Header.js';
import { cartService } from '../services/cart.js';

export const CheckoutPage = () => {
  const items = cartService.getCart();
  const total = cartService.getTotal();

  return `
    ${Header()}
    <main class="checkout-page container">
      <section class="checkout-header">
        <h1>Review Your Cart</h1>
        <p>Complete your order and enjoy farm-fresh quality.</p>
      </section>

      <div class="checkout-grid">
        <div class="cart-items-panel card">
          ${items.length === 0 ? `
            <div class="empty-cart">
              <p>Your cart is empty.</p>
              <a href="/products" class="btn btn-primary" data-link>Browse Products</a>
            </div>
          ` : `
            <div class="cart-list">
              ${items.map(item => `
                <div class="cart-item">
                  <div class="item-img">
                    <img src="${item.image}" alt="${item.name}">
                  </div>
                  <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                  </div>
                  <div class="item-quantity">
                    <button class="qty-btn dec" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn inc" data-id="${item.id}">+</button>
                  </div>
                  <div class="item-price">
                    $${((item.price || item.pricePerTray) * item.quantity).toFixed(2)}
                  </div>
                  <button class="remove-btn" data-id="${item.id}">✕</button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <div class="order-summary-panel card">
          <h3>Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>$${total.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Delivery</span>
            <span class="text-success">Free</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
          </div>
          <button class="btn btn-primary btn-block btn-lg checkout-submit" ${items.length === 0 ? 'disabled' : ''}>
            Continue to Payment
          </button>
        </div>
      </div>
    </main>
  `;
};

CheckoutPage.init = () => {
  const container = document.querySelector('.checkout-page');
  if (!container) return;

  // Handle quantity changes and removal
  container.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-id');
    if (!id) return;

    if (e.target.classList.contains('inc')) {
      const item = cartService.getCart().find(i => i.id === id);
      cartService.addToCart(item);
      window.location.reload(); // Simple re-render
    } else if (e.target.classList.contains('dec')) {
      const item = cartService.getCart().find(i => i.id === id);
      if (item.quantity > 1) {
        item.quantity -= 1;
        cartService.save();
        window.dispatchEvent(new CustomEvent('cart-updated'));
        window.location.reload();
      }
    } else if (e.target.classList.contains('remove-btn')) {
      cartService.removeFromCart(id);
      window.location.reload();
    } else if (e.target.classList.contains('checkout-submit')) {
      alert('Redirecting to secure payment gateway...');
      cartService.clearCart();
      window.location.href = '/';
    }
  });
};
