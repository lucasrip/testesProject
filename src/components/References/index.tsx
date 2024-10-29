import { Treferences } from '../../types/references';
import { ReferencesContainer } from './styles';

interface Props {
  links?: Treferences;
  description?: string;
}

export default function References({ links, description }: Props) {
  if (links?.length === 0 || !links) return null;

  return (
    <ReferencesContainer id="references">
      <h1>References</h1>
      <p>{description}</p>
      <div>
        {links?.map((item, index) => {
          const key = item.name + index;
          return (
            <a
              key={key}
              href={item.url}
              target="blank"
              title={`link para a refernecia ${item.name}`}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </ReferencesContainer>
  );
}
