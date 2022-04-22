import React from "react";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Projects } from "../Projects";

export const Home = () => {
  return (
      <>
        <Header />
        <Projects />
        <Contact />
        <Footer />
      </>
  )
};
