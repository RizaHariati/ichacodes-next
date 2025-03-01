import BackToTop from "@/app/(tools)/components/BackToTop";
import AboutSection from "@/app/(tools)/components/aboutComponents/AboutSection";
import SkillSection from "@/app/(tools)/components/aboutComponents/SkillSection";
import Footer from "@/app/(tools)/components/mainComponents/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main
      id="about-page"
      className="absolute w-full top-0 z-0 flex items-center flex-col justify-start"
    >
      <BackToTop elementId="about-page" />
      <AboutSection />
      <SkillSection />
      <Footer />
    </main>
  );
}
