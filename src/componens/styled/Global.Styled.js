import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 *{
     margin: 0;
 }

 h2{
     color: red;
 }

 .App{
     height: 100vh;
 }

 .container{
    height: 100%;
    display: flex;
    flex-direction: column;
 }
`

export default GlobalStyles