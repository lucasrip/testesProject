import { Ilinks } from '../../types/links';

import ReadTime from '../../pages/ReadTime';
import Editor from '../../pages/TextEditor';
import Timer from '../../pages/Timer';
import InteractiveMap from '../../pages/InteractiveMap/index';
import TranslateTeste from '../../pages/Translate/index';

const links: Ilinks[] = [
  {
    name: 'timer',
    link: '/timer',
    element: <Timer />,
  },
  {
    name: 'editor',
    link: '/editor',
    element: <Editor />,
  },
  {
    name: 'readTime',
    link: '/ReadTime',
    element: <ReadTime />,
  },
  {
    name: 'interactiveMap',
    link: '/InteractiveMap',
    element: <InteractiveMap />,
  },
  {
    name: 'translate',
    link: '/TranslateTeste',
    element: <TranslateTeste />,
  },
];

export default links;
