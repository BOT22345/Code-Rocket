import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GamingCSSection } from "@/components/gaming-cs-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <GamingCSSection />
    </main>
  );
}
