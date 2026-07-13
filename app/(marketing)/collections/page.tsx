import type { Metadata } from "next";
import Image from "next/image";
import { collections } from "@/lib/data";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Collections — Sole Arium",
  description:
    "Monument, Nocturne, and Meridian — three distinct collections, each a different perspective on movement and form.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="section pb-14 pt-0 md:pb-20">
        <div className="container">
          <span className="eyebrow mb-6 block">The Studies</span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.1] tracking-editorial md:text-7xl">
            <RevealText text="Three Perspectives On Movement" />
          </h1>
          <Reveal delay={0.2} className="mt-7 max-w-md">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">
              Each collection is a distinct point of view — united by the same
              commitment to material and craft.
            </p>
          </Reveal>
        </div>
      </section>

      <div>
        {collections.map((collection, i) => (
          <section key={collection.slug} className="border-t border-line py-20 md:py-28">
            <div className="container">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
                <div
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden bg-paper-soft md:col-span-7 md:aspect-[16/11]",
                    i % 2 === 1 ? "md:order-2" : "md:order-1"
                  )}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={cn(
                    "md:col-span-5 lg:pl-8",
                    i % 2 === 1 ? "md:order-1 md:pl-0 md:pr-4" : "md:order-2 md:pl-4"
                  )}
                >
                  <Reveal>
                    <span className="eyebrow mb-4 flex items-center gap-2 text-ink-muted">
                      {collection.season}
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {collection.count} Silhouettes
                    </span>
                    <h2 className="font-display text-5xl tracking-editorial md:text-6xl">
                      {collection.title}
                    </h2>
                    <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink-muted">
                      {collection.description}
                    </p>
                    <div className="mt-9">
                      <MagneticButton href="/shop" variant="outline">
                        View The Collection
                      </MagneticButton>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
