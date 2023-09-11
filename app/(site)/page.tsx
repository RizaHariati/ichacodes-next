import { projects } from "../(tools)/data/data";
import HeroSection from "../(tools)/components/mainComponents/HeroSection";
import Footer from "../(tools)/components/mainComponents/Footer";
import BackToTop from "../(tools)/components/BackToTop";
import ProjectSection from "../(tools)/components/mainComponents/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main id="main-page" className="absolute w-full top-0 z-0">
      <BackToTop elementId="main-page" />
      <HeroSection />
      {projects.map((project, index: number) => {
        return (
          <ProjectSection
            key={project.id}
            project={project}
            evenOdd={project.project_index % 2 === 0 ? "even" : "odd"}
          />
        );
      })}
      <Footer />
    </main>
  );
}
