import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import WorkflowSection from "@/components/WorkflowSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IntegrationSection from "@/components/IntegrationSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OverviewSection />
      <WorkflowSection />
      <CapabilitiesSection />
      <IntegrationSection />
      <ImpactSection />
      <Footer />
    </>
  );
}
