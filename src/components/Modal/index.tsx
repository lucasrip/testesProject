import { Body, Container, ModalBox, ProjectDetails } from './styles';
import ReactDOM from 'react-dom';
import { Project } from '../../types/project';
import { assets } from '../../exportAssets/assets/imports';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { stackIcons } from '../../exportAssets/stackIcons/stackIcons';
import { socialIcons } from './../../exportAssets/socialIcons/socialIcons';
import { useState } from 'react';

interface IModal
{
  project: Project ;
  typeFormat:string;
  titleObj:{
   title: string;
   icon: string ;
  };
  controllModal: {
   isOpen: boolean,
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  };
}

export default function Modal({titleObj,project , controllModal, typeFormat }:IModal)
{
 
  if(!controllModal.isOpen) return null;

  const [ isLoading , setIsLoading] = useState(false);


  const settings = {
    customPaging: function(i: number) {

      return (
        <a>
          <img 
            src={project.imgs[i].link} 
            className={`${!isLoading&&'skeleton'}`}
            loading="lazy" 
            alt={project.imgs[i].description}
            onLoad={()=>setIsLoading(true)}
          />
        </a>
      );
    },
    dotsClass: 'slick-dots slick-thumb',
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return ReactDOM.createPortal(
    (
      <Container>
        <ModalBox>
          <div className='boxCloseModal'>
            <button  
              onClick={() => controllModal.setIsOpen(false)}
              title="botao para fechar o modal"
            >
              <img src={assets.close} loading="lazy" alt="button para fechar modal" />
            </button>
          </div>
          <div 
            className='headerProject' 
            title={`header do modal com um icone do divece para qual o projeto foi feito e ao lado tem o nome do projeto que é ${project.name}`}
          >
            <img src={titleObj.icon} loading="lazy" alt="imagem do dive para qual o projeto foi feito" />
         
            <h1 className={`${!isLoading&&'skeleton'}`}>
              {isLoading&&project.name}
            </h1>
          </div>

          <Body>
            <div  className={`${!isLoading&&'skeleton'}`}>
              <Slider {...settings} className={typeFormat} >
                {
                  project.imgs.map((img, index) => (
                    <img 
                      src={img.link} 
                      key={index} 
                      loading="lazy" 
                      alt={img.description} 
                      title={img.description}
                      onLoad={()=>setIsLoading(true)}
                    />
                  ))
                }
              </Slider>
            </div>
            <p>
              {project.description}
            </p>
          </Body>

          <ProjectDetails>
            <div className='details'>
              <p>
                Stack
              </p>
               
              <div>
                {
                  project.stack.map((item , index) => {
                    const stackItem = stackIcons[item as keyof typeof stackIcons];
                     
                    return(
                      <a href={stackItem.link} key={index} title={item} target="blank">
                        <img src={stackItem.icon} loading="lazy" alt={stackItem.icon} />
                        <p>{item}</p>
                      </a>
     
                    );
                  })
                }
              </div>
            </div>

            <div className='details'>
              <p>
                reference
              </p>
               
              <div>
                {
                  project.projectBuild.map((item , index) => {
                    const socialItem = socialIcons[item.name as keyof typeof socialIcons];
                     
                    return(
                      <a href={item.link} key={index} title={item.description} target="blank" >
                        <img src={socialItem.icon} loading="lazy" alt={socialItem.icon} />
                        <p>{item.name}</p>
                      </a>
                    );
                  })
                }
              </div>
            </div>
            <div className='details'>
              <p>
                 build
              </p>
               
              <div>
                {
                  project.projectBuild.map((item , index) => {
                    const socialItem = socialIcons[item.name as keyof typeof socialIcons];
                     
                    return(
                      <a href={item.link} key={index} title={item.description} target="blank" >
                        <img src={socialItem.icon} loading="lazy" alt={socialItem.icon} />
                        <p>{item.name}</p>
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </ProjectDetails>

        </ModalBox>
      </Container>
    ),
    document.getElementById('modal') as HTMLElement
  );
}