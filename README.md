# SecureChain EvidenceVault - Interactive Workflow Diagram

A professional, modern infographic-style workflow diagram for a Web3-powered forensic evidence management system built with Vite and TypeScript.

## 🚀 Features

### Design & Visual Elements

- **Futuristic Web3-inspired UI** with gradient colors (blue, purple, cyber-teal)
- **Dark theme** with neon highlights for high-tech forensic look
- **Minimalist icons** and professional typography
- **Animated flow arrows** with glowing effects
- **Responsive design** that works on all devices

### Interactive Features

- **Keyboard Navigation**: Arrow keys, j/k, Home/End for navigation
- **Progress Indicator**: Real-time step tracking
- **Animated Data Flow**: Particles flowing through workflow arrows
- **Hover Effects**: Interactive tooltips and smooth animations
- **Modal Help System**: Built-in navigation guide
- **Export Functionality**: Print-ready styling

### Technical Implementation

- **Vite + TypeScript**: Modern build tooling with type safety
- **Modular Architecture**: Clean separation of concerns
- **CSS Custom Properties**: Easy theming and customization
- **Smooth Animations**: GPU-accelerated effects
- **Accessibility**: Keyboard navigation and reduced motion support

## 🔧 Project Structure

```
Frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # TypeScript classes
│   │   ├── EvidenceVaultApp.ts       # Main application class
│   │   ├── WorkflowRenderer.ts       # Renders workflow steps
│   │   ├── InteractionManager.ts     # Handles user interactions
│   │   └── AnimationEngine.ts        # Manages animations
│   ├── types/              # TypeScript type definitions
│   │   └── WorkflowTypes.ts          # Interface definitions
│   ├── main.ts             # Application entry point
│   └── style.css           # Modern CSS with animations
├── index.html              # Main HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🎯 Workflow Steps

1. **Crime Scene Officer** - Initial evidence collection with GPS verification
2. **3D Scan & Capture App** - Digital twin generation with cryptographic hashing
3. **Evidence DApp** - Dual storage: blockchain (hash/metadata) + IPFS (encrypted files)
4. **Role-Based Access** - Secure interfaces for labs, analysts, and prosecutors
5. **Smart Contracts** - Automated evidence lifecycle management
6. **Courtroom & Archival** - Legal verification and permanent storage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Usage Instructions

#### Navigation

- **View**: Open http://localhost:5173 in your browser
- **Navigate**: Use arrow keys (↑/↓) or j/k keys to move between steps
- **Highlight**: Press Enter or Space to highlight current step
- **Jump**: Use Home/End keys to go to first/last step
- **Help**: Click the ❓ button for navigation guide

#### Presentation Mode

1. Open in fullscreen (F11)
2. Use keyboard navigation for smooth step transitions
3. Click "📱 Export" to print or save
4. Hover over elements for interactive tooltips

## 🎨 Customization

### Colors

Modify CSS custom properties in `src/style.css`:

```css
:root {
  --primary-blue: #00d4ff;
  --primary-purple: #8b5cf6;
  --primary-green: #06ffa5;
}
```

### Workflow Content

Update step data in `src/components/EvidenceVaultApp.ts`:

```typescript
private workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Your Step Title',
    description: 'Step description...',
    icon: '🔗',
    technologies: ['Tech1', 'Tech2']
  }
]
```

### Adding New Features

- **New Components**: Add to `src/components/`
- **Types**: Define in `src/types/WorkflowTypes.ts`
- **Styles**: Add to `src/style.css` using CSS custom properties

## 🛠 Technology Stack

- **Frontend**: Vite + TypeScript
- **Styling**: Modern CSS with custom properties
- **Animations**: CSS keyframes and transforms
- **Architecture**: Object-oriented TypeScript classes
- **Build Tool**: Vite for fast development and optimized builds

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔧 Performance

- **Fast Development**: Vite's instant HMR
- **Optimized Build**: Tree-shaking and code splitting
- **Efficient Animations**: GPU-accelerated CSS transforms
- **Minimal Bundle**: No external dependencies for UI

## 📦 Deployment

### Static Hosting

```bash
npm run build
# Deploy the 'dist' folder to any static hosting service
```

### Recommended Platforms

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is designed for educational and presentation purposes. Feel free to modify and adapt for your specific use case.

---

**Built with ❤️ for Web3 forensics education and professional presentations**

### Development Notes

- Uses ES modules and modern JavaScript features
- TypeScript provides compile-time type checking
- CSS Grid and Flexbox for responsive layouts
- Custom CSS animations for smooth user experience
- Print-friendly styles for presentations
- Accessibility features including keyboard navigation

### Future Enhancements

- [ ] Add more animation presets
- [ ] Theme switcher (light/dark mode)
- [ ] Export to PDF functionality
- [ ] Interactive demo mode
- [ ] Multi-language support
- [ ] Custom step templates
