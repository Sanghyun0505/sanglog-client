import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ${reset}
    @font-face {
      font-family: 'NanumSquare';
      src: url('/fonts/NanumSquareRoundB.ttf') format('truetype'); 
    }
    
    body {
      font-family: 'NanumSquare', sans-serif; 
    }
`;

export default GlobalStyle;
