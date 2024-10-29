import ReadTime from '../pages/ReadTime';
import Editor from '../pages/TextEditor';
import Timer from '../pages/Timer';

interface Ilinks {
  name: string;
  link: string;
  description: string;
  element?: JSX.Element;
}

const links: Ilinks[] = [
  {
    name: 'Timer',
    link: '/timer',
    description: 'timer',
    element: <Timer />,
  },
  {
    name: 'Editor',
    link: '/editor',
    description: 'teste de biblioteca de edicao de texto',
    element: <Editor />,
  },
  {
    name: 'Read Time',
    link: '/readTime',
    description: 'tempo de leitura de um texto',
    element: <ReadTime />,
  },
];

export default links;
