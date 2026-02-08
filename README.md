# EightySix Strategies

A modern, production-ready website for EightySix Strategies - a digital growth and marketing solutions company. This website is optimized for deployment on Netlify with comprehensive features including Netlify Forms, Google Analytics integration, and enterprise-grade security headers.

## 🚀 Live Demo

Deploy this site to Netlify: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

## 📋 Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Netlify Deployment](#netlify-deployment)
- [Netlify Forms Setup](#netlify-forms-setup)
- [Performance](#performance)
- [SEO & Meta Tags](#seo--meta-tags)
- [Security](#security)
- [Browser Support](#browser-support)

## 🎯 Overview

EightySix Strategies is a fully-featured, static website designed for a digital marketing and growth solutions company. The site includes:

- Modern, responsive design
- Full Netlify integration (Forms, Headers, Redirects)
- Google Analytics 4 (GA4) tracking ready
- Enterprise security headers (CSP, HSTS, etc.)
- SEO-optimized with Open Graph and Twitter Card meta tags
- JSON-LD structured data for search engines
- Optimized performance with caching strategies

## 🛠 Technology Stack

- **HTML5** - Semantic markup for better SEO
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **Netlify** - Hosting, Forms, and CDN
- **Google Analytics 4** - Web analytics and tracking

## ✨ Features

### Core Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Clean, professional UI with gradient accent colors
- ✅ Smooth animations and transitions
- ✅ Accessible navigation and forms
- ✅ Fast page load times (<1s)

### Netlify Integration
- ✅ Netlify Forms with spam protection (honeypot)
- ✅ Custom 404 error page
- ✅ Clean URL redirects (`/services` → `/pages/services.html`)
- ✅ Security headers (CSP, X-Frame-Options, HSTS, etc.)
- ✅ Performance headers (Cache-Control)

### SEO & Analytics
- ✅ Google Analytics 4 (GA4) ready
- ✅ Open Graph meta tags for social media
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (Schema.org)
- ✅ Sitemap.xml and robots.txt
- ✅ Canonical URLs
- ✅ SEO-friendly meta descriptions

### Security
- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options (Clickjacking protection)
- ✅ X-Content-Type-Options (MIME sniffing protection)
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ HSTS ready (enable after HTTPS confirmation)

## 📁 Folder Structure

```
eighty-six-strategies/
├── index.html              # Homepage
├── 404.html               # Custom error page
├── favicon.svg            # Site favicon (SVG format)
├── netlify.toml           # Netlify configuration
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # XML sitemap for SEO
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript (form handling, analytics)
└── pages/
    ├── about.html         # About page
    ├── contact.html       # Contact page with Netlify Form
    ├── services.html      # Services page
    ├── who-we-help.html   # Who We Help page
    └── why-us.html        # Why Us page
```

## 🏁 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jemorrissey92-code/eighty-six-strategies.git
   cd eighty-six-strategies
   ```

2. **Open in a browser:**
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server -p 8000
   ```

3. **View the site:**
   Open your browser and navigate to `http://localhost:8000`

### No Build Process Required

This is a static website with no build step. All files are ready to deploy as-is. Simply upload to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 🎨 Customization Guide

### 1. Update Business Information

#### Replace Placeholder URLs (COMPLETED!)
The placeholder URLs have been replaced with the actual domain:

- ~~`https://eighty-six-strategies.netlify.app/`~~ → **https://jem86.com/**
- Updated in: `index.html`, `sitemap.xml`, `robots.txt`, all page files

#### Contact Information
Update contact details in:
- `index.html` (footer section)
- `pages/contact.html`
- Replace `james@eightysixstrategies.com` with your email
- Replace `(401) 487-1587` with your phone number

#### Social Media Links
Update social media links in footer sections:
```html
<div class="social-links">
    <a href="YOUR_LINKEDIN_URL" aria-label="LinkedIn">LinkedIn</a>
    <a href="YOUR_TWITTER_URL" aria-label="Twitter">Twitter</a>
    <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">Facebook</a>
</div>
```

### 2. Google Analytics Setup

**Important:** Replace `GA_MEASUREMENT_ID` with your actual Google Analytics 4 tracking ID.

1. **Get your GA4 tracking ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a GA4 property (if you haven't already)
   - Find your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update in all HTML files:**
   Find and replace `GA_MEASUREMENT_ID` with your actual ID:
   ```html
   <!-- Before -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   
   <!-- After (example) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4"></script>
   <script>
     gtag('config', 'G-ABC123DEF4');
   </script>
   ```

3. **Update netlify.toml CSP header:**
   The Content Security Policy in `netlify.toml` is already configured to allow Google Analytics scripts. No changes needed unless you add other external scripts.

### 3. Customize Content

#### Hero Section (index.html)
```html
<section class="hero">
    <h1>Your Custom Headline</h1>
    <p class="hero-subtitle">Your tagline</p>
    <p class="hero-description">Your description...</p>
</section>
```

#### Services Section (index.html)
Update the service cards with your actual offerings:
```html
<div class="service-card">
    <div class="service-icon">📊</div>
    <h3>Your Service Name</h3>
    <p>Your service description...</p>
</div>
```

### 4. Customize Colors and Branding

Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #667eea;      /* Change to your brand color */
    --secondary-color: #764ba2;    /* Change to your secondary color */
    --text-dark: #1a202c;
    --text-light: #4a5568;
}
```

### 5. Add Your Logo

Replace the text logo in the navigation:
```html
<!-- Current text logo -->
<div class="nav-brand">
    <a href="/">EightySix Strategies</a>
</div>

<!-- Replace with image logo -->
<div class="nav-brand">
    <a href="/">
        <img src="/images/logo.png" alt="Your Company Logo" height="40">
    </a>
</div>
```

### 6. Update Favicon

The current `favicon.svg` is a placeholder. To create a custom favicon:

1. **Create your favicon:**
   - Use a tool like [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Generate multiple sizes: SVG, PNG (32x32, 180x180)

2. **Replace files:**
   - Replace `favicon.svg` with your SVG favicon
   - Add `favicon.png` (32x32) to root
   - Add `apple-touch-icon.png` (180x180) to root

3. **Already configured in HTML:**
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg">
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
   ```

## 🚢 Netlify Deployment

### Option 1: Deploy from Git (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Customize website"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     - **Build command:** Leave empty (no build needed)
     - **Publish directory:** `.` (root directory)
   - Click "Deploy site"

3. **Your site is live!**
   - Netlify will assign a URL like `your-site-name.netlify.app`
   - You can add a custom domain in Site Settings

### Option 2: Manual Deploy

1. **Create a zip file:**
   ```bash
   zip -r website.zip . -x "*.git*" -x "node_modules/*"
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop your zip file
   - Your site will be deployed instantly

### Post-Deployment Configuration

#### Enable HSTS (after HTTPS is working)
In `netlify.toml`, uncomment the HSTS header:
```toml
# Uncomment after confirming HTTPS works
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

#### Set up custom domain
1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify
4. Update all URLs in your code to use the custom domain

## 📧 Netlify Forms Setup

### Forms are already configured!

The contact form is ready to use with Netlify Forms:

1. **No additional setup needed** - The form has the `netlify` attribute
2. **View submissions:** Netlify Dashboard → Forms tab
3. **Email notifications:** Configure in Netlify Dashboard → Settings → Forms
4. **Spam protection:** Built-in honeypot field included

### Form Features
- ✅ Spam protection (honeypot field)
- ✅ Field validation
- ✅ Success/error messaging
- ✅ Google Analytics event tracking
- ✅ Accessible form labels

### Testing Forms Locally

For local testing, use [Netlify CLI](https://docs.netlify.com/cli/get-started/):
```bash
npm install -g netlify-cli
netlify dev
```

This will run a local development server with Netlify Forms functionality.

## ⚡ Performance

### Current Optimization

- **CSS & JS Minification:** Not needed for static files (minimal size)
- **Image Optimization:** Use WebP format for images when adding photos
- **Caching:** Configured in `netlify.toml`
  - Static assets (CSS, JS, images): 1 year cache
  - HTML pages: No cache (always fresh)
- **CDN:** Automatic via Netlify

### Expected Lighthouse Scores

After deployment, you should see:
- **Performance:** 95-100
- **Accessibility:** 95-100
- **Best Practices:** 95-100
- **SEO:** 95-100

### Performance Tips

1. **Compress images:** Use tools like [TinyPNG](https://tinypng.com/)
2. **Use WebP format:** Better compression than PNG/JPG
3. **Lazy load images:** Add `loading="lazy"` attribute
4. **Minimize custom fonts:** Use system fonts when possible

## 🔍 SEO & Meta Tags

### Implemented SEO Features

1. **Semantic HTML:** Proper heading hierarchy (h1, h2, h3)
2. **Meta descriptions:** Unique for each page
3. **Open Graph tags:** Optimized for social media sharing
4. **Twitter Cards:** Rich previews on Twitter
5. **Canonical URLs:** Prevent duplicate content issues
6. **Structured data:** JSON-LD schema for search engines
7. **Sitemap:** XML sitemap for search engines
8. **Robots.txt:** Search engine crawler instructions

### Update SEO Tags

For each page, update:
```html
<title>Your Page Title - EightySix Strategies</title>
<meta name="description" content="Your unique page description...">
<link rel="canonical" href="https://yourdomain.com/page">
```

### Submit Sitemap to Google

After deployment:
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property (website)
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## 🔒 Security

### Implemented Security Headers

All security headers are configured in `netlify.toml`:

- **Content-Security-Policy (CSP):** Prevents XSS attacks
- **X-Frame-Options:** Prevents clickjacking
- **X-Content-Type-Options:** Prevents MIME sniffing
- **X-XSS-Protection:** Enables XSS filter in older browsers
- **Referrer-Policy:** Controls referrer information
- **Permissions-Policy:** Restricts browser features
- **HSTS:** Forces HTTPS (enable after confirming HTTPS works)

### Security Best Practices

1. **Never commit secrets:** Don't put API keys in public repos
2. **Enable HSTS:** After HTTPS is working, uncomment HSTS header
3. **Regular updates:** Keep dependencies updated (if you add any)
4. **Form validation:** Server-side validation via Netlify Forms
5. **Spam protection:** Honeypot field in contact form

## 🌐 Browser Support

This website supports:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Progressive Enhancement

The site uses progressive enhancement:
- Works without JavaScript (forms, navigation)
- Enhanced with JavaScript (analytics, smooth scrolling)
- Graceful degradation for older browsers

## 📝 License

© 2026 EightySix Strategies. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or suggestions, contact the development team.

## 📞 Support

For technical support or questions:
- Email: james@eightysixstrategies.com
- Phone: (401) 487-1587

---

**Ready to deploy?** Follow the [Netlify Deployment](#netlify-deployment) guide above. Your website will be live in minutes! 🚀