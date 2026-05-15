import { DashboardLayout } from '../components/DashboardLayout.js';

export const InventoryPage = () => {
  const content = `
    <header class="dashboard-header">
      <div class="header-left">
        <h1>Inventory Management</h1>
        <p>Monitor and manage your farm supplies and stock levels.</p>
      </div>
    </header>

    <div class="stats-grid">
      <div class="stat-card card">
        <div class="stat-icon">📦</div>
        <div class="stat-content">
          <span class="stat-label">Feed Stock</span>
          <h2 class="stat-value">1,240 kg</h2>
        </div>
      </div>
      <div class="stat-card card">
        <div class="stat-icon">💊</div>
        <div class="stat-content">
          <span class="stat-label">Medications</span>
          <h2 class="stat-value">Optimal</h2>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Stock Levels</h3>
      </div>
      <table class="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Current Stock</th>
            <th>Unit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Organic Layers Mash</td>
            <td>Feed</td>
            <td>850</td>
            <td>KG</td>
            <td><span class="badge badge-success">Sufficient</span></td>
          </tr>
          <tr>
            <td>Newcastle Vaccine</td>
            <td>Medical</td>
            <td>45</td>
            <td>Vials</td>
            <td><span class="badge badge-warning">Low Stock</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  return DashboardLayout(content, 'inventory');
};
