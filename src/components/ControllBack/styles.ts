import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
 position: relative;
 top: -2rem;
 width:100%;
 height: 5rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 
 > div
 {
  display: flex;
  align-items: center;
  width: 29.75rem;
  height: 5.3125rem;
  background: ${colors.purple.bold};
  padding: 0px 1.5rem;
  font-family: 'Oswald', sans-serif;

  
  >a
  {
   margin-right:2.5rem ;
    
    >img
    {
      width: 2.1875rem;
      height: 1.25rem;
    }
  }

  strong
  {
    font-size: 1.7rem;
    color: ${colors.purple.light};
  }
 }

  ::before , ::after
 {
  position: relative;
  top: -0.4rem;
  content: "";
  width: 35rem;
  height: 0.625rem;
  background: ${colors.purple.bold};

 }
`;