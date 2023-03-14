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
`;

export const ModalBox = styled.div`
 display: flex;
 position: relative;
 flex-direction: column;
 width: 60%;
 height: auto;
 padding: 1.5rem;
 background-color: ${colors.purple.light};
 border-radius: 5px;

 .boxCloseModal
 {
  display: flex;
  justify-content: end;
  width: 100%;
  
  button
  {
   position: relative;
   top: -1rem;
   right:-1rem;
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
    strong
    {
      font-family: 'Oswald', sans-serif;
      font-size: 2rem;
      font-weight: bold;
      margin-left: 1rem;
    }
 }

 @media (max-width:850px)
 {
  &{
    width: 90% ;
  }
 }

 @media (max-width:450px) 
  {
   
    &
    {
      width: 100%;
      height: 100%;
      padding: 0.8rem;
    }
    .boxCloseModal
    {
      button
      {
        top: -0.5rem;
        right:-0.5rem;
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

  }

`;

export const Body = styled.div`
 position: relative;
 display: flex;
 flex-wrap: wrap;
 width: 100%;
 height: auto;
 margin-top: 1rem;
 margin-bottom: 1rem;
 gap: 1rem;
 font-family: 'Raleway', sans-serif;

 & > p
 {
  width: 100%;
  min-width: 16rem;
  padding-top: 1rem;
  flex: 1;
  text-align: left;
  text-justify: left;
  line-height: 1.5rem;
  font-size: 1.5rem;
 }
 
 .slick-slider
 {
   flex: 1;
   width: 100%;
   justify-content: center;
   height: 20rem;
   align-items: center;
 }

 .slick-slider div
 {
   display: flex;
   height: auto;
   justify-content: center;
   align-items: center;
 }
 
 .web , .web  img
 {
  width: 28rem;
  height: 20rem;
 }

 
.mobile,.mobile  img 
 {
  width: 7.5rem ;
  height: 25rem  ;
 }

 .web,
 .mobile
 {
  height: auto;
  min-width: auto;

 }
 

 .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li,
 .web .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li
 {
  width: 5rem;
  min-width: auto;
  height:auto;
 }

 .mobile .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li
 {
  width: 4rem;
  min-width: auto;

  height: auto;
 } 

 .mobile > .slick-arrow,
 .web > .slick-arrow,
 .slick-arrow
 {
  display: none !important;
 }


 .slick-dots
 {
  position: relative !important;
  display: flex !important;
  justify-content: center;
  top: 1rem;
  height: auto;
 }
  
  @media (max-width:1250px) 
  {
    & > p
   {
    padding: 1rem;
    margin-top: 1rem;
    min-height: 5rem;
   }

  }

  @media (max-width:550px) 
  {

    .slick-slider
    {
     width: 80% ;
    }

    .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li img,
    .slick-dots.slick-thumb > li > a > img , .slick-dots.slick-thumb > li
    {
      width: auto;
    }

  }

 @media (max-width:450px) 
{
  &
  {
    flex-direction: column;
  }
  .slick-slider
  {
    width: 100%;
  }
}

`;

export const ProjectDetails = styled.div`
 
 display: flex;
 flex-wrap: wrap;
 position: relative;
 width: 100%;
 height: auto;
 margin-top: 2rem;
 gap: 1rem;
 flex: 1;

 

 & .details
 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
 }
 

.details > strong
{
  font-size: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;

}

.details > div
 {
  flex: 1;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* width: 20rem; */
  width: 100%;

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
     margin-top: 0.3125rem;
     font-size: 1.3rem;
     font-family: 'Raleway', sans-serif;

    }
  }
   a img
  {
   width: 3rem;
   height: 3rem;
  }
 }

`;



