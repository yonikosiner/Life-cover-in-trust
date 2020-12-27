import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Roboto", sans-serif;
        background-color: #1b1b1b !important;
        color: #fff
    }
    html {
        -moz-oxs-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
        min-height: 300vh;
        height:100%;
        min-width: 300px;
        overflow-x: hidden;
    }
`

export default GlobalStyle
