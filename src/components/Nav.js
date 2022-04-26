import React from "react";
import { Logo, Navbar } from "./styles/Header.styled";


export const Nav = () => {
  return (
     <Navbar>
           <Logo>zacdistant</Logo>
              <nav>
                  <ul>
                      <li> <a href="/">Home</a></li>
                      <li> <a href="/about">About</a></li>
                      <li> <a href="/">Contact</a></li>
                  </ul>
              </nav>
     </Navbar>
  )
};
