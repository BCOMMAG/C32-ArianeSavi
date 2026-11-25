import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PillarsSection } from "@/components/PillarsSection";
import { AboutLawyerSection } from "@/components/AboutLawyerSection";
import { PracticeAreasSection } from "@/components/PracticeAreasSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { EducationalSection } from "@/components/EducationalSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PillarsSection />
        <AboutLawyerSection />
        <PracticeAreasSection />
        <MethodologySection />
        <ReviewsSection />
        <EducationalSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
