import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeHighlighter() {
  const codeString = `function add(a, b) {
    return a + b;
  }`;

  return (
    <SyntaxHighlighter
      language="react"
      style={solarizedlight}
      children={codeString}
    />
  );
}
