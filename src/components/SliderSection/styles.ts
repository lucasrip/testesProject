import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

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

export const Container = styled.section`
 position: relative;
 width:100%;
 flex: 1;
 color: ${colors.purple.light};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 4rem;


 .slick-slider
 {
  margin-top: 2rem;
  width: 80%;
  height: auto;   
  
  }

 .slick-arrow::before
 {
   color: #ffff;
 }

 .slick-slide 
 {
  display: flex;
  justify-content: center;
 }
 
 .slick-prev:before, .slick-next:before
 {
  font-size: 2rem;
 } 

 .slick-prev
 {
  left: -2.75rem;
 }

 .slick-next 
 {
    right: -2.5rem;
 } 

 @media (max-width:600px)
 {

  & > .slick-prev:before, .slick-next:before
  {
   font-size: 1rem;
  }  

  .slick-prev
  {
   left: -3rem;
  } 

  .slick-next  
  {
    right: -2rem;
  }

 }

 @media (max-width:470px)
 {

  .slick-prev:before, 
  .slick-next:before,
  .slick-prev,
  .slick-next 
  {
    display: none;
    font-size:0px;
  }
 

 }

`;

export const ProjectContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
cursor: pointer;
color: ${colors.purple.light};

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
    width: auto;
    position: relative;
    font-size: 1.5rem;
    font-weight:bold;
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
 width:100%;
 max-width:340rem;
 height:18rem;
 max-height: 20rem;
 object-fit: fill;

 background: linear-gradient(-45deg, ${colors.purple.bold}, black,${colors.purple.bold});
 animation: ${loading} linear infinite;
 background-size:400%;

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

 img
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