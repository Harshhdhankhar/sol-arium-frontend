import type { Metadata } from "next";
import { ShopGrid } from "@/components/products/ShopGrid";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Silhouettes — Sole Arium",
  description:
    "Every current Sole Arium silhouette — small-batch runs of premium leather and recycled knit, designed for how you move.",
};

export default function ShopPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="section pb-14 pt-0 md:pb-20">
        <div className="container">
          <span className="eyebrow mb-6 block">The Collection</span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.1] tracking-editorial md:text-7xl">
            <RevealText text="Silhouettes For Your Stride" />
          </h1>
          <Reveal delay={0.2} className="mt-7 max-w-md">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">
              Small-batch production, thoughtfully made. Reserve now — once a run is gone, it&rsquo;s
              gone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <ShopGrid />
        </div>
      </section>
    </div>
  );
}
