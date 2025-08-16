import { BasePage } from '../pages/BasePage'

// Simple test page
class TestPage extends BasePage {
  constructor() {
    super({
      title: 'Test Page',
      requiresAuth: false
    })
  }

  render(): string {
    return `
      <div class="page-header">
        <h1>🧪 Test Page</h1>
        <p>This is a simple test page to verify the router works</p>
      </div>
      <div class="test-content">
        <p>If you see this, the router is working correctly!</p>
        <p>Current time: ${new Date().toLocaleTimeString()}</p>
      </div>
    `
  }

  setupEventListeners(): void {
    console.log('Test page event listeners setup')
  }
}

export interface Route {
  path: string
  component: string
  title: string
  description: string
  requiresAuth?: boolean
  roles?: string[]
}

export interface RouterConfig {
  routes: Route[]
  defaultRoute: string
  authRequired: boolean
}

export class SimpleRouter {
  private routes: Map<string, Route> = new Map()
  private container: HTMLElement
  private config: RouterConfig

  constructor(container: HTMLElement, config: RouterConfig) {
    console.log('SimpleRouter constructor called')
    this.container = container
    this.config = config
    this.initializeRoutes()
    this.setupEventListeners()
  }

  private initializeRoutes(): void {
    this.config.routes.forEach(route => {
      this.routes.set(route.path, route)
    })
    console.log('Routes initialized:', Array.from(this.routes.keys()))
  }

  private setupEventListeners(): void {
    window.addEventListener('hashchange', () => {
      this.handleRouteChange()
    })
  }

  private handleRouteChange(): void {
    const path = this.getCurrentPath()
    this.loadRoute(path)
  }

  private getCurrentPath(): string {
    return window.location.hash.slice(1) || this.config.defaultRoute
  }

  public navigate(path: string): void {
    window.location.hash = path
    this.loadRoute(path)
  }

  private async loadRoute(path: string): Promise<void> {
    console.log('Loading route:', path)
    const route = this.routes.get(path)
    
    if (!route) {
      console.log('Route not found, redirecting to default:', this.config.defaultRoute)
      this.loadRoute(this.config.defaultRoute)
      return
    }

    await this.renderPage(route)
  }

  private async renderPage(route: Route): Promise<void> {
    try {
      console.log('Rendering page for route:', route)
      
      // For testing, just create a simple test page
      const pageInstance = new TestPage()
      const renderedHTML = pageInstance.render()
      this.container.innerHTML = renderedHTML
      
      pageInstance.setupEventListeners()
      document.title = `${route.title} - SecureChain EvidenceVault`
      
      console.log('Page rendered successfully')
    } catch (error) {
      console.error('Error loading page:', error)
      this.container.innerHTML = this.renderErrorPage()
    }
  }

  private renderErrorPage(): string {
    return `
      <div class="error-page">
        <h1>Page Not Found</h1>
        <p>The requested page could not be loaded.</p>
        <button onclick="window.location.hash = '/'" class="btn-primary">Go Home</button>
      </div>
    `
  }

  public init(): void {
    console.log('SimpleRouter init called')
    const initialPath = this.getCurrentPath()
    console.log('Initial path:', initialPath)
    this.loadRoute(initialPath)
  }
}
