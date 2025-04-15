import ComponentContainer from '../../components/ComponentContainer';
import { TextEditorContainer } from './styles';
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import projectFiles from './componentContainerProps/projectFiles';
import sections from './componentContainerProps/sections';
import references from './componentContainerProps/references';

export default function Editor() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    heigth: 1200,
  };

  function handleUpdate(value: string) {
    const editorContent = value;
    setContent(editorContent);
  }
  return (
    <ComponentContainer
      projectFiles={projectFiles}
      sections={sections}
      references={references}
      folderDowloadName="editor"
    >
      <TextEditorContainer id="editor">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={handleUpdate}
          onChange={(newContent: string) => {}}
        />
      </TextEditorContainer>
    </ComponentContainer>
  );
}
