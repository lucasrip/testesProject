import ComponentContainer from '../../components/ComponentContainer';
import { TextEditorContainer } from './styles';
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';

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
      redirect="/"
      projectFiles={[
        {
          name: 'index',
          url: '../../../src/pages/TextEditor/index.tsx',
          type: 'tsx',
        },
        {
          name: 'styles',
          url: '../../../src/pages/TextEditor/styles.ts',
          type: 'ts',
        },
      ]}
      sections={[
        { id: 'editor', name: 'editor' },
        { id: 'references', name: 'references' },
      ]}
      references={[
        {
          name: 'youtube tutorial',
          url: 'https://www.youtube.com/watch?v=-z2WukjOBTI',
        },
        {
          name: 'jsEditor doc',
          url: 'https://xdsoft.net/jodit/',
        },
      ]}
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
