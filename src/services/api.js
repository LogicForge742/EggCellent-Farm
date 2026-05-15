const API_BASE = 'http://localhost:3000';

export const api = {
  getProducts: () => fetch(`${API_BASE}/products`).then(r => r.json()),
  getServices: () => fetch(`${API_BASE}/services`).then(r => r.json()),
  getSubmissions: () => fetch(`${API_BASE}/submissions`).then(r => r.json()),
  getFarmStats: () => fetch(`${API_BASE}/farmStats`).then(r => r.json()),
};
