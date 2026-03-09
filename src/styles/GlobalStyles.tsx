import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *, 
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Poppins", sans-serif;
        background-color: #5959595b
    }

    a{
        text-decoration: none;
    }

    button{
        
        border: none;
        cursor: pointer;
    }

    ul, ol {
        list-style: none;
    }
`