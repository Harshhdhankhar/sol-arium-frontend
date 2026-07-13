import type { Metadata } from "next";
import Image from "next/image";
import { story, img } from "@/lib/data";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhySoleArium } from "@/components/story/WhySoleArium";

export const metadata: Metadata = {
  title: "About — Sole Arium",
  description:
    "A studio built around how you move. Every silhouette considered, refined, and crafted to be your most-worn pair.",
};

const founderImage = img("1606107557195-0e29a4b5b4aa", 1600);

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="section pb-14 pt-0 md:pb-20">
        <div className="container">
          <span className="eyebrow mb-6 block">Our Purpose</span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.1] tracking-editorial md:text-7xl">
            <RevealText text="Designed Around Your Movement" />
          </h1>
          <Reveal delay={0.2} className="mt-7 max-w-lg">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">
              Each silhouette refined until it disappears on the foot. What remains is pure, effortless movement.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="relative h-[55vh] w-full overflow-hidden md:h-[80vh]">
        <Image
          src={story.image}
          alt="The Sole Arium workshop"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="section">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <span className="eyebrow mb-5 block">Our Story</span>
            <h2 className="font-display text-4xl leading-[1.1] tracking-editorial md:text-5xl">
              Built Around Your Stride
            </h2>
            <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-ink-muted">
              <p>
                Sole Arium began with a simple question: what if a sneaker was designed
                for how you actually move, not how it looks in a campaign? A last is
                shaped, tested, reshaped — sometimes for a year — before a single pair
                leaves the workshop.
              </p>
              <p>
                We work with full-grain leather and recycled technical knit, chosen
                for how they feel and age with you. Every pair is assembled by hand,
                in quantities small enough that each one is personally accounted for.
              </p>
              <p>
                The name holds the tension — sole, the foundation of every step,
                and arium, a space for considered living. That duality is where
                every design begins.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2} className="border-l-2 border-gold pl-6">
              <p className="font-display text-2xl italic leading-snug tracking-editorial md:text-3xl">
                &ldquo;{story.quote}&rdquo;
              </p>
              <p className="eyebrow mt-6 text-ink-muted">{story.quoteAttribution}</p>
            </Reveal>

            <Reveal delay={0.3} className="relative mt-12 aspect-[4/5] overflow-hidden bg-paper-soft">
              <Image
                src={founderImage}
                alt="At work in the studio"
                fill
                sizes="(min-width: 768px) 28vw, 90vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="hairline" />
      </div>

      <WhySoleArium />

      <section className="section border-t border-line pt-24 md:pt-32">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
            The Full Collection
          </h2>
          <p className="max-w-md text-pretty text-ink-muted">
            Every silhouette we&rsquo;ve described — meant to be worn, not just admired.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/shop" variant="solid" size="lg">
              Explore The Range
            </MagneticButton>
            <MagneticButton href="/collections" variant="outline" size="lg">
              Browse Collections
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
