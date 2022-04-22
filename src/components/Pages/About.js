import React from "react";
import { AboutSection } from "../AboutSection";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { Container } from "../styles/Header.styled";

export const About = () => {
  return (
      <>
      <Container>
         <Nav />
         <AboutSection />
      </Container>
      <Footer />
      </>
  )
};
