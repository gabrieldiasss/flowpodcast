import styled, { css } from 'styled-components'

import { ArrowLeftCircleFill } from '@styled-icons/bootstrap/ArrowLeftCircleFill'
import { ArrowRightCircleFill } from '@styled-icons/bootstrap/ArrowRightCircleFill'

export const Container = styled.header`

    strong {
        font-size: 3rem;
    }

`

export const Slider = styled.div`

    margin-top: 2rem;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    

    img {
        width: 1000px;
        height: 200px;
        border-radius: 10px;
        
    }
`

const iconCSS = css`
    width: 28px;
    height: 28px;
    color: var(--orange-800);

    position: absolute;
    top: 100px;
    transform: translate(0, -50%);
    cursor: pointer;


`

export const Left = styled(ArrowLeftCircleFill)`
    ${iconCSS}
    left: 16px;
`

export const Right = styled(ArrowRightCircleFill)`
    ${iconCSS}
    right: 16px;
`