Act as an expert full-stack developer and UI/UX designer. Your task is to help me build a futuristic, "bad ass," and high-performance website for a premium roofing company.

The primary goals for this website are:
1.  **Blazing Fast Performance:** Target Lighthouse scores over 95.
2.  **Aggressive Lead Capture:** Every page should guide the user toward a "Free Quote" CTA.
3.  **Flawless Mobile-First Design:** It must look and feel premium on all devices.
4.  **Modern, Maintainable Code:** Use the best, current technologies.

Here are the complete agent instructions and technical specifications:

### 1. Core Tech Stack
* **Framework:** Next.js (using the App Router)
* **Styling:** Tailwind CSS
* **Forms:** React Hook Form with Zod for validation.
* **Form Backend:** Next.js API Routes (to handle form submission and send an email or post to a CRM).
* **Deployment:** Vercel

### 2. Design & "Futuristic" Aesthetic
* **Vibe:** Premium, strong, reliable, and cutting-edge. Think high-end automotive or tech.
* **Layout:** Clean, spacious, with strong geometric lines and bold typography (e.g., a modern sans-serif font).
* **Color Palette:** A professional and bold palette. For example:
    * **Primary:** Deep charcoal or navy blue.
    * **Secondary:** A bright, high-contrast "action" color (like a vibrant orange, electric blue, or lime green) for all CTAs.
    * **Base:** Pure white and off-white for backgrounds.
* **Micro-interactions:** Subtle, smooth animations on scroll (fade-ins, slight upward movement), hover effects on buttons and links, and animated SVGs.
* **Imagery:** Use only high-resolution, professional photos of modern homes, architectural details, and clean roofing projects. No generic stock photos.

### 3. Lead Capture Strategy
* **Primary CTA:** "Get a Free Inspection" or "Request Your Free Quote."
* **Navbar:** The navbar should be sticky, and the primary CTA button must be clearly visible at all times.
* **Hero Section:** The homepage hero must have the primary CTA "above the fold."
* **Lead Form:**
    * The main "Quote" form should be simple.
    * Fields: Name, Phone, Email, Address, Service Needed (dropdown: 'Roof Repair', 'Roof Replacement', 'New Installation', 'Storm Damage', 'Other').
    * Must have strong client-side and server-side validation.

### 4. Website Structure & Key Pages

**A. Homepage**
* **Hero:** Full-screen, high-impact image or subtle video background with a clear headline (e.g., "The Future of Roofing is Here") and the primary CTA.
* **"Why Us" / Trust Bar:** A section with 3-4 key value propositions (e.g., "Lifetime Warranty," "Certified Installers," "24/Hour Emergency Service").
* **Services:** A grid or card-based overview of the main services, linking to the individual service pages.
* **Social Proof:** A carousel or grid of glowing, 5-star customer testimonials.
* **Project Gallery Preview:** A small, visually impressive showcase of 3-4 recent projects.
* **Final CTA:** A large, unmissable CTA section at the bottom.

**B. Services (Detail Pages)**
* Create a reusable, dynamic page template for each service (e.g., `[...slug].js`).
* **Structure:**
    * Service-specific H1 (e.g., "Expert Residential Roof Replacement").
    * Detailed description of the service.
    * A "Our Process" section (e.g., 1. Inspection, 2. Quote, 3. Installation, 4. Cleanup).
    * A sticky sidebar with a "Get a Quote" mini-form.

**C. Project Gallery**
* A filterable grid of project photos (e.g., filter by "Commercial," "Residential," "Metal," "Shingle").
* Clicking an image opens a modal or a separate project page with a brief description.

**D. About Us**
* Company mission, story, and photos of the team (to build trust).

**E. Contact**
* The full "Get a Quote" form.
* Business phone number (clickable: `tel:`).
* Email address.
* Embedded Google Map.

### 5. Performance & SEO
* **Strategy:** Use Static Site Generation (SSG) for all main pages (Homepage, About, Services).
* **Images:** Use the `next/image` component for all images to ensure automatic optimization and WebP format.
* **SEO:** Implement all on-page SEO best practices:
    * Dynamic meta titles and descriptions for all pages.
    * Proper heading structure (one H1 per page, followed by H2s, H3s).
    * All images must have descriptive `alt` text.
    * Generate a `sitemap.xml`.

Please confirm you understand this brief. My first request will be to generate the file structure and the `package.json` with all necessary dependencies.