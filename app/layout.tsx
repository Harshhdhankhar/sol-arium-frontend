import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { StoreProvider } from "@/lib/store";
import { AuthProvider } from "@/lib/auth";
import { ThemeProvider } from "@/lib/theme";
import { Loader } from "@/components/ui/Loader";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WishlistDrawer } from "@/components/cart/WishlistDrawer";

// Runs before hydration so the correct theme applies on first paint —
// without this, the page would flash light mode before React mounts.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("sole-arium.theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

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
    default: "Sole Arium — Footwear Designed Around How You Move",
    template: "%s — Sole Arium",
  },
  description:
    "Premium customizable footwear, recommended based on your movement and comfort. Walk better, stand longer, move confidently.",
  keywords: [
    "Sole Arium",
    "customizable footwear",
    "premium comfort shoes",
    "personalized footwear",
    "movement designed shoes",
    "everyday comfort footwear",
  ],
  openGraph: {
    title: "Sole Arium — Footwear Designed Around How You Move",
    description:
      "Tell us how you move. We'll recommend the pair built for you. Premium customizable footwear, limited releases.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`is-loading ${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <AuthProvider>
            <StoreProvider>
              <SmoothScroll>
                <Loader />
                {children}
                <CartDrawer />
                <WishlistDrawer />
              </SmoothScroll>
            </StoreProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
