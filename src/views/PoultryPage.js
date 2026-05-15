import { DashboardLayout } from '../components/DashboardLayout.js';

export const PoultryPage = () => {
  const content = `
    <header class="dashboard-header">
      <div class="header-left">
        <h1>Poultry Management</h1>
        <p>Detailed tracking of your flock health and population.</p>
      </div>
    </header>

    <div class="stats-grid">
      <div class="stat-card card">
        <div class="stat-icon">🐣</div>
        <div class="stat-content">
          <span class="stat-label">Chicks</span>
          <h2 class="stat-value">1,200</h2>
        </div>
      </div>
      <div class="stat-card card">
        <div class="stat-icon">🐔</div>
        <div class="stat-content">
          <span class="stat-label">Mature Hens</span>
          <h2 class="stat-value">4,400</h2>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Flock Registry</h3>
      </div>
      <table class="inventory-table">
        <thead>
          <tr>
            <th>Flock ID</th>
            <th>Breed</th>
            <th>Age (Weeks)</th>
            <th>Count</th>
            <th>Health Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#FLK-001</td>
            <td>ISA Brown</td>
            <td>24</td>
            <td>2,000</td>
            <td><span class="badge badge-success">Healthy</span></td>
          </tr>
          <tr>
            <td>#FLK-002</td>
            <td>Rhode Island Red</td>
            <td>12</td>
            <td>1,500</td>
            <td><span class="badge badge-info">Growing</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  return DashboardLayout(content, 'poultry');
};
