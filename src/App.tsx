import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import SanketReveal from "./components/SanketReveal";
import ApproachSection from "./components/ApproachSection";
import ServicesSection from "./components/ServicesSection";
import VenturesSection from "./components/VenturesSection";
import AboutAndChronologyWrapper from "./components/AboutAndChronologyWrapper";
import TestimonialsSection from "./components/TestimonialsSection";
import WritingSection from "./components/WritingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    // "user" honours the visitor's prefers-reduced-motion setting for all motion animations
    <MotionConfig reducedMotion="user">
      <div className="bg-[#0B101A] min-h-screen text-white selection:bg-[#5F7082]/25 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-white focus:text-[#0B101A] focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>

        <Navbar />

        {/* Introduction with primary call to action */}
        <SanketReveal />

        {/* Visitor journey: approach → services → ventures → about → writing → contact */}
        <main id="main" tabIndex={-1} className="relative focus:outline-none">
          <ApproachSection />
          <ServicesSection />
          <VenturesSection />
          <AboutAndChronologyWrapper />
          {/* Renders only when sourced testimonials exist */}
          <TestimonialsSection />
          <WritingSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
