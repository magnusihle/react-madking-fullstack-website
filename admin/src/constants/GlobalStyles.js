import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
}
  html {
    --color-1: #03090D;
    --color-2: #0B1E26;
    --color-3: #214554;
    --color-4: #3E768C;
    --color-5: #B0CDD9;
    --color-text: white;
    --color-button-hover: #254A59;
  }
`;

export default GlobalStyles;