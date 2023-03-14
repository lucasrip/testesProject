import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html
    {
      scroll-behavior: smooth;
    }
    
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a:visited 
  {
    color: #000;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;