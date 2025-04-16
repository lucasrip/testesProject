import { LinksContainer, LinkItem } from './styles';
import links from '../../routes/index';
import ComponentContainer from '../../components/ComponentContainer';
import { useTranslation } from 'react-i18next';
import resources from './../../@types/resources';
import { ParseKeys } from 'i18next';

export default function Home() {
  const { t: translate } = useTranslation();
  return (
    <ComponentContainer>
      <LinksContainer>
        <main>
          {links.map(({ link, name }, index) => {
            const nameKey:ParseKeys = `routes.${name as keyof typeof resources}.name`;
            const descriptionKey:ParseKeys = `routes.${name as keyof typeof resources}.description`;
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
