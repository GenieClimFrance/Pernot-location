/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppression de output: "standalone" pour le développement
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Réactivation des optimisations d'images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  // Optimisations pour le développement
  experimental: {
    optimizePackageImports: ['@heroui/react', 'lucide-react', 'react-icons'],
  },
};

module.exports = nextConfig;
