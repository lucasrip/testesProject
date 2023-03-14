import ControllBack from '../../components/ControllBack';
import SliderSection from '../../components/SliderSection';
import { sections } from './sections';
import { Container, NavBar } from './styles';

export default function Projects()
{

  return (
    
    <Container>
      <ControllBack label={'Projects'} />

      <NavBar>
        <div>
          {
            sections.map( (section, index) => (
            
              <a href={`#${section.titleObj.title}`} key={index} title={section.description}>
                <img src={section.titleObj.icon} loading="lazy" alt={section.description}  />
                <span>{ section.titleObj.title}</span>
              </a>   
             
            ))
          }
        </div>
      </NavBar>

      {
        sections.map((section , index) => (
          <SliderSection
            key={index}
            titleObj={section.titleObj}
            data={section.data}
            description={section.description}
            imgConfig={section.imgConfig}
          />
        ))
      }
       

      
    </Container>
  );
}