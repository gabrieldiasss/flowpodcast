import styled from 'styled-components'

import { Search } from '@styled-icons/boxicons-regular/Search'

export const Container = styled.main`

    h1 {
        font-size: 2.4rem;
    }

    margin: 1rem 0 6rem 0;

`

export const Input = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--gray-700);
    max-width: 800px;
    padding: 1rem 2rem;

    margin-top: 1rem;

    border-radius: 10px;

    input {
        color: var(--gray-250);
        font-size: 1.6rem;
        margin-left: 1rem;
    }
`

export const Cards = styled.section`
    margin-top: 2rem;
    
    button {
        margin-top: 1rem;
        width: 800px;
        padding: 1.6rem;
        font-size: 2rem;
    }
`

export const SearchIcon = styled(Search)`
    width: 32px;
    height: 32px;
    color: var(--gray-250);
    
`