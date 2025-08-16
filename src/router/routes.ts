import type { RouterConfig } from './Router'

export const routerConfig: RouterConfig = {
  authRequired: true,
  defaultRoute: '/',
  routes: [
    {
      path: '/',
      component: 'HomePage',
      title: 'Workflow Overview',
      description: 'Complete SecureChain EvidenceVault workflow visualization'
    },
    {
      path: '/crime-scene',
      component: 'CrimeScenePage',
      title: 'Crime Scene Management',
      description: 'Officer authentication and scene setup',
      requiresAuth: true,
      roles: ['crime_scene_officer', 'supervisor']
    },
    {
      path: '/capture',
      component: 'CapturePage', 
      title: 'Evidence Capture',
      description: 'Evidence digitization and hash generation',
      requiresAuth: true,
      roles: ['crime_scene_officer', 'technician']
    },
    {
      path: '/storage',
      component: 'StoragePage',
      title: 'Blockchain Storage',
      description: 'DApp interface for blockchain and IPFS storage',
      requiresAuth: true,
      roles: ['technician', 'data_manager']
    },
    {
      path: '/access',
      component: 'AccessPage',
      title: 'Evidence Access',
      description: 'Role-based evidence viewing and analysis',
      requiresAuth: true,
      roles: ['analyst', 'lab_technician', 'prosecutor']
    },
    {
      path: '/verification',
      component: 'VerificationPage',
      title: 'Verification & Archival',
      description: 'Court verification and permanent storage',
      requiresAuth: true,
      roles: ['legal_officer', 'archivist', 'prosecutor']
    },
    {
      path: '/admin',
      component: 'AdminPage',
      title: 'System Administration',
      description: 'User management and system configuration',
      requiresAuth: true,
      roles: ['admin', 'system_admin']
    }
  ]
}
