import React from "react";
import { Container, Logo, Navbar } from "./styles/Header.styled";

export const Footer = () => {
  return (
        <Container>
            <Navbar>
              <nav>
              <Logo>&copy;2022</Logo>
                  <ul>
                      <li> <a href="/">Instagram</a></li>
                      <li> <a href="/">Twitter</a></li>
                      <li> <a href="/">Github</a></li>
                      <li> <a href="/">LinkedIn</a></li>
                  </ul>
              </nav>
          </Navbar>
        </Container>
     
  )
};
