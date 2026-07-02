import ComponentContainer from '../../components/ComponentContainer';
import { contentMap } from './contentMap';
import { InteractiveMapContainer } from './styles';
import { useState } from 'react';
import { IcontentMap } from '../../types/contentMap';
import projectFiles from './componentContainerProps/projectFiles';
import sections from './componentContainerProps/sections';
import references from './componentContainerProps/references';

export default function InteractiveMap() {
  const [tooltipContent, setTooltipContent] = useState<{
    position: { pageX: number; pageY: number };
    item: IcontentMap;
  }>();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  return (
    <ComponentContainer
      projectFiles={projectFiles}
      sections={sections}
      references={references}
      folderDowloadName="interactiveMap"
    >
      <InteractiveMapContainer id="map">
        <h1>mapa interativo</h1>
        <div className="container">
          <div
            className={`tooltip ${tooltipIsOpen && 'showTooltip'}`}
            style={{
              top: tooltipContent?.position.pageY,
              right: tooltipContent?.position.pageX,
              bottom: tooltipContent?.position.pageY,
              left: tooltipContent?.position.pageX,
            }}
          >
            <strong>{tooltipContent?.item?.title}</strong>
            <h2>
              <p>{tooltipContent?.item?.id}</p>
              <p>{tooltipContent?.item?.class}</p>
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
                  onMouseOver={(
                    event: React.MouseEvent<SVGPathElement, MouseEvent>
                  ) => {
                    const pageX =
                      window.screen.width > 500
                        ? event?.pageX + 50
                        : window.screen.width / 5;
                    const pageY =
                      window.screen.width > 500 ? event?.pageY / 2 : -100;

                    setTooltipIsOpen(true);
                    setTooltipContent({ position: { pageX, pageY }, item });
                  }}
                  onMouseLeave={() => {
                    setTooltipIsOpen(false);
                  }}
                  key={item.title}
                  id={item.id}
                  className={item.class}
                  // title={item.title}
                ></path>
              );
            })}
          </svg>
        </div>
      </InteractiveMapContainer>
    </ComponentContainer>
  );
}
