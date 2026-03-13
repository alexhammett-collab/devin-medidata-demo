import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import WorkflowSection from "@/components/WorkflowSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IntegrationSection from "@/components/IntegrationSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OverviewSection />
      <WorkflowSection />
      <LiveDemoSection />
      <CapabilitiesSection />
      <IntegrationSection />
      <Footer />
    </>
  );
}
