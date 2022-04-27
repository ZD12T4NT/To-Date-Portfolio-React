import React from "react";
import { HashLink } from "react-router-hash-link";
import { Nav } from "./Nav";
import { Container, HeaderContent } from "./styles/Header.styled";

export const Header = () => {
  return (
      <Container>
         <Nav />
          <HeaderContent>
            <h1>Hello - I'm Zac, a Front-End Developer based in the UK. I create appealing, responsive websites for you.</h1>

                <i class="fa-solid fa-arrow-right"><HashLink smooth to='/#contact'>Contact</HashLink></i>
          </HeaderContent>
      </Container>
    )
};
