import React from "react";
import { Container, LogoTwo, NavbarTwo } from "./styles/Header.styled";

export const Footer = () => {
  return (
        <Container>
            <NavbarTwo>
              <nav>
              <LogoTwo>&copy;2022</LogoTwo>
                  <ul>
                      <li> <a href="/">In</a></li>
                      <li> <a href="/">Tw</a></li>
                      <li> <a href="/">Gh</a></li>
                      <li> <a href="/">Li</a></li>
                  </ul>
              </nav>
          </NavbarTwo>
        </Container>
     
  )
};
