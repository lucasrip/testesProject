import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.section`
 position: relative;
 width:100%;
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

  }

 .slick-arrow::before
 {
   color: ${colors.white.regular};
 }

 .slick-slide 
 {
  display: flex;
  justify-content: center;
 }

 .slick-slide > div
 {
  width: 100%;
  
   
 }

 .slick-dots
 {
  position:relative;
 }

 .slick-dots li button:before,
 .slick-dots li.slick-active button:before
 {
  color:${colors.white.regular};
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

  .slick-prev:before, .slick-next:before
  {
   font-size: 1rem;
  }  

  .slick-prev
  {
   left: -1.5rem;
  } 

  .slick-next  
  {
    right: -1.5rem;
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
