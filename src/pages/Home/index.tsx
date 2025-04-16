import { LinksContainer, LinkItem } from './styles';
import links from '../../routes/index';
import ComponentContainer from '../../components/ComponentContainer';
import { useTranslation } from 'react-i18next';
import { Resources } from 'i18next-resources-for-ts';
import pt from '../../i18n/locales/pt';

type PageKey = keyof Resources['pt']['routes'];

export default function Home() {
  const { t: translate } = useTranslation();
  const routes = pt.routes;

  return (
    <ComponentContainer>
      <LinksContainer>
        <main>
          {links.map(({ link, name }, index) => {
            const keyName = String(name as PageKey); 
            const nameKey = `routes.${keyName}.name` as keyof typeof pt.routes;
            const descriptionKey =
              `routes.${keyName}.description` as keyof typeof pt.routes;

            return (
              <LinkItem
                to={link}
                key={index + name}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <strong>
                  {translate(nameKey)}{' '}
                </strong>
                <p>
                  {translate(descriptionKey)}{' '}
                </p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
