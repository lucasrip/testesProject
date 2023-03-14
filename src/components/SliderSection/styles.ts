import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.section`
 position: relative;
 width:100%;
 flex: 1;
 padding-top: 1rem;
 color: ${colors.purple.light};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 4rem;

 .slick-slider
 {
  margin-top: 3rem;
  width: 80%;
  height: auto;   
  
  }

 .slick-arrow::before
 {
   color: ${colors.purple.bold};
 }

  .slick-dots li ::before
 {
  color: ${colors.purple.light};
 } 

 .slick-active
 {
  
  color: ${colors.purple.bold};
 } 

 .slick-slide 
 {
  width: auto;
  display: flex;
  justify-content: center;
 }
 
 .slick-prev:before, .slick-next:before
 {
  font-size: 2.5rem;
 } 

 .slick-prev
 {
  left: -3.75rem;
 }

 .slick-next 
 {
    right: -2.5rem;
 } 

 @media (max-width:600px)
 {

  .slick-prev:before, .slick-next:before
  {
   font-size: 2rem;
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
  }

 }

`;

interface ProjectContainerProps
{
  imgConfig?:{
    width: string;
    height: string;
  };
}

export const ProjectContainer = styled.div<ProjectContainerProps>`
position: relative;
width:100% !important;
position: relative;
display: flex;
flex-direction: column;
height:auto;
object-fit: contain;
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
  }

  
}

span::before , span::after
{
  content: "";
  position: relative;
  width: 5rem;
  height: 0.5rem;
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
  width:${({imgConfig}) => imgConfig?.width || '100%' } !important; 
  height:${({imgConfig}) => imgConfig?.height || '17rem' }; 
  
}




@media (max-width:950px)
{

 width: 100% !important;
 display: flex;
 justify-content: center;
 align-items: center;

 strong
 {
  font-size: 0.8rem;
 }

 img
 {
  width:auto;
  height:9rem;
  height:${({imgConfig}) => {
    if(imgConfig?.width )
    {
      const searchHeight = imgConfig?.height.split(/\D/)[0];
      const newHeight = parseFloat(searchHeight) /2;
      return newHeight + 'rem';
    }
    return '9rem';
  } };

  
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