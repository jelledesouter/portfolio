# Jelle De Souter - Portfolio Website

A modern, bilingual portfolio website for a Network & System Administration student, featuring dark mode, smooth animations, and a clean, tech-inspired design.

## 🚀 Features

### Core Features
- **Fully Responsive** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Bilingual** - Switch between English and Dutch (EN/NL)
- **Performance Optimized** - Pure vanilla JavaScript, no heavy frameworks
- **Smooth Animations** - Subtle, professional scroll animations
- **Modern Design** - Tech-inspired with gradients and glassmorphism effects

### Sections
1. **Hero Section** - Eye-catching introduction with animated code window
2. **About Section** - Professional background and experience
3. **Skills Section** - Technical expertise with animated progress bars
4. **Projects Section** - Ready for portfolio items (currently placeholder)
5. **Contact Section** - Functional contact form with email integration

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles (CSS variables, dark mode, responsive)
├── js/
│   └── script.js      # All JavaScript (theme, language, animations)
└── README.md          # This file
```

## 🎨 Design System

### Colors
- **Primary Accent**: `#0066ff` (Tech Blue)
- **Secondary Accent**: `#00d4aa` (Cyan)
- **Tertiary Accent**: `#7c3aed` (Purple)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (for code elements)

### Dark Mode
Automatic dark mode with CSS variables, controlled by `data-theme` attribute on `<html>` element.

## 🛠️ Setup & Installation

### Basic Setup
1. Clone or download the repository
2. No build process required - pure HTML/CSS/JS
3. Open `index.html` in a browser

### For Local Development
```bash
# Option 1: Use Python's built-in server
python -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server

# Then open: http://localhost:8000
```

### For Deployment

#### Netlify (Recommended for contact form)
1. Connect your Git repository to Netlify
2. No build command needed
3. Publish directory: `/`
4. The contact form uses `mailto:` - works without backend

#### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and `/` (root) folder
4. Your site will be live at `https://username.github.io/repo-name`

#### Other Static Hosts
- Vercel
- Cloudflare Pages
- Firebase Hosting

## ⚙️ Configuration

### Update Personal Information

#### Contact Email
In `index.html`, find and update:
```html
<a href="mailto:jelledesouter@gmail.com">jelledesouter@gmail.com</a>
```

And in `js/script.js`:
```javascript
const mailtoLink = `mailto:jelledesouter@gmail.com?subject=${subject}&body=${body}`;
```

#### LinkedIn Profile
In `index.html`, update the LinkedIn URL:
```html
<a href="https://www.linkedin.com/in/jelle-de-souter-7303a62ba/" target="_blank">
```

#### Skills & Progress Bars
In `index.html`, adjust the skill percentages:
```html
<div class="skill-progress" style="--progress: 85%"></div>
```

### Customizing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --accent-primary: #0066ff;      /* Change primary color */
    --accent-secondary: #00d4aa;    /* Change secondary color */
    --accent-tertiary: #7c3aed;     /* Change tertiary color */
}
```

### Adding Projects
Replace the placeholder in the Projects section with actual project cards:
```html
<div class="project-card">
    <img src="project-image.jpg" alt="Project name">
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="#" class="btn btn-primary">View Project</a>
</div>
```

## 🌐 Translations

### Adding New Language
1. Add data attributes to HTML elements:
```html
<element data-en="English text" data-nl="Dutch text" data-fr="French text">
```

2. Update the language toggle in `index.html`:
```html
<span class="lang-option" data-lang="fr">FR</span>
```

3. Update `js/script.js` to include new language

### Updating Existing Translations
Simply modify the `data-en` and `data-nl` attributes in `index.html`.

## 🎯 Browser Support

- Chrome/Edge: Latest 2 versions ✅
- Firefox: Latest 2 versions ✅
- Safari: Latest 2 versions ✅
- Mobile browsers: iOS Safari 12+, Chrome Android ✅

## ⚡ Performance

### Optimization Techniques Used
- Pure vanilla JavaScript (no frameworks = smaller bundle)
- CSS variables for theming (no JS overhead)
- Intersection Observer for scroll animations (efficient)
- Debounced scroll events
- Lazy loading ready
- Preload critical fonts
- Optimized CSS with minimal repaints

### Lighthouse Scores Target
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔧 Troubleshooting

### Dark Mode Not Working
- Check if localStorage is enabled in browser
- Clear localStorage: `localStorage.clear()`
- Check browser console for errors

### Language Toggle Not Working
- Ensure all translatable elements have both `data-en` and `data-nl` attributes
- Check browser console for errors

### Contact Form Not Opening Email Client
- This is expected behavior - the form uses `mailto:` which requires an email client
- For a backend form, integrate with Netlify Forms, Formspree, or similar service

### Animations Not Smooth
- Check if "Reduce motion" is enabled in OS accessibility settings
- The site respects `prefers-reduced-motion` media query

## 📝 License

This is a personal portfolio website. Feel free to use as inspiration, but please:
- Don't use identical personal information
- Credit if using substantial code portions
- Modify to make it your own

## 🤝 Contributing

This is a personal website, but suggestions are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

**Jelle De Souter**
- Email: jelledesouter@gmail.com
- LinkedIn: [linkedin.com/in/jelle-de-souter-7303a62ba](https://www.linkedin.com/in/jelle-de-souter-7303a62ba/)
- Website: jelledesouter.com

## 🙏 Acknowledgments

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: Custom SVG icons
- Inspiration: Modern web design trends from Dribbble, Awwwards

---

**Built with ❤️ by Jelle De Souter**

*Last updated: November 2025*
