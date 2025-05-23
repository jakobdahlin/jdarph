import type React from "react"
import { Metadata } from "next";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";


interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Jakob Dahlin Portfolio",
  description: "Web Design - Graphic Design & Architectural Photography",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jakob Dahlin Portfolio",
    description: "Web Design - Graphic Design & Architectural Photography",
    url: "https://jakobdahlin.vercel.app",
    siteName: "Jakob Dahlin Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500126/JD__0093_fhwgpq.jpg",
        width: 1200,
        height: 600,
        alt: "Jakob Dahlin Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en">
      <Analytics/>
      <body className="bg-neutral-900 text-white flex flex-col min-h-screen flex-grow">
        {/* Navbar */}
        <Menu />
        
        {/* Page content with spacing to avoid menu overlap */}
        <div className="mt-10"> {/* Adjust spacing based on Navbar height */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

