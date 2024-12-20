import ReadTime from '../../pages/ReadTime';
import Editor from '../../pages/TextEditor';
import Timer from '../../pages/Timer';
import { Ilinks } from '../../types/links';
import InteractiveMap from '../../pages/InteractiveMap/index';

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
  {
    name: 'Interative map',
    link: '/interativeMap',
    description: 'Teste de mapa em svg interativo',
    element: <InteractiveMap />,
  },
];

export default links;
