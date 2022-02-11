import styled from 'styled-components'

export const Container = styled.footer`
    height: 6rem;
    background: var(--gray-700);

    position: absolute;
    bottom: 0;
    left: 20%;

    width: 80%;
    flex: 1;

    @media(max-width: 1400px) {
        left: 25%;
        width: 75%;
    }

`