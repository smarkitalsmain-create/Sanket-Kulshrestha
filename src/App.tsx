import Navbar from "./components/Navbar";
import SanketReveal from "./components/SanketReveal";
import MetricsSection from "./components/MetricsSection";
import AboutAndChronologyWrapper from "./components/AboutAndChronologyWrapper";
import ExpertiseSection from "./components/ExpertiseSection";
import VenturesSection from "./components/VenturesSection";
import ImpactSection from "./components/ImpactSection";
import BrandsSection from "./components/BrandsSection";
import InsightsSection from "./components/InsightsSection";
import MediaSection from "./components/MediaSection";
import PhilosophySection from "./components/PhilosophySection";
import TestimonialsSection from "./components/TestimonialsSection";
import PresenceSection from "./components/PresenceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#070707] min-h-screen text-white select-text selection:bg-[#5F7082]/25 selection:text-white">
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Signature Scroll Experience - The Sanket Reveal */}
      <SanketReveal />

      {/* Main Core Corporate Stream (Sequential Storytelling Flow) */}
      <main className="relative">
        {/* Animated Metrics Ribbon */}
        <MetricsSection />

        {/* About + Chronology — shared sticky portrait storytelling */}
        <AboutAndChronologyWrapper />

        {/* Interactive Capability Pillars (Expertise Deck) */}
        <ExpertiseSection />

        {/* Corporate Venture Suite Showcase */}
        <VenturesSection />

        {/* Functional Matrix Animated Concept diagrams */}
        <ImpactSection />

        {/* Monochrome Moving Partner Marquee */}
        <BrandsSection />

        {/* Reader Essay Grid (Ideas Worth Building) */}
        <InsightsSection />

        {/* Event Press Logs gallery */}
        <MediaSection />

        {/* Parallax Hero Philosophy Canvas (How I Think) */}
        <PhilosophySection />

        {/* Large Typography Luxury Carousel */}
        <TestimonialsSection />

        {/* Office Presences Without Public Full Addresses */}
        <PresenceSection />

        {/* Contact Pipeline Form Gate */}
        <ContactSection />
      </main>

      {/* Digital Headquarters Footer with easter-egg trigger */}
      <Footer />
    </div>
  );
}

