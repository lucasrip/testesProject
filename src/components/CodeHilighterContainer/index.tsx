import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  darcula,
  materialLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState, useEffect } from 'react';
import {
  Content,
  Files,
  HiligterContainer,
  HiligterModal,
  Tools,
} from './styles';

import {Ihiliter} from '../../types/hiligter';
import handleDowload from '../../utils/ziFiles';
import hilighterAssets from './imports';
import importFile from '../../utils/importFile';

interface Props extends Ihiliter {}

export default function CodeHilighterContainer({
  projectFiles,
  assets,
  folderDowloadName = 'dowloadFolder',
}: Props) {
  const firtContent = projectFiles?.length ? projectFiles[0] : '';
  const [contentFile, setContentFile] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [chosenFile, setChosenFile] = useState(firtContent);
  const [copy, setCopy] = useState(false);
  const { vscodeIcon, closeIcon, copyIcon, copyedIcon, fileIcon, zipIcon } =
    hilighterAssets;

  const hasContent = typeof chosenFile === 'object';
  const contentType = hasContent ? chosenFile?.type : 'text';
  const assetsArr = assets ? Object.values(assets).map((item) => item) : [];
  const files = projectFiles?.length ? projectFiles : [];

  const maskName = (item: { name: string; type: string }) =>
    item.name + '.' + item.type;

  useEffect(() => {
    if (hasContent) {
      const searchedFile = Promise.resolve(importFile(chosenFile.url));
      searchedFile.then((response) => setContentFile(response as string));
    }
  }, [chosenFile]);

  function handleCopy() {
    setCopy(true);
    navigator.clipboard.writeText(contentFile);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }

  const selectedFileBlob = new Blob([contentFile], {
    type: 'text/plain',
  });
  const selectectFileUrl = URL.createObjectURL(selectedFileBlob);
  const showModal = contentFile != '' && isOpen;

  return (
    <HiligterContainer>
      <div className="openFiles">
        <button onClick={() => setIsOpen(true)}>
          <img src={vscodeIcon.url} alt="icone do vscode" />
          open code
        </button>
      </div>

      {showModal && (
        <HiligterModal>
          <Content>
            <header>
              <div>
                <img src={vscodeIcon.url} alt="icone do vscode" />
                <p> Code</p>
              </div>
              <img
                src={closeIcon.url}
                className="close"
                onClick={() => setIsOpen(false)}
                alt="botao para fechar o modal"
              />
            </header>
            <Tools>
              <div>
                {hasContent && (
                  <a href={selectectFileUrl} download={maskName(chosenFile)}>
                    <img
                      src={fileIcon.url}
                      alt="click para copior o codigo do projeto"
                    />
                    <p>dowload</p>
                  </a>
                )}

                {assets && (
                  <button
                    onClick={() => handleDowload(folderDowloadName, assetsArr)}
                  >
                    <img
                      src={fileIcon.url}
                      alt="click para baixar os assets do test"
                    />
                    <p>dowload assets</p>
                  </button>
                )}
                <button
                  onClick={() => {
                    handleDowload(folderDowloadName, [...assetsArr, ...files]);
                  }}
                >
                  <img
                    src={zipIcon.url}
                    alt="click para baixar todos os arquivos do teste"
                  />
                  <p>dowload All</p>
                </button>
              </div>
              <button onClick={handleCopy} className="copy">
                {copy && <div>copyed</div>}
                <img
                  src={copy ? copyedIcon?.url : copyIcon?.url}
                  alt="click para copior o codigo do projeto"
                />
                <p>copy</p>
              </button>
            </Tools>
            {hasContent && (
              <Files>
                {projectFiles?.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setChosenFile(item)}
                      className={
                        item?.url === chosenFile?.url ? 'selected' : ''
                      }
                    >
                      {maskName(item)}
                    </button>
                  );
                })}
              </Files>
            )}
            
            <SyntaxHighlighter
              language={contentType}
              className="highlighterResult"
              showLineNumbers
              type={contentType}
              style={materialLight}
            >
              {contentFile}
            </SyntaxHighlighter>
          </Content>
        </HiligterModal>
      )}
    </HiligterContainer>
  );
}
