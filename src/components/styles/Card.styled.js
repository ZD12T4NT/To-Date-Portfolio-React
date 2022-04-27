import styled from 'styled-components'

export const StyledCard = styled.div`

    margin-top:2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    gap: 4rem;

    h2{
        margin:1rem 0;
        font-size:2.2rem;
        color:#000;
        transition:all 0.3s ease-in-out;

        &:hover{
            opacity: 0.7;
        }

        span{
            opacity:0.4;
        }
    }

    p{
        color:#797979;
        text-transform:uppercase;
    }


    img{
        box-shadow: 0px 0px 44px -3px rgba(0,0,0,0.1);
        transition:all .3s ease-in-out;
        width: 100%;

        &:hover{
        box-shadow: 0px 0px 44px -3px rgba(0,0,0,0.3);

        }
    }



`
