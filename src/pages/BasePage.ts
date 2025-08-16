export interface PageOptions {
  title: string
  requiresAuth?: boolean
  roles?: string[]
}

export abstract class BasePage {
  protected title: string
  protected requiresAuth: boolean
  protected roles: string[]
  protected container?: HTMLElement

  constructor(options: PageOptions) {
    this.title = options.title
    this.requiresAuth = options.requiresAuth || false
    this.roles = options.roles || []
  }

  abstract render(): string

  public init(container: HTMLElement): void {
    this.container = container
    this.setupEventListeners()
    this.onInit()
  }

  protected onInit(): void {
    // Override in child classes if needed
  }

  protected setupEventListeners(): void {
    // Override in child classes for page-specific events
  }

  protected renderHeader(): string {
    return `
      <header class="page-header">
        <h1 class="page-title">${this.title}</h1>
        ${this.renderBreadcrumb()}
      </header>
    `
  }

  protected renderBreadcrumb(): string {
    return `
      <nav class="breadcrumb">
        <a href="#/" data-nav-link="/">Home</a>
        <span class="separator">></span>
        <span class="current">${this.title}</span>
      </nav>
    `
  }

  protected renderNavigation(): string {
    return `
      <nav class="main-nav">
        <div class="nav-container">
          <div class="nav-brand">
            🔗 SecureChain EvidenceVault
          </div>
          <ul class="nav-links">
            <li><a href="#/" data-nav-link="/" class="nav-link">Workflow</a></li>
            <li><a href="#/crime-scene" data-nav-link="/crime-scene" class="nav-link">Crime Scene</a></li>
            <li><a href="#/capture" data-nav-link="/capture" class="nav-link">Capture</a></li>
            <li><a href="#/storage" data-nav-link="/storage" class="nav-link">Storage</a></li>
            <li><a href="#/access" data-nav-link="/access" class="nav-link">Access</a></li>
            <li><a href="#/verification" data-nav-link="/verification" class="nav-link">Verification</a></li>
            <li><a href="#/admin" data-nav-link="/admin" class="nav-link">Admin</a></li>
          </ul>
          <div class="nav-user">
            <span class="user-info">👮‍♂️ Officer Smith</span>
            <button class="btn btn-secondary btn-sm">Logout</button>
          </div>
        </div>
      </nav>
    `
  }

  protected renderFooter(): string {
    return `
      <footer class="page-footer">
        <div class="footer-content">
          <p>&copy; 2025 SecureChain EvidenceVault - Web3 Forensic Evidence Management</p>
          <div class="footer-links">
            <a href="#/help">Help</a>
            <a href="#/privacy">Privacy</a>
            <a href="#/terms">Terms</a>
          </div>
        </div>
      </footer>
    `
  }

  protected renderLoadingState(): string {
    return `
      <div class="loading-state">
        <div class="loading-spinner"></div>
        <p>Loading ${this.title}...</p>
      </div>
    `
  }

  protected renderErrorState(message: string): string {
    return `
      <div class="error-state">
        <div class="error-icon">⚠️</div>
        <h3>Error</h3>
        <p>${message}</p>
        <button class="btn-retry" onclick="location.reload()">Retry</button>
      </div>
    `
  }

  protected showNotification(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    `
    
    document.body.appendChild(notification)
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 5000)
    
    // Manual close
    notification.querySelector('.notification-close')?.addEventListener('click', () => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    })
  }
}
