import { LinksContainer, LinkItem } from './styles';
import links from '../../links/links';
import ComponentContainer from '../../components/ComponentContainer';

export default function Home() {
  return (
    <ComponentContainer redirect="/">
      <LinksContainer>
        <main>
          {links.map(({ link, name, description }, index) => {
            return (
              <LinkItem to={link} key={index + name}>
                <strong>{name}</strong>
                <p>{description}</p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
