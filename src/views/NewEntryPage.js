import { DashboardLayout } from '../components/DashboardLayout.js';

export const NewEntryPage = () => {
  const content = `
    <header class="dashboard-header">
      <div class="header-left">
        <h1>Record New Entry</h1>
        <p>Update your farm logs with real-time data collection.</p>
      </div>
      <div class="header-right">
        <a href="/dashboard" class="btn btn-outline btn-sm" data-link>← Back to Dashboard</a>
      </div>
    </header>

    <div class="dashboard-content">
      <div class="card form-card">
        <form id="new-entry-form" class="auth-form">
          <div class="form-row">
            <div class="form-group">
              <label>Log Type</label>
              <select id="log-type" required>
                <option value="Production">Production (Eggs)</option>
                <option value="Health">Poultry Health</option>
                <option value="Inventory">Inventory/Feed</option>
                <option value="Sales">Sales/Orders</option>
              </select>
            </div>
            <div class="form-group">
              <label>Log Title</label>
              <input type="text" id="log-title" placeholder="e.g. Morning Collection" required>
            </div>
          </div>
          
          <div class="form-group">
            <label>Log Details</label>
            <textarea id="log-detail" placeholder="Enter specific counts, health status, or stock levels..." rows="5" required></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Status Level</label>
              <select id="log-status">
                <option value="success">Success / Optimal</option>
                <option value="info">Information</option>
                <option value="warning">Warning / Attention Required</option>
              </select>
            </div>
            <div class="form-group">
              <label>Time of Record</label>
              <input type="datetime-local" id="log-time" required>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary btn-lg">Submit Record</button>
            <button type="reset" class="btn btn-outline btn-lg">Reset Form</button>
          </div>
        </form>
      </div>
    </div>
  `;
  return DashboardLayout(content, 'overview');
};

NewEntryPage.init = () => {
  const form = document.getElementById('new-entry-form');
  const timeInput = document.getElementById('log-time');
  
  // Set default time to now
  if (timeInput) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    timeInput.value = now.toISOString().slice(0, 16);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Entry successfully recorded to the farm database!');
      window.location.href = '/dashboard';
    });
  }
};
