import styled from 'styled-components'

import { PlayCircleFill } from '@styled-icons/bootstrap/PlayCircleFill'

export const Container = styled.div`

    max-width: 700px;

    h1 {
        font-size: 2.5rem;
    }

`

export const EpisodeSection = styled.section`

    margin-top: 3rem;

    h2 {
        font-size: 2rem;
    }

    .infos-duration {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        time, span {
            color: var(--gray-200);
        }
        
        span {
            margin-left: 16px;
        }
       
    }

    .line {
        margin: 2rem 0;
        border-top: 1px solid var(--gray-250);
    }

    p {
        color: var(--gray-150);
    }
    
`

export const PlayIcon = styled(PlayCircleFill)`
    width: 28px;
    height: 28px;
    color: var(--orange-800);

    cursor: pointer;
`