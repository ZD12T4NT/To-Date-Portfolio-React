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
            
            <a href="https://spotify-profile-data.herokuapp.com/">
            <img src="./images/og 1.png" alt="Spotify app" />
            </a>
            <a href="https://github.com/ZD12T4NT/Spotify-Data-App">
            <h2>Spotify API - <span>Click for code</span></h2>
            </a>
            <p>react - styled-components(SCSS) - responsive - node - express - axios - oauth</p>
       </div>
       <div>
            
            <img src="./images/link-short.png" alt="Link shortening api" />
            <a href="https://github.com/ZD12T4NT/link-shortening-api" target="_blank">
            <h2>Link Shortening API - <span>Click for code</span></h2>
            </a>
            <p>react - styled-components(SCSS) - responsive</p>
       </div>
       <div>
            <img src="./images/calm-lp.png" alt="Calm landing page" />
            <a href="https://github.com/ZD12T4NT/calm-landing-page" target="_blank">
            <h2>Calm landing page - <span>Click for code</span></h2>
            </a>

            <p>react - styled-components(SCSS) - responsive</p>
       </div>
    </StyledCard>
  )
}
