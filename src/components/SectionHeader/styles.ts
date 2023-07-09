
import  styled  from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Oswald', sans-serif;
  
  img
  {
    width: 3.125rem;
    height: 3.125rem; 
  }
  
  span
  {
   border-left: 5px solid ${colors.purple.light};
   display: flex;
   width: auto;
   align-items: center;
   margin-left: 4rem;
   padding-left: 2rem;

   strong
   {
    font-size: 2rem;
    margin-left: 1rem;
    text-transform: capitalize;
   }
  }
  h2
  {
    font-size: 1.4rem;
    margin-top: 2.5rem;
    margin-left: 8rem;
    
  }
 
  @media (max-width:600px)
{

  &
 {

  img
  {
     width: 2rem;
     height: 2rem;
  }

  span
  {
  
   margin-left: 1rem;

   strong
   {
    font-size: 1.5rem;
    margin-left: 0.5rem;
   }
  }
  h2
  {
    font-size: 1rem;
    margin-top: 1rem;
    margin-left: 4rem;
  }
 }
}


@media (max-width:300px)
 {
 
  span
  {
    padding-left: 0.2rem;
  
   margin-left: 0.2rem;

   strong
   {
    font-size: 1rem;
    margin-left: 0.25rem;
   }
  }
  h2
  {
    font-size: 1rem;
    margin-top: 1rem;
    margin-left: 2rem;
    width: 80%;
  }
  
 }


`;