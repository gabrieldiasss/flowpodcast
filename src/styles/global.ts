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
        --gray-100: #EBE7E7; 

        // icons
        --orange-800: #EE8B19;
        --orange-600: #FFB705;
    }

    body {
        background: var(--gray-550);
    }

    h1, h3, strong {
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-weight: 700;
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
    }

    a:hover {
        text-decoration: underline;
    }

    input, button {
        font-family: Poppins, sans-serif;
    }

    input {
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
        background: linear-gradient(90deg, #D7AD2A, #FD740F);
    }

`