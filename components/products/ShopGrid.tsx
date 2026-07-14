"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/products/ProductCard";

export function ShopGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
