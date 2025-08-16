import { BasePage } from './BasePage'

export class StoragePage extends BasePage {
  constructor() {
    super({
      title: 'Blockchain Storage Management',
      requiresAuth: true,
      roles: ['evidence_tech', 'supervisor']
    })
  }

  render(): string {
    return `
      <div class="page-container">
        ${this.renderNavigation()}
        
        <main class="main-content">
          ${this.renderHeader()}
          
          <div class="storage-overview">
            <div class="storage-card">
              <div class="storage-icon">🔗</div>
              <h3>Blockchain Network</h3>
              <div class="metric-value">99.9%</div>
              <div class="metric-label">Uptime</div>
              <div class="status-indicator">
                <div class="status-dot active"></div>
                <span>Online</span>
              </div>
            </div>

            <div class="storage-card">
              <div class="storage-icon">📦</div>
              <h3>IPFS Storage</h3>
              <div class="metric-value">2.4TB</div>
              <div class="metric-label">Evidence Stored</div>
              <div class="status-indicator">
                <div class="status-dot active"></div>
                <span>5/5 Nodes</span>
              </div>
            </div>

            <div class="storage-card">
              <div class="storage-icon">🔐</div>
              <h3>Security</h3>
              <div class="metric-value">256-bit</div>
              <div class="metric-label">AES Encryption</div>
              <div class="status-indicator">
                <div class="status-dot active"></div>
                <span>Secured</span>
              </div>
            </div>

            <div class="storage-card">
              <div class="storage-icon">⚡</div>
              <h3>Smart Contracts</h3>
              <div class="metric-value">47</div>
              <div class="metric-label">Active Contracts</div>
              <div class="status-indicator">
                <div class="status-dot active"></div>
                <span>Executing</span>
              </div>
            </div>
          </div>

          <div class="storage-actions card">
            <h3>📤 Storage Operations</h3>
            <div class="action-grid">
              <div class="action-item">
                <div class="action-icon">📁</div>
                <h4>Upload Evidence</h4>
                <p>Securely upload evidence files to blockchain storage</p>
                <button class="btn btn-primary">Start Upload</button>
              </div>
              
              <div class="action-item">
                <div class="action-icon">🔍</div>
                <h4>Verify Integrity</h4>
                <p>Check file integrity and blockchain confirmation</p>
                <button class="btn btn-secondary">Verify Files</button>
              </div>
              
              <div class="action-item">
                <div class="action-icon">📊</div>
                <h4>Storage Report</h4>
                <p>Generate comprehensive storage analytics report</p>
                <button class="btn btn-secondary">Generate Report</button>
              </div>
            </div>
          </div>

          <div class="recent-activity card">
            <h3>📋 Recent Storage Activity</h3>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">✅</div>
                <div class="activity-details">
                  <div class="activity-title">Evidence file uploaded successfully</div>
                  <div class="activity-meta">EV-2025-0816-001 • 14:32 UTC • 127MB</div>
                </div>
                <div class="activity-status">Confirmed</div>
              </div>
              
              <div class="activity-item">
                <div class="activity-icon">🔄</div>
                <div class="activity-details">
                  <div class="activity-title">Smart contract execution in progress</div>
                  <div class="activity-meta">Contract #47 • 14:28 UTC</div>
                </div>
                <div class="activity-status">Processing</div>
              </div>
              
              <div class="activity-item">
                <div class="activity-icon">🔐</div>
                <div class="activity-details">
                  <div class="activity-title">Encryption keys rotated</div>
                  <div class="activity-meta">Security Update • 13:45 UTC</div>
                </div>
                <div class="activity-status">Complete</div>
              </div>
            </div>
          </div>
        </main>
        
        ${this.renderFooter()}
      </div>
    `
  }
}
