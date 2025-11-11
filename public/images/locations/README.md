# Location Hero Images

This folder contains custom hero images for location pages.

## How to Add Images

1. **Download images from Google Drive** (links provided by Jonathan)
2. **Save with these exact filenames**:
   - `round-rock-hero.jpg` - Round Rock, TX skyline/landmark
   - `austin-hero.jpg` - Austin, TX skyline/landmark
   - `pflugerville-hero.jpg` - Pflugerville, TX skyline/landmark
   - `georgetown-hero.jpg` - Georgetown, TX (when ready)
   - `cedar-park-hero.jpg` - Cedar Park, TX (when ready)
   - `leander-hero.jpg` - Leander, TX (when ready)
   - ...and more as Jonathan provides them

3. **Image specifications**:
   - Format: JPG or WebP preferred (best compression)
   - Dimensions: At least 1920x800px (wider is better for large screens)
   - Aspect ratio: ~16:9 or wider landscape
   - File size: Aim for under 500KB (use compression tools if needed)
   - Quality: High quality, sharp focus

4. **After adding images**:
   - Run `npm run build` to verify images load correctly
   - Check that Next.js can optimize the images
   - Test on actual location pages (e.g., `/locations/round-rock`)

## Image Guidelines

### Good Hero Images:
✅ City skyline or recognizable landmarks
✅ Wide landscape orientation
✅ High quality, well-lit
✅ Professional photography
✅ Clear, uncluttered composition
✅ Shows the character of the city

### Avoid:
❌ Portrait orientation
❌ Low resolution or blurry
❌ Too dark or over-exposed
❌ Heavy text overlays (we add text in code)
❌ Stock photos that don't represent the actual city

## Current Status

### Images Added:
- [ ] round-rock-hero.jpg (Google Drive link provided)
- [ ] austin-hero.jpg (Google Drive link provided)
- [ ] pflugerville-hero.jpg (Google Drive link provided)

### Pending:
- [ ] georgetown-hero.jpg (waiting for image)
- [ ] cedar-park-hero.jpg (waiting for image)
- [ ] leander-hero.jpg (waiting for image)
- [ ] san-antonio-hero.jpg (waiting for image)
- [ ] killeen-hero.jpg (waiting for image)
- [ ] temple-hero.jpg (waiting for image)
- [ ] waco-hero.jpg (waiting for image)
- [ ] san-marcos-hero.jpg (waiting for image)
- [ ] new-braunfels-hero.jpg (waiting for image)
- [ ] copperas-cove-hero.jpg (waiting for image)

## Fallback

If a location doesn't have a custom hero image, the page will automatically use the default generic roofing hero image (`/images/hero/hero-bg.jpg`).

## Code Integration

Images are configured in `src/lib/locations.ts`:

```typescript
{
  slug: 'round-rock',
  city: 'Round Rock',
  heroImage: '/images/locations/round-rock-hero.jpg',
  // ... other fields
}
```

The location page template (`src/app/locations/[slug]/page.tsx`) automatically uses the custom image if available:

```typescript
<Image
  src={location.heroImage || "/images/hero/hero-bg.jpg"}
  alt={`Roofing services in ${location.city}, ${location.state}`}
/>
```

## Image Optimization

Next.js automatically optimizes images:
- Serves WebP format to supported browsers
- Responsive image sizing
- Lazy loading (except hero images which use `priority`)
- Automatic compression

No additional optimization needed once images are placed in this folder!
