import { LinksContainer, LinkItem } from './styles';
import links from '../../routes/index';
import ComponentContainer from '../../components/ComponentContainer';
import { useTranslation } from 'react-i18next';
import type { ParseKeys } from 'i18next';
import  Resources  from '../../@types/resources';

type RouteKeys = ParseKeys<typeof Resources, 'routes'>;
export default function Home() {
  const { t: translate } = useTranslation();
  return (
    <ComponentContainer>
      <LinksContainer>
        <main>
          {links.map(({ link, name }, index) => {
              const nameKey: RouteKeys = `routes.${name}.name`;
              const descriptionKey: RouteKeys = `routes.${name}.description`;
            return (
              <LinkItem
                to={link}
                key={index + name}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <strong>{translate(nameKey)}</strong>
                <p>{translate(descriptionKey)}</p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
