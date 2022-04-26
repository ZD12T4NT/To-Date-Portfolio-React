import styled from 'styled-components'

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr);
    height: 30vh;
    margin-top:10rem;
    position: relative;
    text-transform:uppercase;

    &::after{
            content:'';
            position: absolute;
            border-bottom:2px solid #000;
            top:40px;
            width: 100%;
         }

         ul{
                 margin-top:3rem;
                 font-family: 'Source Serif Pro', sans-serif;
         }
 `

 
