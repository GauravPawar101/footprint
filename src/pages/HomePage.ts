import { BasePage } from './BasePage'

export default class HomePage extends BasePage {
  private systemMetrics = {
    uptime: '99.9%',
    evidenceCount: '2,847',
    activeUsers: '127',
    blockHeight: '1,234,567'
  }

  constructor() {
    super({
      title: 'SecureChain EvidenceVault',
      requiresAuth: false
    })
  }

  protected renderHeader(): string {
    return `
      <header class="page-header homepage-header">
        <div class="logo-section">
          <img src="/logo.svg" alt="SecureChain EvidenceVault" class="main-logo" width="120" height="120">
          <div class="title-section">
            <h1 class="page-title">${this.title}</h1>
            <p class="page-subtitle">Next-generation forensic evidence management powered by Web3 technology</p>
          </div>
        </div>
        ${this.renderBreadcrumb()}
      </header>
    `
  }

  render(): string {
    return `
      <div class="page-container">
        ${this.renderNavigation()}
        
        <main class="main-content">
          ${this.renderHeader()}
          
          <div class="workflow-overview">
            <div class="workflow-steps">
              ${this.renderWorkflowStep(1, 'Crime Scene Setup', '👮‍♂️', 'Secure perimeter with multi-factor officer authentication and GPS verification', '/crime-scene', ['Multi-Factor Auth', 'GPS Tracking', 'Chain of Custody', 'Biometric Scan'])}
              
              ${this.renderWorkflowStep(2, 'Evidence Capture', '📸', 'Advanced multi-modal evidence collection using cutting-edge technology', '/capture', ['4K Photography', 'LiDAR 3D Scan', 'Audio Recording', 'Document Scan', 'Chemical Analysis'])}
              
              ${this.renderWorkflowStep(3, 'Blockchain Storage', '🔗', 'Immutable storage using enterprise blockchain and distributed systems', '/storage', ['Hyperledger Fabric', 'Smart Contracts', 'IPFS Network', 'AES-256 Encryption', 'SHA-256 Hashing'])}
              
              ${this.renderWorkflowStep(4, 'Access Control', '🔐', 'Military-grade security with role-based access and audit trails', '/access', ['RBAC System', 'Zero-Trust Security', 'Digital Signatures', 'Audit Logging', 'Multi-Level Clearance'])}
              
              ${this.renderWorkflowStep(5, 'Smart Contracts', '⚡', 'Automated evidence lifecycle with programmable compliance protocols', '/contracts', ['Solidity Framework', 'Multi-Signature', 'Event Logging', 'Automated Workflows', 'Compliance Rules'])}
              
              ${this.renderWorkflowStep(6, 'Legal Verification', '⚖️', 'Court-ready verification with tamper-evident cryptographic proofs', '/verification', ['Crypto Verification', 'Legal Compliance', 'Tamper Evidence', 'Court Reports', 'Audit Trails'])}
            </div>

            <div class="system-status card">
              <h3>Real-Time System Status</h3>
              <div class="status-grid">
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <div>
                    <div class="status-label">System Uptime</div>
                    <div class="metric-value">${this.systemMetrics.uptime}</div>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <div>
                    <div class="status-label">Evidence Items</div>
                    <div class="metric-value">${this.systemMetrics.evidenceCount}</div>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <div>
                    <div class="status-label">Active Users</div>
                    <div class="metric-value">${this.systemMetrics.activeUsers}</div>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <div>
                    <div class="status-label">Block Height</div>
                    <div class="metric-value">${this.systemMetrics.blockHeight}</div>
                  </div>
                </div>
              </div>
              
              <div class="system-overview mt-3">
                <h4>🌐 Network Health</h4>
                <div class="status-grid">
                  <div class="status-item">
                    <div class="status-dot active"></div>
                    <span>Blockchain Network: Online</span>
                  </div>
                  <div class="status-item">
                    <div class="status-dot active"></div>
                    <span>IPFS Storage: 5/5 Nodes</span>
                  </div>
                  <div class="status-item">
                    <div class="status-dot active"></div>
                    <span>Smart Contracts: Executing</span>
                  </div>
                  <div class="status-item">
                    <div class="status-dot active"></div>
                    <span>Security Layer: Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        ${this.renderFooter()}
      </div>
    `
  }

  private renderWorkflowStep(
    stepNumber: number, 
    title: string, 
    icon: string, 
    description: string, 
    link: string, 
    features: string[]
  ): string {
    return `
      <div class="workflow-step" data-step="${stepNumber}">
        <div class="step-number">Step ${stepNumber}</div>
        <div class="step-icon">${icon}</div>
        <h3 class="step-title">${title}</h3>
        <p class="step-description">${description}</p>
        <div class="step-features">
          ${features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        <a href="${link}" class="step-action">Access Module</a>
      </div>
    `
  }

  protected renderFooter(): string {
    return `
      <footer class="main-footer">
        <div class="footer-content">
          <div class="footer-section">
            <h4>SecureChain EvidenceVault</h4>
            <p>Enterprise-grade forensic evidence management system powered by blockchain technology.</p>
          </div>
          <div class="footer-section">
            <h4>Technology Stack</h4>
            <ul>
              <li>Hyperledger Fabric</li>
              <li>IPFS Distributed Storage</li>
              <li>AES-256 Encryption</li>
              <li>Smart Contract Automation</li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Security Features</h4>
            <ul>
              <li>Zero-Trust Architecture</li>
              <li>Multi-Factor Authentication</li>
              <li>Cryptographic Verification</li>
              <li>Immutable Audit Trails</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 SecureChain EvidenceVault. All rights reserved.</p>
        </div>
      </footer>
    `
  }
}
