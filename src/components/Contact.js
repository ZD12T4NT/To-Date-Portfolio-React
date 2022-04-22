import React from "react";
import { ContactContainer, Flex } from "./styles/Contact.styled";
import { Container } from "./styles/Header.styled";

export const Contact = () => {
  return (
        <ContactContainer>
           <Container>
            <Flex>
                <div>
                <h1>Contact Me</h1>
                </div>
                <div>
                    <p>Have a project in mind? Contact me through email or message me on any social media handle for a quicker response.</p>
                    <p>
                    <a href="mailto:zacdistant@gmail.com">zacdistant@gmail.com</a>
                    </p>
                </div>
            </Flex>
          </Container>
        </ContactContainer>
  
    )
};
