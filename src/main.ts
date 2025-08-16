import './style.css'
import { Router } from './router/Router'
import { routerConfig } from './router/routes'

console.log('Main.ts loading...')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="app-container">
    <div id="router-outlet"></div>
  </div>
`

console.log('DOM setup complete')

// Initialize the router-based application
const routerOutlet = document.getElementById('router-outlet')!
console.log('Router outlet:', routerOutlet)
console.log('Router config:', routerConfig)

try {
  const router = new Router(routerOutlet, routerConfig)
  console.log('Router created, initializing...')
  router.init()
  console.log('Router initialized successfully')
} catch (error) {
  console.error('Error initializing router:', error)
  // Fallback content
  routerOutlet.innerHTML = `
    <div class="error-page">
      <h1>⚠️ Application Error</h1>
      <p>There was an error initializing the application.</p>
      <p>Error: ${error}</p>
    </div>
  `
}
