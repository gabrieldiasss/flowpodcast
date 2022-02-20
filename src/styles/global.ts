import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #fff;
        --black: #0C0C0C; // fundo sidebar
        --gray-700: #1C1B21; // fundo secondary
        --gray-600: #27282A; // linhas
        --gray-550: #1F1F26; // fundo
        

        //texts
        --gray-300: #9A8181;
        --gray-200: #9C9C9C;
        --gray-150: #BDB4B4;
        --gray-100: #EBE7E7; 

        // icons
        --orange-800: #EE8B19;
        --orange-600: #FFB705;
        --gray-250: #4C4F56;
    }

    body {
        background: var(--gray-550);
        height: 100vh;

        color: var(--white);
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    h1, h3, strong, time, a, span {
        font-family: 'Poppins', sans-serif;
    }

    h1, h3, strong {
        color: var(--white);
    }

    h1 {
        font-weight: 600;
    }

    h2, p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: var(--white);
        font-weight: 400;
    }

    li {
        list-style: none;
    }

    a:hover {
        text-decoration: underline;
    }

    input, button, ul {
        font-family: Poppins, sans-serif;
    }

    input {
        background: none;
        border: 0;
        outline: 0;
        font-weight: 400;
    }

    button {
        cursor: pointer;
        color: var(--white);
        border: 0;
        outline: 0;
        border-radius: 5px;
    }

    button.active {
        background: linear-gradient(to left, var(--orange-600),var(--orange-800), var(--orange-600));
        background-size: 200%;
        transition: 0.7s;
    }

    button.active:hover {
        background-position: right;
        transition: 0.4s;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        background: var(--gray-550);

        max-width: 841px;

        flex-direction: column;

        padding: 1rem 3rem;
        position: relative;
        border-radius: 0.25rem;

        button {
            width: 100%;

            font-size: 2rem;
            padding: 2rem 2rem;

            margin: 2rem 0;
            
        }
    }

`