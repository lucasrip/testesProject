import { SectionsMenuContainer } from './styles';
import { sectionsMenu } from '../../types/sectionsMenu';
import { useState } from 'react';

import arrowUpIcon from '../../assets/config/arrow-up.svg';
import arrowDownIcon from '../../assets/config/arrow-down.svg';

interface Props extends sectionsMenu {}

export default function SectionsCollumnMenu({ sections }: Props) {
  if (!sections) return null;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  function handleCurrentSection(index: number) {
    if (index < currentSectionIndex) {
      return 'preCurrentSection';
    }
    if (index === currentSectionIndex) {
      return 'currentSection';
    }
  }

  return (
    <SectionsMenuContainer>
      <div>
        <strong>sections</strong>
        <div>
          <a href={'#' + sections[0].id}>
            <img
              src={arrowUpIcon}
              alt="click para o topo da pagina"
              title="click para o topo da pagina"
            />
          </a>
          <a href={'#' + sections.at(-1)?.id}>
            <img
              src={arrowDownIcon}
              alt="click para ir para o im da pagina"
              title="click para ir para o im da pagina"
            />
          </a>
        </div>
      </div>
      <nav>
        {sections?.map(({ name, id }, index) => {
          const key = id + index;

          return (
            <a
              href={`#${id}`}
              key={key}
              className={handleCurrentSection(index)}
              onClick={() => setCurrentSectionIndex(index)}
            >
              {name}
            </a>
          );
        })}
      </nav>
    </SectionsMenuContainer>
  );
}
