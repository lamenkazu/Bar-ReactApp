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

    .srOnly{
        position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
    }

    body{
        background-color: ${({ theme }) => theme.LIGHT_1000};
        color: ${({ theme }) => theme.DARK_100};
        font-size: 1.6rem;


        -webkit-font-smoothing: antialiased;

        overflow-x: hidden;
    }

    body, input, label, select, button, textarea, p{
        font-family: 'Poppins', sans-serif;
    }

    textarea, h3, li{
        font-family: "Roboto", sans-serif;
    }

    input:focus, select:focus, button:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: none;
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
