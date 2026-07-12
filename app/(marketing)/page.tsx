import { Hero } from "@/components/hero/Hero";
import { FeaturedDrop } from "@/components/featured/FeaturedDrop";
import { LatestCollection } from "@/components/collections/LatestCollection";
import { EditorialStory } from "@/components/editorial/EditorialStory";
import { WhySoleArium } from "@/components/story/WhySoleArium";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { Lookbook } from "@/components/lookbook/Lookbook";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { JournalSection } from "@/components/journal/JournalSection";
import { InstagramGrid } from "@/components/instagram/InstagramGrid";
import { Newsletter } from "@/components/newsletter/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDrop />
      <LatestCollection />
      <EditorialStory />
      <ProductShowcase />
      <Lookbook />
      <WhySoleArium />
      <Testimonials />
      <JournalSection />
      <InstagramGrid />
      <Newsletter />
    </>
  );
}
