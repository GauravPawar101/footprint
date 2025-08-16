// Import all pages statically
import HomePage from '../pages/HomePage'
import CrimeScenePage from '../pages/CrimeScenePage'
import { CapturePage } from '../pages/CapturePage'
import { StoragePage } from '../pages/StoragePage'
import { AccessPage } from '../pages/AccessPage'
import { VerificationPage } from '../pages/VerificationPage'
import { AdminPage } from '../pages/AdminPage'

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

export class Router {
  private routes: Map<string, Route> = new Map()
  private currentRoute: string = ''
  private container: HTMLElement
  private config: RouterConfig
  private pageClasses: { [key: string]: any } = {
    'HomePage': HomePage,
    'CrimeScenePage': CrimeScenePage,
    'CapturePage': CapturePage,
    'StoragePage': StoragePage,
    'AccessPage': AccessPage,
    'VerificationPage': VerificationPage,
    'AdminPage': AdminPage
  }

  constructor(container: HTMLElement, config: RouterConfig) {
    console.log('Router constructor called')
    console.log('Container:', container)
    console.log('Config:', config)
    this.container = container
    this.config = config
    console.log('Initializing routes...')
    this.initializeRoutes()
    console.log('Setting up event listeners...')
    this.setupEventListeners()
    console.log('Router constructor complete')
  }

  private initializeRoutes(): void {
    this.config.routes.forEach(route => {
      this.routes.set(route.path, route)
    })
  }

  private setupEventListeners(): void {
    window.addEventListener('popstate', () => {
      this.handleRouteChange()
    })

    // Handle navigation links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.matches('[data-nav-link]')) {
        e.preventDefault()
        const path = target.getAttribute('data-nav-link')
        if (path) {
          this.navigate(path)
        }
      }
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

    console.log('Found route:', route)

    // Check authentication if required
    if (route.requiresAuth && this.config.authRequired) {
      // TODO: Implement auth check
      console.log('Auth check required for:', path)
    }

    this.currentRoute = path
    await this.renderPage(route)
    this.updateNavigation()
  }

  private async renderPage(route: Route): Promise<void> {
    try {
      // Get page class from static imports
      const PageClass = this.pageClasses[route.component]
      
      console.log('Loading page:', route.component, 'PageClass:', PageClass)
      
      if (PageClass) {
        // Create page instance - pages have their own constructor logic
        const pageInstance = new PageClass()
        const renderedHTML = pageInstance.render()
        this.container.innerHTML = renderedHTML
        
        // Setup event listeners after rendering
        if (typeof pageInstance.setupEventListeners === 'function') {
          pageInstance.setupEventListeners()
        }
        
        // Update page title
        document.title = `${route.title} - SecureChain EvidenceVault`
      } else {
        console.error('PageClass not found for component:', route.component)
        this.container.innerHTML = this.renderErrorPage()
      }
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
        <button data-nav-link="/" class="btn-primary">Go Home</button>
      </div>
    `
  }

  private updateNavigation(): void {
    // Update active navigation states
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      const linkPath = link.getAttribute('data-nav-link')
      if (linkPath === this.currentRoute) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  public getCurrentRoute(): string {
    return this.currentRoute
  }

  public init(): void {
    const initialPath = this.getCurrentPath()
    this.loadRoute(initialPath)
  }
}
