import styled from 'styled-components'

export const Container = styled.aside`
    padding: 2rem;

    background: var(--black);
    width: 20%;
    max-width: 700px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1400px) {
        min-width: 25%;
    }

    img {
        width: 15rem;
    }

    p {
        text-align: center;
        color: var(--gray-300);
    }

`

export const Nav = styled.nav`

        ul {

            text-align: center;

            a {
                
                line-height: 5.4rem;
                font-size: 2rem;
                padding: 1rem 2rem;
                border-radius: 5px;
            }

            a:hover {
                transition: 1s;
                background: linear-gradient(90deg, #D7AD2A, #FD740F);
                text-decoration: none;
            }
            
        }

    }
`