# Pernot Location - Premium Vehicle Rental Platform

A modern, responsive web application for luxury vehicle rentals built with Next.js 14 and cutting-edge technologies. Features an elegant UI, smooth animations, and seamless booking experience.

## ✨ Features

- 🚗 **Premium Vehicle Showcase** - Browse luxury cars and motorcycles with detailed galleries
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🎨 **Modern UI/UX** - Beautiful animations and micro-interactions
- 📧 **Contact System** - Integrated email notifications via Brevo
- 🔍 **Advanced Filtering** - Filter by brand, type, transmission, and price
- 🖼️ **Image Optimization** - Fast loading with Next.js Image component
- ⚡ **Performance Optimized** - Built with modern web standards

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started) - React framework with App Router
- [HeroUI](https://heroui.com/) - Modern React UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Tailwind Variants](https://tailwind-variants.org) - Component variants system
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- [Brevo](https://www.brevo.com/) - Email service integration
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pernotlocation
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```bash
   BREVO_API_KEY=your_brevo_api_key
   SENDER_EMAIL=your_sender_email
   RECIPIENT_EMAIL=your_recipient_email
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── vehicle/           # Vehicle listing pages
│   ├── vehicles/          # Individual vehicle pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── home/             # Home page components
├── data/                 # Static data and configurations
├── public/               # Static assets
│   ├── cars/             # Vehicle images
│   └── icon/             # Icons and logos
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🎨 UI Components

The application uses a custom design system built on top of HeroUI and Tailwind CSS:

- **Animated Components**: Smooth transitions with Framer Motion
- **Responsive Design**: Mobile-first approach
- **Custom Filters**: Advanced filtering system for vehicles
- **Image Galleries**: Optimized image viewing experience
- **Contact Forms**: Integrated with email notifications

## 📧 Email Integration

The application uses Brevo (formerly Sendinblue) for handling contact form submissions:

- Transactional email API
- Custom email templates
- Error handling and validation
- Environment-based configuration

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Modern React patterns** with hooks and functional components

## 🌐 Deployment

The application is optimized for deployment on modern platforms:

- **Vercel** (recommended)
- **Netlify**
- **Docker** support included

### Build Optimization

- Automatic code splitting
- Image optimization
- Bundle analysis
- Performance monitoring

## 📄 License

Licensed under the [MIT license](LICENSE).
