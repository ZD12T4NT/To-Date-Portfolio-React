import React from "react";
import { Nav } from "./Nav";
import { Container, HeaderContent } from "./styles/Header.styled";

export const Header = () => {
  return (
      <Container>
         <Nav />
          <HeaderContent>
            <h1>Hello - I'm Zac, a Front-End Developer based in the UK. I create appealing, responsive websites for you.</h1>
                <i class="fa-solid fa-arrow-right"><a href="/">Get in touch</a></i>
          </HeaderContent>
      </Container>
    )
};
