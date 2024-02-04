import styled from 'styled-components';
import colors from '../../styles/colors';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;

 background-color: ${colors.opacity.purple};
 backdrop-filter: blur(10px);
 color:${colors.black.regular};
 overflow-y: auto;

 @media (max-width:450px) 
 {
   justify-content: flex-start;
   align-items: flex-start;
 }
`;

export const ModalBox = styled.div`
 display: flex;
 position: fixed;
 flex-direction: column;
 width: 70%;
 height: auto;
 padding:2rem;
 background-color: ${colors.purple.light};
 border-radius: 5px;
 gap:2rem;

 .boxCloseModal
 {
  display: flex;
  justify-content: end;
  width: 100%;
  
  button
  {
   position: relative;
   border: 0px;
   width: 2rem;
   height: 2rem;
   background-color: transparent;
   
   img
   {
    width: 2rem;
    height: 2rem;
   }
  }
 }

 .headerProject
 {
  display: flex;
  align-items: baseline;
  margin-top: 1rem;
  width: 100%;
  border-left: 5px solid ${colors.black.regular};

    img
    {
      width: 4.375rem;
      height: 4.375rem;
      padding-left: 1rem;
      
      filter: invert(96%) sepia(36%) saturate(225%) hue-rotate(200deg) brightness(98%) contrast(97%);
    }
    h1
    {
      font-family: 'Oswald', sans-serif;
      width: 20rem;
      height: 2rem;
      font-size: 2rem;
      font-weight: bold;
      margin-left: 1rem;
      text-transform: capitalize;
    }
 }

 @media (max-width:850px)
 {
  &{
    width: 80% ;
  }
 }

 @media (max-width:600px) 
  {
   
    &
    {
      width: 100%;
      min-height: 100%;
      height: auto;
      padding: 0.5rem;
    }
    .boxCloseModal
    {
      button
      {
        top: 0.3rem;
        right:0.3rem;
      }
    }

    .headerProject
    {
      border-left: 2px solid ${colors.black.regular};
      img
      {
        width: 3rem;
        height: 3rem;
        padding-left: 0.5rem;
      }

      strong
      {
        font-size: 1.5rem;
      }
    }
    .details > div
    {
      margin-bottom:0;
    }
  }

`;

export const Body = styled.div`
 position: relative;
 display: flex;
 width: 100%;
 gap:1rem;
 flex-wrap:wrap;
 height: auto;
 font-family: 'Raleway', sans-serif;

 & > p
 {
  padding-top: 0.5rem;
  flex: 1;
  min-width:15rem;
  min-height:5rem;
  text-align: left;
  text-justify: left;
  line-height: 1.5rem;
  font-size: 1.4rem;
  word-break:break-word;
 }
 
 & > div
 {
   position:relative;
   display:flex;
   justify-content:center;
   flex:1;
 }
 .slick-slider
 {
  width: 25rem;
   position:relative;
   height: auto;
 }

 .slick-slider div 
 {
    display: flex;
    justify-content: center;
    align-items: center; 
    width: auto;
 }

 .web  img
 {
  width: 20rem;
  height: 15rem;
  object-fit:fill;
 }

 .mobile  img 
 {
  width: 7.5rem ;
  height: 15rem  ;
  object-fit:fill;
 }

 .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li,
 .web .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li
 {
  width: 5rem;
  height:auto;
 }

.slick-dots.slick-thumb
 {
   position:relative;
   display:flex;
   width: 100%;
   height: auto;
 } 

 .slick-prev:before, .slick-next:before
 {
  font-size: 1.5rem;
  color:${colors.purple.bold};
 } 

 .slick-prev
 {
  left: -2rem;
 }

 .slick-next 
 {
    right: -2rem;
 } 

  @media (max-width:600px) 
  {

    .slick-slider
    {
     width: 20rem ;
    }

    &
    .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li img,
    .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li
    {
      width: auto;
    }

    &
  {
    flex-direction: column;
  }
  & > p
  {
    margin-top:2.5rem;
    width: 100%;
  }

  .slick-prev ,
  .slick-next ,
  .slick-prev:before, 
  .slick-next:before
  {
   display:none;
  }

  }

`;

export const ProjectDetails = styled.div`
 
 display: flex;
 flex-wrap: wrap;
 position: relative;
 width: 100%;
 height: auto;
 gap: 1rem;
 flex: 1;

 & .details
 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  flex: 1;
  text-align: center;
 }
 
.details > p
{
  font-size: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  text-transform: capitalize;
}

.details > div
 {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top:1rem;
  height: auto;

  a
  {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.black};
    
    p
    {
     font-size: 1.3rem;
     font-family: 'Raleway', sans-serif;
     text-transform: capitalize;
    }
  }
   a img
  {
   width: 3rem;
   height: 3rem;
  }
 }

 @media (max-width:450px) 
{
  &
  {
    justify-content:center;
    margin-top:1rem;
    gap:5rem;
    padding: 2rem;
  }
  &,.details, .details > div
  {
    flex:0;
    height: 5rem;
  }
}

`;



