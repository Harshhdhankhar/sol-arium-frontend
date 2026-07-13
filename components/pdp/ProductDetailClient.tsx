"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/lib/data";
import type { FootProblem } from "@/lib/footProblems";
import { useStore } from "@/lib/store";
import { ProductGallery } from "@/components/pdp/ProductGallery";
import { PurchasePanel } from "@/components/pdp/PurchasePanel";
import { MobileStickyBar } from "@/components/pdp/MobileStickyBar";
import { DetailGallery } from "@/components/pdp/DetailGallery";
import { DesignedFor } from "@/components/pdp/DesignedFor";
import { ProductCard } from "@/components/products/ProductCard";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const PREORDER_FAQ: AccordionEntry[] = [
  {
    id: "faq-status",
    question: "What do the pre-order status stages mean?",
    answer:
      "Every reservation moves through four stages: Reserved, once your deposit or payment is confirmed; In Production, while your pair is cut, lasted, and finished by hand; Ready to Ship, once it clears quality inspection; and Shipped, when it leaves the studio with tracking attached.",
  },
  {
    id: "faq-cancel",
    question: "Can I cancel or change the size on a reservation?",
    answer:
      "Reservations can be cancelled free of charge any time before the In Production stage. To change a size, cancel the original hold and place a new reservation while stock remains open.",
  },
  {
    id: "faq-payment",
    question: "How are deposits and payment handled?",
    answer:
      "Most reservations are held with a deposit, with the balance charged automatically once your pair enters production. Some early-access drops require payment in full at the time of reservation instead.",
  },
  {
    id: "faq-delay",
    question: "What happens if my size doesn't ship on time?",
    answer:
      "If a delay pushes past the estimated window shown on your reservation, we'll email you directly with a revised date and the option to cancel for a full refund.",
  },
];

export function ProductDetailClient({
  product,
  variants,
  related,
  designedFor,
}: {
  product: Product;
  variants: Product[];
  related: Product[];
  designedFor: FootProblem[];
}) {
  const { addToCart } = useStore();
  const [size, setSize] = useState<number | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [reserved, setReserved] = useState(false);

  const images = product.gallery?.length ? product.gallery : [product.image, product.hoverImage];
  const availability = product.availability ?? "In Stock";
  const soldOut = availability === "Sold Out";

  const detailsFaq: AccordionEntry[] = [
    ...(product.materials
      ? [{ id: "materials", question: "Materials", answer: product.materials }]
      : []),
    ...(product.fit ? [{ id: "fit", question: "Fit Notes", answer: product.fit }] : []),
  ];

  const handleReserve = () => {
    if (!size) {
      setSizeError(true);
      document.getElementById("pdp-size-selector")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    addToCart(product, String(size));
    setReserved(true);
    setTimeout(() => setReserved(false), 2400);
  };

  const handleSelectSize = (s: number) => {
    setSize(s);
    setSizeError(false);
  };

  return (
    <div className="pb-24 pt-28 md:pb-0 md:pt-32">
      <div className="container">
        <Link
          href="/shop"
          data-cursor="pointer"
          className="mb-8 flex w-fit items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[62%_1fr] lg:gap-12">
          <ProductGallery images={images} productName={product.name} />

          <div className="lg:sticky lg:top-32 lg:self-start">
            <PurchasePanel
              product={product}
              variants={variants}
              size={size}
              sizeError={sizeError}
              reserved={reserved}
              onSelectSize={handleSelectSize}
              onReserve={handleReserve}
            />
          </div>
        </div>
      </div>

      <DetailGallery images={images} productName={product.name} />

      <section className="section pt-0">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow mb-4 block">Why This Pair</span>
            <h2 className="font-display text-3xl leading-[1.1] tracking-editorial md:text-5xl">
              <RevealText text="Considered From The First Stitch" />
            </h2>
            <Reveal delay={0.15} className="mt-6 max-w-lg">
              <p className="text-pretty text-lg leading-relaxed text-ink-muted">
                {product.description ??
                  "A single last refined across two hundred iterations, finished by hand in a limited run."}{" "}
                It disappears on the foot and lets everything else speak — built to be kept, not
                replaced each season.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <DesignedFor problems={designedFor} />

      {detailsFaq.length > 0 && (
        <section className="section">
          <div className="container max-w-2xl">
            <Reveal className="mb-10">
              <span className="eyebrow mb-4 block">Details</span>
              <h2 className="font-display text-4xl tracking-editorial md:text-5xl">Materials &amp; Fit</h2>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-line px-6 md:px-7">
              <Accordion items={detailsFaq} />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="container max-w-2xl">
          <Reveal className="mb-10">
            <span className="eyebrow mb-4 block">Reservations</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-5xl">Pre-order FAQ</h2>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-line px-6 md:px-7">
            <Accordion items={PREORDER_FAQ} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-paper-soft">
          <div className="container">
            <Reveal className="mb-14 md:mb-20">
              <span className="eyebrow mb-4 block">You May Also Like</span>
              <h2 className="font-display text-4xl tracking-editorial md:text-6xl">More From The Studio</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section text-center">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Ready to Reserve Yours?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-ink-muted">
              Limited runs move fast — secure your size before this drop closes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton
                variant="solid"
                size="lg"
                disabled={soldOut}
                onClick={() =>
                  document.getElementById("pdp-size-selector")?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                {soldOut ? "Sold Out" : "Reserve Your Pair"}
              </MagneticButton>
              <MagneticButton href="/shop" variant="outline" size="lg">
                Browse All Silhouettes
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <MobileStickyBar product={product} reserved={reserved} soldOut={soldOut} onReserve={handleReserve} />
    </div>
  );
}
