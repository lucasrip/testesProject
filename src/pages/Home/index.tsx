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
            const keyName = name as PageKey as string; // Garantir que name é uma chave válida de 'routes'

            return (
              <LinkItem
                to={link}
                key={index + name}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <strong>
                  {translate(`routes.${keyName}.name`)}{' '}
                  {/* Sem necessidade de "as keyof" */}
                </strong>
                <p>
                  {translate(`routes.${keyName}.description`)}{' '}
                  {/* Sem necessidade de "as keyof" */}
                </p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
