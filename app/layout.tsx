import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "Lawn Mowing & Garden Maintenance Melbourne East | Gumleaf Landscapes";
const description =
  "Lawn mowing, garden maintenance, hedging, planting and landscaping in Melbourne's eastern suburbs. Based in Ringwood, servicing Croydon, Mitcham, Box Hill, Blackburn and Doncaster East. Free quotes within 24 hours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "lawn mowing Melbourne",
    "garden maintenance Melbourne east",
    "gardener Ringwood",
    "landscaping eastern suburbs Melbourne",
    "hedge trimming Croydon",
    "garden clean up Box Hill",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "Gumleaf Landscapes",
    title,
    description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=1200&h=630&q=75",
        width: 1200,
        height: 630,
        alt: "A neatly maintained Melbourne garden by Gumleaf Landscapes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=1200&h=630&q=75"],
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Ringwood, Melbourne",
    "geo.position": "-37.8136;145.2290",
    ICBM: "-37.8136, 145.2290",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
