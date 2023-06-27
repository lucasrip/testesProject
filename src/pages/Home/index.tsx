import { Container,  } from './styles';
import OptionButton from '../../components/OptionButton/index';
import { optionsLinks } from './optionsLinks';

export default function Home()
{

  return (
    <Container>
      {
        optionsLinks.map((item,index) =>(
          <OptionButton
            key={index}
            option={item}
          />
        ))
      }

    </Container>
  );
}