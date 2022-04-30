import React from "react";
import { SkillsContainer } from "./styles/Skills.styled";

export const Skills = () => {
  return (
      <>
      <SkillsContainer>
          <div>
              <h3>skills</h3>
              <ul>
                  <li>html</li>
                  <li>css</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>prismic(cms)</li>
              </ul>
          </div>
          <div>
              <h3>design tools</h3>
              <ul>
                  <li>figma</li>
                  <li>adobe xd</li>
                  <li>canva</li>
              </ul>
          </div>
      </SkillsContainer>
      </>
    
  )
};
