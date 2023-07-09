import { Container } from './styles';
interface ISectionHeader
{
  titleObj: {
    title:string;
    icon: string;
  };
  description: string;
}

export default function SectionHeader({titleObj,description}:ISectionHeader)
{
  return (
    <Container>
      <span>
        <img src={titleObj.icon} loading="lazy" alt={`seção de projetos ${titleObj.title}`} />
        <strong>
          {titleObj.title}
        </strong>
      </span>
      <h2>
        {description}
      </h2>

    </Container>
    
  );
}