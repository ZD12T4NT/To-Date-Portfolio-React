import React from "react";
import { Card } from "./Card";
import { Container } from "./styles/Header.styled";
import { Works } from "./styles/Projects.styled";

export const Projects = () => {
  return (
      <Container>
          <Works>
            <div>
                <nav>
                    <ul>
                        <p>SELECTED PROJECTS</p>
                        <p>2020 - 2022</p>
                    </ul>
                </nav>              
            </div>
            <Card />
          </Works> 
      </Container>
  )
};
