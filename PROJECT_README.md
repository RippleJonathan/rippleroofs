# Ripple Roofs

Premium roofing services built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd rippleroofs
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your actual API keys and configuration.

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
rippleroofs/
├── public/
│   ├── images/          # Image assets
│   └── icons/           # Icon assets
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   ├── lib/            # Utilities and helpers
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── .env.local.example  # Environment variables template
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary:** Navy blue (#0f172a)
- **Accent:** Orange (#ff6b35)
- **Base:** White and off-white

### Typography
- **Body:** Inter
- **Display:** Space Grotesk

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_SERVICE_API_KEY=your_key
GOOGLE_MAPS_API_KEY=your_key
```

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy!

## 📄 License

See LICENSE file for details.

## 🤝 Contributing

Please read AGENT_INSTRUCTIONS.md for detailed development guidelines.
