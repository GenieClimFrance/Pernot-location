import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import { Navbar } from "../components/Navbar";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { SectionProvider } from "@/context/SectionContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "K4v1VYGPvBGjIstVnqVnyYLBD6SOjbY29FwJxVMqVds",
  },
};

export const viewport: Viewport = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head />
      <body className={`${roboto.variable} font-georgia scroll-smooth`}>
        <Providers>
          <SectionProvider>
            <Navbar />
            {children}
          </SectionProvider>
        </Providers>
      </body>
    </html>
  );
}
