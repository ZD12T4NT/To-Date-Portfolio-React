import styled from 'styled-components'

export const ContactContainer = styled.div`


        
    
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    min-height:50vh;
    position: relative;

   


    div:nth-child(2){

        P{
        color:#797979;
        text-transform:uppercase;
        font-size:1.3rem;
        }

        p:nth-child(2){
            font-size:1rem;
            margin-top:1.5rem;
        }
    
        a{
            text-decoration:underline;
            color:#000;
        }
    }

    &::before{
            content:'';
            position: absolute;
            border-bottom:2px solid #000;
            top: 0;
            width: 100%;
        }
    
    

    
    h1{
        font-size:4rem;
        font-weight:400;
        margin-bottom:4rem;
     }

   


    

    & > div,
    & > ul {
        flex:1;

        
    }

`
