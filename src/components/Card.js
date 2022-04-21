import React from 'react'
import { StyledCard } from './styles/Card.styled'

export const Card = () => {
  return (
    <StyledCard>
       <div>
            <img src="./images/project-one.jpg" alt="" />
            <h2>Project One</h2>
            <p>Chat App</p>
       </div>
       <div>
            <img src="./images/project-two.jpg" alt="" />
            <h2>Project Two</h2>
            <p>Ecommerce Website</p>
       </div>
       <div>
            <img src="./images/project-two.jpg" alt="" />
            <h2>Project Three</h2>
            <p>link Shortening API</p>
       </div>
       <div>
            <img src="./images/project-three.jpg" alt="" />
            <h2>Project Four</h2>
            <p>Task Manager</p>
       </div>
       <div>
            <img src="./images/project-four.jpg" alt="" />
            <h2>Project Five</h2>
            <p>Calm landing page</p>
       </div>
    </StyledCard>
  )
}
