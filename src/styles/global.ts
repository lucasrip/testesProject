import { createGlobalStyle } from 'styled-components';
import colors from './colors';

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

  a,
  a:visited 
  {
    color: ${colors.black.regular};
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;