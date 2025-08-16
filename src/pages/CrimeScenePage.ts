import { BasePage } from './BasePage'

export default class CrimeScenePage extends BasePage {
  private isAuthenticated = false
  private currentLocation: { lat: number, lng: number } | null = null
  private sceneId: string = ''
  private authProgress = {
    badgeScan: false,
    biometric: false,
    twoFactor: false
  }

  constructor() {
    super({
      title: 'Crime Scene Management',
      requiresAuth: true,
      roles: ['crime_scene_officer', 'supervisor']
    })
  }

  render(): string {
    return `
      <div class="page-container">
        ${this.renderNavigation()}
        
        <main class="main-content">
          ${this.renderHeader()}
          
          <div class="crime-scene-container">
            <div class="scene-dashboard">
              <div class="auth-section">
                <h3>🔐 Officer Authentication</h3>
                ${this.renderAuthenticationPanel()}
              </div>

              <div class="location-section">
                <h3>📍 Scene Location Verification</h3>
                ${this.renderLocationPanel()}
              </div>

              <div class="scene-setup">
                <h3>⚙️ Scene Setup & Configuration</h3>
                ${this.renderSceneSetupPanel()}
              </div>
            </div>

            <div class="scene-info card">
              <h3>📊 Real-Time Scene Status</h3>
              <div class="status-grid">
                <div class="status-item">
                  <div class="status-dot ${this.isAuthenticated ? 'active' : 'pending'}"></div>
                  <div>
                    <div class="status-label">Authentication</div>
                    <div class="status-value">${this.isAuthenticated ? 'Verified ✓' : 'In Progress'}</div>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-dot ${this.currentLocation ? 'active' : 'pending'}"></div>
                  <div>
                    <div class="status-label">GPS Lock</div>
                    <div class="status-value">${this.currentLocation ? 'Acquired ✓' : 'Acquiring...'}</div>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-dot ${this.sceneId ? 'active' : 'pending'}"></div>
                  <div>
                    <div class="status-label">Scene ID</div>
                    <div class="status-value">${this.sceneId || 'Pending'}</div>
                  </div>
                </div>
                
                <div class="status-item">
                  <div class="status-dot pending"></div>
                  <div>
                    <div class="status-label">Chain of Custody</div>
                    <div class="status-value">Initializing</div>
                  </div>
                </div>
              </div>
              
              <div class="auth-progress mt-3">
                <h4>🔒 Authentication Progress</h4>
                <div class="progress-items">
                  <div class="progress-item ${this.authProgress.badgeScan ? 'completed' : 'pending'}">
                    <span class="progress-icon">${this.authProgress.badgeScan ? '✅' : '⏳'}</span>
                    <span>Badge Verification</span>
                  </div>
                  <div class="progress-item ${this.authProgress.biometric ? 'completed' : 'pending'}">
                    <span class="progress-icon">${this.authProgress.biometric ? '✅' : '⏳'}</span>
                    <span>Biometric Scan</span>
                  </div>
                  <div class="progress-item ${this.authProgress.twoFactor ? 'completed' : 'pending'}">
                    <span class="progress-icon">${this.authProgress.twoFactor ? '✅' : '⏳'}</span>
                    <span>Two-Factor Auth</span>
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

  private renderAuthenticationPanel(): string {
    return `
      <div class="auth-methods">
        <div class="auth-method ${this.authProgress.badgeScan ? 'active' : 'pending'}">
          <div class="method-icon">🏆</div>
          <div class="method-title">Badge Scan</div>
          <div class="method-status">${this.authProgress.badgeScan ? 'Verified ✓' : 'Scan Required'}</div>
          ${!this.authProgress.badgeScan ? '<button class="btn btn-primary btn-sm" onclick="this.simulateBadgeScan()">Scan Badge</button>' : ''}
        </div>
        
        <div class="auth-method ${this.authProgress.biometric ? 'active' : 'pending'}">
          <div class="method-icon">👆</div>
          <div class="method-title">Biometric</div>
          <div class="method-status">${this.authProgress.biometric ? 'Verified ✓' : 'Fingerprint Scan Required'}</div>
          ${!this.authProgress.biometric ? '<button class="btn btn-secondary btn-sm">Scan Fingerprint</button>' : ''}
        </div>
        
        <div class="auth-method ${this.authProgress.twoFactor ? 'active' : 'pending'}">
          <div class="method-icon">🔢</div>
          <div class="method-title">2FA Code</div>
          <div class="method-status">${this.authProgress.twoFactor ? 'Verified ✓' : 'Code Required'}</div>
          ${!this.authProgress.twoFactor ? `
            <div class="form-group mt-1">
              <input type="text" class="form-input" placeholder="Enter 6-digit code" maxlength="6" id="tfa-code">
              <button class="btn btn-primary btn-sm mt-1" onclick="this.verifyTwoFactor()">Verify</button>
            </div>
          ` : ''}
        </div>
      </div>
      
      <div class="officer-info mt-2">
        <h4>👮‍♂️ Officer Information</h4>
        <div class="info-grid">
          <div><strong>Name:</strong> Officer Sarah Smith</div>
          <div><strong>Badge:</strong> #12847</div>
          <div><strong>Department:</strong> Digital Forensics Unit</div>
          <div><strong>Clearance:</strong> Level 3 - Classified</div>
          <div><strong>Jurisdiction:</strong> Metropolitan District</div>
          <div><strong>Shift:</strong> Day Shift (07:00-19:00)</div>
        </div>
      </div>
    `
  }

  private renderLocationPanel(): string {
    return `
      <div class="location-panel">
        <div class="gps-info">
          <div class="coordinates">
            <h4>📍 Current Coordinates</h4>
            <div class="coord-display">
              <div class="coord-item">
                <span class="coord-label">Latitude:</span>
                <span class="coord-value">${this.currentLocation?.lat.toFixed(6) || 'Acquiring GPS signal...'}</span>
              </div>
              <div class="coord-item">
                <span class="coord-label">Longitude:</span>
                <span class="coord-value">${this.currentLocation?.lng.toFixed(6) || 'Acquiring GPS signal...'}</span>
              </div>
            </div>
            <div class="location-actions">
              <button class="btn btn-primary" id="get-location">🔄 Refresh Location</button>
              <button class="btn btn-secondary" id="verify-location">✅ Verify & Lock</button>
            </div>
          </div>

          <div class="location-accuracy">
            <h4>📡 GPS Accuracy</h4>
            <div class="accuracy-display">
              <div class="accuracy-meter">
                <div class="accuracy-bar">
                  <div class="accuracy-fill" style="width: 85%"></div>
                </div>
                <span class="accuracy-text">±2.3 meters (Excellent)</span>
              </div>
              <div class="satellite-info">
                <span>🛰️ Satellites: 12/12</span>
                <span>📶 Signal: Strong</span>
              </div>
            </div>
          </div>
        </div>

        <div class="scene-mapping">
          <h4>🗺️ Scene Mapping & Perimeter</h4>
          <div class="map-placeholder">
            <div class="map-overlay">
              <p>Interactive Crime Scene Map</p>
              <p>📍 Current Location Marked</p>
            </div>
            <div class="map-controls">
              <button class="btn btn-primary">Set Perimeter</button>
              <button class="btn btn-secondary">Mark Evidence</button>
              <button class="btn btn-secondary">Add Notes</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  private renderSceneSetupPanel(): string {
    return `
      <div class="scene-setup-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Scene ID</label>
            <input type="text" class="form-input" value="CS-2025-0816-001" readonly>
          </div>
          <div class="form-group">
            <label class="form-label">Case Number</label>
            <input type="text" class="form-input" placeholder="CASE-2025-08160001" id="case-number">
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Scene Type</label>
            <select class="form-select" id="scene-type">
              <option value="">Select Scene Type</option>
              <option value="burglary">Burglary</option>
              <option value="assault">Assault</option>
              <option value="homicide">Homicide</option>
              <option value="fraud">Fraud</option>
              <option value="cybercrime">Cybercrime</option>
              <option value="drug-related">Drug Related</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Priority Level</label>
            <select class="form-select" id="priority-level">
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Scene Description</label>
          <textarea class="form-textarea" rows="3" placeholder="Detailed description of the crime scene and initial observations..."></textarea>
        </div>
        
        <div class="scene-actions">
          <button class="btn btn-primary">🔒 Initialize Scene</button>
          <button class="btn btn-secondary">📋 View Checklist</button>
          <button class="btn btn-secondary">📞 Request Backup</button>
        </div>
      </div>
    `
  }
}
