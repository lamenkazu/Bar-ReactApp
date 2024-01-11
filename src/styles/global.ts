import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 .2rem ${({ theme }) => theme.GRAY_100};
    }

    body{
        background-color: ${({ theme }) => theme.BACKGROUND};
        color: ${({ theme }) => theme.BLUE};
        font-size: 1.6rem;


        -webkit-font-smoothing: antialiased;

        overflow-x: hidden;
    }

    body, input, button, textarea, p{
        font-family: 'Poppins', sans-serif;
    }

    label, input, textarea, h3{
        font-family: "Roboto", sans-serif;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, 
    a:hover{
        filter: brightness(0.9)
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    ::-webkit-scrollbar{
        width: 0;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent; /* para navegadores baseados em WebKit (Chrome, Safari, etc.) */
    }
    ::-webkit-scrollbar-track {
        background-color: transparent; /* para navegadores baseados em WebKit (Chrome, Safari, etc.) */
    }
`;
