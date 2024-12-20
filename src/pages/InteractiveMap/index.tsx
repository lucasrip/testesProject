import ComponentContainer from '../../components/ComponentContainer';
import { contentMap } from './contentMap';
import { InteractiveMapContainer } from './styles';
import { useState } from 'react';
import { IcontentMap } from '../../types/contentMap';

export default function InteractiveMap() {
  const [tooltipContent, setTooltipContent] = useState<IcontentMap>();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  return (
    <ComponentContainer
      redirect="/"
      projectFiles={[
        {
          name: 'index',
          url: '/src/pages/InteractiveMap/index.tsx?raw',
          type: 'tsx',
        },
        {
          name: 'styles',
          url: '/src/pages/InteractiveMap/styles.ts',
          type: 'ts',
        },
        {
          name: 'map content',
          url: '/src/pages/InteractiveMap/contentMap.ts',
          type: 'ts',
        },
      ]}
      sections={[
        { id: 'map', name: 'map' },
        { id: 'references', name: 'references' },
      ]}
      references={[
        {
          name: 'repositorio usado como referencia',
          url: 'https://github.com/JrDevCJ/css-tutorial/tree/main',
        },
      ]}
      folderDowloadName="interactiveMap"
    >
      <InteractiveMapContainer id="map">
        <h1>mapa interativo</h1>
        <div className="container">
          <div className={`tooltip ${tooltipIsOpen && 'showTooltip'}`}>
            <strong>{tooltipContent?.title}</strong>
            <h2>
              <p>{tooltipContent?.id}</p>
              <p>{tooltipContent?.class}</p>
            </h2>
            <span>alguma informação sobre o estado</span>
          </div>
          <svg
            // xmlns:mapsvg="http://mapsvg.com"
            // xmlns:dc="http://purl.org/dc/elements/1.1/"
            // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            // xmlns:svg="http://www.w3.org/2000/svg"
            // xmlns="http://www.w3.org/2000/svg"
            // viewbox="0 0 612 639"
            viewBox="0 0 612 639"
          >
            {contentMap.map((item) => {
              return (
                <path
                  d={item.dimension}
                  onMouseOver={() => {
                    setTooltipIsOpen(true);
                    setTooltipContent(item);
                  }}
                  onMouseLeave={() => {
                    setTooltipIsOpen(false);
                  }}
                  key={item.title}
                  id={item.id}
                  className={item.class}
                  // title={item.title}
                />
              );
            })}
          </svg>
        </div>
      </InteractiveMapContainer>
    </ComponentContainer>
  );
}
