import styled from 'styled-components'

export const StyledCard = styled.div`
    margin-top:2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 4rem;

    h2{
        margin:1rem 0;
        font-size:2.2rem;
    }

    p{
        color:#797979;
        text-transform:uppercase;
    }

    div:nth-child(5){
        grid-column:1 / 3;
    }

    img{
        height: 350px;
    }
`
