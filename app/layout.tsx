import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { StoreProvider } from "@/lib/store";
import { AuthProvider } from "@/lib/auth";
import { Loader } from "@/components/ui/Loader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WishlistDrawer } from "@/components/cart/WishlistDrawer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solearium.com"),
  title: {
    default: "Sole Arium — Move Without Limits",
    template: "%s — Sole Arium",
  },
  description:
    "Sole Arium is a premium footwear house designing considered silhouettes for a life in motion. Full-grain leathers, limited runs, built to be kept.",
  keywords: [
    "Sole Arium",
    "premium sneakers",
    "luxury footwear",
    "designer sneakers",
    "limited edition sneakers",
  ],
  openGraph: {
    title: "Sole Arium — Move Without Limits",
    description:
      "Considered footwear for a life in motion. Designed in small studios, produced in limited runs.",
    siteName: "Sole Arium",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`is-loading ${fraunces.variable} ${inter.variable}`}>
      <body>
        <AuthProvider>
          <StoreProvider>
            <SmoothScroll>
              <Loader />
              <CustomCursor />
              {children}
              <CartDrawer />
              <WishlistDrawer />
            </SmoothScroll>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
