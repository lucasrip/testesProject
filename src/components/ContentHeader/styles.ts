import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
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