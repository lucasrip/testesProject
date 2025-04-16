import { LinksContainer, LinkItem } from './styles';
import links from '../../routes/index';
import ComponentContainer from '../../components/ComponentContainer';
import { useTranslation } from 'react-i18next';
import { Resources } from 'i18next-resources-for-ts';
type PageKey = keyof Resources['pt']['routes'];
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
                <strong>{translate(`routes.${name}.name` as PageKey)}</strong>
                <p>{translate(`routes.${name}.description` as PageKey)}</p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
