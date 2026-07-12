import type { Metadata } from "next";
import Image from "next/image";
import { story, img } from "@/lib/data";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhySoleArium } from "@/components/story/WhySoleArium";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sole Arium is a premium footwear studio designing considered silhouettes for a life in motion — full-grain leathers, limited runs, built to be kept.",
};

const founderImage = img("1606107557195-0e29a4b5b4aa", 1600);

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="section pb-14 pt-0 md:pb-20">
        <div className="container">
          <span className="eyebrow mb-6 block">About Sole Arium</span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-editorial md:text-7xl">
            <RevealText text="Movement, Made To Last" />
          </h1>
          <Reveal delay={0.2} className="mt-7 max-w-lg">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">
              We design one silhouette at a time — refined until it disappears on the
              foot and lets everything else speak.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="relative h-[55vh] w-full overflow-hidden md:h-[80vh]">
        <Image
          src={story.image}
          alt="Inside the Sole Arium studio"
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
            <h2 className="font-display text-4xl leading-[1.05] tracking-editorial md:text-5xl">
              Founded On Restraint
            </h2>
            <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-ink-muted">
              <p>
                Sole Arium began in a two-room studio with a single question: what
                would a sneaker look like if it was designed to be kept, not replaced?
                The answer took longer than expected. A last is carved, worn,
                corrected, and carved again — sometimes for a year — before a single
                unit leaves the workshop.
              </p>
              <p>
                We work in full-grain leathers and recycled technical knit, chosen
                for how they age rather than how they photograph on day one. Every
                pair is assembled by hand, in runs small enough that a mistake is a
                conversation, not a recall.
              </p>
              <p>
                The name is a study in contrast — sole, the foundation of every
                step, and arium, an open, considered space. That tension is the
                whole design brief.
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
                alt="Studio at work"
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
            See The Collection
          </h2>
          <p className="max-w-md text-pretty text-ink-muted">
            Every silhouette we&rsquo;ve described here — worn, not just displayed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/shop" variant="solid" size="lg">
              Shop All Silhouettes
            </MagneticButton>
            <MagneticButton href="/collections" variant="outline" size="lg">
              View Collections
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
