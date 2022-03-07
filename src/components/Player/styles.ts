import styled, { css } from 'styled-components'
import { PlayFill } from '@styled-icons/bootstrap/PlayFill'
import { PauseFill } from '@styled-icons/bootstrap/PauseFill'
import { ChevronsLeft } from '@styled-icons/boxicons-regular/ChevronsLeft'
import { ChevronsRight } from '@styled-icons/boxicons-regular/ChevronsRight'

export const Container = styled.footer`
    height: 6rem;
    background: var(--gray-700);

    position: absolute;
    bottom: 0;
    left: 20%;

    width: 80%;
    flex: 1;

    display: flex;
    align-items: center;

    img {
        width: 100px;
        height: 60px;
    }

    span {
        color: var(--gray-200);
    }

    @media(max-width: 1400px) {
        left: 25%;
        width: 75%;
    }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    flex: 1;

    @media(min-width: 1400px) {
        max-width: 1100px;
    }

    max-width: 900px; 

    .progressBar {
        appearance: none;
        background: var(--gray-300);

        display: flex;
        align-items: center;

        border-radius: 10px;
        position: relative;
        width: 500px;
        height: 8px;

        &::-webkit-slider-runnable-track {
            appearance: none;
            background: var(--gray-450);

            display: flex;
            align-items: center;

            border-radius: 10px;
            position: relative;
            width: 500px;
            height: 8px;
        }

        &::-moz-range-track {
            appearance: none;
            background: var(--gray-450);

            display: flex;
            align-items: center;

            border-radius: 10px;
            position: relative;
            width: 500px;
            height: 8px;
        }

        &::-moz-focus-outer {
           border: 0;
        }

        &:before {
            content: '';
            height: 8px;
            width: var(--width);
            background-color: var(--orange-600);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            cursor: pointer;
        }

        &::-moz-range-progress {
            background-color: var(--gray-150);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            height: 8px;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: none;
            background-color: var(--gray-100);
            cursor: pointer;
            position: relative;
            margin: -3px 0 0 0;
            z-index: 2;
            box-sizing: border-box;
        }

        &:active::-webkit-slider-thumb {
            transform: scale(1.2);
            background: var(--gray-100);
        }

        &:active::-moz-range-thumb {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: transparent;
            background-color: var(--gray-100);
            cursor: pointer;
            position: relative;
            z-index: 2;
            box-sizing: border-box;
        }

        &:active::-moz-range-thumb {
            transform: scale(1.2);
            background: var(--gray-50);
        }

    }

`

export const ButtonSettings = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

`

export const IconsPlayer = styled.div`
    gap: 1rem;
    display: flex;
`

export const AudioPlayer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    
`

const iconCSS = css`
    width: 40px;
    height: 40px;
    color: var(--orange-600);
    cursor: pointer;
`

export const Play = styled(PlayFill)`
    ${iconCSS}
`

export const PauseIcon = styled(PauseFill)`
    ${iconCSS}
`

export const ChevronsLeftIcon = styled(ChevronsLeft)`
    ${iconCSS}
`

export const ChevronsRightIcon = styled(ChevronsRight)`
    ${iconCSS}
`
