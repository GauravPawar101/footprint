import { BasePage } from './BasePage'

export class AdminPage extends BasePage {
  constructor() {
    super({
      title: 'System Administration',
      requiresAuth: true,
      roles: ['admin', 'system_admin']
    })
    console.log('AdminPage constructor called')
  }

  render(): string {
    console.log('AdminPage render() called')
    return `
      ${this.renderNavigation()}
      <div class="page-container">
        <div class="page-header">
          <h1>System Administration</h1>
          <p>User management and system configuration</p>
        </div>

        <!-- Admin Overview Cards -->
        <div class="overview-cards">
          <div class="overview-card">
            <h3>👥 Active Users</h3>
            <div class="card-value">47</div>
            <div class="card-label">Currently online</div>
          </div>
          <div class="overview-card">
            <h3>🔧 System Health</h3>
            <div class="card-value">99.2%</div>
            <div class="card-label">Uptime</div>
          </div>
          <div class="overview-card">
            <h3>📊 Storage Used</h3>
            <div class="card-value">2.1TB</div>
            <div class="card-label">of 5TB total</div>
          </div>
          <div class="overview-card">
            <h3>🔐 Security Events</h3>
            <div class="card-value">3</div>
            <div class="card-label">Alerts today</div>
          </div>
        </div>

        <!-- Admin Actions Grid -->
        <div class="action-grid">
          <div class="action-section">
            <h3>👥 User Management</h3>
            <div class="action-buttons">
              <button class="action-button">Manage Users</button>
              <button class="action-button">Role Assignments</button>
              <button class="action-button">Access Permissions</button>
              <button class="action-button">User Activity</button>
            </div>
          </div>

          <div class="action-section">
            <h3>⚙️ System Configuration</h3>
            <div class="action-buttons">
              <button class="action-button">Server Settings</button>
              <button class="action-button">Database Config</button>
              <button class="action-button">Backup Settings</button>
              <button class="action-button">Network Config</button>
            </div>
          </div>

          <div class="action-section">
            <h3>🔒 Security Management</h3>
            <div class="action-buttons">
              <button class="action-button">Security Policies</button>
              <button class="action-button">Audit Logs</button>
              <button class="action-button">Access Controls</button>
              <button class="action-button">Threat Monitor</button>
            </div>
          </div>

          <div class="action-section">
            <h3>📈 System Monitoring</h3>
            <div class="action-buttons">
              <button class="action-button">Performance Dashboard</button>
              <button class="action-button">Resource Usage</button>
              <button class="action-button">Error Reports</button>
              <button class="action-button">Health Checks</button>
            </div>
          </div>
        </div>

        <!-- Recent Admin Activity -->
        <div class="recent-activity">
          <h3>Recent Administrative Activity</h3>
          <ul class="activity-list">
            <li class="activity-item">
              <div class="activity-time">2024-01-20 16:15</div>
              <div class="activity-description">User role updated: J. Wilson → Senior Analyst</div>
              <div class="activity-details">Permission level increased • Access granted to Level 3 evidence</div>
            </li>
            <li class="activity-item">
              <div class="activity-time">2024-01-20 15:30</div>
              <div class="activity-description">System backup completed successfully</div>
              <div class="activity-details">Full database backup • 847 GB archived • Verification passed</div>
            </li>
            <li class="activity-item">
              <div class="activity-time">2024-01-20 14:45</div>
              <div class="activity-description">Security policy updated</div>
              <div class="activity-details">Password requirements strengthened • 2FA enforced for admin roles</div>
            </li>
            <li class="activity-item">
              <div class="activity-time">2024-01-20 13:20</div>
              <div class="activity-description">New user account created: M. Rodriguez</div>
              <div class="activity-details">Role: Lab Technician • Department: Forensics • Access Level: 2</div>
            </li>
            <li class="activity-item">
              <div class="activity-time">2024-01-20 11:10</div>
              <div class="activity-description">Server maintenance completed</div>
              <div class="activity-details">Security updates applied • 99.9% uptime maintained • No service interruption</div>
            </li>
          </ul>
        </div>
      </div>
    `
  }

  setupEventListeners(): void {
    const actionButtons = document.querySelectorAll('.action-button')
    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const buttonText = (e.target as HTMLElement).textContent
        this.handleAdminAction(buttonText || '')
      })
    })
  }

  private handleAdminAction(action: string): void {
    console.log(`Admin action: ${action}`)
    // Simulate action feedback
    const button = event?.target as HTMLElement
    if (button) {
      button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      button.textContent = '✓ ' + action
      
      setTimeout(() => {
        button.style.background = 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)'
        button.textContent = action
      }, 2000)
    }
  }
}
