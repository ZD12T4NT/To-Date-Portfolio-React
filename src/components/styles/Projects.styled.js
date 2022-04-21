import styled from 'styled-components'

export const Works = styled.div`
    height: 100vh;

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
