import { Container, ProjectContainer } from './styles';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Project } from '../../types/project';
import { useState } from 'react';
import Modal from '../Modal';
import SectionHeader from '../SectionHeader';

interface Props
{
  titleObj: {
    title:string;
    icon: string;
  };
  description: string;
  data: Project[];
}

export default function SliderSection({titleObj,data, description}:Props)
{
  const [ isOpen , setIsOpen ] = useState(false);
  const [ project , setProject ] = useState<Project >({} as Project);

  // let slidesToShow = window.innerWidth <= 800? 2 : 3;
  const slidesToShow = window.innerWidth <= 500? 1 : 3;
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow,
    slidesToScroll: 1,
  };

  function handleOpenModal(project:Project)
  {
    setProject(project);
    setIsOpen(true);
  }

  const controllModal = {
    isOpen,
    setIsOpen,
  };

  return (
    <Container id={titleObj.title}>
      <SectionHeader
        titleObj={titleObj}
        description={description}
      />
       
      <Slider {...settings}>
        {
          data.map( (project,index) =>
            <ProjectContainer 
              key={index} 
              onClick={() => handleOpenModal(project) }  
            >
              <span>
                <strong>
                  { project.name}
                </strong>
              </span>
              <img 
                src={project.imgs[0].link} 
                alt={project.imgs[0].description} 
                title={project.imgs[0].description} 
              />
            </ProjectContainer>  
          )
        }
      </Slider>

      <Modal 
        controllModal={controllModal}
        project={project}
        titleObj={titleObj}
      />
    </Container>
  );
}