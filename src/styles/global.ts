import { createGlobalStyle,keyframes } from 'styled-components';
import colors from './colors';



const loading = keyframes`
  0%
  {
    background-position: 0%;
  }

  50%
  {
    background-position: 100%;
  }

  100%
  {
    background-position: 0%;

  }
  
`;
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

.skeleton
{
  background: linear-gradient(-45deg, ${colors.purple.bold}, ${colors.purple.regular},${colors.purple.bold});
animation: ${loading} 2.5s linear infinite;
background-size:400%;
}

.web
 {
  width: 28rem;
  height: 20rem;
 }

 
.mobile
 {
  width: 7.5rem ;
  height: 25rem  ;
  
 }
`;