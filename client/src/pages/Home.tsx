import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UploadSection } from "@/components/UploadSection";
import { TransformationExamples } from "@/components/TransformationExamples";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <UploadSection />
        <TransformationExamples />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
