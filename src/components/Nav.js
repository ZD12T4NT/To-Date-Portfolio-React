import React from "react";
import { HashLink } from "react-router-hash-link";
import { Logo, Navbar } from "./styles/Header.styled";


export const Nav = () => {
  return (
     <Navbar>
           <Logo>zacdistant</Logo>
              <nav>
                  <ul>
                      <li> <a href="/">Home</a></li>
                      <li> <a href="/about">About</a></li>
                      <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
                  </ul>
              </nav>
     </Navbar>
  )
};
