import { LinksContainer, LinkItem } from './styles';
import links from '../../routes/index';
import ComponentContainer from '../../components/ComponentContainer';
import { useTranslation } from 'react-i18next';
import { Resources } from 'i18next-resources-for-ts';
import pt from '../../i18n/locales/pt';
type PageKey = keyof Resources['pt']['routes'];
export default function Home() {
  const { t: translate } = useTranslation();
  return (
    <ComponentContainer>
      <LinksContainer>
        <main>
          {links.map(({ link, name }, index) => {
            const keyName: PageKey = name;
            return (
              <LinkItem
                to={link}
                key={index + name}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <strong>
                  {translate(`routes.${keyName}.name` as keyof typeof pt)}
                </strong>
                <p>{translate(`routes.${keyName}.description` as keyof typeof pt)}</p>
              </LinkItem>
            );
          })}
        </main>
      </LinksContainer>
    </ComponentContainer>
  );
}
