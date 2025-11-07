# Ripple Roofs - Image Assets

This directory contains all image assets for the website.

## Directory Structure

- **hero/** - Hero section images and backgrounds
- **services/** - Service-specific images
- **projects/** - Project gallery images (before/after, completed projects)
- **team/** - Team member photos
- **icons/** - Custom icons and SVGs

## Image Guidelines

### Requirements
- Format: WebP preferred (Next.js will auto-convert)
- Quality: High-resolution, professional photography
- Optimization: Will be handled by next/image component

### Recommended Sizes
- **Hero Images:** 1920x1080px or larger
- **Service Images:** 1200x800px
- **Project Gallery:** 1200x900px
- **Team Photos:** 800x800px (square)
- **Icons:** SVG format

### Naming Convention
- Use kebab-case: `roof-replacement-hero.jpg`
- Be descriptive: `modern-home-new-roof.jpg`
- Include project type: `commercial-metal-roof-after.jpg`

## Placeholder Images

Until professional photography is available, use:
- Unsplash (https://unsplash.com/) - Architecture, construction
- Pexels (https://pexels.com/) - Free stock photos
- Custom illustrations/graphics

## Alt Text
All images must have descriptive alt text for:
- SEO optimization
- Accessibility (screen readers)
- Better user experience

Example:
```tsx
<Image 
  src="/images/projects/modern-home.jpg"
  alt="Modern two-story home with new architectural shingle roof in charcoal gray"
  width={1200}
  height={900}
/>
```
