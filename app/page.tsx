import Hero from "@/components/Hero";
import ServiceSlider from "@/components/ServiceSlider";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES SLIDER */}
      <ServiceSlider />

      {/* CTA / BUSINESS SECTION */}
      <CTASection />
      <StatsSection />
    </>
  );
}