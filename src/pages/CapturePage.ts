import { BasePage } from './BasePage'

export class CapturePage extends BasePage {
  private captureQueue: any[] = []
  private captureStats = {
    photos: 0,
    videos: 0,
    audio: 0,
    documents: 0,
    scans3d: 0,
    chemical: 0
  }

  constructor() {
    super({
      title: 'Evidence Capture & Acquisition',
      requiresAuth: true,
      roles: ['crime_scene_officer', 'evidence_tech']
    })
  }

  render(): string {
    return `
      <div class="page-container">
        ${this.renderNavigation()}
        
        <main class="main-content">
          ${this.renderHeader()}
          
          <div class="capture-page">
            <div class="capture-status card mb-3">
              <h3>🔴 Live Evidence Capture Session</h3>
              <div class="session-info">
                <div class="session-details">
                  <div class="detail-item">
                    <span class="label">Session ID:</span>
                    <span class="value">CAP-2025-0816-001</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Officer:</span>
                    <span class="value">Sarah Smith (#12847)</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Started:</span>
                    <span class="value">14:32:17 UTC</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Duration:</span>
                    <span class="value">00:47:23</span>
                  </div>
                </div>
              </div>
              
              <div class="status-grid mt-2">
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <span>Scene Secured & GPS Locked</span>
                </div>
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <span>Equipment Calibrated & Ready</span>
                </div>
                <div class="status-item">
                  <div class="status-dot active"></div>
                  <span>Chain of Custody Initiated</span>
                </div>
                <div class="status-item">
                  <div class="status-dot pending"></div>
                  <span>Blockchain Upload Queue: 3 items</span>
                </div>
              </div>
            </div>

            <div class="capture-grid">
              <section class="capture-methods card">
                <h3>📸 Evidence Capture Methods</h3>
                <div class="method-grid">
                  ${this.renderCaptureMethod('photo', '📷', 'Photography', 'High-res forensic photos', this.captureStats.photos)}
                  ${this.renderCaptureMethod('video', '🎥', 'Video Recording', 'Scene walkthrough capture', this.captureStats.videos)}
                  ${this.renderCaptureMethod('audio', '🎤', 'Audio Recording', 'Witness statements', this.captureStats.audio)}
                  ${this.renderCaptureMethod('document', '📄', 'Document Scan', 'Paper evidence scanning', this.captureStats.documents)}
                  ${this.renderCaptureMethod('3d-scan', '🔬', '3D LiDAR Scan', 'Dimensional reconstruction', this.captureStats.scans3d)}
                  ${this.renderCaptureMethod('chemical', '🧪', 'Chemical Analysis', 'Sample collection data', this.captureStats.chemical)}
                </div>
              </section>

              <section class="capture-queue card">
                <h3>⏳ Active Capture Queue</h3>
                <div class="queue-stats">
                  <div class="stat-item">
                    <div class="stat-value">${this.captureQueue.length}</div>
                    <div class="stat-label">Items in Queue</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">2.4GB</div>
                    <div class="stat-label">Total Size</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">47</div>
                    <div class="stat-label">Captured Today</div>
                  </div>
                </div>
                
                <div class="queue-controls">
                  <button class="btn btn-primary">🔄 Process Queue</button>
                  <button class="btn btn-secondary">📤 Upload to Blockchain</button>
                  <button class="btn btn-secondary">📋 Generate Report</button>
                </div>
                
                <div class="recent-captures">
                  <h4>📋 Recent Captures</h4>
                  <div class="capture-list">
                    ${this.renderRecentCaptures()}
                  </div>
                </div>
              </section>
            </div>
            
            <div class="capture-workflow card mt-3">
              <h3>🔄 Capture Workflow & Guidelines</h3>
              <div class="workflow-steps-capture">
                <div class="workflow-step-capture">
                  <div class="step-number-capture">1</div>
                  <div class="step-content">
                    <h4>Scene Documentation</h4>
                    <p>Take wide-angle photos of the entire scene before any disturbance</p>
                  </div>
                </div>
                <div class="workflow-step-capture">
                  <div class="step-number-capture">2</div>
                  <div class="step-content">
                    <h4>Evidence Identification</h4>
                    <p>Mark and photograph each piece of evidence with measurement scales</p>
                  </div>
                </div>
                <div class="workflow-step-capture">
                  <div class="step-number-capture">3</div>
                  <div class="step-content">
                    <h4>Detailed Capture</h4>
                    <p>Perform 3D scans, close-up photography, and specialized analysis</p>
                  </div>
                </div>
                <div class="workflow-step-capture">
                  <div class="step-number-capture">4</div>
                  <div class="step-content">
                    <h4>Digital Processing</h4>
                    <p>Process captured data and upload to secure blockchain storage</p>
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

  private renderCaptureMethod(type: string, icon: string, title: string, description: string, count: number): string {
    return `
      <div class="capture-method" data-type="${type}">
        <div class="method-icon">${icon}</div>
        <div class="method-title">${title}</div>
        <div class="method-description">${description}</div>
        <div class="method-stats">
          <span class="capture-count">${count} captured</span>
        </div>
        <button class="btn btn-primary btn-sm">Start Capture</button>
      </div>
    `
  }

  private renderRecentCaptures(): string {
    const recentItems = [
      { id: 'CAP001', type: '📷', name: 'Scene Overview Photo', time: '14:45:12', size: '4.2MB' },
      { id: 'CAP002', type: '🔬', name: '3D Scan - Evidence #1', time: '14:42:33', size: '127MB' },
      { id: 'CAP003', type: '📄', name: 'Document - Witness Statement', time: '14:38:15', size: '2.1MB' },
      { id: 'CAP004', type: '🎤', name: 'Audio - Officer Notes', time: '14:35:47', size: '8.7MB' }
    ]

    return recentItems.map(item => `
      <div class="capture-item">
        <div class="item-icon">${item.type}</div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-meta">
            <span class="item-id">${item.id}</span>
            <span class="item-time">${item.time}</span>
            <span class="item-size">${item.size}</span>
          </div>
        </div>
        <div class="item-status">
          <div class="status-dot active"></div>
          <span>Ready</span>
        </div>
      </div>
    `).join('')
  }
}
