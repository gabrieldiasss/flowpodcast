import styled, { css } from 'styled-components'

import { MoreHorizontalOutline } from '@styled-icons/evaicons-outline/MoreHorizontalOutline'
import { PlayCircle } from '@styled-icons/fa-regular/PlayCircle'

export const Container = styled.div`
    
`

export const MainDashboard = styled.main`

    margin-top: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        h1 {
            font-size: 2rem;
            color: var(--gray-100);
        }
    }

`

export const Cards = styled.div`
    margin-top: 2rem;
`

export const Card = styled.div`

    background-color: var(--gray-700);
    border: 1px solid var(--gray-600);
    border-radius: 10px;

    display: flex;
    align-items: center;

    max-width: 800px;

    padding: 2rem;

    & + div {
        margin-top: 1rem;
    }

    img {
        width: 150px;
        height: 100px;
        border-radius: 20px;
        margin-right: 16px;
    }

    div {

        gap: 1rem;
        flex: 1;

        .line-1 {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            a {
                font-size: 1.4rem;
            }
        }

        .line-2 {
            
            display: flex;
            justify-content: space-between;
            flex: 1;

            time {
                color: var(--gray-200);
            }
        }
    }

    @media(max-width: 1400px) {
        padding: 1rem;
    }

`

const iconCSS = css`
    cursor: pointer;
` 

export const More = styled(MoreHorizontalOutline)`
    ${iconCSS}
    color: var(--gray-250);
    width: 50px;
    height: 50px;
`

export const Play = styled(PlayCircle)`
    ${iconCSS}
    width: 28px;
    height: 28px;
    color: var(--orange-600);
`