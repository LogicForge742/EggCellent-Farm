import { api } from '../services/api.js';
import { DashboardLayout } from '../components/DashboardLayout.js';

export const Dashboard = () => {
  const content = `
    <header class="dashboard-header">
      <div class="header-left">
        <h1>Farm Management Console</h1>
        <p id="dashboard-welcome">Syncing real-time data...</p>
      </div>
      <div class="header-right">
        <a href="/dashboard/new-entry" class="btn btn-primary btn-sm" data-link>+ New Log Entry</a>
        <button class="btn-icon">🔔</button>
        <div class="avatar">MK</div>
      </div>
    </header>

    <section class="stats-grid" id="stats-container">
      <div class="loading-shimmer"></div>
    </section>

    <section class="dashboard-content">
      <div class="content-left">
        <div class="card chart-card">
          <div class="card-header">
            <h3>Production Trends (Real-time)</h3>
            <select class="chart-filter">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div class="chart-container">
            <div class="mock-chart"></div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="card activity-card">
          <div class="card-header">
            <h3>Recent Farm Logs</h3>
            <button class="btn-text">Refresh</button>
          </div>
          <ul class="activity-list" id="logs-container">
            <!-- Dynamic Logs Load Here -->
          </ul>
        </div>
      </div>
    </section>
  `;
  return DashboardLayout(content, 'overview');
};

Dashboard.init = async () => {
  const statsContainer = document.getElementById('stats-container');
  const logsContainer = document.getElementById('logs-container');
  const welcomeText = document.getElementById('dashboard-welcome');
  const chartContainer = document.querySelector('.mock-chart');

  try {
    const [stats, logs] = await Promise.all([
      api.getFarmStats(),
      api.getSubmissions()
    ]);

    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="stat-card card">
          <div class="stat-icon egg-icon">🥚</div>
          <div class="stat-content">
            <span class="stat-label">Eggs Collected</span>
            <h2 class="stat-value">${stats.eggsToday.toLocaleString()}</h2>
            <span class="stat-change positive">↑ 12% from yesterday</span>
          </div>
        </div>
        <div class="stat-card card">
          <div class="stat-icon poultry-icon">🐔</div>
          <div class="stat-content">
            <span class="stat-label">Poultry Health</span>
            <h2 class="stat-value">${stats.poultryCount.toLocaleString()}</h2>
            <span class="stat-change">Optimal Status</span>
          </div>
        </div>
        <div class="stat-card card">
          <div class="stat-icon revenue-icon">💰</div>
          <div class="stat-content">
            <span class="stat-label">Gross Revenue</span>
            <h2 class="stat-value">$${stats.revenue.toLocaleString()}</h2>
            <span class="stat-change positive">↑ 8% this month</span>
          </div>
        </div>
        <div class="stat-card card">
          <div class="stat-icon feed-icon">🌱</div>
          <div class="stat-content">
            <span class="stat-label">Feed Inventory</span>
            <h2 class="stat-value">${stats.feedLevel}%</h2>
            <div class="progress-bar"><div class="progress" style="width: ${stats.feedLevel}%"></div></div>
          </div>
        </div>
      `;
    }

    if (logsContainer) {
      logsContainer.innerHTML = logs.reverse().map(log => `
        <li class="activity-item">
          <div class="activity-dot dot-${log.status || 'info'}"></div>
          <div class="activity-info">
            <p><strong>${log.title}</strong>: ${log.detail}</p>
            <span>${new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • ${log.type}</span>
          </div>
        </li>
      `).join('');
    }

    if (welcomeText) welcomeText.textContent = `Live Farm Status: All systems operational.`;

    if (chartContainer) {
      chartContainer.innerHTML = `
        <svg viewBox="0 0 400 150" preserveAspectRatio="none" style="width: 100%; height: 250px;">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:var(--primary);stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:var(--primary);stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M0 120 Q 50 100, 100 110 T 200 60 T 300 80 T 400 30" 
                fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" class="chart-path" />
          <path d="M0 120 Q 50 100, 100 110 T 200 60 T 300 80 T 400 30 V 150 H 0 Z" 
                fill="url(#grad)" />
        </svg>
      `;
    }
  } catch (error) {
    console.error('Error syncing farm data:', error);
  }
};
