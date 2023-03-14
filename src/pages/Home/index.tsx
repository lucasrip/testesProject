import { Container,  } from './styles';
import OptionButton from '../../components/OptionButton/index';
import { optionsLinks } from './optionsLinks';

export default function Home()
{

  return (
    <Container>
      
      <span>
       Seja bem vindo ao meu site, meu nome é lucas , aqui você pode encontrar algumas informações sobre min ,
        como livros que já li e pretendo ler ,meu currículo ou curriculum e alguns de meus projetos ja feitos.
      </span>
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