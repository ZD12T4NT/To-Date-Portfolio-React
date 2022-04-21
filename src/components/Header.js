import React from "react";
import { Container, HeaderContent, Logo, Navbar } from "./styles/Header.styled";

export const Header = () => {
  return (
      <Container>
          <Navbar>
              <nav>
                  <Logo>zacdistant</Logo>
                  <ul>
                      <li> <a href="/">Home</a></li>
                      <li> <a href="/">Projects</a></li>
                      <li> <a href="/">About</a></li>
                      <li> <a href="/">Contact</a></li>
                  </ul>
              </nav>
          </Navbar>
          <HeaderContent>
            <h1>Hello - I'm Zac, a Front-End Developer based in the UK. I create appealing, responsive websites for you.</h1>
                <i class="fa-solid fa-arrow-right"><a href="/">Get in touch</a></i>
          </HeaderContent>
      </Container>
    )
};
