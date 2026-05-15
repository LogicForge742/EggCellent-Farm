import { LandingPage } from './views/LandingPage.js';
import { LoginPage } from './views/LoginPage.js';
import { SignupPage } from './views/SignupPage.js';
import { Dashboard } from './views/Dashboard.js';
import { ProductsPage } from './views/ProductsPage.js';
import { ContactPage } from './views/ContactPage.js';
import { CheckoutPage } from './views/CheckoutPage.js';
import { NewEntryPage } from './views/NewEntryPage.js';
import { InventoryPage } from './views/InventoryPage.js';
import { PoultryPage } from './views/PoultryPage.js';

const routes = {
  '/': LandingPage,
  '/login': LoginPage,
  '/signup': SignupPage,
  '/dashboard': Dashboard,
  '/dashboard/new-entry': NewEntryPage,
  '/dashboard/inventory': InventoryPage,
  '/dashboard/poultry': PoultryPage,
  '/products': ProductsPage,
  '/contact': ContactPage,
  '/checkout': CheckoutPage,
};

function navigate(path) {
  window.history.pushState({}, '', path);
  render();
}

import { Header } from './components/Header.js';

function render() {
  const path = window.location.pathname;
  const View = routes[path] || LandingPage;
  const app = document.getElementById('app');
  app.innerHTML = View();
  
  // Initialize Global Components
  Header.init();
  
  // Call init function if it exists on the route component
  if (View.init) {
    View.init();
  }
  
  // Re-attach event listeners
  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(e.target.getAttribute('href'));
    });
  });
}

window.addEventListener('popstate', render);
window.addEventListener('DOMContentLoaded', render);

// Export navigate for use in components
export { navigate };
