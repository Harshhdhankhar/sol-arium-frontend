import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/products/ProductCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export function LatestCollection() {
  const items = products.slice(0, 8);

  return (
    <section className="section bg-paper-soft">
      <div className="container">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-4 block">The Collection</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Latest Arrivals
            </h2>
          </div>
          <MagneticButton href="/shop" variant="outline" magnetic={false}>
            View All Silhouettes
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </MagneticButton>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-8">
          {items.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
