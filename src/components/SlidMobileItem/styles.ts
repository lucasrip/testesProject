import styled from 'styled-components';
import colors from '../../styles/colors';

export const MobileItem = styled.div`
display:flex;
width: 100%;
justify-content:center;
align-items:center;
position: relative;
cursor: pointer;
color: ${colors.purple.light};
height:20rem;
max-height: 20rem;

span
{
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  color: ${colors.purple.light};

  strong
  {
    min-width:5rem;
    width: auto;
    position: relative;
    font-size: 1.5rem;
    font-weight:bold;
    text-transform: capitalize;
  }

  
}

span::before , span::after
{
  content: "";
  position: relative;
  width: 5rem;
  height: 0.1rem;
  margin: 1rem;
  background-color: ${colors.purple.light};
}

&:hover span
{
 display: flex;
 width: 100%;
 background-color: ${colors.opacity.darkPurple};
}

img
{
  margin: 0 auto;
  width:auto;
  max-width:35rem;
  height:20rem;
  max-height: 20rem;
  object-fit: fill;

}

@media (max-width:950px)
{
 display: flex;
 justify-content: center;
 align-items: center;

 strong
 {
  font-size: 0.8rem;
 }

 & ,img
 {
  min-height:9rem;
  height: 10rem;

 }

 span
 {
  strong
  {
    font-size: 1rem;
  }
 }

}

@media (max-width:650px)
{
  span
  {
    display: none;
  }
}

@media (max-width:450px)
{
  span
  {
   strong
   {
    font-size: 0.8rem;
   }
  
  }
}

`;