import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { OrbitCard } from "@/components/OrbitCard";
import { Problems } from "@/components/Problems";
import { Benefits } from "@/components/Benefits";
import { VideoDemo } from "@/components/VideoDemo";
import { Screenshots } from "@/components/Screenshots";
import { Modules } from "@/components/Modules";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="product" className="flex-1">
        <Hero />
        <Integrations />
        <OrbitCard />
        <Problems />
        <Benefits />
        <VideoDemo />
        <Screenshots />
        <Modules />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
