let cart = JSON.parse(localStorage.getItem('eggcellent_cart')) || [];

export const cartService = {
  getCart: () => cart,
  
  addToCart: (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    cartService.save();
    window.dispatchEvent(new CustomEvent('cart-updated'));
  },
  
  removeFromCart: (productId) => {
    cart = cart.filter(item => item.id !== productId);
    cartService.save();
    window.dispatchEvent(new CustomEvent('cart-updated'));
  },
  
  clearCart: () => {
    cart = [];
    cartService.save();
    window.dispatchEvent(new CustomEvent('cart-updated'));
  },
  
  save: () => {
    localStorage.setItem('eggcellent_cart', JSON.stringify(cart));
  },
  
  getTotal: () => {
    return cart.reduce((total, item) => {
      const price = item.price || item.pricePerTray;
      return total + (price * item.quantity);
    }, 0);
  },
  
  getCount: () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
};
