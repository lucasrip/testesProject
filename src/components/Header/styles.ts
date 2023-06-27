import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
 width: 100%;
 padding:1rem;
 min-height: 12rem;
 display: flex;
 align-items: center;
 flex-direction:column;
 gap:1rem;
 
 > img
 {

   margin-left: 1.5625rem;
   width: 9.375rem;
   height: 9.375rem;
 }


`;

export const SocialMenu = styled.li`
width: 100%;
display: flex;
justify-content: center;
height: 6.25rem;
 
gap: 1rem;
a
{
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  
  > img
  {
    width: 3.125rem;
    height: 3.125rem;
  }
  > strong
  {
    font-size: 1.4rem;
    color: ${colors.black};
  }
}

@media (max-width:550px)
{
    
    &{

     > a
     {
      > img
      {
       width: 2rem;
       height: 2rem;
      }
     
      > strong
      {
        font-size: 1rem;
      }
     }

    }
}
    
`;