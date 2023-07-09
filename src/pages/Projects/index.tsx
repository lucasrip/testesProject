import ControllBack from '../../components/ControllBack';
import SliderSection from '../../components/SliderSection';
import { sections } from './sections';
import { Container, NavBar, SectionsContainer } from './styles';

export default function Projects()
{

  return (
    <Container>
      <ControllBack label={'Projects'} />

      <NavBar>

        <div title="lista de links para a navegação entre as seções de projetos que tem no momento no portefolio">
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

      <SectionsContainer>
        {
          sections.map((section , index) => (
            <SliderSection
              key={index}
              titleObj={section.titleObj}
              data={section.data}
              description={section.description}
              typeFormat={section.typeFormat}
            />
          ))
        }
      </SectionsContainer>
       

      
    </Container>
  );
}