import styled from 'styled-components';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';

export const Container = styled.div`
 width: 29.75rem;
 height: auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 
 @media (max-width:550px) {
  &{
    width: 100%;
  }
 }
`;

export const Button = styled(Link)`
 text-decoration: none;
 width: 29.75rem;
 border: 0px;
 background: ${colors.purple.bold};
 height: 5.3125rem;
 color: ${colors.purple.light};
 font-size: 1.5rem;
 display: flex;
 padding: 0px 1.5rem;
 font-weight: bold;
 border-radius: 0.3rem;
 align-items: center;
 font-family: 'Raleway', sans-serif;
 text-transform: capitalize;
 
 &:visited
 {
  color: ${colors.purple.light};

 }
 
 cursor: pointer;
 img
 {
  width:2.875rem;
  height: 2.75rem;
  margin-right:2.5rem ;
 }

 @media (max-width:550px) {
  &{
    width: 80%;
    font-size: 1rem;
  }
  
  img
  {
   width:1.5rem;
   height: 1.5rem;
   margin-right:1rem ;
  }
 }

`;