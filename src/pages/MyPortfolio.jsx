import React from "react";
import './MyPortfolio.css'
import HeaderSection from "./landing_sections/HeaderSection";
import AboutSection from "./landing_sections/AboutSection";
import ProjectSection from "./landing_sections/ProjectSection";
import ContactSection from "./landing_sections/ContactSection";
import FooterSection from "./landing_sections/FooterSection";

const MyPortfolio = () => {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default MyPortfolio;
