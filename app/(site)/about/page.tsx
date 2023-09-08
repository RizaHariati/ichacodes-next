"use client";

import BackToTop from "@/app/(tools)/components/BackToTop";
import AboutSection from "@/app/(tools)/components/aboutComponents/AboutSection";
import Footer from "@/app/(tools)/components/mainComponents/Footer";

export default function Home() {
  return (
    <main id="about-page" className="absolute w-full top-0 z-0">
      <BackToTop elementId="about-page" />
      <AboutSection />

      <Footer />
    </main>
  );
}
