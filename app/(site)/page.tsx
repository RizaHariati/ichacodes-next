"use client";

import { projects } from "../(tools)/data/data";
import Project from "../(tools)/components/mainComponents/Project";
import HeroSection from "../(tools)/components/mainComponents/HeroSection";
import Footer from "../(tools)/components/mainComponents/Footer";
import BackToTop from "../(tools)/components/BackToTop";

export default function Home() {
  return (
    <main id="main-page" className="absolute w-full top-0 z-0">
      <BackToTop elementId="main-page" />
      <HeroSection />
      {projects.map((project, index: number) => {
        return (
          <Project
            key={project.id}
            project={project}
            evenOdd={index % 2 === 0 ? "even" : "odd"}
          />
        );
      })}
      <Footer />
    </main>
  );
}
