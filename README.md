# SecureChain EvidenceVault - Interactive Workflow Diagram

A professional, modern infographic-style workflow diagram for a Web3-powered forensic evidence management system built with Vite and TypeScript.

## 🌐 Repository

- **GitHub**: [https://github.com/GauravPawar101/footprint](https://github.com/GauravPawar101/footprint)
- **Live Demo**: Access at `http://localhost:5173` after setup

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
│   ├── favicon.svg
│   ├── logo.svg
│   └── vite.svg
├── src/
│   ├── pages/              # Page components
│   │   ├── AccessPage-simple.ts
│   │   ├── AccessPage.ts
│   │   ├── AdminPage-simple.ts
│   │   ├── AdminPage.ts
│   │   ├── BasePage.ts
│   │   ├── CapturePage-new.ts
│   │   ├── CapturePage.ts
│   │   ├── CrimeScenePage-new.ts
│   │   ├── CrimeScenePage.ts
│   │   ├── HomePage-new.ts
│   │   ├── HomePage.ts
│   │   ├── StoragePage-simple.ts
│   │   ├── StoragePage.ts
│   │   ├── VerificationPage-simple.ts
│   │   └── VerificationPage.ts
│   ├── router/             # Routing system
│   │   ├── Router.ts
│   │   ├── routes.ts
│   │   └── SimpleRouter.ts
│   ├── main.ts             # Application entry point
│   ├── style.css           # Modern CSS with animations
│   ├── style-optimized.css # Optimized styles
│   └── vite-env.d.ts       # Vite type definitions
├── index.html              # Main HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
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
- **Navigate**: Use routing system to move between different pages
- **Pages**: Access different workflow stages through the page system
- **Interactive**: Each page provides specific workflow functionality

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

### Adding New Pages

- **New Pages**: Add to `src/pages/`
- **Routing**: Update `src/router/routes.ts`
- **Styles**: Add to `src/style.css` using CSS custom properties

## 🛠 Technology Stack

- **Frontend**: Vite + TypeScript
- **Styling**: Modern CSS with custom properties
- **Architecture**: Page-based TypeScript classes
- **Routing**: Custom TypeScript router system
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

- [ ] Enhanced page transitions and animations
- [ ] Theme switcher (light/dark mode)
- [ ] Integration with real blockchain networks
- [ ] Advanced evidence management features
- [ ] Mobile responsive design improvements
- [ ] Export to PDF functionality
- [ ] Interactive demo mode
- [ ] Multi-language support
- [ ] Custom page templates

## 🚀 Deployment

### Prerequisites

- Node.js 18+ and npm
- Git

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/GauravPawar101/footprint.git
cd footprint

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Repository Structure

```
Frontend/
├── src/
│   ├── pages/              # Page components for workflow stages
│   │   ├── HomePage.ts     # Landing page
│   │   ├── CrimeScenePage.ts # Crime scene management
│   │   ├── CapturePage.ts  # Evidence capture
│   │   ├── StoragePage.ts  # Evidence storage
│   │   ├── AccessPage.ts   # Role-based access
│   │   ├── VerificationPage.ts # Evidence verification
│   │   └── AdminPage.ts    # Admin functionality
│   ├── router/             # Routing system
│   │   ├── Router.ts       # Main router
│   │   ├── SimpleRouter.ts # Simplified routing
│   │   └── routes.ts       # Route definitions
│   ├── main.ts             # Entry point
│   ├── style.css           # Styles
│   └── style-optimized.css # Optimized styles
├── public/                 # Static assets
├── package.json            # Dependencies
└── README.md              # This file
```

---

**SecureChain EvidenceVault** - Securing digital evidence with blockchain technology
