import styled from 'styled-components'

export const Works = styled.div`

    nav{
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::after{
            content:'';
            position: absolute;
            border-bottom:2px solid #000;
            bottom:-13px;
            width: 100%;
         }
  


        ul{
            display: flex;
            justify-content: space-between;
            width: 100%;

            p{
                font-size:1.2rem;
                font-weight:400;
            }
        }
    }
`
