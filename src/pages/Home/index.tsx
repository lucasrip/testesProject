import { LinksContainer, LinkItem } from './styles';
import links from '../../routes/index';
import ComponentContainer from '../../components/ComponentContainer';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t: translate } = useTranslation();
  return (
    <ComponentContainer>
      <LinksContainer>
        <main>
          {links.map(({ link, name }, index) => {
            return (
              <LinkItem
                to={link}
                key={index + name}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <strong>{translate(`routes.${name}.name` as const)}</strong>
                <p>{translate(`routes.${name}.description` as const)}</p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
