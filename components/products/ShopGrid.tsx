"use client";

import { useMemo, useState } from "react";
import { products, type Product } from "@/lib/data";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

const categories: Array<Product["category"] | "All"> = ["All", "Low", "Mid", "High", "Runner"];

export function ShopGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-14 flex flex-wrap items-center justify-between gap-6 border-b border-line pb-6 md:mb-20">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="pointer"
              className={cn(
                "rounded-full border px-5 py-2.5 text-[13px] font-medium uppercase tracking-wide transition-colors",
                active === cat
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-muted hover:border-ink hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="eyebrow text-ink-faint">
          {filtered.length} Silhouette{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {filtered.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
