# Thinkify Labs - Enhanced Landing Page

A modern, responsive landing page for Thinkify Labs built with Next.js 15, featuring glassmorphism design, advanced animations, and comprehensive user experience enhancements.

## 🚀 Features

### ✨ **Enhanced Navbar**
- **Floating Glassmorphism Design**: Beautiful rounded navbar with advanced backdrop blur and saturation effects
- **Active Section Highlighting**: Real-time visual indication of current section using Intersection Observer
- **Smart Responsive Behavior**: Enhanced glassmorphism effects that intensify on scroll
- **Progress Indicator**: Bottom border shows scroll progress

### 🎯 **Fixed Navigation**
- **Corrected CTA Links**: "What We Do" button now properly links to the companies section
- **Smooth Scrolling**: Enhanced with accessibility focus management
- **Section IDs**: All navigation links properly mapped to existing sections

### ⌨️ **Keyboard Shortcuts**
- `Alt + M`: Toggle mobile menu
- `Alt + C`: Quick CTA action  
- `Alt + H`: Go to top
- `Alt + 1-5`: Quick section navigation
- `Esc`: Close mobile menu

### 🧭 **Navigation Enhancements**
- **Breadcrumb Component**: Shows current section with smooth animations (desktop only)
- **Floating Contact Widget**: 4 contact options (Email, Call, WhatsApp, Copy Info)
- **Enhanced Tooltips**: Informative hover states throughout
- **Copy Contact Info**: One-click copy of all contact details

### 🎨 **Design & Animations**
- **Framer Motion**: Advanced animations and micro-interactions
- **Glassmorphism**: Modern UI aesthetic with proper backdrop filters
- **Loading Screen**: Professional branded loading animation
- **Custom Scrollbar**: Styled scrollbar for webkit browsers

### ⚡ **Performance Optimizations**
- **Throttled Scroll Events**: 60fps smooth performance
- **Intersection Observer**: Efficient section tracking
- **Passive Event Listeners**: Better scroll performance
- **Debounced Functions**: Optimized utility functions

### ♿ **Accessibility Improvements**
- **Focus Management**: Proper focus handling for navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **ARIA Labels**: Better screen reader support
- **Reduced Motion**: Respects user motion preferences
- **Custom Focus Styles**: Clear focus indicators

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Spline** - 3D graphics and animations
- **Shadcn/ui** - High-quality React components

## 📱 Contact Integration

- **Email Templates**: Pre-filled professional email templates with source tracking
- **Phone Integration**: Direct call functionality (`tel:` links)
- **WhatsApp Integration**: Pre-filled WhatsApp messages
- **Contact Information**: 
  - Email: kulkarni.karthik@thinkify.io
  - Phone: +91 99024-17369
  - WhatsApp: Available with quick launch

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thinkify-labs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with glassmorphism
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page with all components
├── components/
│   ├── features/          # Feature-specific components
│   │   └── SplineScene.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx     # Enhanced floating navbar
│   │   └── Footer.tsx     # Footer with contact integration
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section with fixed CTA
│   │   ├── HowItWorks.tsx
│   │   ├── ForCompanies.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   └── ui/                # Reusable UI components
│       ├── breadcrumb.tsx # Navigation breadcrumb
│       ├── floating-contact.tsx # Contact widget
│       ├── loading-screen.tsx
│       └── ...other UI components
└── lib/
    └── utils.ts           # Utility functions with performance optimizations
```

## 🎨 Design Features

### Glassmorphism Navbar
- Floating design with rounded corners
- Advanced backdrop blur effects
- Gradient border glow
- Dynamic opacity based on scroll position

### Contact Widget
- 4 contact methods in one widget
- Tooltips with contact information
- Copy-to-clipboard functionality
- Smooth expand/collapse animations

### Performance
- Intersection Observer for section tracking
- Throttled scroll events (60fps)
- Passive event listeners
- Optimized animations with Framer Motion

## 🔧 Quality of Life Features

- **Keyboard Shortcuts**: Full keyboard navigation support
- **Smart Scrolling**: Focus management for accessibility
- **Copy Functionality**: Easy contact info sharing
- **Loading States**: Professional loading animations
- **Error Handling**: Robust error boundaries
- **Mobile Optimized**: Enhanced mobile experience

## 📞 Contact Information

- **Email**: kulkarni.karthik@thinkify.io
- **Phone**: +91 99024-17369
- **WhatsApp**: [Chat with us](https://wa.me/919902417369)

## 🚀 Deployment

This project is optimized for deployment on Vercel, but can be deployed on any platform that supports Next.js.

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- Build the project: `npm run build`
- Deploy the `.next` folder and `public` assets

## 📝 Recent Updates

- ✅ Fixed "What We Do" CTA to link to correct section
- ✅ Enhanced navbar with floating glassmorphism design
- ✅ Added comprehensive keyboard shortcuts
- ✅ Implemented active section highlighting
- ✅ Added breadcrumb navigation
- ✅ Enhanced floating contact widget with copy functionality
- ✅ Performance optimizations with throttling and Intersection Observer
- ✅ Improved accessibility and focus management
- ✅ Added custom scrollbar and enhanced styling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary to Thinkify Labs.

---

**Thinkify Labs** - Engineering Excellence for Ambitious Startups
