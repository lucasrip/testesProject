import { Container, SocialMenu} from './styles';
import { socialIcons } from '../../exportAssets/socialIcons/socialIcons';
import Logo from '../../assets/logo/logo.png';

export default function Header()
{
  const {github ,youtube , linkedin} = socialIcons;

  const socialArr = [
    {
      ...github,
      url:'https://github.com/lucasrip',
      description: 'link para acessar meu github',
    },
    {
      ...youtube,
      url:'https://www.youtube.com/channel/UC5eg3A9GDnsf51M8vZDDgmQ',
      description: 'link para acessar meu canal do youtube com alguns demonstrativos de projetos',
    },
    {
      ...linkedin,
      url:'https://www.linkedin.com/in/lucashcc/',
      description: 'link para acessar meu linkdin',
    }, 
  ];
  
  return(
    <Container>
      <img src={Logo} loading="lazy" alt="minha logo atual" title="minha logo atual" />  
      <ul>
        <SocialMenu>
          {
            socialArr.map((item, index) => (
              <a key={index} href={item.url} target="blank">
                <img src={item.icon} alt={item.description} loading="lazy" title={item.description} />
                <strong>{item.name}</strong>
              </a>
            ))
          }
        </SocialMenu>
      </ul>
    </Container>
  );
}