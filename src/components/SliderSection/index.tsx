import { Container } from './styles';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Project } from '../../types/project';
import { useState } from 'react';
import Modal from '../Modal';
import SectionHeader from '../SectionHeader';
import SlidWebItem from '../SlidWebItem';
import SlidMobileItem from '../SlidMobileItem';

interface ISliderSection {
  titleObj: {
    title: string;
    icon: string;
  };
  typeFormat: string;
  description: string;
  data: Project[];
}

interface IslidItem {
  web: JSX.Element;
  mobile: JSX.Element;
}

export default function SliderSection({
  titleObj,
  data,
  description,
  typeFormat,
}: ISliderSection) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedProject, setClickedProject] = useState<Project>({} as Project);

  let slidesToShow = window.innerWidth <= 800 ? 2 : 3;
  slidesToShow = window.innerWidth <= 450 ? 1 : slidesToShow;

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow,
    slidesToScroll: 1,
  };

  function handleOpenModal(project: Project) {
    setClickedProject(project);
    setIsOpen(true);
  }

  const controllModal = {
    isOpen,
    setIsOpen,
  };

  return (
    <Container id={titleObj.title}>
      <SectionHeader titleObj={titleObj} description={description} />

      <Slider {...settings}>
        {data.map((project) => {
          const slidTypes: IslidItem = {
            web: (
              <SlidWebItem
                project={project}
                handleOpenModal={handleOpenModal}
                key={project.name}
              />
            ),
            mobile: (
              <SlidMobileItem
                project={project}
                handleOpenModal={handleOpenModal}
                key={project.name}
              />
            ),
          };
          const slidItem = slidTypes[typeFormat as keyof IslidItem];

          return slidItem;
        })}
      </Slider>

      <Modal
        controllModal={controllModal}
        project={clickedProject}
        titleObj={titleObj}
        typeFormat={typeFormat}
      />
    </Container>
  );
}
