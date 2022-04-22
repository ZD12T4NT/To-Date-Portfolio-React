import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 80px;
  background-color:#f9f9f9;
  color:#000;
`

export const Navbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    nav{
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul{
            display: flex;

            li{
                margin: 0 30px;
                padding: 0 10px;

                a{
                    color:#000;
                    transition:all 0.2s ease-in-out;

                    &:hover{
                        border-bottom:2.5px solid #000;
                    }
                }
            }
        }
    }
`

export const Logo = styled.h1`
    font-weight:400;
    font-size:1.3rem;
`

export const HeaderContent = styled.div`
    margin-top:7rem;
    width: 1100px;

     h1{
        font-size:4.5rem;
        margin:0 0 40px 0;
     }

     i{
        font-size:2rem;
     }

       a{
        font-size:2rem;
        color:#000;
        margin:0 0 0 10px;
        transition:all 0.2s ease-in-out;

        &:hover{
            border-bottom:2.5px solid #000;
        }
       }
`


