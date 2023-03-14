import { socialIcons } from '../../exportAssets/socialIcons/socialIcons';
import { Header } from './styles';

export default function ContentHeader()
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

  return (
    <Header>
      {
        socialArr.map((item, index) => (
          <a key={index} href={item.url} target="blank">
            <img src={item.icon} alt={item.description} loading="lazy" title={item.description} />
            <strong>{item.name}</strong>
          </a>
        ))
      }
    </Header>
  );
}