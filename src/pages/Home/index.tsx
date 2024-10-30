import { LinksContainer, LinkItem } from './styles';
import links from '../../links/links';
import ComponentContainer from '../../components/ComponentContainer';

export default function Home() {
  return (
    <ComponentContainer redirect="/"  >
      <LinksContainer>
        <main>
          {links.map(({ link, name, description }, index) => {
            if (name === 'home') return null;
            return (
              <LinkItem to={link} key={index}>
                <h1>{name}</h1>
                <h2>{description}</h2>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
