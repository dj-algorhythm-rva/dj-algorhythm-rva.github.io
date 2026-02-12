import { HeroSection } from "../components/HeroSection";
import { VideoSection } from "../components/VideoSection";
import { BioSection } from "../components/BioSection";
import { PackagesSection } from "../components/PackagesSection";
import { AddonsSection } from "../components/AddonsSection";
import { EventTypesSection } from "../components/EventTypesSection";
import { ContactCTASection } from "../components/ContactCTASection";

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <VideoSection />
      <BioSection />
      <PackagesSection />
      <AddonsSection />
      <EventTypesSection />
      <ContactCTASection />
    </div>
  );
}

export { Home };
