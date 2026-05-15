export const DashboardLayout = (content, activeItem = 'overview') => `
  <div class="dashboard-layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <a href="/" class="logo" data-link>🐔 Eggcellent</a>
      </div>
      <nav class="sidebar-nav">
        <a href="/dashboard" class="nav-item ${activeItem === 'overview' ? 'active' : ''}" data-link>
          <span class="nav-icon">📊</span> Overview
        </a>
        <a href="/dashboard/inventory" class="nav-item ${activeItem === 'inventory' ? 'active' : ''}" data-link>
          <span class="nav-icon">🥚</span> Inventory
        </a>
        <a href="/dashboard/poultry" class="nav-item ${activeItem === 'poultry' ? 'active' : ''}" data-link>
          <span class="nav-icon">🐥</span> Poultry
        </a>
        <a href="/dashboard/sales" class="nav-item ${activeItem === 'sales' ? 'active' : ''}" data-link>
          <span class="nav-icon">💰</span> Sales
        </a>
        <a href="/dashboard/schedule" class="nav-item ${activeItem === 'schedule' ? 'active' : ''}" data-link>
          <span class="nav-icon">📅</span> Schedule
        </a>
      </nav>
      <div class="sidebar-footer">
        <a href="/login" class="nav-item logout" data-link>
          <span class="nav-icon">🚪</span> Logout
        </a>
      </div>
    </aside>

    <main class="dashboard-main">
      ${content}
    </main>
  </div>
`;
