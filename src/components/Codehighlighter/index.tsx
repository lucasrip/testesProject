import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Timer from '../../pages/Timer';
export default function CodeHighlighter() {
  const codeString = `function add(a, b) {
    return a + b;
  }`;

  return (
    <SyntaxHighlighter language="react" style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
}
